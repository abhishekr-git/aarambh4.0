"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4 pt-24">
      <div className="glass-card max-w-md rounded-2xl p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-crimson)]/20 text-[#ff5c70]">
          <AlertTriangle className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          An unexpected error occurred while rendering this page. You can retry or return to the
          home page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="btn-brand inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="btn-outline-glass inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-bold"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
