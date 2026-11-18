import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/data/gallery";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Visual highlights, stage moments, and archives from ${SITE_CONFIG.name} and previous editions at ${SITE_CONFIG.collegeName}.`,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Visual Archives"
        title="Aarambh"
        highlight="Gallery"
        subtitle="Select any card to inspect full-screen with keyboard navigation. Official Aarambh 4.0 posters and campus photography will be added here."
      />
      <div className="mt-14">
        <GalleryGrid items={GALLERY_ITEMS} />
      </div>
    </div>
  );
}
