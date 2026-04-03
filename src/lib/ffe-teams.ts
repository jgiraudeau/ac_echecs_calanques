export const FFE_CLUB_REF = "2705";
export const FFE_BASE_URL = "https://www.echecs.asso.fr";
export const FFE_TEAMS_SOURCE_URL = `${FFE_BASE_URL}/ListeEquipes.aspx?ClubRef=${FFE_CLUB_REF}`;

export const FFE_TARGET_TEAMS = [
  { id: "cassis1", label: "Cassis 1" },
  { id: "cassisechecs", label: "Cassis Echecs" },
  { id: "cassis2", label: "Cassis 2" },
  { id: "cassis4", label: "Cassis 4" },
] as const;

export type FfeTargetTeamId = (typeof FFE_TARGET_TEAMS)[number]["id"];

export interface FfeSelectedTeam {
  targetId: FfeTargetTeamId;
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
