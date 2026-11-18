import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldAlert,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import type { FestivalEvent } from "@/types";
import { RegistrationCTA } from "@/components/ui/RegistrationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface EventDetailsProps {
  event: FestivalEvent;
}

export function EventDetails({ event }: EventDetailsProps) {
  const quickSpecs = [
    { icon: Calendar, label: "Date", value: event.dateLabel },
    { icon: Clock, label: "Duration", value: event.duration },
    { icon: MapPin, label: "Venue", value: event.venue },
    { icon: Users, label: "Team Size", value: event.teamSize },
    { icon: Wallet, label: "Registration Fee", value: event.feeLabel },
    { icon: Trophy, label: "Rewards", value: event.prizePoolLabel },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Back breadcrumb */}
      <Link
        href="/events"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-secondary)]"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to All Events</span>
      </Link>

      {/* Top Grid */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Main Column */}
        <div className="lg:col-span-7">
          <ScrollReveal>
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/14 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                {event.categoryLabel}
              </span>
              <span className="rounded-full border border-[var(--border-subtle)] bg-white/5 px-3.5 py-1 text-xs font-bold text-[var(--brand-gold)]">
                {event.day} • {event.dateLabel}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--brand-gold)]/90">
              {event.tagline}
            </p>
          </ScrollReveal>

          {/* Poster Visual */}
          <ScrollReveal delay={0.08} className="mt-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <Image
                src={event.posterImage}
                alt={event.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Overview */}
          <ScrollReveal delay={0.12} className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-white">About This Event</h2>
            {event.longDescription.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-[var(--text-secondary)]">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal delay={0.16} className="mt-10">
            <h2 className="text-2xl font-bold text-white">Key Highlights</h2>
            <ul className="mt-4 space-y-3">
              {event.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--text-primary)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-secondary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Rules */}
          <ScrollReveal delay={0.2} className="mt-10">
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2.5 text-[var(--brand-gold)]">
                <ShieldAlert className="h-5 w-5 text-[var(--brand-primary)]" />
                <h2 className="text-xl font-bold text-white">Guidelines &amp; Rules</h2>
              </div>
              <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Sticky Sidebar */}
        <aside className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-bold text-white">Event Snapshot</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {quickSpecs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={spec.label}
                      className="flex items-center gap-3.5 rounded-xl border border-[var(--border-subtle)] bg-black/30 p-3.5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-primary)]/14 text-[var(--brand-secondary)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                          {spec.label}
                        </p>
                        <p className="text-sm font-semibold text-white">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <RegistrationCTA
                  url={event.registrationUrl}
                  status={event.registrationStatus}
                  eventTitle={event.title}
                  size="lg"
                  fullWidth
                />
              </div>
            </div>

            {/* Coordinators */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                Event Contacts
              </h3>
              <div className="mt-4 space-y-3">
                {event.coordinators.map((coord, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[var(--border-subtle)] bg-black/25 p-3.5"
                  >
                    <p className="font-semibold text-white">{coord.name}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{coord.role}</p>
                    {coord.phone && (
                      <a
                        href={`tel:${coord.phone.replace(/\s+/g, "")}`}
                        className="mt-1 inline-block text-xs font-semibold text-[var(--brand-secondary)]"
                      >
                        {coord.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
