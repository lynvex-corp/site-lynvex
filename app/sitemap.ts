import type { MetadataRoute } from "next";

const BASE_URL = "https://lynvextec.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projetos`,
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/equipe`,
      lastModified: new Date("2026-04-27"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date("2026-04-27"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: new Date("2026-04-27"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
