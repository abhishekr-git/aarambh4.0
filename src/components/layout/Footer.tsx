import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[#050303] pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand-secondary)]/25 bg-[var(--brand-secondary)]/5 p-1.5 transition-transform duration-300 hover:scale-105">
                <Image
                  src={SITE_CONFIG.assets.logoMark}
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="sr-only">{SITE_CONFIG.name}</span>
                <Image
                  src="/images/aarambh-hero-title.png"
                  alt={SITE_CONFIG.name}
                  width={696}
                  height={94}
                  className="h-5 sm:h-6 w-auto object-contain object-left drop-shadow-[0_2px_12px_rgba(216,11,36,0.2)] select-none"
                />
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold)]">
                  {SITE_CONFIG.datesDisplay}
                </p>
              </div>
            </Link>
            <p className="mt-3.5 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
              {SITE_CONFIG.heroSubtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-white"
                >
                  <span>{social.label}</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
              Navigation
            </h3>
            <ul className="mt-3.5 space-y-2">
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

          {/* Organiser & Campus Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
              Host &amp; Venue
            </h3>
            <p className="mt-3.5 text-sm font-semibold text-white">
              {SITE_CONFIG.organizer}
            </p>
            <div className="mt-2.5 space-y-2 text-sm text-[var(--text-secondary)]">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                <span>{SITE_CONFIG.campusLabel}</span>
              </p>
              <a
                href={`mailto:${SITE_CONFIG.primaryEmail}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                <span className="break-all">{SITE_CONFIG.primaryEmail}</span>
              </a>
              <div className="flex flex-col gap-1 pt-1 text-xs font-semibold text-[var(--brand-gold)]">
                <a
                  href={SITE_CONFIG.collegeWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--brand-secondary)]"
                >
                  <span>CEK Official Website</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <a
                  href={SITE_CONFIG.iedcWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--brand-secondary)]"
                >
                  <span>IEDC CEKNPY Portal</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-[var(--border-subtle)] py-6 sm:gap-12">
          <Image
            src={SITE_CONFIG.assets.iedcKsumLogo}
            alt="Kerala Startup Mission IEDC"
            width={160}
            height={50}
            className="h-10 w-auto object-contain opacity-85 transition-opacity hover:opacity-100 sm:h-12"
          />
          <Image
            src={SITE_CONFIG.assets.iedcLogo}
            alt="IEDC CEKNPY"
            width={150}
            height={50}
            className="h-10 w-auto object-contain opacity-85 transition-opacity hover:opacity-100 sm:h-12"
          />
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-5 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>
            &copy; 2027 {SITE_CONFIG.name} • IEDC {SITE_CONFIG.collegeName}.
          </p>
          <p>Built by IEDC CEKNPY Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
