"use client";

import { useMemo, useState } from "react";
import type { EventCategoryId, FestivalEvent } from "@/types";
import { EVENT_CATEGORIES } from "@/data/events";
import { EventCategoryFilter } from "@/components/events/EventCategoryFilter";
import { EventCard } from "@/components/events/EventCard";

interface EventGridProps {
  events: FestivalEvent[];
  showFilter?: boolean;
}

export function EventGrid({ events, showFilter = true }: EventGridProps) {
  const [activeCategory, setActiveCategory] = useState<EventCategoryId>("all");

  const counts = useMemo(() => {
    const map: Record<EventCategoryId, number> = {
      all: events.length,
      hackathon: 0,
      competition: 0,
      workshop: 0,
      expo: 0,
      "talk-entertainment": 0,
    };
    events.forEach((ev) => {
      map[ev.category] += 1;
    });
    return map;
  }, [events]);

  const filteredEvents = useMemo(() => {
    if (activeCategory === "all") return events;
    return events.filter((ev) => ev.category === activeCategory);
  }, [events, activeCategory]);

  return (
    <div className="space-y-10">
      {showFilter && (
        <EventCategoryFilter
          categories={EVENT_CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          counts={counts}
        />
      )}

      {filteredEvents.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center">
          <p className="text-lg font-semibold text-white">No events found in this category yet.</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            More Aarambh 4.0 tracks will be announced shortly.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, idx) => (
            <EventCard key={event.slug} event={event} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
