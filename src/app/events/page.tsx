import type { Metadata } from "next";
import { getPublishedEvents } from "@/data/events";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventGrid } from "@/components/events/EventGrid";

export const metadata: Metadata = {
  title: "Events & Competitions",
  description: `Explore all hackathons, robotics challenges, technical workshops, and stages at ${SITE_CONFIG.name} (${SITE_CONFIG.datesDisplay}) — IEDC CEK.`,
};

export default function EventsPage() {
  const publishedEvents = getPublishedEvents();

  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <SectionHeading
        kicker={`${SITE_CONFIG.datesShort} • CEK Campus`}
        title="Festival Tracks &"
        highlight="Events"
        subtitle={
          publishedEvents.length > 0
            ? "Browse confirmed Aarambh 4.0 hackathons, robotics arenas, technical workshops, and stage experiences."
            : "The official competition schedule, workshop curricula, and registration access will be published here."
        }
      />
      <div className="mt-10 sm:mt-12">
        <EventGrid events={publishedEvents} />
      </div>
    </div>
  );
}
