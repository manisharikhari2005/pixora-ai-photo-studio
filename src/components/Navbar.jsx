
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("pixora-theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");

    setDark(isDark);
    localStorage.setItem("pixora-theme", isDark ? "dark" : "light");
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4">
      <div
        className="
          mx-auto max-w-6xl
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--surface)]/90
          px-4 py-2.5
          shadow-sm
          backdrop-blur-xl
          transition-all duration-300
          sm:rounded-full sm:px-5 sm:py-3
        "
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                bg-[var(--accent)]
                text-xs font-bold
                text-[var(--background)]
                sm:h-9 sm:w-9 sm:text-sm
              "
            >
              P
            </div>

            <span className="text-base font-semibold tracking-tight text-[var(--foreground)] sm:text-lg">
              Pixora
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-6 md:flex lg:gap-7">
            <a href="#home" className="nav-link">
              Home
            </a>

            <a href="#tools" className="nav-link">
              Tools
            </a>

            <a href="#showcase" className="nav-link">
              Showcase
            </a>

            <a href="#about" className="nav-link">
              About
            </a>

            <Link href="/privacy" className="nav-link">
              Privacy
            </Link>

            <Link href="/terms" className="nav-link">
              Terms
            </Link>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 md:flex">

            {/* THEME */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-[var(--border)]
                bg-[var(--surface-elevated)]
                text-[var(--muted)]
                transition-all duration-300
                hover:border-[var(--accent)]
                hover:text-[var(--foreground)]
              "
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* TRY PIXORA */}
            <Link
              href="/editor"
              className="
                ml-1 inline-flex items-center gap-1.5
                rounded-full
                bg-[var(--foreground)]
                px-4 py-2.5
                text-xs font-medium
                text-[var(--background)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--accent)]
              "
            >
              Try Pixora
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-1.5 md:hidden">

            {/* THEME */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                border border-[var(--border)]
                bg-[var(--surface-elevated)]
                text-[var(--muted)]
              "
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* MENU */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                border border-[var(--border)]
                text-[var(--foreground)]
              "
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            grid transition-all duration-300 ease-out md:hidden
            ${
              open
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div className="mt-3 border-t border-[var(--border)] pt-3 pb-1">

              <div className="flex flex-col">

                <a
                  href="#home"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
                >
                  Home
                </a>

                <a
                  href="#tools"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
                >
                  Tools
                </a>

                <a
                  href="#showcase"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
                >
                  Showcase
                </a>

                <a
                  href="#about"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
                >
                  About
                </a>

               

                <Link
                  href="/editor"
                  onClick={closeMenu}
                  className="
                    mt-2 inline-flex items-center justify-center gap-1.5
                    rounded-full
                    bg-[var(--foreground)]
                    px-4 py-2.5
                    text-xs font-medium
                    text-[var(--background)]
                    transition-all duration-300
                    hover:bg-[var(--accent)]
                  "
                >
                  Try Pixora
                  <ArrowUpRight size={13} />
                </Link>

              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

