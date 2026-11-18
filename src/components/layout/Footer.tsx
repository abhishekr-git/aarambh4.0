import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[#050303] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--brand-secondary)]/25 bg-[var(--brand-secondary)]/5 p-1.5">
                <Image
                  src={SITE_CONFIG.assets.logoMark}
                  alt={SITE_CONFIG.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-outfit)] text-xl font-extrabold tracking-tight text-white">
                  {SITE_CONFIG.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                  {SITE_CONFIG.datesDisplay}
                </p>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
              {SITE_CONFIG.heroSubtitle}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--brand-secondary)]"
                >
                  <span>{social.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-secondary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizer & Campus */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
              Organised By
            </h3>
            <p className="mt-4 text-sm font-semibold text-white">
              {SITE_CONFIG.organizer}
            </p>
            <div className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                <span>{SITE_CONFIG.addressLines.join(", ")}</span>
              </p>
              <a
                href={`mailto:${SITE_CONFIG.primaryEmail}`}
                className="flex items-center gap-2 hover:text-[var(--brand-secondary)]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                <span>{SITE_CONFIG.primaryEmail}</span>
              </a>
              <a
                href={SITE_CONFIG.iedcWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold text-[var(--brand-gold)] hover:text-[var(--brand-secondary)]"
              >
                <span>IEDC CEKNPY Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Institutional Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 border-t border-[var(--border-subtle)] py-8">
          <Image
            src={SITE_CONFIG.assets.iedcKsumLogo}
            alt="IEDC Kerala Startup Mission Logo"
            width={180}
            height={64}
            className="h-12 w-auto object-contain opacity-85 transition-opacity hover:opacity-100 sm:h-14"
          />
          <Image
            src={SITE_CONFIG.assets.iedcLogo}
            alt="IEDC College of Engineering Karunagappally Logo"
            width={160}
            height={64}
            className="h-12 w-auto object-contain opacity-85 transition-opacity hover:opacity-100 sm:h-14"
          />
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>
            &copy; 2027 {SITE_CONFIG.name} • IEDC {SITE_CONFIG.collegeName}. All rights reserved.
          </p>
          <p>Built by IEDC CEKNPY Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
