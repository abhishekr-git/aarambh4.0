import type { Metadata } from "next";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import {
  FESTIVAL_METRICS,
  IEDC_PROFILE,
  PREVIOUS_EDITION_HIGHLIGHTS,
  SITE_CONFIG,
} from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_CONFIG.name}, IEDC, ${SITE_CONFIG.collegeName}, and previous edition highlights.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Our Story"
        title="About"
        highlight="Aarambh 4.0"
        subtitle="The fourth evolution of College of Engineering Karunagappally's flagship annual technology and entrepreneurship festival."
      />

      {/* Brand Identity & Overview */}
      <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <ScrollReveal className="flex justify-center lg:col-span-5">
          <div className="glass-card flex w-full max-w-sm items-center justify-center rounded-3xl p-10">
            <Image
              src={SITE_CONFIG.assets.logoFull}
              alt={`${SITE_CONFIG.name} Official Logo`}
              width={731}
              height={635}
              quality={95}
              className="h-auto w-full object-contain"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="space-y-5 lg:col-span-7">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Organised by {IEDC_PROFILE.chapterName} — {SITE_CONFIG.collegeName}
          </h2>
          <p className="leading-relaxed text-[var(--text-secondary)]">
            {IEDC_PROFILE.history}
          </p>
          <p className="leading-relaxed text-[var(--text-secondary)]">
            <strong className="text-white">Mission:</strong> {IEDC_PROFILE.mission}
          </p>
          <p className="leading-relaxed text-[var(--text-secondary)]">
            <strong className="text-white">Vision:</strong> {IEDC_PROFILE.vision}
          </p>

          <div className="pt-1">
            <a
              href={SITE_CONFIG.iedcWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold"
            >
              <span>Visit Official IEDC CEKNPY Website</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-3 sm:grid-cols-4">
            {FESTIVAL_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-[var(--border-subtle)] bg-black/30 p-4 text-center"
              >
                <p className="font-[family-name:var(--font-outfit)] text-2xl font-extrabold gradient-text">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-1 text-[11px] font-semibold text-[var(--text-secondary)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* IEDC CEKNPY Achievements */}
      <ScrollReveal className="mt-16">
        <div className="glass-card rounded-3xl p-7 sm:p-9">
          <div className="mb-5 flex items-center gap-2.5">
            <Award className="h-5 w-5 text-[var(--brand-secondary)]" />
            <h2 className="text-xl font-bold text-white">IEDC CEKNPY Key Achievements</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {IEDC_PROFILE.achievements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-black/30 p-4 text-sm text-[var(--text-primary)]"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-secondary)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Previous Edition Highlights */}
      <div className="mt-24">
        <SectionHeading
          kicker="Legacy"
          title="Highlights from"
          highlight="Aarambh 3.0"
          subtitle="A look back at what made our previous edition at CEK unforgettable."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIOUS_EDITION_HIGHLIGHTS.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.05}>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                    {item.edition}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
                <p className="mt-4 border-t border-[var(--border-subtle)] pt-3 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                  {item.metric}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
