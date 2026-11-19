"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, ExternalLink, Maximize2 } from "lucide-react";
import type { GalleryItem } from "@/types";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";
import { ImageLightbox } from "@/components/gallery/ImageLightbox";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const instagramLink = SOCIAL_LINKS.find((s) => s.id === "instagram");

  // Pre-announcement State (0 genuine photos in repo)
  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="glass-card rounded-3xl p-8 text-center sm:p-12">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
            <Camera className="h-6 w-6" aria-hidden="true" />
          </div>

          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Visual Archive in Preparation
          </h3>

          <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            Official high-resolution photography, competition moments, speaker sessions, and campus highlights for Aarambh 4.0 will be curated here during and following the festival on {SITE_CONFIG.datesDisplay}.
          </p>

          <p className="mt-3 text-xs text-[var(--text-muted)]">
            Follow our media desk for live campus stories and past edition recaps.
          </p>

          {instagramLink && (
            <div className="mt-6">
              <a
                href={instagramLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold sm:text-sm"
              >
                <span>Follow {instagramLink.handle}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Active Lightbox Gallery
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
            className="glass-card group relative overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-secondary)]"
            aria-label={`Enlarge photo: ${item.title}`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                  {item.category}
                </span>
                <h4 className="mt-0.5 text-base font-bold text-white">{item.title}</h4>
                {item.caption && (
                  <p className="mt-0.5 line-clamp-1 text-xs text-[var(--text-secondary)]">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <ImageLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelect={setActiveIndex}
      />
    </>
  );
}
