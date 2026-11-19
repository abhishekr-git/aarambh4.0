import type { Metadata } from "next";
import { Mail, Phone, Sparkles } from "lucide-react";
import { INSTITUTIONAL_PARTNERS, SPONSORSHIP_CONTACTS } from "@/data/sponsors";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description: `Partner with ${SITE_CONFIG.name} (${SITE_CONFIG.datesDisplay}) at ${SITE_CONFIG.collegeName}. View sponsorship tiers and partnerships contacts.`,
};

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        kicker="Industry &amp; Campus Alliances"
        title="Sponsors &amp;"
        highlight="Partners"
        subtitle="Partner with IEDC CEK to connect your brand with 1,000+ student engineers, developers, and makers across Kerala on January 15–16, 2027."
      />

      {/* Prominent Partnerships Contact Desk Placed Near Top */}
      <ScrollReveal className="mx-auto mt-10 max-w-4xl">
        <div
          id="partnerships-desk"
          className="scroll-mt-28 rounded-2xl border border-[var(--brand-primary)]/35 p-6 sm:p-8"
          style={{ background: "var(--gradient-surface)" }}
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Direct Desk
              </span>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Connect with our Partnerships Team
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                Discuss custom sponsor packages, campus arena naming, hackathon tracks, or company stall spaces.
              </p>
            </div>
            <a
              href="mailto:iedc@ceknpy.ac.in?subject=Aarambh%204.0%20Partnership%20Inquiry"
              className="btn-brand inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold sm:text-sm"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Email Partnerships Desk</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[var(--border-subtle)] pt-5 sm:grid-cols-2">
            {SPONSORSHIP_CONTACTS.map((contact) => (
              <div
                key={contact.name}
                className="rounded-xl border border-[var(--border-subtle)] bg-black/30 p-4"
              >
                <p className="text-sm font-bold text-white">{contact.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{contact.role}</p>
                <div className="mt-2.5 flex flex-wrap gap-3">
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-secondary)] hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{contact.phone}</span>
                    </a>
                  )}
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-secondary)] hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{contact.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Structured Sponsors & Tiers Grid */}
      <div className="mt-14 sm:mt-16">
        <SponsorGrid sponsors={INSTITUTIONAL_PARTNERS} />
      </div>
    </div>
  );
}
