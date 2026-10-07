
"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Image as ImageIcon,
  UserRound,
  Palette,
  Box,
  Eraser,
  Scan,
  Aperture,
  WandSparkles,
  RotateCcw,
} from "lucide-react";

const aiTools = [
 
  {
    id: "replace-bg",
    title: "Change BG",
    fullTitle: "Background Changer",
    description:
      "Generate realistic new environments around your existing subject.",
    badge: "AI CLOUD",
    icon: ImageIcon,
    accentColor: "#6366f1",
    presetsTitle: "Scene Presets",
    presets: [
      "Studio Neon",
      "Cozy Cafe",
      "Sunset Beach",
      "Modern Loft",
      "Pastel Studio",
    ],
    image: "/effect-backgroundChange.webp",
  },
  {
    id: "remove-object",
    title: "Magic Eraser",
    fullTitle: "Object Remover",
    description:
      "Remove unwanted objects and seamlessly rebuild the surrounding area.",
    badge: "AI CLOUD",
    icon: WandSparkles,
    accentColor: "#f59e0b",
    presetsTitle: "Inpainting Model",
    presets: ["LaMa Inpaint AI", "Patch Match", "Texture Synthesizer"],
    image: "/effect-objectRemover.webp",
  },
  {
    id: "enhance",
    title: "Enhance",
    fullTitle: "Photo Enhancer",
    description:
      "Improve clarity, sharpness, texture and facial details in your photos.",
    badge: "AI CLOUD",
    icon: Sparkles,
    accentColor: "#0ea5e9",
    presetsTitle: "Enhancement Models",
    presets: ["Face Clarity", "HDR Super-Dynamic", "Denoise & Night Boost"],
    image: "/effect-enhancer.webp",
  },
  {
    id: "restore-photo",
    title: "Old Restore",
    fullTitle: "Old-Photo Restoration",
    description:
      "Restore damaged memories with colorization, scratch removal and face recovery.",
    badge: "AI CLOUD",
    icon: RotateCcw,
    accentColor: "#d97706",
    presetsTitle: "Restoration Tasks",
    presets: [
      "Colorize B&W",
      "Scratch Removal",
      "Face Reconstruct",
      "Denoise & Polish",
    ],
    image: "/effect-oldPhotoRestoration.avif",
  },
  {
    id: "ai-headshots",
    title: "AI Headshots",
    fullTitle: "AI Professional Headshots",
    description:
      "Transform casual selfies into polished professional-looking portraits.",
    badge: "AI CLOUD",
    icon: UserRound,
    accentColor: "#3b82f6",
    presetsTitle: "Attire & Setting",
    presets: [
      "Corporate Blazer",
      "Tech Founder Casual",
      "Studio Monochrome",
      "Outdoor Bokeh",
    ],
    image: "/effect-headshot.jpg",
  },
  {
    id: "upscale",
    title: "AI Upscaler",
    fullTitle: "Image Super-Resolution",
    description:
      "Upscale images while preserving fine details and improving clarity.",
    badge: "AI CLOUD",
    icon: Scan,
    accentColor: "#06b6d4",
    presetsTitle: "Upscale Scale",
    presets: ["2× HD", "4× Ultra HD", "8× Extreme"],
    image: "/effect-upscaler.jpg",
  },

  {
    id: "cartoon-anime",
    title: "Anime Style",
    fullTitle: "Cartoon / Anime Styles",
    description:
      "Turn your photos into expressive illustrated and stylized artwork.",
    badge: "AI CLOUD",
    icon: Palette,
    accentColor: "#d946ef",
    presetsTitle: "Artistic Styles",
    presets: [
      "Shinkai Anime",
      "3D Toon",
      "Manga Pen & Ink",
      "Retro Comic",
      "Watercolor",
    ],
    image: "/effect-anime.png",
  },

];

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    aiTools.length - cardsPerView
  );

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };



  const getCardWidth = () => {
    if (cardsPerView === 1) {
      return "100%";
    }

    if (cardsPerView === 2) {
      return "calc((100% - 16px) / 2)";
    }

    return "calc((100% - 48px) / 4)";
  };

  const getTranslateX = () => {
    if (cardsPerView === 1) {
      return `calc(-${currentIndex} * (100% + 16px))`;
    }

    if (cardsPerView === 2) {
      return `calc(-${currentIndex} * ((100% + 16px) / 2))`;
    }

    return `calc(-${currentIndex} * ((100% + 16px) / 4))`;
  };

  return (
    <section id="showcase" className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
              AI STUDIO
            </p>

            <h2 className="mt-3 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Advanced tools.
              <br />
              <span className="italic text-[var(--accent)]">
                Limitless creativity.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)] md:text-[15px]">
              Powerful AI tools designed to transform, restore and enhance your
              photos in seconds.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={previousSlide}
              aria-label="Previous tools"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--muted)]
                transition-all duration-300
                hover:-translate-x-0.5
                hover:border-[var(--accent)]
                hover:text-[var(--foreground)]
              "
            >
              <ArrowLeft size={15} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next tools"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--muted)]
                transition-all duration-300
                hover:translate-x-0.5
                hover:border-[var(--accent)]
                hover:text-[var(--foreground)]
              "
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="mt-9 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(${getTranslateX()})`,
            }}
          >
            {aiTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <article
                  key={tool.id}
                  style={{
                    flex: `0 0 ${getCardWidth()}`,
                    minWidth: getCardWidth(),
                  }}
                  className="
                    group overflow-hidden
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[var(--accent)]/40
                  "
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <img
                      src={tool.image}
                      alt={tool.fullTitle}
                      className="
                        h-full w-full object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                    {/* BADGE */}
                    <div className="absolute left-2.5 top-2.5">
                      <span className="rounded-full border border-white/20 bg-black/30 px-2 py-1 text-[7px] font-semibold tracking-[0.14em] text-white backdrop-blur-md">
                        {tool.badge}
                      </span>
                    </div>

                    {/* ICON */}
                    <div
                      className="
                        absolute bottom-2.5 left-2.5
                        flex h-7 w-7 items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-black/30
                        backdrop-blur-md
                      "
                      style={{
                        color: tool.accentColor,
                      }}
                    >
                      <Icon size={13} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-3.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[var(--accent)]">
                          {tool.title}
                        </p>

                        <h3 className="mt-0.5 text-[14px] font-semibold leading-tight tracking-tight text-[var(--foreground)]">
                          {tool.fullTitle}
                        </h3>
                      </div>

                      <span className="pt-0.5 text-[8px] text-[var(--muted-dark)]">
                        AI
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-[11px] leading-[1.55] text-[var(--muted)]">
                      {tool.description}
                    </p>

                    {/* PRESETS */}
                    <div className="mt-3 border-t border-[var(--border)] pt-2.5">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-dark)]">
                        {tool.presetsTitle}
                      </p>

                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {tool.presets.slice(0, 3).map((preset) => (
                          <span
                            key={preset}
                            className="
                              rounded-full
                              border border-[var(--border)]
                              bg-[var(--surface-elevated)]
                              px-1.5 py-1
                              text-[8px]
                              leading-none
                              text-[var(--muted)]
                              transition-colors duration-300
                              group-hover:border-[var(--accent)]/30
                            "
                          >
                            {preset}
                          </span>
                        ))}

                        {tool.presets.length > 3 && (
                          <span
                            className="
                              rounded-full
                              border border-[var(--border)]
                              bg-[var(--surface-elevated)]
                              px-1.5 py-1
                              text-[8px]
                              leading-none
                              text-[var(--muted-dark)]
                            "
                          >
                            +{tool.presets.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-5 flex items-center justify-between">
          {/* DOTS */}
          <div className="flex items-center gap-1.5">
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${
                    currentIndex === index
                      ? "w-6 bg-[var(--accent)]"
                      : "w-1.5 bg-[var(--border)]"
                  }
                `}
              />
            ))}
          </div>

          {/* COUNTER */}
          <div className="flex items-center gap-1.5 text-[10px] text-[var(--muted)]">
            <span className="font-medium text-[var(--foreground)]">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            <span>/</span>

            <span>{String(maxIndex + 1).padStart(2, "0")}</span>

            <span className="ml-1.5 hidden sm:inline">AI tools</span>
          </div>
        </div>
      </div>
    </section>
  );
}

