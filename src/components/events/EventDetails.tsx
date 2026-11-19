"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Trophy,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import type { FestivalEvent } from "@/types";
import { SITE_CONFIG } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EventRegistrationModal } from "@/components/events/EventRegistrationModal";

interface EventDetailsProps {
  event: FestivalEvent;
}

export function EventDetails({ event }: EventDetailsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDemo = event.isDemo || event.registrationStatus === "demo";

  // Quick specs: only show dates, fees, and prizes when confirmed
  const quickSpecs = [
    event.teamSize ? { icon: Users, label: "Team Format", value: event.teamSize } : null,
    event.deadline ? { icon: Clock, label: "Deadline", value: event.deadline } : null,
    event.venue ? { icon: MapPin, label: "Venue", value: event.venue } : null,
    event.dateConfirmed && event.dateLabel
      ? { icon: Calendar, label: "Confirmed Date", value: event.dateLabel }
      : null,
    event.feeConfirmed && event.feeLabel
      ? { icon: Wallet, label: "Registration Fee", value: event.feeLabel }
      : null,
    event.prizeConfirmed && event.prizePoolLabel
      ? { icon: Trophy, label: "Prizes & Awards", value: event.prizePoolLabel }
      : null,
  ].filter(Boolean) as { icon: React.ComponentType<{ className?: string }>; label: string; value: string }[];

  const hasRules = event.rules && event.rules.length > 0;
  const hasHighlights = event.highlights && event.highlights.length > 0;
  const hasCoordinators = event.coordinators && event.coordinators.length > 0;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      {/* Back Navigation Breadcrumb */}
      <Link
        href="/events"
        className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-secondary)] sm:text-sm"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Back to All Events</span>
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Main Column */}
        <div className="lg:col-span-7">
          <ScrollReveal>
            <div className="mb-3.5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/12 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                {event.categoryLabel}
              </span>
              {isDemo ? (
                <span className="rounded-full border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 px-3 py-0.5 text-xs font-semibold text-[var(--brand-gold)]">
                  Preview Lineup · Demo Registration
                </span>
              ) : event.dateConfirmed && event.dateLabel ? (
                <span className="rounded-full border border-[var(--border-subtle)] bg-white/5 px-3 py-0.5 text-xs font-semibold text-[var(--brand-gold)]">
                  {event.dateLabel}
                </span>
              ) : null}
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
            <div
              className="mt-6 flex aspect-[21/9] w-full items-center justify-center rounded-2xl border border-[var(--border-subtle)] p-6"
              style={{ background: "var(--gradient-surface)" }}
            >
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

          {/* Event Overview */}
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

          {/* Key Event Details: Eligibility & Team Size (Easy to find) */}
          <ScrollReveal delay={0.14} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {event.eligibility && (
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 text-[var(--brand-gold)]">
                  <UserCheck className="h-4 w-4 text-[var(--brand-secondary)]" />
                  <h3 className="text-sm font-bold text-white">Eligibility</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {event.eligibility}
                </p>
              </div>
            )}

            {event.teamSize && (
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 text-[var(--brand-gold)]">
                  <Users className="h-4 w-4 text-[var(--brand-secondary)]" />
                  <h3 className="text-sm font-bold text-white">Team Size</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {event.teamSize}
                </p>
              </div>
            )}
          </ScrollReveal>

          {/* Track Highlights (if available) */}
          {hasHighlights && (
            <ScrollReveal delay={0.16} className="mt-8">
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

          {/* Rules & Guidelines */}
          {hasRules && (
            <ScrollReveal delay={0.18} className="mt-8">
              <div className="glass-card rounded-2xl p-5 sm:p-6">
                <div className="mb-3.5 flex items-center gap-2 text-[var(--brand-gold)]">
                  <ShieldCheck className="h-5 w-5 text-[var(--brand-primary)]" aria-hidden="true" />
                  <h2 className="text-lg font-bold text-white">Rules &amp; Guidelines</h2>
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
            {/* Registration Action Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Registration</h3>
                {isDemo && (
                  <span className="rounded-full bg-[var(--brand-gold)]/15 px-2.5 py-0.5 text-[11px] font-bold text-[var(--brand-gold)]">
                    Demo Active
                  </span>
                )}
              </div>

              <p className="mt-2 text-xs text-[var(--text-secondary)]">
                {isDemo
                  ? "Test the participant registration flow. Sample entries are stored locally."
                  : "Registration is open for official Aarambh 4.0 festival passes."}
              </p>

              {/* Action Button */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-brand flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
                >
                  <span>{isDemo ? "Try demo registration" : "Register Now"}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Quick Specs */}
              {quickSpecs.length > 0 && (
                <div className="mt-6 space-y-2.5 border-t border-[var(--border-subtle)] pt-4">
                  {quickSpecs.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={spec.label}
                        className="flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-black/25 p-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
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
              )}
            </div>

            {/* Event Coordinators Card */}
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

      {/* Accessible Interactive Registration Dialog */}
      <EventRegistrationModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
