import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/data/gallery";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery & Archive",
  description: `Visual archive and festival photography for ${SITE_CONFIG.name} at ${SITE_CONFIG.collegeName}.`,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        kicker="Visual Archive"
        title="Festival"
        highlight="Gallery"
        subtitle="Curated moments, competition arenas, and stage highlights from Aarambh at College of Engineering Karunagappally."
      />
      <div className="mt-10 sm:mt-12">
        <GalleryGrid items={GALLERY_ITEMS} />
      </div>
    </div>
  );
}
