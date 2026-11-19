import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.echecs-calanques.fr";
  const routes = [
    "",
    "/activites",
    "/stages",
    "/stages/hiver",
    "/inscription",
    "/inscription/club",
    "/inscription/ecoles",
    "/club",
    "/agenda",
    "/ffe",
    "/festival",
    "/partenaires",
    "/blitz-rapide",
    "/tournoi-scolaire",
    "/produits-derives",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
