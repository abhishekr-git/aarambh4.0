import type { Metadata } from "next";
import { EVENTS } from "@/data/events";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventGrid } from "@/components/events/EventGrid";

export const metadata: Metadata = {
  title: "Events & Competitions",
  description: `Explore all hackathons, robotics battles, technical workshops, expos, and stage shows at ${SITE_CONFIG.name} (${SITE_CONFIG.datesDisplay}) — IEDC CEK.`,
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <SectionHeading
        kicker={`${SITE_CONFIG.datesShort} • CEK Campus`}
        title="Explore All"
        highlight="Events"
        subtitle="Browse Aarambh 4.0 competitions, 24-hour hackathons, hands-on technical workshops, exhibitions, and evening showcases."
      />
      <div className="mt-14">
        <EventGrid events={EVENTS} />
      </div>
    </div>
  );
}
