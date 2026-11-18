"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, Info } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

interface RegistrationCTAProps {
  url?: string | null;
  status?: "open" | "coming-soon" | "closed";
  label?: string;
  eventTitle?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function RegistrationCTA({
  url = SITE_CONFIG.registration.generalPassUrl,
  status = SITE_CONFIG.registration.status,
  label = "Register Now",
  eventTitle,
  size = "md",
  fullWidth = false,
}: RegistrationCTAProps) {
  const [showNotice, setShowNotice] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-4 text-base",
  }[size];

  if (status === "open" && url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-brand inline-flex items-center justify-center gap-2 rounded-xl font-bold ${sizeClasses} ${fullWidth ? "w-full" : ""}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <div className={fullWidth ? "w-full" : "inline-block"}>
      <button
        type="button"
        onClick={() => setShowNotice((prev) => !prev)}
        className={`btn-brand inline-flex items-center justify-center gap-2 rounded-xl font-bold ${sizeClasses} ${fullWidth ? "w-full" : ""}`}
      >
        <Clock className="h-4 w-4" />
        <span>{status === "closed" ? "Registration Closed" : "Registration Opens Soon"}</span>
      </button>

      {showNotice && (
        <div
          role="status"
          className="mt-3 flex items-start gap-2.5 rounded-xl border border-[var(--brand-primary)]/35 bg-[var(--bg-elevated)] p-3.5 text-left text-xs leading-relaxed text-[var(--text-secondary)]"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-secondary)]" />
          <p>
            {eventTitle
              ? `Official registration for ${eventTitle} is not live yet. `
              : ""}
            {SITE_CONFIG.registration.note} Check back or follow{" "}
            <span className="font-semibold text-[var(--brand-gold)]">IEDC CEK</span> for launch
            announcements.
          </p>
        </div>
      )}
    </div>
  );
}
