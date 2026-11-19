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
      className="relative flex items-center overflow-x-clip pt-20 pb-10 sm:pt-24 sm:pb-12 min-[900px]:pt-28 min-[900px]:pb-14"
    >
      {/* Ambient Glow Concentrated Around the Left Emblem Column */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(520px circle at 22% 38%, rgba(216, 11, 36, 0.18), rgba(245, 93, 5, 0.08) 45%, transparent 72%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 min-[900px]:grid-cols-12 min-[900px]:gap-12">
          {/* Emblem Column: Compact on mobile, spacious and prominent on desktop-width viewports (>=900px) */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center min-[900px]:col-span-5"
          >
            <div className="relative flex w-full max-w-[140px] items-center justify-center sm:max-w-[180px] min-[900px]:max-w-[340px]">
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
                sizes="(max-width: 640px) 140px, (max-width: 899px) 180px, 340px"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(216,11,36,0.25)] transition-transform duration-300 ease-out hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Text & Content Column: Vertically centered beside the emblem on desktop */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left min-[900px]:col-span-7"
          >
            {/* H1: Aarambh 4.0 */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {SITE_CONFIG.name}
            </h1>

            {/* Clear Host Line with IEDC highlighted */}
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              <span className="font-extrabold gradient-text">IEDC</span> at{" "}
              <span className="font-semibold text-white whitespace-normal break-words">{SITE_CONFIG.collegeName}</span>.
            </p>

            {/* Date and Campus — Two inline groups, no pills/borders/backgrounds, soft warm-gold 180ms hover */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2.5">
              <div className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#faf6f0] transition-colors duration-[180ms] hover:text-[var(--brand-gold)] cursor-default">
                <CalendarDays className="h-4 w-4 shrink-0 text-amber-500 transition-colors duration-[180ms] group-hover:text-[var(--brand-gold)]" aria-hidden="true" />
                <span>{SITE_CONFIG.datesDisplay}</span>
              </div>
              <a
                href="#location"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#faf6f0] transition-colors duration-[180ms] hover:text-[var(--brand-gold)] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)]"
                aria-label={`Campus venue: ${SITE_CONFIG.campusLabel}`}
              >
                <MapPin className="h-4 w-4 shrink-0 text-amber-500 transition-colors duration-[180ms] group-hover:text-[var(--brand-gold)]" aria-hidden="true" />
                <span>{SITE_CONFIG.campusLabel}</span>
              </a>
            </div>

            {/* Live Countdown — Compact 4 columns with bronze dividers, left-aligned caption */}
            <div className="mt-6 w-full max-w-md">
              <CountdownTimer />
            </div>

            {/* Action Buttons — "Plan your visit" has strongest gradient; "Sponsor & partner" is quieter secondary */}
            <div className="mt-6 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center">
              {HAS_PUBLISHED_EVENTS ? (
                <Link
                  href="/events"
                  className="btn-brand inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold sm:text-base shadow-lg shadow-[var(--brand-primary)]/20"
                >
                  <span>Explore events</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : (
                <Link
                  href="#location"
                  className="btn-brand inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold sm:text-base shadow-lg shadow-[var(--brand-primary)]/25"
                >
                  <span>Plan your visit</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}

              <Link
                href="/sponsors"
                className="btn-outline-glass inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold sm:text-base border border-white/10 bg-white/[0.03] text-[var(--text-secondary)] hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
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
