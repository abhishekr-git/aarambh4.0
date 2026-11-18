"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/types";

interface ImageLightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export function ImageLightbox({
  items,
  activeIndex,
  onClose,
  onSelect,
}: ImageLightboxProps) {
  const isOpen = activeIndex !== null && items[activeIndex];
  const current = isOpen ? items[activeIndex] : null;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onSelect((activeIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onSelect((activeIndex - 1 + items.length) % items.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, items.length, onClose, onSelect]);

  return (
    <AnimatePresence>
      {current && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex h-[100dvh] items-center justify-center bg-black/92 p-3 backdrop-blur-md sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const deltaX = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(deltaX) > 45) {
                if (deltaX < 0) {
                  onSelect((activeIndex + 1) % items.length);
                } else {
                  onSelect((activeIndex - 1 + items.length) % items.length);
                }
              }
            }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] shadow-2xl"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close lightbox"
              className="absolute top-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white transition-colors hover:bg-[var(--brand-primary)] sm:top-4 sm:right-4"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={() => onSelect((activeIndex - 1 + items.length) % items.length)}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white transition-colors hover:bg-[var(--brand-primary)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => onSelect((activeIndex + 1) % items.length)}
              aria-label="Next image"
              className="absolute top-1/2 right-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white transition-colors hover:bg-[var(--brand-primary)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-2 p-5 sm:flex-row sm:items-center sm:p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                  {current.category} • {current.edition}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">{current.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{current.caption}</p>
              </div>
              <span className="shrink-0 text-xs font-bold text-[var(--text-muted)]">
                {activeIndex + 1} / {items.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
