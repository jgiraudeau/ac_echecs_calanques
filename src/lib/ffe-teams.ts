export const FFE_CLUB_REF = "2705";
export const FFE_BASE_URL = "https://www.echecs.asso.fr";
export const FFE_TEAMS_SOURCE_URL = `${FFE_BASE_URL}/ListeEquipes.aspx?ClubRef=${FFE_CLUB_REF}`;

export type FfeTeamCategory = "Interclub" | "Interclub Jeunes";

export interface FfeTargetTeamConfig {
  id: string;
  category: FfeTeamCategory;
  label: string;
  sourceName: string;
  matchOn: "groupUrl" | "teamUrl";
  matchUrl: string;
}

export const FFE_TARGET_TEAMS = [
  {
    id: "interclub-cassis-1",
    category: "Interclub",
    label: "Cassis 1",
    sourceName: "Cassis 1",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=890",
  },
  {
    id: "interclub-cassis-2",
    category: "Interclub",
    label: "Cassis 2",
    sourceName: "Cassis 2",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=2272",
  },
  {
    id: "interclub-cassis-3",
    category: "Interclub",
    label: "Cassis 3",
    sourceName: "Cassis III",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=1237",
  },
  {
    id: "interclub-cassis-4",
    category: "Interclub",
    label: "Cassis 4",
    sourceName: "Cassis 4",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=1865",
  },
  {
    id: "interclub-jeunes-cassis-1",
    category: "Interclub Jeunes",
    label: "Cassis 1",
    sourceName: "Cassis Echecs",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=16",
  },
  {
    id: "interclub-jeunes-cassis-2",
    category: "Interclub Jeunes",
    label: "Cassis 2",
    sourceName: "J Cassis Echecs 2",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=1605",
  },
  {
    id: "interclub-jeunes-cassis-3",
    category: "Interclub Jeunes",
    label: "Cassis 3",
    sourceName: "J Cassis Echecs 3",
    matchOn: "groupUrl",
    matchUrl: "https://www.echecs.asso.fr/Equipes.aspx?Groupe=1605",
  },
  {
    id: "interclub-jeunes-cassis-4",
    category: "Interclub Jeunes",
    label: "Cassis 4",
    sourceName: "J Cassis 4",
    matchOn: "teamUrl",
    matchUrl: "https://www.echecs.asso.fr/ListeJoueurs.aspx?Action=EQUIPE&Equipe=3541",
  },
] as const satisfies readonly FfeTargetTeamConfig[];

export type FfeTargetTeamId = (typeof FFE_TARGET_TEAMS)[number]["id"];

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
  teamId: string | null;
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
