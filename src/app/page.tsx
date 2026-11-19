import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, BookOpen, Compass, Cpu, Flame, Lightbulb, Trophy, Users } from "lucide-react";
import {
  FESTIVAL_METRICS,
  IEDC_PROFILE,
  PREVIOUS_EDITION_HIGHLIGHTS,
  SITE_CONFIG,
} from "@/data/site";
import { EVENTS } from "@/data/events";
import { SCHEDULE_DAYS } from "@/data/schedule";
import { SPONSORS } from "@/data/sponsors";
import { GALLERY_ITEMS } from "@/data/gallery";
import { HeroSection } from "@/components/sections/HeroSection";
import { RibbonDivider } from "@/components/ui/RibbonDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { EventGrid } from "@/components/events/EventGrid";
import { ScheduleTimeline } from "@/components/schedule/ScheduleTimeline";
import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import { RegistrationCTA } from "@/components/ui/RegistrationCTA";

const GalleryGrid = dynamic(
  () => import("@/components/gallery/GalleryGrid").then((mod) => mod.GalleryGrid),
  { ssr: true }
);

const LocationMapSection = dynamic(
  () => import("@/components/sections/LocationMapSection").then((mod) => mod.LocationMapSection),
  { ssr: true }
);

const ABOUT_PILLARS = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description:
      "Turn ideas into real prototypes across software, AI, robotics, and sustainable engineering.",
  },
  {
    icon: Users,
    title: "Vibrant Networking",
    description:
      "Meet student builders, startup founders, engineers, and mentors from across Kerala.",
  },
  {
    icon: Trophy,
    title: "High-Stakes Arenas",
    description:
      "Compete in 24-hour hackathons, designathons, combat robotics, and autonomous tracks.",
  },
  {
    icon: BookOpen,
    title: "Hands-On Mastery",
    description:
      "Learn practical tools through practitioner-led technical workshops and founder dialogues.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero & Countdown */}
      <HeroSection />

      {/* 2. Scrolling Ribbon */}
      <RibbonDivider />

      {/* 3. About Aarambh 4.0 + IEDC & College Intro */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="About The Festival"
            title="Igniting Innovation at"
            highlight="CE Karunagappally"
            subtitle="Aarambh 4.0 is the flagship annual technology and entrepreneurship festival hosted by IEDC at College of Engineering Karunagappally, uniting builders, makers, and dreamers on January 15–16, 2027."
          />

          {/* 4 Pillars */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={idx * 0.06}>
                  <div className="glass-card h-full rounded-2xl p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Animated Metrics Strip */}
          <ScrollReveal className="mt-12">
            <div
              className="rounded-3xl border border-[var(--brand-primary)]/30 p-8 sm:p-10"
              style={{ background: "var(--gradient-surface)" }}
            >
              <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                {FESTIVAL_METRICS.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-[family-name:var(--font-outfit)] text-3xl font-extrabold gradient-text sm:text-5xl">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] sm:text-sm">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* IEDC & College Split */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-7 sm:p-8">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
                    <Flame className="h-4 w-4 text-[var(--brand-primary)]" />
                    <span>About {IEDC_PROFILE.chapterName}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Innovation &amp; Entrepreneurship Development Centre
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {IEDC_PROFILE.mission}
                  </p>
                </div>
                <div className="mt-5 pt-2">
                  <a
                    href={SITE_CONFIG.iedcWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-secondary)] hover:underline"
                  >
                    <span>Visit Official IEDC CEKNPY Website</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-7 sm:p-8">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                    <Compass className="h-4 w-4 text-[var(--brand-secondary)]" />
                    <span>Host Institution</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{SITE_CONFIG.collegeName}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {IEDC_PROFILE.history}
                  </p>
                </div>
                <div className="mt-5 pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-gold)] hover:text-[var(--brand-secondary)]"
                  >
                    <span>Read Vision, Achievements &amp; Full Execom</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Previous Edition Highlights */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Legacy"
            title="Previous Edition"
            highlight="Highlights"
            subtitle="Building on the energy and momentum of Aarambh 3.0 — raising the bar higher for the 4th edition."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PREVIOUS_EDITION_HIGHLIGHTS.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 0.06}>
                <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                      {item.edition}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                  <p className="mt-5 border-t border-[var(--border-subtle)] pt-3 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                    {item.metric}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Events with Category Filter */}
      <section id="events" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Tracks & Competitions"
            title="Aarambh 4.0"
            highlight="Events"
            subtitle="Filter across hackathons, robotics competitions, technical workshops, expos, and stage experiences."
          />

          <div className="mt-12">
            <EventGrid events={EVENTS} />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/events"
              className="btn-outline-glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
            >
              <span>Open Full Events Hub</span>
              <ArrowRight className="h-4 w-4 text-[var(--brand-secondary)]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Interactive Day-Wise Schedule */}
      <section
        id="schedule"
        className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Festival Blueprint"
            title="Two Days of"
            highlight="Non-Stop Action"
            subtitle="Switch between Day 1 (Jan 15) and Day 2 (Jan 16) to plan your sessions, sprints, and showcases."
          />
          <div className="mt-12">
            <ScheduleTimeline days={SCHEDULE_DAYS} />
          </div>
        </div>
      </section>

      {/* 7. Gallery with Lightbox */}
      <section id="gallery" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Visual Archive"
            title="Moments &"
            highlight="Gallery"
            subtitle="Click any visual to explore in full-screen lightbox view. Official Aarambh 4.0 photography and posters will populate here."
          />
          <div className="mt-12">
            <GalleryGrid items={GALLERY_ITEMS} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="btn-outline-glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="h-4 w-4 text-[var(--brand-secondary)]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Sponsors & Partners */}
      <section
        id="sponsors"
        className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Ecosystem & Backing"
            title="Sponsors &"
            highlight="Partners"
            subtitle="Collaborating with forward-thinking institutions, tech leaders, and campus communities."
          />
          <div className="mt-12">
            <SponsorGrid sponsors={SPONSORS} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/sponsors"
              className="btn-brand inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold"
            >
              <span>Become an Aarambh 4.0 Sponsor</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Location, Map & Travel Guide */}
      <section
        id="location"
        className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Venue & Directions"
            title="Reach"
            highlight="CEK Campus"
            subtitle="Plan your journey to College of Engineering Karunagappally for January 15–16, 2027."
          />
          <div className="mt-12">
            <LocationMapSection />
          </div>
        </div>
      </section>

      {/* 10. Final Registration & Contact Callout */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="relative overflow-hidden rounded-3xl border border-[var(--brand-primary)]/40 p-8 text-center sm:p-14"
              style={{
                background:
                  "linear-gradient(135deg, rgba(216,11,36,0.16) 0%, rgba(245,93,5,0.1) 50%, rgba(255,184,0,0.1) 100%)",
              }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/20 text-[var(--brand-secondary)]">
                <Cpu className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready for <span className="gradient-text">{SITE_CONFIG.name}</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Mark your calendar for {SITE_CONFIG.datesDisplay} at {SITE_CONFIG.collegeName}.
                Explore tracks now or reach out to our team for partnerships and inquiries.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <RegistrationCTA size="lg" />
                <Link
                  href="/contact"
                  className="btn-outline-glass inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-bold"
                >
                  <span>Contact Organizers</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
