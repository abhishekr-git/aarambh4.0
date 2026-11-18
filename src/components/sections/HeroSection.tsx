"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { CountdownTimer } from "@/components/sections/CountdownTimer";

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-x-clip pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-28">
      {/* Zero-Cost Static Radial Ambient Glows (replaces heavy blur-[130px] filters) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "radial-gradient(520px circle at 12% 18%, rgba(216, 11, 36, 0.18), transparent 68%)",
            "radial-gradient(560px circle at 88% 42%, rgba(245, 93, 5, 0.14), transparent 70%)",
            "radial-gradient(460px circle at 45% 92%, rgba(255, 184, 0, 0.1), transparent 68%)",
          ].join(", "),
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Logo Emblem Showcase */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center lg:col-span-5"
          >
            <div className="relative flex w-full max-w-[215px] items-center justify-center sm:max-w-[330px] lg:max-w-[400px]">
              <div
                className="pointer-events-none absolute -inset-8 rounded-full"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,93,5,0.28) 0%, rgba(216,11,36,0.14) 45%, transparent 72%)",
                }}
              />
              <Image
                src={SITE_CONFIG.assets.logoFull}
                alt={`${SITE_CONFIG.name} Official Logo`}
                width={731}
                height={635}
                quality={95}
                priority
                className="relative z-10 h-auto w-full object-contain transition-transform duration-300 ease-out will-change-transform hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.26em] text-[var(--brand-gold)]/90">
              {SITE_CONFIG.tagline}
            </p>
          </motion.div>

          {/* Right Column: Editorial Headline, Meta, Countdown & CTAs */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/40 bg-[var(--brand-crimson)]/14 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#ffc47a]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--brand-secondary)]" />
              <span>{SITE_CONFIG.edition} • National Tech &amp; Innovation Fest</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {SITE_CONFIG.name}
              <span className="mt-1 block text-2xl font-bold text-[var(--text-secondary)] sm:text-3xl lg:text-4xl">
                IEDC • <span className="gradient-text">{SITE_CONFIG.collegeName}</span>
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg lg:mx-0">
              {SITE_CONFIG.heroSubtitle}
            </p>

            {/* Date & Venue Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white">
                <CalendarDays className="h-4 w-4 text-[var(--brand-secondary)]" />
                <span>{SITE_CONFIG.datesDisplay}</span>
              </div>
              <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4 text-[var(--brand-primary)]" />
                <span>{SITE_CONFIG.campusLabel}</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="mx-auto mt-7 max-w-xl lg:mx-0">
              <CountdownTimer />
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link
                href="/events"
                className="btn-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold sm:text-base"
              >
                <span>Explore Events</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/schedule"
                className="btn-outline-glass inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold sm:text-base"
              >
                <span>View Schedule</span>
              </Link>
              <Link
                href="/sponsors"
                className="btn-outline-glass inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold sm:text-base"
              >
                <span>Sponsor &amp; Partner</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
