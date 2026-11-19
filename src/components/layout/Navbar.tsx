"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/92 shadow-2xl shadow-black/60 backdrop-blur-md"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[var(--brand-secondary)]/25 bg-[var(--brand-secondary)]/5 p-1.5 shadow-md shadow-[var(--brand-primary)]/20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={SITE_CONFIG.assets.logoMark}
                alt={`${SITE_CONFIG.name} logo`}
                width={36}
                height={36}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-outfit)] text-base font-extrabold tracking-tight text-white sm:text-lg">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                IEDC CEK • Jan 15–16
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-[var(--brand-secondary)]"
                      : "text-[var(--text-secondary)] hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-x-3 bottom-0.5 h-[2px] rounded-full"
                      style={{ background: "var(--gradient-brand)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/events"
              className="btn-brand hidden rounded-xl px-5 py-2.5 text-sm font-bold lg:inline-flex"
            >
              Explore Events
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white/5 text-white transition-colors hover:border-[var(--border-strong)] lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer + Tap-Outside Backdrop */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 -z-10 bg-black/60 lg:hidden"
                aria-hidden="true"
              />
              <motion.nav
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                aria-label="Mobile navigation"
                className="mt-2.5 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/98 p-4 shadow-2xl lg:hidden"
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
                        className={`flex min-h-[44px] items-center rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                          active
                            ? "bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]"
                            : "text-[var(--text-primary)] hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/events"
                    className="btn-brand mt-2 flex min-h-[48px] w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-bold"
                  >
                    Explore Events
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
