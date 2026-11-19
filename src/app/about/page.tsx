import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Compass, ExternalLink, Flame, Lightbulb, Users } from "lucide-react";
import {
  FESTIVAL_METRICS,
  IEDC_PROFILE,
  SITE_CONFIG,
} from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_CONFIG.name}, host chapter IEDC CEKNPY, and ${SITE_CONFIG.collegeName}.`,
};

export default function AboutPage() {
  const festivalMetrics = FESTIVAL_METRICS.slice(0, 2);
  const chapterMetrics = FESTIVAL_METRICS.slice(2);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* 1. Header: The Festival First */}
      <SectionHeading
        kicker="Our Identity &amp; Purpose"
        title="About"
        highlight="Aarambh 4.0"
        subtitle="The 4th edition of College of Engineering Karunagappally's flagship annual technology, entrepreneurship, and maker festival."
      />

      {/* 2. Emblem Showcase & Festival Overview */}
      <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <ScrollReveal className="flex justify-center lg:col-span-5">
          <div className="glass-card flex w-full max-w-xs items-center justify-center rounded-3xl p-8 sm:max-w-sm">
            <Image
              src={SITE_CONFIG.assets.logoMark}
              alt={`${SITE_CONFIG.name} Emblem`}
              width={677}
              height={677}
              priority
              sizes="(max-width: 640px) 192px, 240px"
              className="h-auto w-48 sm:w-60 object-contain drop-shadow-[0_8px_24px_rgba(216,11,36,0.3)]"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="space-y-4 lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
            <Flame className="h-3.5 w-3.5 text-[var(--brand-primary)]" aria-hidden="true" />
            January 15–16, 2027
          </span>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Igniting Maker Culture &amp; Innovation
          </h2>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Aarambh 4.0 is organized by the Innovation &amp; Entrepreneurship Development Centre (IEDC) at College of Engineering Karunagappally. Across two action-packed days, the festival brings together aspiring student engineers, developers, and tech innovators from across Kerala.
          </p>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            From overnight hackathons and robotics arenas to hands-on engineering masterclasses and startup showcases, Aarambh serves as an open launchpad for practical prototyping, peer learning, and industry connections.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#location"
              className="btn-brand inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold sm:text-sm"
            >
              <span>Plan Your Campus Visit</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={SITE_CONFIG.collegeWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold sm:text-sm"
            >
              <span>About CEK Campus</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* 3. Clearly Labeled Metric Distinction: Festival vs Chapter Achievements */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Festival Projection Box */}
        <ScrollReveal>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                Aarambh 4.0 Projections
              </p>
              <h3 className="mt-1 text-lg font-bold text-white">Festival Scale</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                Target metrics for the upcoming fourth edition on January 15–16, 2027 at CEK Campus.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[var(--border-subtle)] pt-4">
              {festivalMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold gradient-text sm:text-3xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">{metric.label}</p>
                  <p className="text-[11px] text-[var(--text-muted)]">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* IEDC Chapter Achievements Box */}
        <ScrollReveal delay={0.06}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                IEDC CEKNPY Track Record
              </p>
              <h3 className="mt-1 text-lg font-bold text-white">Year-Round Incubation Impact</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                Verified milestones achieved by our student chapter under Kerala Startup Mission (KSUM).
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[var(--border-subtle)] pt-4">
              {chapterMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold gradient-text sm:text-3xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">{metric.label}</p>
                  <p className="text-[11px] text-[var(--text-muted)]">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 4. The Host & Chapter: IEDC CEKNPY & College Details */}
      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ScrollReveal>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                <Users className="h-4 w-4" aria-hidden="true" />
                <span>The Organizer</span>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {IEDC_PROFILE.chapterName}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                {IEDC_PROFILE.history}
              </p>
              <div className="mt-4 space-y-2 text-xs text-[var(--text-secondary)] sm:text-sm">
                <p>
                  <strong className="text-white">Mission:</strong> {IEDC_PROFILE.mission}
                </p>
                <p>
                  <strong className="text-white">Vision:</strong> {IEDC_PROFILE.vision}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-2">
              <a
                href={SITE_CONFIG.iedcWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-secondary)] hover:underline"
              >
                <span>Visit Official IEDC CEKNPY Website</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                <Compass className="h-4 w-4" aria-hidden="true" />
                <span>The Host Institution</span>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {SITE_CONFIG.collegeName}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                Established under IHRD, College of Engineering Karunagappally is a leading government-aided engineering institution in Kollam, Kerala. Affiliated with APJ Abdul Kalam Technological University (KTU) and approved by AICTE, CEK nurtures talent across Computer Science, Electronics, Electrical, and Mechanical streams.
              </p>
              <div className="mt-4 rounded-xl border border-[var(--border-subtle)] bg-black/25 p-4 text-xs text-[var(--text-secondary)] sm:text-sm">
                <p className="font-semibold text-white">Campus Highlights:</p>
                <p className="mt-1">
                  Modern laboratories, state-of-the-art incubation centre, active technical student chapters, and vibrant maker spaces.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-2">
              <a
                href={SITE_CONFIG.collegeWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-gold)] hover:underline"
              >
                <span>Visit ceknpy.ac.in</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 5. Key Verified Chapter Milestones */}
      <ScrollReveal className="mt-12">
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2 text-[var(--brand-gold)]">
            <Award className="h-5 w-5 text-[var(--brand-secondary)]" aria-hidden="true" />
            <h3 className="text-lg font-bold text-white sm:text-xl">
              IEDC CEKNPY Key Achievements
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {IEDC_PROFILE.achievements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/25 p-3.5 text-xs text-[var(--text-primary)] sm:text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-secondary)]" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
