import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";
import { FAQS } from "@/data/faqs";
import { TEAM_MEMBERS } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LocationMapSection } from "@/components/sections/LocationMapSection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: `Contact IEDC CEK, view campus directions and Google Maps for ${SITE_CONFIG.collegeName}, and browse ${SITE_CONFIG.name} FAQs.`,
};

export default function ContactPage() {
  const facultyContacts = TEAM_MEMBERS.filter((m) => m.group === "faculty");

  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Get In Touch"
        title="Contact"
        highlight="Aarambh 4.0"
        subtitle="Have questions about events, campus travel, stalls, or sponsorships? Reach out to the IEDC CEK team."
      />

      {/* 4 Contact Cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ScrollReveal>
          <div className="glass-card h-full rounded-2xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Campus Address</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {SITE_CONFIG.addressLines.join(", ")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="glass-card h-full rounded-2xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
              <Phone className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Faculty Nodal Desk</h2>
            <div className="mt-2 space-y-2 text-sm text-[var(--text-secondary)]">
              {facultyContacts.map((member) => (
                <div key={member.id}>
                  <p className="font-semibold text-white">{member.name}</p>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="text-xs text-[var(--brand-secondary)] hover:underline"
                    >
                      {member.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card h-full rounded-2xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Email</h2>
            <div className="mt-2 space-y-1.5 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.primaryEmail}`}
                className="block text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]"
              >
                {SITE_CONFIG.primaryEmail}
              </a>
              {SITE_CONFIG.secondaryEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-card h-full rounded-2xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
              <Globe className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Online &amp; Social</h2>
            <div className="mt-2 space-y-1.5 text-sm">
              <a
                href={SITE_CONFIG.iedcWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-[var(--brand-secondary)] hover:underline"
              >
                IEDC CEKNPY Official Website
              </a>
              <a
                href={SITE_CONFIG.collegeWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]"
              >
                www.ceknpy.ac.in
              </a>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[var(--text-secondary)] hover:text-[var(--brand-secondary)]"
                >
                  {s.label} — {s.handle}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Campus Map & Travel Guide */}
      <div className="mt-16">
        <LocationMapSection />
      </div>

      {/* FAQs */}
      <div className="mt-24">
        <SectionHeading
          kicker="Quick Help"
          title="Frequently Asked"
          highlight="Questions"
        />
        <div className="mt-12">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </div>
  );
}
