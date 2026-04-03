import { NextResponse } from "next/server";
import {
  FFE_BASE_URL,
  FFE_TARGET_TEAMS,
  FFE_TEAMS_SOURCE_URL,
  type FfeTargetTeamConfig,
  type FfeSelectedTeam,
  type FfeTeamsApiResponse,
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

function rowMatchesTarget(row: ParsedFfeTeamRow, target: FfeTargetTeamConfig): boolean {
  const rowName = normalizeFfeTeamName(row.name);
  const expectedName = normalizeFfeTeamName(target.sourceName);
  if (rowName !== expectedName) return false;

  const candidateUrl = target.matchOn === "groupUrl" ? row.groupUrl : row.teamUrl;
  if (!candidateUrl) return false;

  return toComparableFfeUrl(candidateUrl) === toComparableFfeUrl(target.matchUrl);
}

export async function GET() {
  try {
    const response = await fetch(FFE_TEAMS_SOURCE_URL, {
      cache: "no-store",
      headers: {
        "User-Agent": "AC-Echecs-Calanques/1.0 (+https://www.echecs-calanques.fr)",
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
        },
      ];
    });

    const missingTeams = FFE_TARGET_TEAMS.filter((targetTeam) => !byTargetId.has(targetTeam.id)).map((targetTeam) =>
      `${targetTeam.category} - ${targetTeam.label}`,
    );

    const payload: FfeTeamsApiResponse = {
      sourceUrl: FFE_TEAMS_SOURCE_URL,
      updatedAt: new Date().toISOString(),
      teams: selectedTeams,
      missingTeams,
    };

    return NextResponse.json(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
