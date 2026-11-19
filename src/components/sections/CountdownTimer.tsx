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
      className="w-full max-w-md"
    >
      <p className="text-left text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]/85 mb-2.5">
        Festival begins in
      </p>

      {/* Compact row of four evenly spaced columns with fine bronze dividers */}
      <div className="grid grid-cols-4 divide-x divide-[#a87442]/35 py-1">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center justify-center px-1.5 sm:px-3 text-center">
            <span
              suppressHydrationWarning
              className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl lg:text-4xl font-semibold tabular-nums text-[#faf6f0] leading-none tracking-tight"
            >
              {unit.value}
            </span>
            <span className="mt-1.5 block text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)] sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
