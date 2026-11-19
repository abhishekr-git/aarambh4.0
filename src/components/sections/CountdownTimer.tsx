"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

interface CountdownState {
  text: string;
  show: boolean;
}

function computeKolkataCountdown(startDateIso: string, endDateIso: string): CountdownState {
  try {
    const now = new Date();
    // Use Asia/Kolkata timezone explicitly
    const kolkataStr = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const kolkataNow = new Date(kolkataStr);

    const start = new Date(startDateIso);
    const end = new Date(endDateIso);

    if (kolkataNow > end) {
      return { text: "Event concluded", show: false };
    }

    if (kolkataNow >= start && kolkataNow <= end) {
      return { text: "Happening now at CEK Campus", show: true };
    }

    const diffMs = start.getTime() - kolkataNow.getTime();
    const days = Math.ceil(diffMs / 86_400_000);

    if (days <= 0) {
      return { text: "Event launches today", show: true };
    }
    if (days === 1) {
      return { text: "Event launches tomorrow", show: true };
    }

    return { text: `Event launches in ${days} days`, show: true };
  } catch {
    return { text: "January 15–16, 2027", show: true };
  }
}

export function CountdownTimer() {
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    computeKolkataCountdown(SITE_CONFIG.startDateIso, SITE_CONFIG.endDateIso)
  );

  useEffect(() => {
    // Update every hour rather than every second to eliminate CPU drain and screen-reader chatter
    const interval = window.setInterval(() => {
      setCountdown(computeKolkataCountdown(SITE_CONFIG.startDateIso, SITE_CONFIG.endDateIso));
    }, 3_600_000);

    return () => window.clearInterval(interval);
  }, []);

  if (!countdown.show) return null;

  return (
    <div
      role="status"
      aria-label="Event timeline"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80 px-3.5 py-1 text-xs font-semibold text-[var(--brand-gold)]"
    >
      <Clock className="h-3.5 w-3.5 text-[var(--brand-primary)]" aria-hidden="true" />
      <span>{countdown.text}</span>
    </div>
  );
}
