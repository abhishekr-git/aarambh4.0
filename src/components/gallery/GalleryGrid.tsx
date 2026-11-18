"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { GalleryItem } from "@/types";
import { ImageLightbox } from "@/components/gallery/ImageLightbox";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
            className="glass-card group relative overflow-hidden rounded-2xl text-left"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-[var(--text-secondary)]">
                  {item.caption}
                </p>
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
