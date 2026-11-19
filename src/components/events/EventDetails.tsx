import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import type { FestivalEvent } from "@/types";
import { SITE_CONFIG } from "@/data/site";
import { RegistrationCTA } from "@/components/ui/RegistrationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface EventDetailsProps {
  event: FestivalEvent;
}

export function EventDetails({ event }: EventDetailsProps) {
  // Dynamically filter specs so missing/undefined fields never generate empty rows
  const quickSpecs = [
    { icon: Calendar, label: "Date", value: event.dateLabel },
    event.duration ? { icon: Clock, label: "Duration", value: event.duration } : null,
    event.venue ? { icon: MapPin, label: "Venue", value: event.venue } : null,
    event.teamSize ? { icon: Users, label: "Team Format", value: event.teamSize } : null,
    event.feeLabel ? { icon: Wallet, label: "Registration Fee", value: event.feeLabel } : null,
    event.prizePoolLabel ? { icon: Trophy, label: "Prizes & Rewards", value: event.prizePoolLabel } : null,
  ].filter(Boolean) as { icon: React.ComponentType<{ className?: string }>; label: string; value: string }[];

  const hasHighlights = event.highlights && event.highlights.length > 0;
  const hasRules = event.rules && event.rules.length > 0;
  const hasCoordinators = event.coordinators && event.coordinators.length > 0;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      {/* Back breadcrumb */}
      <Link
        href="/events"
        className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-secondary)] sm:text-sm"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Back to All Events</span>
      </Link>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left / Main Column */}
        <div className="lg:col-span-7">
          <ScrollReveal>
            <div className="mb-3.5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/12 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                {event.categoryLabel}
              </span>
              <span className="rounded-full border border-[var(--border-subtle)] bg-white/5 px-3 py-0.5 text-xs font-semibold text-[var(--brand-gold)]">
                {event.day} • {event.dateLabel}
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {event.title}
            </h1>

            {event.tagline && (
              <p className="mt-2.5 text-base text-[var(--brand-gold)]/90 sm:text-lg">
                {event.tagline}
              </p>
            )}
          </ScrollReveal>

          {/* Poster or Emblem Visual */}
          {event.posterImage ? (
            <ScrollReveal delay={0.06} className="mt-6">
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
          ) : (
            <div className="mt-6 flex aspect-[21/9] w-full items-center justify-center rounded-2xl border border-[var(--border-subtle)] p-6" style={{ background: "var(--gradient-surface)" }}>
              <div className="flex items-center gap-3 opacity-60">
                <Image
                  src={SITE_CONFIG.assets.logoMark}
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
                <span className="font-[family-name:var(--font-outfit)] text-sm font-bold tracking-wider text-[var(--brand-gold)]">
                  {SITE_CONFIG.name}
                </span>
              </div>
            </div>
          )}

          {/* Overview Paragraphs */}
          <ScrollReveal delay={0.1} className="mt-8 space-y-3.5">
            <h2 className="text-xl font-bold text-white">Event Overview</h2>
            {event.longDescription && event.longDescription.length > 0 ? (
              event.longDescription.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {event.description}
              </p>
            )}
          </ScrollReveal>

          {/* Key Highlights (if available) */}
          {hasHighlights && (
            <ScrollReveal delay={0.14} className="mt-8">
              <h2 className="text-xl font-bold text-white">Track Highlights</h2>
              <ul className="mt-3.5 space-y-2.5">
                {event.highlights!.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)] sm:text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-secondary)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          )}

          {/* Rules / Guidelines (if available) */}
          {hasRules && (
            <ScrollReveal delay={0.18} className="mt-8">
              <div className="glass-card rounded-2xl p-5 sm:p-6">
                <div className="mb-3.5 flex items-center gap-2 text-[var(--brand-gold)]">
                  <ShieldAlert className="h-5 w-5 text-[var(--brand-primary)]" aria-hidden="true" />
                  <h2 className="text-lg font-bold text-white">Guidelines &amp; Eligibility</h2>
                </div>
                <ul className="space-y-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {event.rules!.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]" aria-hidden="true" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Right / Sticky Sidebar */}
        <aside className="lg:col-span-5">
          <div className="sticky top-24 space-y-5">
            {/* Snapshot Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-lg font-bold text-white">Event Details</h3>

              <div className="mt-4 space-y-3">
                {quickSpecs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={spec.label}
                      className="flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-black/25 p-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                          {spec.label}
                        </p>
                        <p className="text-xs font-semibold text-white sm:text-sm">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5">
                <RegistrationCTA
                  url={event.registrationUrl}
                  status={event.registrationStatus}
                  eventTitle={event.title}
                  size="md"
                  fullWidth
                />
              </div>
            </div>

            {/* Event Coordinators Card (if provided) */}
            {hasCoordinators && (
              <div className="glass-card rounded-2xl p-5 sm:p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                  Event Contacts
                </h3>
                <div className="mt-3.5 space-y-2.5">
                  {event.coordinators!.map((coord, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[var(--border-subtle)] bg-black/20 p-3"
                    >
                      <p className="text-sm font-bold text-white">{coord.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">{coord.role}</p>
                      <div className="mt-1.5 flex flex-wrap gap-3">
                        {coord.phone && (
                          <a
                            href={`tel:${coord.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-secondary)] hover:underline"
                          >
                            <Phone className="h-3 w-3" />
                            <span>{coord.phone}</span>
                          </a>
                        )}
                        {coord.email && (
                          <a
                            href={`mailto:${coord.email}`}
                            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-secondary)] hover:underline"
                          >
                            <Mail className="h-3 w-3" />
                            <span>{coord.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
