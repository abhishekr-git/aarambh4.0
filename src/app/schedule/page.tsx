import type { Metadata } from "next";
import { SCHEDULE_DAYS } from "@/data/schedule";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScheduleTimeline } from "@/components/schedule/ScheduleTimeline";

export const metadata: Metadata = {
  title: "Event Schedule",
  description: `Schedule and timeline for ${SITE_CONFIG.name} (${SITE_CONFIG.datesDisplay}) at ${SITE_CONFIG.collegeName}.`,
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <SectionHeading
        kicker={`${SITE_CONFIG.datesShort} • Festival Blueprint`}
        title="Event"
        highlight="Schedule"
        subtitle="Two days of engineering sprints, robotics competitions, workshops, and startup showcases at CEK Campus."
      />
      <div className="mt-10 sm:mt-12">
        <ScheduleTimeline days={SCHEDULE_DAYS} />
      </div>
    </div>
  );
}
