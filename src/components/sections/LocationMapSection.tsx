"use client";

import { useState } from "react";
import { Bus, ExternalLink, MapPin, Train } from "lucide-react";
import { SITE_CONFIG, TRAVEL_ROUTES } from "@/data/site";

export function LocationMapSection() {
  const [mode, setMode] = useState<"bus" | "train">("bus");

  return (
    <div id="location" className="space-y-6 sm:space-y-8">
      {/* Map + Campus Address Block */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Address & Direct Actions */}
        <div className="glass-card flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-5">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-secondary)]">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Venue &amp; Campus
            </span>
            <h3 className="mt-3.5 text-xl font-bold text-white sm:text-2xl">
              {SITE_CONFIG.collegeName}
            </h3>
            <div className="mt-2.5 space-y-0.5 text-sm leading-relaxed text-[var(--text-secondary)]">
              {SITE_CONFIG.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
              Situated 2 km from Karunagappally Railway Station (KPY) and easily accessible from NH-66 via auto-rickshaw or bus.
            </p>
          </div>

          <div className="mt-6 pt-2">
            <a
              href={SITE_CONFIG.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-xl lg:col-span-7">
          <iframe
            src={SITE_CONFIG.mapsEmbedUrl}
            title={`${SITE_CONFIG.collegeName} Location Map`}
            className="h-[300px] w-full sm:h-[380px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Travel Selector & Last-Mile Navigation Guide */}
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">Campus Travel Guide</h3>
            <p className="text-xs text-[var(--text-secondary)] sm:text-sm">
              Last-mile transit options to reach College of Engineering Karunagappally.
            </p>
          </div>
          <div role="tablist" aria-label="Transit modes" className="flex gap-2">
            <button
              type="button"
              role="tab"
              aria-selected={mode === "bus"}
              onClick={() => setMode("bus")}
              className={`inline-flex min-h-[40px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                mode === "bus"
                  ? "btn-brand text-white"
                  : "border border-[var(--border-subtle)] bg-white/5 text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <Bus className="h-4 w-4" aria-hidden="true" />
              <span>By Bus</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "train"}
              onClick={() => setMode("train")}
              className={`inline-flex min-h-[40px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                mode === "train"
                  ? "btn-brand text-white"
                  : "border border-[var(--border-subtle)] bg-white/5 text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              <Train className="h-4 w-4" aria-hidden="true" />
              <span>By Train</span>
            </button>
          </div>
        </div>

        {mode === "bus" ? (
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {TRAVEL_ROUTES.bus.map((group) => (
              <div
                key={group.origin}
                className="rounded-xl border border-[var(--border-subtle)] bg-black/25 p-4 sm:p-5"
              >
                <h4 className="font-[family-name:var(--font-outfit)] text-base font-bold text-white">
                  {group.origin}
                </h4>
                <div className="mt-3 space-y-3">
                  {group.options.map((opt, idx) => (
                    <div
                      key={opt.title}
                      className="rounded-lg border-l-2 border-[var(--brand-primary)] bg-white/[0.02] p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white sm:text-sm">
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
                          <li key={step}>• {step}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-xl border border-[var(--border-subtle)] bg-black/25 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-[family-name:var(--font-outfit)] text-base font-bold text-white">
                {TRAVEL_ROUTES.train.stationName}
              </h4>
              <span className="rounded-full bg-[var(--brand-secondary)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--brand-gold)]">
                {TRAVEL_ROUTES.train.distance}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {TRAVEL_ROUTES.train.options.map((opt, idx) => (
                <div
                  key={opt.title}
                  className="rounded-lg border-l-2 border-[var(--brand-secondary)] bg-white/[0.02] p-3"
                >
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-white sm:text-sm">
                      {idx + 1}. {opt.title}
                    </p>
                    {opt.badge && (
                      <span className="rounded-full bg-[var(--brand-secondary)]/15 px-2 py-0.5 text-[10px] font-bold text-[var(--brand-secondary)]">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-[var(--text-secondary)]">
                    {opt.steps.map((step) => (
                      <li key={step}>• {step}</li>
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
