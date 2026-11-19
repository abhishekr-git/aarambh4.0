import Image from "next/image";
import { SITE_CONFIG } from "@/data/site";

const ITEMS = [
  "AARAMBH 4.0",
  "JAN 15–16, 2027",
  "IEDC CEK",
  "IMAGINE. INNOVATE. INTEGRATE.",
  "KARUNAGAPPALLY, KERALA",
];

export function RibbonDivider() {
  return (
    <div
      className="relative overflow-hidden border-y border-[var(--brand-primary)]/25 bg-gradient-to-r from-[var(--brand-crimson)]/12 via-[var(--brand-primary)]/14 to-[var(--brand-secondary)]/12 py-3.5"
      aria-hidden="true"
    >
      <div className="ribbon-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-7 pr-7">
            {ITEMS.map((item, idx) => (
              <span
                key={`${dup}-${idx}`}
                className="inline-flex items-center gap-3 font-[family-name:var(--font-outfit)] text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--brand-gold)] sm:text-sm"
              >
                {idx === 0 && (
                  <Image
                    src={SITE_CONFIG.assets.logoMark}
                    alt=""
                    width={18}
                    height={18}
                    className="h-4 w-4 object-contain"
                  />
                )}
                <span>{item}</span>
                <span className="text-[var(--brand-primary)]">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
