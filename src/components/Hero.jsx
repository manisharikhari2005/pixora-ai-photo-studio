"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-24 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* LEFT */}
          <div className="relative z-10">
            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Turn ordinary photos
              <span className="block italic text-[var(--accent)]">
                into something better.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)] md:text-base">
              Remove backgrounds, erase unwanted objects, enhance details,
              restore old memories, or give your photos a completely new style —
              all from one simple creative studio.
            </p>

            {/* Small line */}
            <div className="mt-6 flex items-center gap-2.5 text-[11px] text-[var(--muted)]">
              <div className="flex -space-x-1.5">
                <div className="avatar">P</div>
                <div className="avatar">X</div>
                <div className="avatar">A</div>
              </div>

              <span>One studio. Multiple ways to transform your photos.</span>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
    relative
    min-h-[290px]
    sm:min-h-[360px]
    md:min-h-[440px]
  "
          >
            {/* Glow */}
            <div
              className="
      absolute
      -right-4
      top-4
      h-32
      w-32
      rounded-full
      bg-[var(--accent-soft)]
      opacity-50
      blur-3xl
      sm:-right-8
      sm:top-6
      sm:h-48
      sm:w-48
    "
            />

            {/* MAIN SCREENSHOT */}
            <div
              className="
  absolute
  top-0
  left-1/2
  z-20
  w-[78%]
  -translate-x-1/2
  overflow-hidden
  rounded-xl
  border border-[var(--border)]
  bg-[var(--surface)]
  shadow-xl
  transition-transform
  duration-500
  hover:-translate-y-1
  sm:left-auto
  sm:right-0
  sm:translate-x-0
  sm:w-[64%]
  sm:rounded-[1.25rem]

    "
            >
              <div className="border-b border-[var(--border)] px-2.5 py-2 sm:px-5 sm:py-2.5 ">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[7px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[8px]">
                      Pixora
                    </p>

                    <p className="mt-0.5 text-[9px] font-medium text-[var(--foreground)] sm:text-[11px]">
                      AI Photo Editor
                    </p>
                  </div>

                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </div>
                </div>
              </div>

              <div className="aspect-[16/22] overflow-hidden bg-[var(--surface-elevated)] ">
                <img
                  src="/app-UI.png"
                  alt="Pixora AI photo editor"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
