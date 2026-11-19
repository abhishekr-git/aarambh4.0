import Image from "next/image";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import type { Sponsor, SponsorshipTierPackage } from "@/types";
import { INSTITUTIONAL_PARTNERS, SPONSORSHIP_PACKAGES } from "@/data/sponsors";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SponsorGridProps {
  sponsors?: Sponsor[];
}

export function SponsorGrid({ sponsors = INSTITUTIONAL_PARTNERS }: SponsorGridProps) {
  return (
    <div className="space-y-16">
      {/* 1. Official Institutional & Ecosystem Partners */}
      <div>
        <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
          Institutional &amp; Ecosystem Partners
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sponsors.map((partner) => (
            <ScrollReveal key={partner.id}>
              <div className="glass-card flex h-full flex-col items-center justify-between rounded-2xl p-6 text-center sm:p-8">
                <div>
                  {partner.logo && (
                    <div className="mb-5 flex h-16 items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt=""
                        width={200}
                        height={64}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>
                  )}
                  <span className="inline-block rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary)]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                    {partner.tierLabel}
                  </span>
                  <h4 className="mt-3 text-lg font-bold text-white sm:text-xl">{partner.name}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    {partner.description}
                  </p>
                </div>
                {partner.website && (
                  <div className="mt-5 pt-2">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-gold)] hover:text-[var(--brand-secondary)]"
                    >
                      <span>Visit Partner Website</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 2. Structured Sponsorship Tier Comparison Packages */}
      <div>
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Partnership Opportunities
          </span>
          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Aarambh 4.0 Sponsorship Packages
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-xs text-[var(--text-secondary)] sm:text-sm">
            Connect your brand with 1,000+ student engineers, tech founders, and developers across Kerala.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPONSORSHIP_PACKAGES.map((pkg, idx) => {
            const isTitle = pkg.id === "title";
            return (
              <ScrollReveal key={pkg.id} delay={idx * 0.05}>
                <div
                  className={`glass-card flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all ${
                    isTitle ? "border-[var(--brand-primary)]/50 shadow-lg shadow-[var(--brand-primary)]/10" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                        {pkg.slots}
                      </span>
                    </div>

                    <h4 className="mt-3 text-lg font-bold text-white">{pkg.name}</h4>
                    <p className="mt-1 text-xs text-[var(--brand-gold)]/90">{pkg.tagline}</p>

                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                      {pkg.idealFor}
                    </p>

                    <div className="mt-4 border-t border-[var(--border-subtle)] pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                        Key Deliverables
                      </p>
                      <ul className="mt-2.5 space-y-2 text-xs text-[var(--text-secondary)]">
                        {pkg.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-secondary)]" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                    <a
                      href="mailto:iedc@ceknpy.ac.in?subject=Aarambh%204.0%20Sponsorship%20Inquiry"
                      className={`inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                        isTitle
                          ? "btn-brand text-white"
                          : "btn-outline-glass"
                      }`}
                    >
                      <span>Inquire for {pkg.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
