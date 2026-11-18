"use client";

import { useState } from "react";
import { Bus, ExternalLink, MapPin, Train } from "lucide-react";
import { SITE_CONFIG, TRAVEL_ROUTES } from "@/data/site";

export function LocationMapSection() {
  const [mode, setMode] = useState<"bus" | "train">("bus");

  return (
    <div className="space-y-8">
      {/* Map + Campus Address */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="glass-card flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary)]/12 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
              <MapPin className="h-3.5 w-3.5" />
              Campus Venue
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white">{SITE_CONFIG.collegeName}</h3>
            <div className="mt-3 space-y-1 text-sm text-[var(--text-secondary)]">
              {SITE_CONFIG.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
              Conveniently located near Karunagappally Railway Station (KPY, ~2 km) and NH-66, with
              frequent auto-rickshaws and local bus connectivity.
            </p>
          </div>

          <a
            href={SITE_CONFIG.mapsQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-2xl lg:col-span-7">
          <iframe
            src={SITE_CONFIG.mapsEmbedUrl}
            title="College of Engineering Karunagappally Location Map"
            className="h-[340px] w-full sm:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Interactive Bus / Train Travel Guide */}
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Campus Travel Guide</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              How to reach College of Engineering Karunagappally on Jan 16–17, 2027.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode("bus")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all ${
                mode === "bus"
                  ? "btn-brand text-white"
                  : "border border-[var(--border-subtle)] bg-white/5 text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <Bus className="h-4 w-4" />
              <span>By Bus</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("train")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all ${
                mode === "train"
                  ? "btn-brand text-white"
                  : "border border-[var(--border-subtle)] bg-white/5 text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <Train className="h-4 w-4" />
              <span>By Train</span>
            </button>
          </div>
        </div>

        {mode === "bus" ? (
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {TRAVEL_ROUTES.bus.map((group) => (
              <div
                key={group.origin}
                className="rounded-xl border border-[var(--border-subtle)] bg-black/30 p-5"
              >
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold gradient-text">
                  {group.origin}
                </h4>
                <div className="mt-4 space-y-3">
                  {group.options.map((opt, idx) => (
                    <div
                      key={opt.title}
                      className="rounded-lg border-l-2 border-[var(--brand-primary)] bg-white/[0.02] p-3.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">
                          {idx + 1}. {opt.title}
                        </span>
                        {opt.badge && (
                          <span className="rounded-full bg-[var(--brand-secondary)]/15 px-2 py-0.5 text-[10px] font-bold text-[var(--brand-secondary)]">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <ul className="mt-1.5 space-y-1 text-xs text-[var(--text-secondary)]">
                        {opt.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-black/30 p-5">
            <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold gradient-text">
              {TRAVEL_ROUTES.train.stationName}
            </h4>
            <p className="mt-1 text-xs font-semibold text-[var(--brand-gold)]">
              {TRAVEL_ROUTES.train.distance}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {TRAVEL_ROUTES.train.options.map((opt, idx) => (
                <div
                  key={opt.title}
                  className="rounded-lg border-l-2 border-[var(--brand-secondary)] bg-white/[0.02] p-3.5"
                >
                  <p className="text-sm font-bold text-white">
                    {idx + 1}. {opt.title}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs text-[var(--text-secondary)]">
                    {opt.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
