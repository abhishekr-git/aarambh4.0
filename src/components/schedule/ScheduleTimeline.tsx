"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock, Info, MapPin } from "lucide-react";
import type { ScheduleDay } from "@/types";
import { SCHEDULE_NOTE } from "@/data/schedule";

interface ScheduleTimelineProps {
  days: ScheduleDay[];
}

export function ScheduleTimeline({ days }: ScheduleTimelineProps) {
  const [activeDayId, setActiveDayId] = useState(days[0]?.id ?? "day-1");
  const prefersReduced = useReducedMotion();

  const currentDay = days.find((d) => d.id === activeDayId) ?? days[0];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Tentative Notice */}
      <div className="mb-8 flex items-start gap-3 rounded-2xl border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 p-4 text-sm text-[var(--text-secondary)]">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-secondary)]" />
        <p>{SCHEDULE_NOTE}</p>
      </div>

      {/* Day Switcher Tabs */}
      <div
        role="tablist"
        aria-label="Festival schedule days"
        className="mb-10 flex flex-wrap justify-center gap-3"
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
              className={`inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all sm:text-base ${
                active
                  ? "btn-brand text-white"
                  : "glass-card text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <CalendarDays className="h-4 w-4" />
              <span>{day.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Day Banner + Timeline */}
      <AnimatePresence mode="wait">
        {currentDay && (
          <motion.div
            key={currentDay.id}
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-8 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                {currentDay.date}
              </p>
              <p className="mt-1 text-base text-[var(--text-secondary)]">{currentDay.theme}</p>
            </div>

            <div className="relative pl-7 sm:pl-9">
              {/* Vertical Flame Track */}
              <div
                className="absolute top-2 bottom-2 left-2.5 w-[2px]"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--brand-crimson), var(--brand-primary), var(--brand-secondary), transparent)",
                }}
                aria-hidden="true"
              />

              <div className="space-y-5">
                {currentDay.items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={prefersReduced ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="relative"
                  >
                    {/* Node */}
                    <span
                      className="absolute top-6 -left-[25px] h-4 w-4 rounded-full border-[3px] border-[var(--brand-primary)] bg-[var(--bg-primary)] shadow-[0_0_12px_var(--glow-primary)] sm:-left-[33px]"
                      aria-hidden="true"
                    />

                    <div className="glass-card rounded-2xl p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                          <Clock className="h-3.5 w-3.5" />
                          {item.time}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-muted)]">
                          <MapPin className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
                          {item.venue}
                        </span>
                      </div>

                      <div className="mt-2.5 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            {item.description}
                          </p>
                        </div>

                        {item.eventSlug && (
                          <Link
                            href={`/events/${item.eventSlug}`}
                            className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-white/5 px-3 py-1.5 text-xs font-bold text-[var(--brand-gold)] transition-colors hover:border-[var(--border-strong)] hover:text-white"
                          >
                            <span>Details</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
