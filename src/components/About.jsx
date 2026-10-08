
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="about"
      className="
        border-t border-[var(--border)]
        bg-[var(--background)]
        px-5 py-9
        text-[var(--foreground)]
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* MAIN FOOTER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* BRAND */}
          <div className="max-w-[300px]">

            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  bg-[var(--accent)]
                  text-xs font-bold
                  text-[var(--background)]
                "
              >
                P
              </div>

              <span className="text-base font-semibold tracking-tight">
                Pixora
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
              An AI photo studio for removing, enhancing, restoring and
              transforming your photos in one place.
            </p>

            <Link
              href="/editor"
              className="
                mt-4 inline-flex items-center gap-1.5
                rounded-full
                bg-[var(--accent)]
                px-3.5 py-2
                text-[11px] font-medium
                text-[var(--background)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:opacity-90
              "
            >
              Open Pixora App
              <ArrowUpRight size={12} />
            </Link>

          </div>

          {/* LINKS */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-10">

            {/* PRODUCT */}
            <div className="min-w-[190px]">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                Product
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
                <Link
                  href="#showcase"
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  AI Tools
                </Link>

                <Link
                  href="#tools"
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  Tools
                </Link>

            
              </div>
            </div>

            {/* AI STUDIO */}
            <div className="min-w-[220px]">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                AI Studio
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
                <span>Remove Background</span>
                <span>Magic Eraser</span>
                <span>Photo Enhancer</span>
                <span>AI Headshots</span>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
      <div
  className="
    mt-8 flex flex-col gap-3
    border-t border-[var(--border)]
    pt-5
    text-[10px] text-[var(--muted-dark)]
    sm:flex-row sm:items-center sm:justify-between
  "
>
  <p>
    © 2026 Pixora. Made for better photos.
  </p>

  <div className="flex items-center gap-4">
    <Link
      href="/privacy"
      className="transition-colors hover:text-[var(--foreground)]"
    >
      Privacy Policy
    </Link>

    <Link
      href="/terms"
      className="transition-colors hover:text-[var(--foreground)]"
    >
      Terms & Conditions
    </Link>

    <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />

    <span className="hidden sm:block">
      AI-powered photo editing, simplified.
    </span>
  </div>
</div>

      </div>
    </footer>
  );
}
