"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/data/site";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function computeTimeLeft(targetMs: number): TimeLeft {
  const diff = Math.max(0, targetMs - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

export function CountdownTimer({ targetIso = SITE_CONFIG.startDateIso }: { targetIso?: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const targetMs = new Date(targetIso).getTime();
    setTimeLeft(computeTimeLeft(targetMs));

    const timer = window.setInterval(() => {
      setTimeLeft(computeTimeLeft(targetMs));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetIso]);

  const units = [
    { label: "Days", value: timeLeft ? String(timeLeft.days).padStart(2, "0") : "--" },
    { label: "Hours", value: timeLeft ? String(timeLeft.hours).padStart(2, "0") : "--" },
    { label: "Minutes", value: timeLeft ? String(timeLeft.minutes).padStart(2, "0") : "--" },
    { label: "Seconds", value: timeLeft ? String(timeLeft.seconds).padStart(2, "0") : "--" },
  ];

  return (
    <div
      role="timer"
      aria-label={`Countdown to ${SITE_CONFIG.name}`}
      className="glass-card rounded-2xl p-3.5 sm:p-5"
    >
      <p className="mb-2.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-gold)] sm:mb-3 sm:text-xs">
        Event Launches In
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3.5">
        {units.map((unit) => (
          <div key={unit.label} className="text-center">
            <div
              className="flex items-center justify-center rounded-xl py-2.5 font-[family-name:var(--font-outfit)] text-xl font-extrabold tabular-nums text-white shadow-lg shadow-[var(--brand-primary)]/20 sm:py-3.5 sm:text-3xl"
              style={{ background: "var(--gradient-brand)" }}
            >
              {unit.value}
            </div>
            <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-secondary)] sm:mt-2 sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
