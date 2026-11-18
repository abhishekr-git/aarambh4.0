import { Mail, Phone } from "lucide-react";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="glass-card flex h-full flex-col rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-[family-name:var(--font-outfit)] text-lg font-extrabold text-white shadow-lg shadow-[var(--brand-primary)]/20"
          style={{ background: "var(--gradient-brand)" }}
        >
          {member.initials}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{member.name}</h3>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
            {member.role}
          </p>
        </div>
      </div>

      {member.department && (
        <p className="mt-4 text-sm text-[var(--text-secondary)]">{member.department}</p>
      )}

      {(member.phone || member.email) && (
        <div className="mt-4 space-y-1.5 border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-secondary)]">
          {member.phone && (
            <a
              href={`tel:${member.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-[var(--brand-secondary)]"
            >
              <Phone className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
              <span>{member.phone}</span>
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 hover:text-[var(--brand-secondary)]"
            >
              <Mail className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
              <span>{member.email}</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
