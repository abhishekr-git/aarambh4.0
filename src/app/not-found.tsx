import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4 pt-24">
      <div className="glass-card max-w-lg rounded-2xl p-10 text-center">
        <p className="font-[family-name:var(--font-outfit)] text-6xl font-extrabold gradient-text">
          404
        </p>
        <h1 className="mt-3 text-2xl font-bold text-white">Page Not Found</h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          The page or event you are looking for does not exist or may have moved.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="btn-brand inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/events"
            className="btn-outline-glass inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </div>
  );
}
