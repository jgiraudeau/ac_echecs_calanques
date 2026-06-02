import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.echecs-calanques.fr";
  const routes = [
    "",
    "/activites",
    "/lieux",
    "/inscription",
    "/club",
    "/agenda",
    "/cafes-echecs",
    "/festival",
    "/partenaires",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
