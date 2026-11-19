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
        as="h1"
        kicker="Aarambh 4.0"
        title="Explore"
        highlight="events"
        subtitle="Preview lineup · Registration is in demo mode."
      />
      <div className="mt-10 sm:mt-12">
        <EventGrid events={publishedEvents} />
      </div>
    </div>
  );
}
