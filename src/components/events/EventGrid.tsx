"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calendar, Cpu, Lightbulb, Mail, Sparkles, Trophy, Wrench } from "lucide-react";
import type { EventCategoryId, FestivalEvent } from "@/types";
import { EVENT_CATEGORIES } from "@/data/events";
import { SITE_CONFIG } from "@/data/site";
import { EventCategoryFilter } from "@/components/events/EventCategoryFilter";
import { EventCard } from "@/components/events/EventCard";

interface EventGridProps {
  events: FestivalEvent[];
  showFilter?: boolean;
}

const PLANNED_TRACKS = [
  {
    icon: Cpu,
    title: "24-Hour Hackathons",
    description: "Intense software, AI, and systems engineering sprints solving real problem statements.",
  },
  {
    icon: Trophy,
    title: "Combat & Autonomous Robotics",
    description: "Arena combat, line followers, and autonomous robo-challenges with certified juries.",
  },
  {
    icon: Wrench,
    title: "Technical Masterclasses",
    description: "Hands-on engineering workshops led by industry practitioners and technology leaders.",
  },
  {
    icon: Lightbulb,
    title: "Product Expos & Startup Pitch",
    description: "Showcasing student-built hardware, prototypes, and venture ideas to angel mentors.",
  },
];

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
      if (map[ev.category] !== undefined) {
        map[ev.category] += 1;
      }
    });
    return map;
  }, [events]);

  // Only show categories that actually have events
  const visibleCategories = useMemo(() => {
    return EVENT_CATEGORIES.filter((cat) => cat.id === "all" || counts[cat.id] > 0);
  }, [counts]);

  const filteredEvents = useMemo(() => {
    if (activeCategory === "all") return events;
    return events.filter((ev) => ev.category === activeCategory);
  }, [events, activeCategory]);

  // Pre-announcement State (0 published events)
  if (events.length === 0) {
    return (
      <div className="space-y-10">
        {/* Main Pre-announcement Card */}
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center sm:p-12">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-gold)]">
            <Calendar className="h-3.5 w-3.5 text-[var(--brand-secondary)]" aria-hidden="true" />
            {SITE_CONFIG.datesDisplay} • CEK Campus
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Event Lineup in Preparation
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            The IEDC organizing committee at College of Engineering Karunagappally is finalizing problem statements, prize pools, and mentor lineups for Aarambh 4.0. Track briefs and registration passes will open here soon.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#location"
              className="btn-brand inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold"
            >
              Plan Your Visit
            </Link>
            <a
              href={`mailto:${SITE_CONFIG.primaryEmail}?subject=Aarambh%204.0%20Event%20Inquiry`}
              className="btn-outline-glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Contact Organizers</span>
            </a>
          </div>
        </div>

        {/* Expected Festival Tracks Preview */}
        <div>
          <h4 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Planned Competition &amp; Learning Tracks
          </h4>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANNED_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <div key={track.title} className="glass-card flex flex-col justify-between rounded-2xl p-6">
                  <div>
                    <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h5 className="text-base font-bold text-white">{track.title}</h5>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {track.description}
                    </p>
                  </div>
                  <p className="mt-4 border-t border-[var(--border-subtle)] pt-2.5 text-[11px] font-semibold text-[var(--brand-gold)]">
                    Announcement Soon
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Show category filter only when useful (> 1 category available) */}
      {showFilter && visibleCategories.length > 2 && (
        <EventCategoryFilter
          categories={visibleCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          counts={counts}
        />
      )}

      {filteredEvents.length === 0 ? (
        <div className="glass-card rounded-2xl p-10 text-center">
          <p className="text-base font-semibold text-white">No events found in this category.</p>
          <p className="mt-1.5 text-xs text-[var(--text-secondary)]">
            Check back as more Aarambh 4.0 tracks are confirmed.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredEvents.map((event, idx) => (
            <EventCard key={event.slug} event={event} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
