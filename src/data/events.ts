import type { EventCategory, FestivalEvent } from "@/types";

export const EVENT_CATEGORIES: EventCategory[] = [
  { id: "all", label: "All Events", description: "All confirmed Aarambh 4.0 events." },
  { id: "hackathon", label: "Hackathons", description: "24-hour sprints and builder challenges." },
  { id: "competition", label: "Competitions", description: "Robotics, design, and technical battles." },
  { id: "workshop", label: "Workshops", description: "Hands-on engineering and founder masterclasses." },
  { id: "expo", label: "Expos", description: "Project exhibitions and startup product demos." },
  { id: "talk-entertainment", label: "Talks & Shows", description: "Keynotes, panel discussions, and stage showcases." },
];

/**
 * Official Aarambh 4.0 Events Registry.
 *
 * To publish an event, add an entry to this array with at least:
 * - slug, title, category, categoryLabel, description, day, dateLabel, registrationStatus
 * All other fields (posterImage, feeLabel, venue, prizePoolLabel, etc.) are optional and
 * will render gracefully without broken rows.
 *
 * Set `published: false` to keep a draft hidden from public listings and sitemaps.
 */
export const EVENTS: FestivalEvent[] = [];

export function getPublishedEvents(): FestivalEvent[] {
  return EVENTS.filter((event) => event.published !== false);
}

export const PUBLISHED_EVENTS = getPublishedEvents();
export const HAS_PUBLISHED_EVENTS = PUBLISHED_EVENTS.length > 0;

export function getEventBySlug(slug: string): FestivalEvent | undefined {
  return getPublishedEvents().find((event) => event.slug === slug);
}
