"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/data/site";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function computeTimeLeft(targetIso: string): TimeLeft {
  const targetMs = new Date(targetIso).getTime();
  const nowMs = Date.now();
  const diff = Math.max(0, targetMs - nowMs);

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

export function CountdownTimer({ targetIso = SITE_CONFIG.startDateIso }: { targetIso?: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft(targetIso));

  useEffect(() => {
    // Initial calculation
    setTimeLeft(computeTimeLeft(targetIso));

    // Update every second using configured festival start in Asia/Kolkata
    const timer = window.setInterval(() => {
      setTimeLeft(computeTimeLeft(targetIso));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetIso]);

  const units = [
    { label: "Days", value: String(timeLeft.days).padStart(2, "0") },
    { label: "Hours", value: String(timeLeft.hours).padStart(2, "0") },
    { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0") },
    { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0") },
  ];

  return (
    <div
      role="timer"
      aria-label={`Countdown to ${SITE_CONFIG.name}`}
      className="glass-card rounded-2xl p-2.5 sm:p-4"
    >
      <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand-gold)] sm:mb-2.5 sm:text-xs">
        Event Launches In
      </p>
      {/* 2x2 layout on ultra-narrow screens (<340px), 4 in one row on standard phones (>=340px) */}
      <div className="grid grid-cols-2 min-[340px]:grid-cols-4 gap-1.5 sm:gap-3">
        {units.map((unit) => (
          <div key={unit.label} className="text-center">
            <div
              suppressHydrationWarning
              className="flex items-center justify-center rounded-xl py-2 font-[family-name:var(--font-outfit)] text-base font-extrabold tabular-nums text-white shadow-lg shadow-[var(--brand-primary)]/20 min-[340px]:text-lg sm:py-3 sm:text-2xl lg:text-3xl"
              style={{ background: "var(--gradient-brand)" }}
            >
              {unit.value}
            </div>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-secondary)] sm:mt-1.5 sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
