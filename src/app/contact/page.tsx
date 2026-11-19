import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";
import { TEAM_MEMBERS } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LocationMapSection } from "@/components/sections/LocationMapSection";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: `Contact the ${SITE_CONFIG.name} organizing committee and view directions to ${SITE_CONFIG.collegeName}.`,
};

export default function ContactPage() {
  const facultyContacts = TEAM_MEMBERS.filter((m) => m.group === "faculty");

  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        kicker="Reach Out"
        title="Contact &amp;"
        highlight="Directions"
        subtitle="Have questions regarding event registrations, stall bookings, travel routes, or sponsorships? Reach the IEDC CEK organizing team."
      />

      {/* 4 Focused Contact Cards */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Campus Address Card */}
        <ScrollReveal>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6">
            <div>
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-white">Campus Venue</h3>
              <div className="mt-2 space-y-0.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                {SITE_CONFIG.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <a
              href={SITE_CONFIG.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-[var(--brand-gold)] hover:underline"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </ScrollReveal>

        {/* Faculty Nodal Desk Card */}
        <ScrollReveal delay={0.05}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6">
            <div>
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-white">Faculty Nodal Desk</h3>
              <div className="mt-2 space-y-2 text-xs text-[var(--text-secondary)]">
                {facultyContacts.map((member) => (
                  <div key={member.id}>
                    <p className="font-semibold text-white">{member.name}</p>
                    <p className="text-[11px] text-[var(--text-muted)]">{member.role}</p>
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s+/g, "")}`}
                        className="font-medium text-[var(--brand-secondary)] hover:underline"
                      >
                        {member.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Email Enquiries Card */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6">
            <div>
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-white">Official Email</h3>
              <div className="mt-2 space-y-1.5 text-xs">
                <a
                  href={`mailto:${SITE_CONFIG.primaryEmail}`}
                  className="block break-all font-semibold text-[var(--brand-gold)] hover:underline"
                >
                  {SITE_CONFIG.primaryEmail}
                </a>
                {SITE_CONFIG.secondaryEmails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block break-all text-[var(--text-secondary)] hover:underline"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-4 text-[11px] text-[var(--text-muted)]">
              Responses typically within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        {/* Web & Social Card */}
        <ScrollReveal delay={0.15}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6">
            <div>
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-white">Online Portals</h3>
              <div className="mt-2 space-y-1.5 text-xs text-[var(--text-secondary)]">
                <a
                  href={SITE_CONFIG.iedcWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-semibold text-[var(--brand-secondary)] hover:underline"
                >
                  Official IEDC CEKNPY Site &rarr;
                </a>
                <a
                  href={SITE_CONFIG.collegeWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  ceknpy.ac.in &rarr;
                </a>
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white"
                  >
                    {s.label}: {s.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Campus Map & Interactive Travel Route Guide */}
      <div className="mt-14 sm:mt-16">
        <LocationMapSection />
      </div>
    </div>
  );
}
