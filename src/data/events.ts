import type { EventCategory, FestivalEvent } from "@/types";

export const EVENT_CATEGORIES: EventCategory[] = [
  { id: "all", label: "All Events", description: "All upcoming Aarambh 4.0 events." },
  { id: "hackathon", label: "Hackathons", description: "Hackathon tracks — details coming soon." },
  { id: "competition", label: "Competitions", description: "Competitions — details coming soon." },
  { id: "workshop", label: "Workshops", description: "Workshops — details coming soon." },
  { id: "expo", label: "Expos", description: "Exhibitions — details coming soon." },
  { id: "talk-entertainment", label: "Talks & Shows", description: "Talks & stage events — details coming soon." },
];

/**
 * Neutral placeholder events for Aarambh 4.0 (Jan 15–16, 2027).
 * Replace titles, descriptions, posters, fees, rules, and registration URLs
 * once the official Aarambh 4.0 lineup is finalized.
 */
export const EVENTS: FestivalEvent[] = [
  {
    slug: "event-1",
    title: "Event 1",
    shortTitle: "Event 1",
    category: "hackathon",
    categoryLabel: "Hackathon",
    tagline: "Official theme and challenge details will be announced soon.",
    description:
      "Placeholder for Aarambh 4.0 Event 1. Official event name, format, and guidelines will be updated here shortly.",
    longDescription: [
      "Official details, format, and problem statements for Event 1 of Aarambh 4.0 are currently being finalized by the IEDC CEK organizing committee.",
      "Check back soon for the complete brief, rules, registration fee, and prize details.",
    ],
    day: "Day 1",
    dateLabel: "Jan 15, 2027",
    duration: "To Be Announced",
    venue: "CEK Campus (TBA)",
    teamSize: "To Be Announced",
    feeLabel: "To Be Announced",
    prizePoolLabel: "To Be Announced",
    posterImage: "/images/placeholders/event-1.svg",
    highlights: [
      "Official highlights will be announced soon",
      "Open to student participants across colleges",
      "Organized by IEDC, College of Engineering Karunagappally",
    ],
    rules: [
      "Official rules and eligibility guidelines will be published before registrations open.",
      "Valid college ID card is mandatory for campus participation.",
    ],
    registrationUrl: null,
    registrationStatus: "coming-soon",
    featured: true,
    coordinators: [{ name: "Coordinator (TBA)", role: "Event 1 Lead" }],
  },
  {
    slug: "event-2",
    title: "Event 2",
    shortTitle: "Event 2",
    category: "competition",
    categoryLabel: "Competition",
    tagline: "Official theme and challenge details will be announced soon.",
    description:
      "Placeholder for Aarambh 4.0 Event 2. Official event name, format, and guidelines will be updated here shortly.",
    longDescription: [
      "Official details and guidelines for Event 2 of Aarambh 4.0 are currently being finalized by the IEDC CEK organizing committee.",
      "Check back soon for the complete brief, rules, registration fee, and prize details.",
    ],
    day: "Day 1",
    dateLabel: "Jan 15, 2027",
    duration: "To Be Announced",
    venue: "CEK Campus (TBA)",
    teamSize: "To Be Announced",
    feeLabel: "To Be Announced",
    prizePoolLabel: "To Be Announced",
    posterImage: "/images/placeholders/event-2.svg",
    highlights: [
      "Official highlights will be announced soon",
      "Open to student participants across colleges",
      "Organized by IEDC, College of Engineering Karunagappally",
    ],
    rules: [
      "Official rules and eligibility guidelines will be published before registrations open.",
      "Valid college ID card is mandatory for campus participation.",
    ],
    registrationUrl: null,
    registrationStatus: "coming-soon",
    featured: true,
    coordinators: [{ name: "Coordinator (TBA)", role: "Event 2 Lead" }],
  },
  {
    slug: "event-3",
    title: "Event 3",
    shortTitle: "Event 3",
    category: "workshop",
    categoryLabel: "Workshop",
    tagline: "Official session topic and speaker details will be announced soon.",
    description:
      "Placeholder for Aarambh 4.0 Event 3. Official workshop title, syllabus, and prerequisites will be updated here shortly.",
    longDescription: [
      "Official workshop topic, mentor details, and prerequisites for Event 3 of Aarambh 4.0 will be published here once confirmed.",
    ],
    day: "Day 1",
    dateLabel: "Jan 15, 2027",
    duration: "To Be Announced",
    venue: "CEK Campus (TBA)",
    teamSize: "To Be Announced",
    feeLabel: "To Be Announced",
    prizePoolLabel: "To Be Announced",
    posterImage: "/images/placeholders/event-3.svg",
    highlights: [
      "Official session highlights will be announced soon",
      "Organized by IEDC, College of Engineering Karunagappally",
    ],
    rules: [
      "Official prerequisites and seat limits will be published before registrations open.",
    ],
    registrationUrl: null,
    registrationStatus: "coming-soon",
    coordinators: [{ name: "Coordinator (TBA)", role: "Event 3 Lead" }],
  },
  {
    slug: "event-4",
    title: "Event 4",
    shortTitle: "Event 4",
    category: "competition",
    categoryLabel: "Competition",
    tagline: "Official theme and challenge details will be announced soon.",
    description:
      "Placeholder for Aarambh 4.0 Event 4. Official event name, format, and guidelines will be updated here shortly.",
    longDescription: [
      "Official details and guidelines for Event 4 of Aarambh 4.0 are currently being finalized by the IEDC CEK organizing committee.",
    ],
    day: "Day 2",
    dateLabel: "Jan 16, 2027",
    duration: "To Be Announced",
    venue: "CEK Campus (TBA)",
    teamSize: "To Be Announced",
    feeLabel: "To Be Announced",
    prizePoolLabel: "To Be Announced",
    posterImage: "/images/placeholders/event-4.svg",
    highlights: [
      "Official highlights will be announced soon",
      "Open to student participants across colleges",
      "Organized by IEDC, College of Engineering Karunagappally",
    ],
    rules: [
      "Official rules and eligibility guidelines will be published before registrations open.",
    ],
    registrationUrl: null,
    registrationStatus: "coming-soon",
    featured: true,
    coordinators: [{ name: "Coordinator (TBA)", role: "Event 4 Lead" }],
  },
  {
    slug: "event-5",
    title: "Event 5",
    shortTitle: "Event 5",
    category: "expo",
    categoryLabel: "Expo",
    tagline: "Official exhibition details will be announced soon.",
    description:
      "Placeholder for Aarambh 4.0 Event 5. Official exhibition details and showcase lineup will be updated here shortly.",
    longDescription: [
      "Official exhibition lineup and showcase details for Event 5 of Aarambh 4.0 will be published here once confirmed.",
    ],
    day: "Day 2",
    dateLabel: "Jan 16, 2027",
    duration: "To Be Announced",
    venue: "CEK Campus (TBA)",
    teamSize: "To Be Announced",
    feeLabel: "To Be Announced",
    prizePoolLabel: "To Be Announced",
    posterImage: "/images/placeholders/event-5.svg",
    highlights: [
      "Official showcase details will be announced soon",
      "Organized by IEDC, College of Engineering Karunagappally",
    ],
    rules: [
      "Official visitor and exhibitor guidelines will be published before registrations open.",
    ],
    registrationUrl: null,
    registrationStatus: "coming-soon",
    coordinators: [{ name: "Coordinator (TBA)", role: "Event 5 Lead" }],
  },
  {
    slug: "event-6",
    title: "Event 6",
    shortTitle: "Event 6",
    category: "talk-entertainment",
    categoryLabel: "Talks & Shows",
    tagline: "Official speakers and stage lineup will be announced soon.",
    description:
      "Placeholder for Aarambh 4.0 Event 6. Official session and stage program details will be updated here shortly.",
    longDescription: [
      "Official guest lineup and stage program details for Event 6 of Aarambh 4.0 will be unveiled soon.",
    ],
    day: "Day 2",
    dateLabel: "Jan 16, 2027",
    duration: "To Be Announced",
    venue: "CEK Campus (TBA)",
    teamSize: "To Be Announced",
    feeLabel: "To Be Announced",
    prizePoolLabel: "To Be Announced",
    posterImage: "/images/placeholders/event-6.svg",
    highlights: [
      "Official guest and program details will be announced soon",
      "Organized by IEDC, College of Engineering Karunagappally",
    ],
    rules: [
      "Valid festival pass and college ID required for entry.",
    ],
    registrationUrl: null,
    registrationStatus: "coming-soon",
    coordinators: [{ name: "Coordinator (TBA)", role: "Event 6 Lead" }],
  },
];

export function getEventBySlug(slug: string): FestivalEvent | undefined {
  return EVENTS.find((event) => event.slug === slug);
}
