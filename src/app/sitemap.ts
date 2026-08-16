import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.echecs-calanques.fr";
  const routes = [
    "",
    "/activites",
    "/stages",
    "/inscription",
    "/club",
    "/agenda",
    "/festival",
    "/partenaires",
    "/blitz-rapide",
    "/cafes-echecs",
    "/produits-derives",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
