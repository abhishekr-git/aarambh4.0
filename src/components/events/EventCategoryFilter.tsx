"use client";

import type { EventCategory, EventCategoryId } from "@/types";

interface EventCategoryFilterProps {
  categories: EventCategory[];
  activeCategory: EventCategoryId;
  onChange: (category: EventCategoryId) => void;
  counts?: Record<EventCategoryId, number>;
}

export function EventCategoryFilter({
  categories,
  activeCategory,
  onChange,
  counts,
}: EventCategoryFilterProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % categories.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    }
    if (nextIndex >= 0) {
      onChange(categories[nextIndex].id);
      const nextBtn = document.getElementById(`cat-tab-${categories[nextIndex].id}`);
      nextBtn?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Event categories"
      className="no-scrollbar -mx-4 flex flex-nowrap items-center gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
    >
      {categories.map((cat, idx) => {
        const active = cat.id === activeCategory;
        return (
          <button
            key={cat.id}
            id={`cat-tab-${cat.id}`}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(cat.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all sm:px-5 sm:py-2.5 ${
              active
                ? "btn-brand text-white"
                : "border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-white"
            }`}
          >
            <span>{cat.label}</span>
            {counts && typeof counts[cat.id] === "number" && (
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] ${
                  active ? "bg-black/25 text-white" : "bg-white/5 text-[var(--text-muted)]"
                }`}
              >
                {counts[cat.id]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
