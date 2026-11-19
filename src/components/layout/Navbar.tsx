"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/site";
import { HAS_PUBLISHED_EVENTS } from "@/data/events";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const headerCta = HAS_PUBLISHED_EVENTS
    ? { href: "/events", label: "Explore Events" }
    : { href: "/#location", label: "Plan Visit" };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3.5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-3.5 py-2 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/95 shadow-xl shadow-black/50 backdrop-blur-md"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)]"
            aria-label={`${SITE_CONFIG.name} Home`}
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[var(--brand-secondary)]/20 bg-[var(--brand-secondary)]/5 p-1 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
              <Image
                src={SITE_CONFIG.assets.logoMark}
                alt=""
                width={36}
                height={36}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-outfit)] text-sm font-extrabold tracking-tight text-white sm:text-base">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                IEDC CEK • {SITE_CONFIG.datesShort}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--brand-secondary)]"
                      : "text-[var(--text-secondary)] hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-x-2.5 bottom-0 h-[2px] rounded-full"
                      style={{ background: "var(--gradient-brand)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <Link
              href={headerCta.href}
              className="btn-brand hidden rounded-xl px-4 py-2 text-xs font-bold sm:text-sm lg:inline-flex"
            >
              {headerCta.label}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white/5 text-white transition-colors hover:border-[var(--border-strong)] lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-sm lg:hidden"
                aria-hidden="true"
              />
              <motion.nav
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                aria-label="Mobile navigation"
                className="mt-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/98 p-3 shadow-2xl lg:hidden"
              >
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => {
                    const active =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname === link.href || pathname.startsWith(`${link.href}/`);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex min-h-[44px] items-center rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
                          active
                            ? "bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)] font-bold"
                            : "text-[var(--text-primary)] hover:bg-white/5"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href={headerCta.href}
                    onClick={() => setMobileOpen(false)}
                    className="btn-brand mt-2 flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold"
                  >
                    {headerCta.label}
                  </Link>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
