import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const fullAccessibleTitle = highlight ? `${title} ${highlight}` : title;

  return (
    <ScrollReveal className={`max-w-3xl ${alignClasses} ${className}`}>
      {kicker && (
        <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-secondary)]" aria-hidden="true" />
          {kicker}
        </span>
      )}
      <h2
        className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white"
        aria-label={fullAccessibleTitle}
      >
        <span>{title}</span>
        {highlight && (
          <>
            {" "}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base sm:leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
