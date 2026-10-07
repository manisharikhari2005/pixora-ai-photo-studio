
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  FileCheck,
  Image,
  Sparkles,
  ShieldAlert,
  CreditCard,
  Copyright,
  Server,
  Scale,
  RefreshCw,
} from "lucide-react";

const sections = [
  {
    number: "01",
    icon: FileCheck,
    title: "Using Pixora",
    text: "Pixora provides AI-powered photo editing and image utility tools, including background removal, object removal, enhancement, restoration, creative transformations and everyday editing features. You may use the service only in accordance with these Terms and applicable law.",
  },
  {
    number: "02",
    icon: Image,
    title: "Your photos & content",
    text: "You keep ownership of the photos, images and other content you upload to Pixora. You are responsible for making sure you have the rights, permissions and consent required to upload, edit, transform or share that content.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI-generated results",
    text: "Pixora uses automated AI systems that can make mistakes. Results may contain unexpected details, distortions, inaccuracies or similarities to other content. You should review every result before relying on, publishing or sharing it.",
  },
  {
    number: "04",
    icon: ShieldAlert,
    title: "Acceptable use",
    text: "You must not use Pixora to create, edit or distribute content that is illegal, fraudulent, abusive, deceptive, harmful or that violates another person's privacy, intellectual property, publicity or other rights.",
  },
  {
    number: "05",
    icon: Copyright,
    title: "Rights & permissions",
    text: "Do not upload photographs, logos, artwork, documents or other material unless you have the necessary rights or permission to use them. You are responsible for claims arising from content you submit or share through Pixora.",
  },
  {
    number: "06",
    icon: CreditCard,
    title: "Credits & paid features",
    text: "Pixora may introduce credits, subscriptions, premium models or other paid features. Prices, limits, available tools and included usage may change. Any applicable purchase, renewal or refund conditions will be shown before payment.",
  },
  {
    number: "07",
    icon: Server,
    title: "Third-party services",
    text: "Some Pixora features may depend on external services for AI processing, hosting, storage, payments or other infrastructure. Availability and processing of certain features may therefore depend on those providers.",
  },
  {
    number: "08",
    icon: Scale,
    title: "Your responsibility",
    text: "You are responsible for how you use Pixora and for the final images you download, publish or distribute. Pixora should not be treated as a substitute for professional review where an image has legal, commercial, identity or other important consequences.",
  },
  {
    number: "09",
    icon: RefreshCw,
    title: "Changes to Pixora",
    text: "Pixora is an evolving product. We may add, modify, restrict or discontinue tools, models, features or usage limits. We may also update these Terms when the service or applicable requirements change.",
  },
];

const usageRules = [
  {
    title: "Upload responsibly",
    text: "Only upload images and content that you have the legal right or permission to process.",
  },
  {
    title: "Review AI results",
    text: "AI-generated images can be inaccurate or unexpected. Check the final result before using or publishing it.",
  },
  {
    title: "Respect other people",
    text: "Do not use Pixora to violate someone's privacy, impersonate them, deceive others or create harmful content.",
  },
  {
    title: "Don't abuse the service",
    text: "Do not attempt to bypass usage limits, interfere with the service, exploit vulnerabilities or use automated systems in ways that harm Pixora.",
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Background glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--accent-soft)] opacity-25 blur-[90px]" />

      {/* NAVBAR */}
      <nav className="px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)]/85 px-4 py-2 backdrop-blur-xl sm:px-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-[11px] font-bold text-[var(--background)]">
              P
            </div>

            <span className="text-sm font-semibold tracking-tight">
              Pixora
            </span>
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs text-[var(--muted)] transition-all duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
          >
            <ChevronLeft
              size={13}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back to studio
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 pb-10 pt-12 sm:px-8 md:pb-14 md:pt-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

              <p className="text-[10px] font-semibold tracking-[0.2em] text-[var(--accent)]">
                PIXORA / TERMS
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Simple rules.
              <br />
              <span className="italic text-[var(--accent)]">
                Better creating.
              </span>
            </h1>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-[var(--muted)] md:text-[15px]">
                The rules that apply when you use Pixora's AI photo editing,
                image transformation and everyday editing tools.
              </p>

              <span className="shrink-0 text-[10px] text-[var(--muted-dark)]">
                Last updated · October 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto max-w-5xl">
          {/* INTRO */}
          <div className="mb-4 grid gap-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
                BEFORE YOU CREATE
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Know what you can create.
              </h2>
            </div>

            <p className="text-sm leading-7 text-[var(--muted)]">
              Pixora gives you tools to transform your own images with AI and
              traditional editing features. These terms explain your
              responsibility for the content you upload, the results you
              create and the way you use the platform.
            </p>
          </div>

          {/* TERMS CARDS */}
          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className={`group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md sm:p-7 ${
                    index === sections.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <span className="text-[10px] font-medium tracking-[0.15em] text-[var(--muted-dark)]">
                      {section.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight">
                    {section.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                    {section.text}
                  </p>

                  <div className="mt-5 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-10" />
                </article>
              );
            })}
          </div>

          {/* RESPONSIBLE USE */}
          <div className="mt-4 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 sm:p-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
                USING PIXORA RESPONSIBLY
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Create freely. Use responsibly.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Pixora is designed for creative editing, not for harming
                people, violating rights or abusing the service. Keep these
                basic responsibilities in mind when using the tools.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {usageRules.map((rule, index) => (
                <div
                  key={rule.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[var(--accent)]">
                      0{index + 1}
                    </span>

                    <h3 className="text-sm font-semibold">
                      {rule.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI NOTICE */}
          <div className="mt-4 rounded-3xl border border-[var(--accent)]/20 bg-[var(--accent-soft)]/30 p-6 sm:p-7">
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--background)]">
                <Sparkles size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Important: AI results are not guaranteed
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  AI can misunderstand an image, introduce unwanted details
                  or produce results that are unsuitable for a particular
                  purpose. Always review the final result before using it for
                  identification, advertising, business, public publishing
                  or other important purposes.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHTS NOTICE */}
          <div className="mt-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
                  YOUR CONTENT
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  Upload only what you are allowed to use.
                </h2>
              </div>

              <Copyright
                size={22}
                strokeWidth={1.5}
                className="text-[var(--accent)]"
              />
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              You are responsible for making sure that the photos, artwork,
              logos, documents or other material you upload can legally be
              processed and used. Pixora does not take ownership of your
              original content simply because you use our editing tools.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Ready to create?
              </p>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Jump back into Pixora and start transforming your photos.
              </p>
            </div>

            <Link
              href="/editor"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2.5 text-xs font-medium text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent)]"
            >
              Open Pixora
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* FOOTER */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5 text-[10px] text-[var(--muted-dark)]">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Pixora Home
            </Link>

            <span className="sm:ml-auto">© 2026 Pixora</span>
          </div>
        </div>
      </section>
    </main>
  );
}

