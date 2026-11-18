"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Users } from "lucide-react";
import type { FestivalEvent } from "@/types";

interface EventCardProps {
  event: FestivalEvent;
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      layout={!prefersReduced}
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      {/* Poster Image */}
      <Link href={`/events/${event.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={event.posterImage}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80" />
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="rounded-full border border-[var(--brand-primary)]/45 bg-[var(--bg-primary)]/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-secondary)] backdrop-blur-md">
            {event.categoryLabel}
          </span>
        </div>
        <span className="absolute top-3.5 right-3.5 rounded-full border border-white/15 bg-[var(--bg-primary)]/80 px-3 py-1 text-[11px] font-bold text-[var(--brand-gold)] backdrop-blur-md">
          {event.day}
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/events/${event.slug}`}>
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[var(--brand-secondary)]">
            {event.title}
          </h3>
        </Link>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {event.description}
        </p>

        {/* Meta strip */}
        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
            <span>{event.dateLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[var(--brand-secondary)]" />
            <span>{event.duration}</span>
          </div>
          <div className="col-span-2 flex items-center justify-between pt-1">
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              {event.teamSize}
            </span>
            <span className="font-semibold text-[var(--brand-gold)]">{event.feeLabel}</span>
          </div>
        </div>

        {/* Link CTA */}
        <Link
          href={`/events/${event.slug}`}
          className="mt-5 inline-flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-white transition-all group-hover:border-[var(--border-strong)] group-hover:bg-[var(--brand-primary)]/15"
        >
          <span>View Event Details</span>
          <ArrowUpRight className="h-4 w-4 text-[var(--brand-secondary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
