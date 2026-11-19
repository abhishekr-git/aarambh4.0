"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/site";

// Module-scoped flag ensures the preloader runs only on initial app load,
// never during client-side route navigation in Next.js App Router.
let hasRevealedOnLoad = false;

const TOTAL_SEQUENCE_MS = 2300;

export function Preloader() {
  const [active, setActive] = useState(() => !hasRevealedOnLoad);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (hasRevealedOnLoad) {
      setActive(false);
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setReducedMotion(true);
      hasRevealedOnLoad = true;
      setActive(false);
      return;
    }

    // Lock background scrolling (including iOS Safari rubber-band touch) while active
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    let done = false;
    let minElapsed = false;
    let pageReady = document.readyState === "interactive" || document.readyState === "complete";

    const finish = () => {
      if (done) return;
      done = true;
      hasRevealedOnLoad = true;
      setActive(false);
    };

    const tryFinish = () => {
      if (minElapsed && pageReady) {
        finish();
      }
    };

    const onReady = () => {
      pageReady = true;
      tryFinish();
    };

    if (!pageReady) {
      window.addEventListener("DOMContentLoaded", onReady, { once: true });
      window.addEventListener("load", onReady, { once: true });
    }

    const sequenceTimer = window.setTimeout(() => {
      minElapsed = true;
      tryFinish();
    }, TOTAL_SEQUENCE_MS);

    const hardCapTimer = window.setTimeout(finish, TOTAL_SEQUENCE_MS + 350);

    return () => {
      window.clearTimeout(sequenceTimer);
      window.clearTimeout(hardCapTimer);
      window.removeEventListener("DOMContentLoaded", onReady);
      window.removeEventListener("load", onReady);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);

  useEffect(() => {
    if (!active) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [active]);

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="aarambh-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
          }}
          onClick={() => {
            hasRevealedOnLoad = true;
            setActive(false);
          }}
          className="fixed inset-0 z-[100] flex h-[100dvh] w-full cursor-pointer touch-none items-center justify-center overflow-hidden overscroll-none bg-[#030303] px-6 pb-[env(safe-area-inset-bottom)] select-none"
          role="presentation"
          aria-hidden="true"
        >
          {/* Controlled Ambient Neon-Green Electrical Field (GPU-composited opacity + scale only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{
              opacity: [0, 0.06, 0.52, 0.12, 0.62, 0.26],
              scale: [0.88, 0.94, 1.06, 0.97, 1.08, 1],
            }}
            transition={{
              duration: 2.2,
              times: [0, 0.26, 0.37, 0.5, 0.61, 0.92],
              ease: "easeOut",
            }}
            className="pointer-events-none absolute h-[76vw] max-h-[540px] w-[76vw] max-w-[540px] rounded-full will-change-transform"
            style={{
              background:
                "radial-gradient(circle, rgba(74, 222, 128, 0.3) 0%, rgba(34, 197, 94, 0.12) 38%, rgba(16, 185, 129, 0.03) 60%, transparent 74%)",
            }}
          />

          {/* Razor-Thin Optical Horizontal Discharge Flare (Syncs strictly with Flash #1 & Flash #2) */}
          <motion.svg
            viewBox="0 0 800 40"
            preserveAspectRatio="none"
            className="pointer-events-none absolute w-[90vw] max-w-[660px] will-change-transform"
            initial={{ opacity: 0, scaleX: 0.2 }}
            animate={{
              opacity: [0, 0, 0.75, 0, 0, 0.88, 0],
              scaleX: [0.2, 0.35, 1, 0.5, 0.4, 1.05, 0.3],
            }}
            transition={{
              duration: 2.2,
              times: [0, 0.31, 0.37, 0.45, 0.55, 0.61, 0.72],
              ease: "easeOut",
            }}
          >
            <defs>
              <linearGradient id="electric-anamorphic" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                <stop offset="28%" stopColor="#4ade80" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#ecfdf5" stopOpacity="1" />
                <stop offset="72%" stopColor="#4ade80" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="19.25" width="800" height="1.5" fill="url(#electric-anamorphic)" />
          </motion.svg>

          {/* Centerpiece: Official Aarambh 4.0 Logo (Exact 731:635 Proportions, Responsive Mobile Sizing) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              scale: 1.03,
              opacity: 0,
              transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
            }}
            className="relative aspect-[731/635] w-[min(64vw,240px)] will-change-transform sm:w-[300px] md:w-[360px]"
          >
            {/* Settled Subtle Neon-Green Rim Aura (Zero filter pass, 60fps on mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.05, 0.72, 0.16, 0.85, 0.36],
              }}
              transition={{
                duration: 2.2,
                times: [0, 0.28, 0.37, 0.5, 0.61, 0.92],
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -inset-5 rounded-full sm:-inset-7"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(74, 222, 128, 0.28) 0%, rgba(34, 197, 94, 0.1) 46%, transparent 72%)",
              }}
            />

            {/* Layer 1: Official Logo Base — Compositor-Only Opacity Sequence (Zero Mobile GPU Filter Jank) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 1, 0.38, 1, 1],
              }}
              transition={{
                duration: 2.2,
                times: [0, 0.27, 0.37, 0.5, 0.61, 0.88],
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-full w-full will-change-[opacity]"
            >
              <Image
                src={SITE_CONFIG.assets.logoFull}
                alt={SITE_CONFIG.name}
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 64vw, (max-width: 768px) 300px, 360px"
                className="object-contain"
              />
            </motion.div>

            {/* Layer 2: Precision-Masked Electric Energy Discharge Travelling Strictly Across the Logo */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              style={{
                maskImage: `url('${SITE_CONFIG.assets.logoFull}')`,
                WebkitMaskImage: `url('${SITE_CONFIG.assets.logoFull}')`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            >
              {/* Discharge Pass #1 */}
              <motion.div
                initial={{ x: "-135%", opacity: 0 }}
                animate={{
                  x: ["-135%", "-135%", "135%", "135%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  times: [0, 0.27, 0.41, 0.44],
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -inset-y-10 w-[58%] -skew-x-[24deg] will-change-transform"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.25) 25%, rgba(74,222,128,0.88) 47%, rgba(236,253,245,0.98) 50%, rgba(74,222,128,0.82) 53%, rgba(34,197,94,0.22) 75%, transparent 100%)",
                }}
              />

              {/* Discharge Pass #2 */}
              <motion.div
                initial={{ x: "135%", opacity: 0 }}
                animate={{
                  x: ["135%", "135%", "-135%", "-135%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  times: [0, 0.51, 0.65, 0.68],
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -inset-y-10 w-[58%] skew-x-[22deg] will-change-transform"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.25) 24%, rgba(74,222,128,0.92) 47%, rgba(236,253,245,1) 50%, rgba(74,222,128,0.86) 53%, rgba(34,197,94,0.22) 76%, transparent 100%)",
                }}
              />

              {/* Controlled Two-Flash Electric Specular Wash (Exact 2 Flashes) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0, 0.74, 0.05, 0.84, 0.09],
                }}
                transition={{
                  duration: 2.2,
                  times: [0, 0.3, 0.37, 0.5, 0.61, 0.88],
                  ease: "easeOut",
                }}
                className="absolute inset-0 mix-blend-screen will-change-[opacity]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 44%, rgba(236, 253, 245, 0.92) 0%, rgba(74, 222, 128, 0.58) 48%, rgba(22, 163, 74, 0.22) 100%)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
