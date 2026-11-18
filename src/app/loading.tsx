export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 pt-24">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--brand-primary)]/30 border-t-[var(--brand-secondary)]" />
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--text-secondary)]">
        Loading Aarambh 4.0
      </p>
    </div>
  );
}
