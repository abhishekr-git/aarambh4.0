"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import type { FestivalEvent } from "@/types";
import { SITE_CONFIG } from "@/data/site";

interface EventCardProps {
  event: FestivalEvent;
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      layout={!prefersReduced}
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      {/* Visual / Poster Header */}
      <Link
        href={`/events/${event.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)]"
        aria-label={`View details for ${event.title}`}
      >
        {event.posterImage ? (
          <Image
            src={event.posterImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6" style={{ background: "var(--gradient-surface)" }}>
            <Image
              src={SITE_CONFIG.assets.logoMark}
              alt=""
              width={72}
              height={72}
              className="h-16 w-16 opacity-35 object-contain"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-75" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="rounded-full border border-[var(--brand-primary)]/40 bg-[var(--bg-primary)]/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-secondary)] backdrop-blur-md">
            {event.categoryLabel}
          </span>
        </div>

        <span className="absolute top-3 right-3 rounded-full border border-white/10 bg-[var(--bg-primary)]/85 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--brand-gold)] backdrop-blur-md">
          {event.day}
        </span>
      </Link>

      {/* Body Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link href={`/events/${event.slug}`} className="group-hover:text-[var(--brand-secondary)] transition-colors">
          <h3 className="text-lg font-bold text-white transition-colors sm:text-xl">
            {event.title}
          </h3>
        </Link>

        {event.tagline && (
          <p className="mt-1 text-xs font-medium text-[var(--brand-gold)]/80">
            {event.tagline}
          </p>
        )}

        <p className="mt-2.5 flex-1 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
          {event.description}
        </p>

        {/* Dynamic Meta Strip — only render fields that exist */}
        <div className="mt-4 space-y-1.5 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--text-secondary)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[var(--brand-primary)]" aria-hidden="true" />
              <span>{event.dateLabel}</span>
            </div>
            {event.duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[var(--brand-secondary)]" aria-hidden="true" />
                <span>{event.duration}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            {event.venue && (
              <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--brand-primary)]" aria-hidden="true" />
                <span>{event.venue}</span>
              </div>
            )}
            {event.teamSize && (
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-[var(--brand-gold)]" aria-hidden="true" />
                <span>{event.teamSize}</span>
              </div>
            )}
          </div>

          {(event.feeLabel || event.prizePoolLabel) && (
            <div className="flex items-center justify-between pt-1 font-semibold text-[var(--brand-gold)]">
              <span>{event.feeLabel ?? "Free"}</span>
              {event.prizePoolLabel && (
                <span className="flex items-center gap-1 text-[var(--brand-secondary)]">
                  <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                  {event.prizePoolLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Link */}
        <Link
          href={`/events/${event.slug}`}
          className="mt-4 inline-flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-white/[0.02] px-3.5 py-2 text-xs font-bold text-white transition-all group-hover:border-[var(--border-strong)] group-hover:bg-[var(--brand-primary)]/10"
        >
          <span>View Details</span>
          <ArrowUpRight className="h-4 w-4 text-[var(--brand-secondary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
