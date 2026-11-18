import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { SPONSORS, SPONSORSHIP_CONTACTS } from "@/data/sponsors";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description: `Institutional partners and sponsorship opportunities for ${SITE_CONFIG.name} (${SITE_CONFIG.datesDisplay}) at ${SITE_CONFIG.collegeName}.`,
};

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Partnerships"
        title="Sponsors &"
        highlight="Partners"
        subtitle="Partner with IEDC CEK to connect your brand with 1,000+ student engineers, developers, designers, and founders across Kerala."
      />

      <div className="mt-14">
        <SponsorGrid sponsors={SPONSORS} />
      </div>

      {/* Sponsorship Inquiry Box */}
      <ScrollReveal className="mx-auto mt-16 max-w-3xl">
        <div
          className="rounded-3xl border border-[var(--brand-primary)]/40 p-8 text-center sm:p-10"
          style={{ background: "var(--gradient-surface)" }}
        >
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Interested in Sponsoring or Hosting a Stall?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
            Reach out to our partnerships desk for the official Aarambh 4.0 sponsorship brochure,
            custom tier packages, or campus expo stall bookings.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {SPONSORSHIP_CONTACTS.map((contact) => (
              <div
                key={contact.name}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/70 p-4"
              >
                <p className="font-bold text-white">{contact.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{contact.role}</p>
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-secondary)] hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contact.phone}</span>
                  </a>
                )}
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-secondary)] hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{contact.email}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
