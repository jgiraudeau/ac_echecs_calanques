export const FFE_CLUB_REF = "2705";
export const FFE_BASE_URL = "https://www.echecs.asso.fr";
export const FFE_TEAMS_SOURCE_URL = `${FFE_BASE_URL}/ListeEquipes.aspx?ClubRef=${FFE_CLUB_REF}`;

export type FfeTeamCategory = "Interclub" | "Interclub Jeunes";

export interface FfeTargetTeamConfig {
  id: string;
  category: FfeTeamCategory;
  label: string;
  sourceName: string;
  aliases?: readonly string[];
  matchOn: "groupUrl" | "teamUrl";
  matchUrl: string;
}

export const FFE_TARGET_TEAMS: readonly FfeTargetTeamConfig[] = [
  {
    id: "interclub-cassis-1",
    category: "Interclub",
    label: "Cassis 1",
    sourceName: "Academie d'Echecs des Calanques - Cassis",
    aliases: ["Cassis", "Cassis 1"],
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=37",
  },
  {
    id: "interclub-cassis-2",
    category: "Interclub",
    label: "Cassis 2",
    sourceName: "Cassis 2",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=1237",
  },
  {
    id: "interclub-cassis-3",
    category: "Interclub",
    label: "Cassis 3",
    sourceName: "Ae des Calanques 3",
    aliases: ["Cassis 3", "Cassis III"],
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=2272",
  },
  {
    id: "interclub-cassis-4",
    category: "Interclub",
    label: "Cassis 4",
    sourceName: "Cassis 4",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=3598",
  },
  {
    id: "interclub-cassis-5",
    category: "Interclub",
    label: "Cassis 5",
    sourceName: "Cassis 5",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=3598",
  },
  {
    id: "interclub-cassis-6",
    category: "Interclub",
    label: "Cassis 6",
    sourceName: "Cassis 6",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=3598",
  },
  {
    id: "interclub-jeunes-cassis-1",
    category: "Interclub Jeunes",
    label: "Cassis 1",
    sourceName: "A.E. des Calanques",
    aliases: ["Cassis Echecs", "A.E. des Calanques - Cassis"],
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=6",
  },
  {
    id: "interclub-jeunes-cassis-2",
    category: "Interclub Jeunes",
    label: "Cassis 2",
    sourceName: "J A.E. Calanques 2",
    aliases: ["J Cassis Echecs 2"],
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=1605",
  },
];

export type FfeTargetTeamId = string;

export interface FfeUpcomingRound {
  roundLabel: string;
  roundNumber: number | null;
  opponent: string;
  venue: "Domicile" | "Exterieur";
  date: string | null;
  location: string | null;
}

export interface FfeRecentResult {
  roundLabel: string;
  roundNumber: number | null;
  opponent: string;
  venue: "Domicile" | "Exterieur";
  date: string | null;
  location: string | null;
  teamScore: string;
  opponentScore: string;
  outcome: "Victoire" | "Nul" | "Défaite" | "Résultat";
}

export interface FfeSelectedTeam {
  targetId: FfeTargetTeamId;
  targetCategory: FfeTeamCategory;
  targetLabel: string;
  sourceName: string;
  sourceMatchUrl: string;
  name: string;
  competition: string;
  division: string;
  group: string;
  place: string;
  teamUrl: string | null;
  groupUrl: string | null;
  calendarUrl: string | null;
  teamId: string | null;
  upcomingRounds: FfeUpcomingRound[];
  recentResults: FfeRecentResult[];
}

export interface FfeTeamsApiResponse {
  sourceUrl: string;
  updatedAt: string;
  teams: FfeSelectedTeam[];
  missingTeams: string[];
}

export function normalizeFfeTeamName(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function toComparableFfeUrl(value: string): string {
  const parsed = new URL(value);
  const sortedSearch = [...parsed.searchParams.entries()]
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, entryValue]) => `${key}=${entryValue}`)
    .join("&");

  const searchPart = sortedSearch ? `?${sortedSearch}` : "";

  return `${parsed.hostname.toLowerCase()}${parsed.pathname.toLowerCase()}${searchPart}`;
}
