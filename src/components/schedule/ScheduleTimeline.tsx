"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, CalendarDays, Clock, Info, MapPin } from "lucide-react";
import type { ScheduleDay } from "@/types";
import { SCHEDULE_NOTE } from "@/data/schedule";
import { SITE_CONFIG } from "@/data/site";

interface ScheduleTimelineProps {
  days: ScheduleDay[];
}

export function ScheduleTimeline({ days }: ScheduleTimelineProps) {
  const [activeDayId, setActiveDayId] = useState(days[0]?.id ?? "day-1");
  const prefersReduced = useReducedMotion();

  const totalSessions = days.reduce((acc, d) => acc + d.items.length, 0);
  const currentDay = days.find((d) => d.id === activeDayId) ?? days[0];

  // Pre-announcement State (0 confirmed sessions)
  if (totalSessions === 0) {
    return (
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Timing Notice */}
        <div className="glass-card flex items-start gap-3.5 rounded-2xl p-5 text-sm text-[var(--text-secondary)]">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-secondary)]" aria-hidden="true" />
          <p>{SCHEDULE_NOTE}</p>
        </div>

        {/* Two Festival Dates Breakdown */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {days.map((day, idx) => (
            <div
              key={day.id}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 sm:p-7"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  Day {idx + 1}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {day.date}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {day.theme ?? "Session tracks, competitions, and campus arenas."}
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                <span className="text-xs font-semibold text-[var(--brand-gold)]">
                  Detailed timeline in preparation
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/#location"
            className="btn-brand inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
          >
            <span>Plan Your Campus Travel</span>
          </Link>
        </div>
      </div>
    );
  }

  // Active Sessions Timeline
  return (
    <div className="mx-auto max-w-3xl">
      {/* Notice */}
      <div className="mb-6 flex items-start gap-3 rounded-2xl border border-[var(--brand-primary)]/25 bg-[var(--brand-primary)]/10 p-4 text-xs text-[var(--text-secondary)] sm:text-sm">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-secondary)]" aria-hidden="true" />
        <p>{SCHEDULE_NOTE}</p>
      </div>

      {/* Day Tabs */}
      <div
        role="tablist"
        aria-label="Event schedule days"
        className="mb-8 flex flex-wrap justify-center gap-2.5 sm:gap-3"
      >
        {days.map((day) => {
          const active = day.id === activeDayId;
          return (
            <button
              key={day.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveDayId(day.id)}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                active
                  ? "btn-brand text-white"
                  : "glass-card text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              <span>{day.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Day Timeline */}
      <AnimatePresence mode="wait">
        {currentDay && (
          <motion.div
            key={currentDay.id}
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)] sm:text-sm">
                {currentDay.date}
              </p>
              {currentDay.theme && (
                <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                  {currentDay.theme}
                </p>
              )}
            </div>

            {currentDay.items.length === 0 ? (
              <div className="glass-card rounded-2xl p-8 text-center text-sm text-[var(--text-secondary)]">
                Sessions for this day will be posted shortly.
              </div>
            ) : (
              <div className="space-y-4">
                {currentDay.items.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card rounded-2xl p-4 sm:p-5 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.time}
                      </span>
                      {item.venue && (
                        <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
                          <MapPin className="h-3.5 w-3.5 text-[var(--brand-primary)]" aria-hidden="true" />
                          {item.venue}
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-bold text-white sm:text-lg">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {item.eventSlug && (
                        <Link
                          href={`/events/${item.eventSlug}`}
                          className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-white/5 px-2.5 py-1 text-xs font-semibold text-[var(--brand-gold)] transition-colors hover:border-[var(--border-strong)] hover:text-white"
                        >
                          <span>Event info</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
