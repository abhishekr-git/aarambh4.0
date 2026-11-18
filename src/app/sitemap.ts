import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { EVENTS } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/events",
    "/schedule",
    "/gallery",
    "/sponsors",
    "/contact",
  ].map((route) => ({
    url: `${SITE_CONFIG.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const eventRoutes = EVENTS.map((event) => ({
    url: `${SITE_CONFIG.siteUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...eventRoutes];
}
