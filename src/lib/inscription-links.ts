export const HELLO_ASSO_LINKS = {
  club: "https://www.helloasso.com/associations/echecs-cassis/adhesions/cotisations-et-adhesion-club-d-echecs-2025-2026",
  schools: {
    saintAugustinCarnoux: "https://www.helloasso.com/associations/echecs-cassis/evenements/club-d-echecs-saint-augustin",
    sainteTriniteMarseille: "https://www.helloasso.com/associations/echecs-cassis/evenements/club-d-echecs-sainte-trinitie",
    sainteClaireCassis: "https://www.helloasso.com/associations/echecs-cassis/evenements/club-d-echecs-sainte-claire",
    donBoscoSaintCyrSurMer: "https://www.helloasso.com/associations/echecs-cassis/evenements/club-d-echecs-don-bosco",
  },
} as const;

export function resolveHelloAssoLink(url: string): string {
  const trimmed = url.trim();
  return trimmed || "https://www.helloasso.com/";
}
