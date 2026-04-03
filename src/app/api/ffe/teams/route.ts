import { NextResponse } from "next/server";
import {
  FFE_BASE_URL,
  FFE_TARGET_TEAMS,
  FFE_TEAMS_SOURCE_URL,
  type FfeTargetTeamConfig,
  type FfeSelectedTeam,
  type FfeTeamsApiResponse,
  type FfeUpcomingRound,
  normalizeFfeTeamName,
  toComparableFfeUrl,
} from "@/lib/ffe-teams";

interface ParsedFfeTeamRow {
  name: string;
  competition: string;
  division: string;
  group: string;
  place: string;
  teamUrl: string | null;
  groupUrl: string | null;
  teamId: string | null;
}

interface ParsedCalendarMatch {
  roundLabel: string;
  roundNumber: number | null;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  date: string | null;
  location: string | null;
  played: boolean;
}

const HTML_ENTITY_MAP: Record<string, string> = {
  nbsp: " ",
  amp: "&",
  lt: "<",
  gt: ">",
  quot: "\"",
  apos: "'",
  eacute: "e",
  egrave: "e",
  ecirc: "e",
  agrave: "a",
  ugrave: "u",
  ocirc: "o",
  ccedil: "c",
};

const FFE_USER_AGENT = "AC-Echecs-Calanques/1.0 (+https://www.echecs-calanques.fr)";

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, decimal: string) =>
      String.fromCodePoint(Number.parseInt(decimal, 10)),
    )
    .replace(/&([a-zA-Z]+);/g, (match: string, entity: string) => {
      const replacement = HTML_ENTITY_MAP[entity.toLowerCase()];
      return replacement ?? match;
    });
}

function stripHtml(value: string): string {
  return decodeHtmlEntities(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractHref(value: string): string | null {
  const match = value.match(/href\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i);
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
}

function toAbsoluteFfeUrl(href: string | null): string | null {
  if (!href) return null;
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }
  try {
    return new URL(href, `${FFE_BASE_URL}/`).toString();
  } catch {
    return null;
  }
}

function parseTeamId(url: string | null): string | null {
  if (!url) return null;
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get("Equipe");
  } catch {
    return null;
  }
}

function parseRoundNumber(value: string): number | null {
  const match = value.match(/(\d+)/);
  if (!match) return null;
  const parsed = Number.parseInt(match[1], 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function parseFfeDate(value: string | null): Date | null {
  if (!value) return null;
  const match = value.match(/(\d{2})\/(\d{2})\/(\d{2,4})(?:\s+(\d{1,2})[:h](\d{2}))?/);
  if (!match) return null;

  const day = Number.parseInt(match[1], 10);
  const month = Number.parseInt(match[2], 10);
  const yearRaw = Number.parseInt(match[3], 10);
  const hours = match[4] ? Number.parseInt(match[4], 10) : 0;
  const minutes = match[5] ? Number.parseInt(match[5], 10) : 0;
  const year = yearRaw < 100 ? 2000 + yearRaw : yearRaw;

  const date = new Date(year, month - 1, day, hours, minutes, 0, 0);
  return Number.isNaN(date.getTime()) ? null : date;
}

function hasScoreValue(value: string): boolean {
  const normalized = value
    .replace(/\s+/g, "")
    .replace(/\u00a0/g, "")
    .trim();

  if (!normalized) return false;
  if (normalized === "-" || normalized === "?") return false;
  return true;
}

function parseFfeTeamRows(html: string): ParsedFfeTeamRow[] {
  const parsedRows: ParsedFfeTeamRow[] = [];
  const rowMatches = html.matchAll(/<tr class=liste_(?:clair|fonce)>([\s\S]*?)<\/tr>/gi);

  for (const rowMatch of rowMatches) {
    const rowHtml = rowMatch[1];
    const cellMatches = [...rowHtml.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)];
    if (cellMatches.length < 5) continue;

    const nameCell = cellMatches[0]?.[1] ?? "";
    const competitionCell = cellMatches[1]?.[1] ?? "";
    const divisionCell = cellMatches[2]?.[1] ?? "";
    const groupCell = cellMatches[3]?.[1] ?? "";
    const placeCell = cellMatches[4]?.[1] ?? "";

    const teamUrl = toAbsoluteFfeUrl(extractHref(nameCell));
    const groupUrl = toAbsoluteFfeUrl(extractHref(groupCell));

    parsedRows.push({
      name: stripHtml(nameCell),
      competition: stripHtml(competitionCell),
      division: stripHtml(divisionCell),
      group: stripHtml(groupCell),
      place: stripHtml(placeCell) || "-",
      teamUrl,
      groupUrl,
      teamId: parseTeamId(teamUrl),
    });
  }

  return parsedRows;
}

function parseCalendarUrlFromGroupPage(html: string, groupUrl: string): string | null {
  const match = html.match(/id="ctl00_ContentPlaceHolderMain_LinkCalendrier"[^>]*href="([^"]+)"/i);
  if (match?.[1]) {
    const decodedHref = decodeHtmlEntities(match[1].replace(/&amp;/g, "&"));
    return toAbsoluteFfeUrl(decodedHref);
  }

  try {
    const parsedGroupUrl = new URL(groupUrl);
    const groupId = parsedGroupUrl.searchParams.get("Groupe");
    if (!groupId) return null;
    return `${FFE_BASE_URL}/EquipesCalendrier.aspx?Ref=${encodeURIComponent(groupId)}&Saison=3000`;
  } catch {
    return null;
  }
}

function parseCalendarMatches(html: string): ParsedCalendarMatch[] {
  const matches: ParsedCalendarMatch[] = [];
  const rowMatches = html.matchAll(/<tr[^>]*id="[^"]*_(RowRonde|RowMatch)"[^>]*>([\s\S]*?)<\/tr>/gi);

  let currentRoundLabel = "";
  let currentRoundNumber: number | null = null;

  for (const rowMatch of rowMatches) {
    const rowType = rowMatch[1];
    const rowHtml = rowMatch[2] ?? "";

    if (rowType === "RowRonde") {
      currentRoundLabel = stripHtml(rowHtml).replace(/\s+/g, " ").trim();
      currentRoundNumber = parseRoundNumber(currentRoundLabel);
      continue;
    }

    if (rowType !== "RowMatch") continue;
    const cellMatches = [...rowHtml.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)];
    if (cellMatches.length < 6) continue;

    const homeTeam = stripHtml(cellMatches[0]?.[1] ?? "");
    const homeScore = stripHtml(cellMatches[1]?.[1] ?? "");
    const awayScore = stripHtml(cellMatches[2]?.[1] ?? "");
    const awayTeam = stripHtml(cellMatches[3]?.[1] ?? "");
    const date = stripHtml(cellMatches[4]?.[1] ?? "") || null;
    const location = stripHtml(cellMatches[5]?.[1] ?? "") || null;

    matches.push({
      roundLabel: currentRoundLabel || "Ronde",
      roundNumber: currentRoundNumber,
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      date,
      location,
      played: hasScoreValue(homeScore) || hasScoreValue(awayScore),
    });
  }

  return matches;
}

function rowMatchesTarget(row: ParsedFfeTeamRow, target: FfeTargetTeamConfig): boolean {
  const rowName = normalizeFfeTeamName(row.name);
  const expectedName = normalizeFfeTeamName(target.sourceName);
  if (rowName !== expectedName) return false;

  const candidateUrl = target.matchOn === "groupUrl" ? row.groupUrl : row.teamUrl;
  if (!candidateUrl) return false;

  return toComparableFfeUrl(candidateUrl) === toComparableFfeUrl(target.matchUrl);
}

function buildUpcomingRounds(team: FfeSelectedTeam, calendarMatches: ParsedCalendarMatch[]): FfeUpcomingRound[] {
  const now = new Date();
  const nowMinusTolerance = now.getTime() - 6 * 60 * 60 * 1000;

  const teamNames = new Set([
    normalizeFfeTeamName(team.name),
    normalizeFfeTeamName(team.sourceName),
    normalizeFfeTeamName(team.targetLabel),
  ]);

  const upcoming = calendarMatches.flatMap((match) => {
    const normalizedHome = normalizeFfeTeamName(match.homeTeam);
    const normalizedAway = normalizeFfeTeamName(match.awayTeam);

    let opponent = "";
    let venue: FfeUpcomingRound["venue"] | null = null;

    if (teamNames.has(normalizedHome)) {
      opponent = match.awayTeam;
      venue = "Domicile";
    } else if (teamNames.has(normalizedAway)) {
      opponent = match.homeTeam;
      venue = "Exterieur";
    } else {
      return [];
    }

    const parsedDate = parseFfeDate(match.date);
    const isFutureByDate = parsedDate ? parsedDate.getTime() >= nowMinusTolerance : false;
    const isUpcoming = !match.played || isFutureByDate;
    if (!isUpcoming) return [];

    return [
      {
        roundLabel: match.roundLabel,
        roundNumber: match.roundNumber,
        opponent,
        venue,
        date: match.date,
        location: match.location,
      } satisfies FfeUpcomingRound,
    ];
  });

  upcoming.sort((a, b) => {
    if (a.roundNumber !== null && b.roundNumber !== null) {
      return a.roundNumber - b.roundNumber;
    }
    const aDate = parseFfeDate(a.date)?.getTime() ?? Number.MAX_SAFE_INTEGER;
    const bDate = parseFfeDate(b.date)?.getTime() ?? Number.MAX_SAFE_INTEGER;
    return aDate - bDate;
  });

  const deduped: FfeUpcomingRound[] = [];
  const seen = new Set<string>();
  for (const item of upcoming) {
    const key = `${item.roundLabel}|${item.opponent}|${item.date ?? ""}|${item.venue}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }

  return deduped.slice(0, 4);
}

export async function GET() {
  try {
    const response = await fetch(FFE_TEAMS_SOURCE_URL, {
      cache: "no-store",
      headers: {
        "User-Agent": FFE_USER_AGENT,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Impossible de charger les équipes FFE (${response.status})` },
        { status: 502 },
      );
    }

    const html = await response.text();
    const allRows = parseFfeTeamRows(html);

    const byTargetId = new Map<string, ParsedFfeTeamRow>();
    for (const targetTeam of FFE_TARGET_TEAMS) {
      const matchingRow = allRows.find((row) => rowMatchesTarget(row, targetTeam));
      if (matchingRow) {
        byTargetId.set(targetTeam.id, matchingRow);
      }
    }

    const selectedTeams: FfeSelectedTeam[] = FFE_TARGET_TEAMS.flatMap((targetTeam) => {
      const row = byTargetId.get(targetTeam.id);
      if (!row) return [];
      return [
        {
          targetId: targetTeam.id,
          targetCategory: targetTeam.category,
          targetLabel: targetTeam.label,
          sourceName: targetTeam.sourceName,
          sourceMatchUrl: targetTeam.matchUrl,
          ...row,
          calendarUrl: null,
          upcomingRounds: [],
        },
      ];
    });

    const uniqueGroupUrls = [...new Set(selectedTeams.map((team) => team.groupUrl).filter((url): url is string => Boolean(url)))];
    const calendarDataByGroup = new Map<string, { calendarUrl: string | null; matches: ParsedCalendarMatch[] }>();

    await Promise.all(
      uniqueGroupUrls.map(async (groupUrl) => {
        try {
          const groupResponse = await fetch(groupUrl, {
            cache: "no-store",
            headers: {
              "User-Agent": FFE_USER_AGENT,
            },
          });

          if (!groupResponse.ok) {
            calendarDataByGroup.set(groupUrl, { calendarUrl: null, matches: [] });
            return;
          }

          const groupHtml = await groupResponse.text();
          const calendarUrl = parseCalendarUrlFromGroupPage(groupHtml, groupUrl);
          if (!calendarUrl) {
            calendarDataByGroup.set(groupUrl, { calendarUrl: null, matches: [] });
            return;
          }

          const calendarResponse = await fetch(calendarUrl, {
            cache: "no-store",
            headers: {
              "User-Agent": FFE_USER_AGENT,
            },
          });

          if (!calendarResponse.ok) {
            calendarDataByGroup.set(groupUrl, { calendarUrl, matches: [] });
            return;
          }

          const calendarHtml = await calendarResponse.text();
          calendarDataByGroup.set(groupUrl, {
            calendarUrl,
            matches: parseCalendarMatches(calendarHtml),
          });
        } catch {
          calendarDataByGroup.set(groupUrl, { calendarUrl: null, matches: [] });
        }
      }),
    );

    const selectedTeamsWithUpcoming = selectedTeams.map((team) => {
      if (!team.groupUrl) return team;

      const groupCalendarData = calendarDataByGroup.get(team.groupUrl);
      if (!groupCalendarData) return team;

      return {
        ...team,
        calendarUrl: groupCalendarData.calendarUrl,
        upcomingRounds: buildUpcomingRounds(team, groupCalendarData.matches),
      };
    });

    const missingTeams = FFE_TARGET_TEAMS.filter((targetTeam) => !byTargetId.has(targetTeam.id)).map((targetTeam) =>
      `${targetTeam.category} - ${targetTeam.label}`,
    );

    const payload: FfeTeamsApiResponse = {
      sourceUrl: FFE_TEAMS_SOURCE_URL,
      updatedAt: new Date().toISOString(),
      teams: selectedTeamsWithUpcoming,
      missingTeams,
    };

    return NextResponse.json(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
