import Image from "next/image";
import { SITE_CONFIG } from "@/data/site";

const TICKER_ITEMS = [
  { text: "AARAMBH 4.0", hasLogo: true },
  { text: SITE_CONFIG.datesDisplay.toUpperCase(), hasLogo: false },
  { text: "IEDC CEK", hasLogo: false },
  { text: SITE_CONFIG.collegeName.toUpperCase(), hasLogo: false },
];

export function RibbonDivider() {
  return (
    <div
      className="relative w-full overflow-hidden border-y border-[var(--brand-crimson)]/30 bg-gradient-to-r from-[#170507] via-[#24080c] to-[#170507] py-2.5 sm:py-3 select-none"
      aria-hidden="true"
    >
      <div className="flex flex-row flex-nowrap w-max items-center ribbon-track">
        {/* Render 2 identical groups (each with 2 full item repetitions) for an unbroken -50% loop */}
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 flex-row flex-nowrap items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
          >
            {[0, 1].map((cycle) => (
              <div
                key={cycle}
                className="flex shrink-0 flex-row flex-nowrap items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
              >
                {TICKER_ITEMS.map((item, idx) => (
                  <span
                    key={`${groupIndex}-${cycle}-${idx}`}
                    className="inline-flex shrink-0 items-center gap-2.5 font-[family-name:var(--font-outfit)] text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--brand-gold)] sm:text-sm sm:gap-3"
                  >
                    {item.hasLogo && (
                      <Image
                        src={SITE_CONFIG.assets.logoMark}
                        alt=""
                        width={18}
                        height={18}
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain"
                      />
                    )}
                    <span>{item.text}</span>
                    <span className="text-[var(--brand-primary)] text-sm sm:text-base font-black">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
