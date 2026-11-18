import type { ScheduleDay } from "@/types";

export const SCHEDULE_NOTE =
  "Aarambh 4.0 is scheduled for January 16–17, 2027. Official event names, timings, and venues below are placeholders and will be updated once announced.";

export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    id: "day-1",
    label: "Day 1 — January 16, 2027",
    shortLabel: "Day 1 • Jan 16",
    date: "Saturday, January 16, 2027",
    theme: "Day 1 Schedule — Official lineup coming soon",
    items: [
      {
        id: "d1-slot-1",
        time: "Time TBA",
        title: "Check-In & Inauguration",
        description: "Participant registration check-in and opening ceremony.",
        venue: "CEK Campus (TBA)",
        category: "ceremony",
      },
      {
        id: "d1-slot-2",
        time: "Time TBA",
        title: "Event 1",
        description: "Official event details and timings will be announced soon.",
        venue: "CEK Campus (TBA)",
        category: "hackathon",
        eventSlug: "event-1",
      },
      {
        id: "d1-slot-3",
        time: "Time TBA",
        title: "Event 2",
        description: "Official event details and timings will be announced soon.",
        venue: "CEK Campus (TBA)",
        category: "competition",
        eventSlug: "event-2",
      },
      {
        id: "d1-slot-4",
        time: "Time TBA",
        title: "Event 3",
        description: "Official event details and timings will be announced soon.",
        venue: "CEK Campus (TBA)",
        category: "workshop",
        eventSlug: "event-3",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2 — January 17, 2027",
    shortLabel: "Day 2 • Jan 17",
    date: "Sunday, January 17, 2027",
    theme: "Day 2 Schedule — Official lineup coming soon",
    items: [
      {
        id: "d2-slot-1",
        time: "Time TBA",
        title: "Event 4",
        description: "Official event details and timings will be announced soon.",
        venue: "CEK Campus (TBA)",
        category: "competition",
        eventSlug: "event-4",
      },
      {
        id: "d2-slot-2",
        time: "Time TBA",
        title: "Event 5",
        description: "Official event details and timings will be announced soon.",
        venue: "CEK Campus (TBA)",
        category: "expo",
        eventSlug: "event-5",
      },
      {
        id: "d2-slot-3",
        time: "Time TBA",
        title: "Event 6",
        description: "Official event details and timings will be announced soon.",
        venue: "CEK Campus (TBA)",
        category: "entertainment",
        eventSlug: "event-6",
      },
      {
        id: "d2-slot-4",
        time: "Time TBA",
        title: "Closing Ceremony & Awards",
        description: "Valedictory session and prize distribution for Aarambh 4.0.",
        venue: "CEK Campus (TBA)",
        category: "ceremony",
      },
    ],
  },
];
