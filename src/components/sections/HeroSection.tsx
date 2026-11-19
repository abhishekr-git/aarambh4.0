"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { HAS_PUBLISHED_EVENTS } from "@/data/events";
import { CountdownTimer } from "@/components/sections/CountdownTimer";

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      aria-label="Festival Introduction"
      className="relative flex min-h-[90svh] items-center overflow-x-clip pt-20 pb-12 sm:pt-24 sm:pb-16 lg:min-h-[88svh] lg:pt-24 lg:pb-16"
    >
      {/* Zero-Cost Ambient Glow Accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "radial-gradient(480px circle at 15% 20%, rgba(216, 11, 36, 0.14), transparent 70%)",
            "radial-gradient(520px circle at 85% 45%, rgba(245, 93, 5, 0.12), transparent 72%)",
          ].join(", "),
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Emblem Column: Compact on mobile, spacious and prominent on desktop */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center lg:col-span-5"
          >
            <div className="relative flex w-full max-w-[140px] items-center justify-center sm:max-w-[220px] lg:max-w-[340px]">
              {/* Subtle emblem rim glow */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-full opacity-60"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,93,5,0.22) 0%, rgba(216,11,36,0.1) 50%, transparent 75%)",
                }}
              />
              <Image
                src={SITE_CONFIG.assets.logoMark}
                alt={`${SITE_CONFIG.name} Emblem`}
                width={677}
                height={677}
                priority
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(216,11,36,0.25)] transition-transform duration-300 ease-out hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Text & Content Column */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            {/* H1: Aarambh 4.0 */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {SITE_CONFIG.name}
            </h1>

            {/* Clear Host Line in solid readable color */}
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              A two-day technology and entrepreneurship festival hosted by IEDC at{" "}
              <span className="font-semibold text-white">{SITE_CONFIG.collegeName}</span>.
            </p>

            {/* Date & Campus Pill Line */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
              <div className="glass-card inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold text-white sm:text-sm">
                <CalendarDays className="h-4 w-4 text-[var(--brand-secondary)]" aria-hidden="true" />
                <span>{SITE_CONFIG.datesDisplay}</span>
              </div>
              <div className="glass-card inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold text-white sm:text-sm">
                <MapPin className="h-4 w-4 text-[var(--brand-primary)]" aria-hidden="true" />
                <span>{SITE_CONFIG.campusLabel}</span>
              </div>
            </div>

            {/* Four Red-to-Gold Countdown Tiles placed below date & venue, above hero buttons */}
            <div className="mx-auto mt-6 max-w-lg lg:mx-0">
              <CountdownTimer />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              {HAS_PUBLISHED_EVENTS ? (
                <Link
                  href="/events"
                  className="btn-brand inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold sm:text-base"
                >
                  <span>Explore events</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : (
                <Link
                  href="#location"
                  className="btn-brand inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold sm:text-base"
                >
                  <span>Plan your visit</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}

              <Link
                href="/sponsors"
                className="btn-outline-glass inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold sm:text-base"
              >
                <span>Sponsor &amp; partner</span>
              </Link>
            </div>

            {/* Quiet Announcement Notice */}
            <p className="mt-4 text-xs text-[var(--text-muted)] sm:text-sm">
              Event lineup and registration details will be announced here.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
