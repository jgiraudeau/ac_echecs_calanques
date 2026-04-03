export const HELLO_ASSO_LINKS = {
  club: "",
  schools: {
    saintAugustinCarnoux: "",
    trinitairesMarseille: "",
    gorguetteCassis: "",
    donBoscoMarseille: "",
  },
} as const;

export function resolveHelloAssoLink(url: string): string {
  const trimmed = url.trim();
  return trimmed || "https://www.helloasso.com/";
}
