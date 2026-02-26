import type { MetadataRoute } from "next";
import { modulos } from "@/data/modulos";

const BASE_URL = "https://tem-luz-ai.pages.dev";

export const runtime = "edge";

export default function sitemap(): MetadataRoute.Sitemap {
  // Rotas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/modulos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desafio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/para-professores`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Rotas dinâmicas — um módulo por slug
  const moduloRoutes: MetadataRoute.Sitemap = modulos.map((modulo) => ({
    url: `${BASE_URL}/modulos/${modulo.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...moduloRoutes];
}
