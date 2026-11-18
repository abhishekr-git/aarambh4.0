import type { Metadata } from "next";
import { SCHEDULE_DAYS } from "@/data/schedule";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScheduleTimeline } from "@/components/schedule/ScheduleTimeline";

export const metadata: Metadata = {
  title: "Schedule",
  description: `Day-wise schedule for ${SITE_CONFIG.name} on ${SITE_CONFIG.datesDisplay} at ${SITE_CONFIG.collegeName}.`,
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Two-Day Itinerary"
        title="Festival"
        highlight="Schedule"
        subtitle="Navigate Day 1 (January 16, 2027) and Day 2 (January 17, 2027) sessions, competitions, and main-stage highlights."
      />
      <div className="mt-14">
        <ScheduleTimeline days={SCHEDULE_DAYS} />
      </div>
    </div>
  );
}
