import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EVENTS, getEventBySlug } from "@/data/events";
import { SITE_CONFIG } from "@/data/site";
import { EventDetails } from "@/components/events/EventDetails";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: event.title,
    description: `${event.description} — ${SITE_CONFIG.name} (${event.dateLabel}) at ${SITE_CONFIG.collegeName}.`,
    openGraph: {
      title: `${event.title} | ${SITE_CONFIG.name}`,
      description: event.description,
      images: [event.posterImage],
    },
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return <EventDetails event={event} />;
}
