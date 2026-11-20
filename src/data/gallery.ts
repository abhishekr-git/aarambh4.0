import type { GalleryItem } from "@/types";

/**
 * Official Aarambh 4.0 Media & Visual Archive.
 *
 * Photography and posters will be published here during and after the festival.
 * When items are added, the gallery page renders an accessible lightbox grid
 * with full keyboard navigation (Esc, Arrow keys).
 */
export const GALLERY_ITEMS: GalleryItem[] = [];

export function getPublishedGalleryItems(): GalleryItem[] {
  return GALLERY_ITEMS.filter((item) => item.published !== false);
}

export const PUBLISHED_GALLERY_ITEMS = getPublishedGalleryItems();
export const HAS_GALLERY_ITEMS = PUBLISHED_GALLERY_ITEMS.length > 0;
