
"use client";

import {
  Crop,
  RotateCw,
  Archive,
  ArrowLeftRight,
  IdCard,
  CircleUserRound,
  MessageCircle,
  Grid2X2,
} from "lucide-react";

const tools = [
  {
    icon: Crop,
    title: "Crop",
    text: "Crop your image freely or choose ready-made aspect ratios for any platform.",
    effect: "crop",
  },
  {
    icon: RotateCw,
    title: "Rotate & Flip",
    text: "Rotate your image or flip it horizontally and vertically without losing quality.",
    effect: "rotate",
  },
  {
    icon: Archive,
    title: "Compressor",
    text: "Reduce image file size while keeping the quality you actually need.",
    effect: "compress",
  },
  {
    icon: ArrowLeftRight,
    title: "JPG ↔ PNG",
    text: "Convert images between JPG, PNG and WEBP directly on your device.",
    effect: "convert",
  },
  {
    icon: IdCard,
    title: "Passport ID",
    text: "Create properly sized biometric photos for passports, visas and IDs.",
    effect: "passport",
  },
  {
    icon: CircleUserRound,
    title: "PFP Maker",
    text: "Turn your photo into a clean profile picture with custom avatar styles.",
    effect: "profile",
  },
  {
    icon: MessageCircle,
    title: "Meme Maker",
    text: "Add captions and turn any image into a share-ready meme.",
    effect: "meme",
  },
  {
    icon: Grid2X2,
    title: "Collage",
    text: "Combine multiple photos into clean grids, splits and story layouts.",
    effect: "collage",
  },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="px-5 py-16 md:py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto max-w-6xl">
    
        {/* Heading */}
        <div className="flex flex-col gap-5">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
              SIMPLE TOOLS. REAL CONTROL.
            </p>

            <h2 className="mt-3 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Everything you need
              <br />
              <span className="italic text-[var(--accent)]">
                before you create.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[var(--muted)] md:text-[15px]">
            Quick editing tools for the small things that matter. Crop, convert,
            compress, create and prepare your images without leaving Pixora.
          </p>
        </div>
      
        {/* Tools Grid */}
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Subtle hover glow */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: "var(--accent)" }}
                />

                <div className="relative flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className={`
                        transition-transform duration-500
                        ${
                          tool.effect === "rotate"
                            ? "group-hover:rotate-180"
                            : ""
                        }
                        ${
                          tool.effect === "compress"
                            ? "group-hover:scale-75"
                            : ""
                        }
                        ${
                          tool.effect === "convert"
                            ? "group-hover:translate-x-1"
                            : ""
                        }
                        ${
                          tool.effect === "passport"
                            ? "group-hover:scale-90"
                            : ""
                        }
                        ${
                          tool.effect === "profile"
                            ? "group-hover:scale-110"
                            : ""
                        }
                        ${tool.effect === "meme" ? "group-hover:-rotate-6" : ""}
                        ${
                          tool.effect === "collage"
                            ? "group-hover:rotate-6"
                            : ""
                        }
                        ${tool.effect === "crop" ? "group-hover:scale-90" : ""}
                      `}
                    />
                  </div>

                  {/* Number */}
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: "var(--muted-dark)" }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="relative mt-5 text-[15px] font-semibold tracking-tight"
                  style={{ color: "var(--foreground)" }}
                >
                  {tool.title}
                </h3>

                <p
                  className="relative mt-1.5 text-xs leading-5"
                  style={{ color: "var(--muted)" }}
                >
                  {tool.text}
                </p>

                {/* Bottom interaction */}
                <div
                  className="relative mt-5 flex items-center gap-1.5 text-[10px] font-medium opacity-60 transition-all duration-300 group-hover:gap-2.5 group-hover:opacity-100"
                  style={{ color: "var(--accent)" }}
                >
                  <span>Open tool</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

