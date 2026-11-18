"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const prefersReduced = useReducedMotion();

  return (
    <div className="mx-auto max-w-3xl space-y-3.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`glass-card overflow-hidden rounded-2xl transition-colors ${
              isOpen ? "border-[var(--border-strong)]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div>
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                  {item.category}
                </span>
                <span className="font-[family-name:var(--font-outfit)] text-base font-bold text-white sm:text-lg">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[var(--brand-secondary)] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[var(--border-subtle)] px-6 py-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
