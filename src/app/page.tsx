import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, BookOpen, Compass, Cpu, Flame, Lightbulb, Trophy, Users } from "lucide-react";
import {
  IEDC_PROFILE,
  SITE_CONFIG,
} from "@/data/site";
import { PUBLISHED_EVENTS } from "@/data/events";
import { INSTITUTIONAL_PARTNERS } from "@/data/sponsors";
import { HeroSection } from "@/components/sections/HeroSection";
import { RibbonDivider } from "@/components/ui/RibbonDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EventGrid } from "@/components/events/EventGrid";

const LocationMapSection = dynamic(
  () => import("@/components/sections/LocationMapSection").then((mod) => mod.LocationMapSection),
  { ssr: true }
);

const FESTIVAL_PILLARS = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Prototype software, AI tools, robotics, and engineering solutions with fellow students.",
  },
  {
    icon: Users,
    title: "Builder Community",
    description: "Meet student engineers, startup founders, and technical mentors from across Kerala.",
  },
  {
    icon: Trophy,
    title: "Competitive Arenas",
    description: "Compete in hackathons, combat robotics battles, and technical design sprints.",
  },
  {
    icon: BookOpen,
    title: "Hands-On Masterclasses",
    description: "Learn practical modern tech stacks through interactive workshops and founder dialogues.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Compact Ribbon Divider */}
      <RibbonDivider />

      {/* 3. Event Lineup Section (Placed Immediately Beneath Ticker) */}
      <section id="events" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Festival Lineup"
            title="Explore"
            highlight="events"
            subtitle="Preview lineup · Registration is in demo mode."
          />

          <div className="mt-10 sm:mt-12">
            <EventGrid events={PUBLISHED_EVENTS} showFilter={false} />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/events"
              className="btn-outline-glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold sm:text-sm"
            >
              <span>View all events</span>
              <ArrowRight className="h-4 w-4 text-[var(--brand-secondary)]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Festival Introduction & Core Pillars */}
      <section id="about" className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="About Aarambh 4.0"
            title="Two Days of Technology &amp;"
            highlight="Innovation"
            subtitle="Hosted by IEDC at College of Engineering Karunagappally, uniting student builders and makers on January 15–16, 2027."
          />

          {/* 4 Core Pillars */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FESTIVAL_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={idx * 0.05}>
                  <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6">
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-bold text-white sm:text-lg">{pillar.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Short Organiser & Host Summary */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7">
                <div>
                  <div className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                    <Flame className="h-4 w-4 text-[var(--brand-primary)]" aria-hidden="true" />
                    <span>The Organizer</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {IEDC_PROFILE.chapterName}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    {IEDC_PROFILE.history}
                  </p>
                </div>
                <div className="mt-5 pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-secondary)] hover:underline"
                  >
                    <span>Read Full Story on About Page</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7">
                <div>
                  <div className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                    <Compass className="h-4 w-4 text-[var(--brand-gold)]" aria-hidden="true" />
                    <span>The Campus</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {SITE_CONFIG.collegeName}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    Established under IHRD and affiliated with APJ Abdul Kalam Technological University, CEK has been pioneering engineering education, maker culture, and technical innovation in Kollam, Kerala.
                  </p>
                </div>
                <div className="mt-5 pt-2">
                  <Link
                    href="#location"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-gold)] hover:underline"
                  >
                    <span>Campus Location &amp; Transit</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Location & Directions Section */}
      <section id="location" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 border-t border-[var(--border-subtle)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Plan Your Journey"
            title="Reach"
            highlight="CEK Campus"
            subtitle={`Directions and transit guidance to College of Engineering Karunagappally for ${SITE_CONFIG.datesDisplay}.`}
          />

          <div className="mt-10 sm:mt-12">
            <LocationMapSection />
          </div>
        </div>
      </section>

      {/* 6. Institutional Backing & Partnerships Callout */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-6 sm:p-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
              Partner with Aarambh 4.0
            </span>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Support Student Innovation &amp; Technology
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              Connect your brand, tools, and mentors directly with 1,000+ student engineers across Kerala. Explore headline branding, track sponsorships, and campus stall bookings.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/sponsors"
                className="btn-brand inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold sm:text-sm"
              >
                <span>View Sponsorship Packages</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="mailto:iedc@ceknpy.ac.in?subject=Aarambh%204.0%20Partnership%20Inquiry"
                className="btn-outline-glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold sm:text-sm"
              >
                <span>Contact Partnerships Desk</span>
              </a>
            </div>

            {/* Institutional Backing Logos */}
            <div className="mt-10 border-t border-[var(--border-subtle)] pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Backed by Institutional Partners
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {INSTITUTIONAL_PARTNERS.map((partner) => (
                  <span key={partner.id} className="text-xs font-semibold text-[var(--text-secondary)]">
                    {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
