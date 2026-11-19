import type { GalleryItem } from "@/types";

/**
 * Official Aarambh 4.0 Media & Visual Archive.
 *
 * Photography and posters will be published here during and after the festival.
 * When items are added, the gallery page renders an accessible lightbox grid
 * with full keyboard navigation (Esc, Arrow keys).
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-prayatna-krishisense",
    title: "KrishiSense IoT Soil Telemetry Node",
    edition: "Aarambh 3.0",
    category: "Hackathon",
    caption:
      "Engineered in 24 hours at the Prayatna Hackathon by CEK student makers: a solar-assisted LoRa soil telemetry and automated micro-irrigation station for local farmers.",
    image: "/images/placeholders/prayatna-prototype.svg",
    aspect: "wide",
    published: true,
  },
];

export function getPublishedGalleryItems(): GalleryItem[] {
  return GALLERY_ITEMS.filter((item) => item.published !== false);
}

export const PUBLISHED_GALLERY_ITEMS = getPublishedGalleryItems();
export const HAS_GALLERY_ITEMS = PUBLISHED_GALLERY_ITEMS.length > 0;
