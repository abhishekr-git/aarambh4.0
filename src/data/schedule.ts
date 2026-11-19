import type { ScheduleDay, ScheduleItem } from "@/types";

export const SCHEDULE_NOTE =
  "Aarambh 4.0 takes place across January 15–16, 2027 at CEK Campus. The detailed schedule and room allocations will be announced here once session tracks are finalized.";

export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    id: "day-1",
    label: "Day 1 — January 15, 2027",
    shortLabel: "Day 1 • Jan 15",
    date: "Friday, January 15, 2027",
    theme: "Opening Day — Registration, Inauguration & Track Sprints",
    items: [],
  },
  {
    id: "day-2",
    label: "Day 2 — January 16, 2027",
    shortLabel: "Day 2 • Jan 16",
    date: "Saturday, January 16, 2027",
    theme: "Finals, Product Demos & Valedictory Ceremony",
    items: [],
  },
];

export function getPublishedScheduleDays(): ScheduleDay[] {
  return SCHEDULE_DAYS.map((day) => ({
    ...day,
    items: day.items.filter((item) => item.published !== false),
  }));
}

export function getTotalConfirmedSessions(): number {
  return SCHEDULE_DAYS.reduce((total, day) => {
    return total + day.items.filter((item) => item.published !== false).length;
  }, 0);
}

export const HAS_SCHEDULE_SESSIONS = getTotalConfirmedSessions() > 0;
