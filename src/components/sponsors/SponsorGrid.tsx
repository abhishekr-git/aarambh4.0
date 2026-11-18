import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Sponsor } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SponsorGridProps {
  sponsors: Sponsor[];
}

export function SponsorGrid({ sponsors }: SponsorGridProps) {
  const institutional = sponsors.filter((s) => s.tier === "institutional");
  const tiers = sponsors.filter((s) => s.tier !== "institutional");

  return (
    <div className="space-y-12">
      {/* Official Institutional Partners */}
      <div>
        <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
          Institutional &amp; Ecosystem Partners
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {institutional.map((partner) => (
            <ScrollReveal key={partner.id}>
              <div className="glass-card flex h-full flex-col items-center rounded-2xl p-8 text-center">
                {partner.logo && (
                  <div className="mb-6 flex h-20 items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={220}
                      height={80}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                )}
                <span className="rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary)]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                  {partner.tierLabel}
                </span>
                <h4 className="mt-3 text-xl font-bold text-white">{partner.name}</h4>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{partner.description}</p>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-gold)] hover:text-[var(--brand-secondary)]"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Sponsorship Slots for Aarambh 4.0 */}
      <div>
        <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
          Aarambh 4.0 Sponsorship Tiers
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((sponsor, idx) => (
            <ScrollReveal key={sponsor.id} delay={Math.min(idx * 0.05, 0.2)}>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl border-dashed p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[var(--border-subtle)] bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                      {sponsor.tierLabel}
                    </span>
                    <Sparkles className="h-4 w-4 text-[var(--brand-primary)]" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-white">{sponsor.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {sponsor.description}
                  </p>
                </div>
                <p className="mt-5 border-t border-[var(--border-subtle)] pt-3 text-xs font-semibold text-[var(--text-muted)]">
                  Official Aarambh 4.0 partners will appear here as confirmed.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
