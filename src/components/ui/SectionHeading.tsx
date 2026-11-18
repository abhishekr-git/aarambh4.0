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

  return (
    <ScrollReveal className={`max-w-3xl ${alignClasses} ${className}`}>
      {kicker && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary)]/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-secondary)]" />
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
