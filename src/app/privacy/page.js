
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  Image,
  Sparkles,
  Database,
  Lock,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const sections = [
  {
    number: "01",
    icon: Image,
    title: "Photos you upload",
    text: "When you use an AI feature such as background removal, object removal, enhancement, restoration or an AI style, Pixora may process the image you select to provide that feature. We only request access to images you choose to upload or import.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI image processing",
    text: "Some Pixora features may rely on third-party AI or image-processing infrastructure. When required, the image and information needed for your selected transformation may be securely sent to the relevant service to generate your result.",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Editing information",
    text: "Depending on the tool you use, Pixora may process editing settings, prompts, selected styles, transformation options and other instructions needed to complete your request.",
  },
  {
    number: "04",
    icon: Database,
    title: "Usage & technical data",
    text: "We may collect basic information about how Pixora is used, such as features accessed, requests made, device or browser information and technical details needed to operate, troubleshoot and protect the service.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Your content remains yours",
    text: "Pixora does not claim ownership of the photos or other content you upload. You remain responsible for the content you provide and for having the necessary rights or permissions to process it through Pixora.",
  },
  {
    number: "06",
    icon: Lock,
    title: "Security & protection",
    text: "We use reasonable technical and organizational measures to protect information handled through Pixora. However, no internet-based service or method of transmission can be guaranteed to be completely secure.",
  },
];

const privacyPoints = [
  {
    title: "Local editing",
    text: "Some everyday tools, such as cropping, resizing, compression or format conversion, may be performed directly in your browser when supported.",
  },
  {
    title: "Cloud processing",
    text: "AI-powered transformations may require your selected image to be processed by Pixora or a third-party service used to provide that feature.",
  },
  {
    title: "Third-party providers",
    text: "Pixora may use external providers for AI processing, hosting, storage, analytics, payments or other infrastructure required to operate the product.",
  },
  {
    title: "Data retention",
    text: "Processing data may be retained only for as long as reasonably necessary to provide the requested feature, operate the service, maintain security or meet applicable requirements. Retention may vary by feature.",
  },
];

export default function Privacy() {
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
                PIXORA / PRIVACY
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Your photos.
              <br />
              <span className="italic text-[var(--accent)]">
                Your control.
              </span>
            </h1>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-[var(--muted)] md:text-[15px]">
                A straightforward explanation of how Pixora handles the
                images, editing information and technical data involved when
                you use our photo editing tools.
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
                HOW PIXORA HANDLES DATA
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Your images are used to create your edits.
              </h2>
            </div>

            <p className="text-sm leading-7 text-[var(--muted)]">
              Pixora is built around image editing. When you use an AI
              feature, we process the image and instructions needed to create
              the result you requested. Features that work directly in your
              browser may not require your image to be uploaded.
            </p>
          </div>

          {/* PRIVACY CARDS */}
          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md sm:p-7"
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

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {section.text}
                  </p>

                  <div className="mt-5 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-10" />
                </article>
              );
            })}
          </div>

          {/* HOW PROCESSING WORKS */}
          <div className="mt-4 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 sm:p-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
                PROCESSING AT A GLANCE
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Not every Pixora tool handles your image the same way.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                The way an image is handled depends on the feature you choose.
                This distinction matters because simple editing tools and
                cloud-based AI transformations can have different processing
                requirements.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {privacyPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[var(--accent)]">
                      0{index + 1}
                    </span>

                    <h3 className="text-sm font-semibold">
                      {point.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* YOUR CHOICES */}
          <div className="mt-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
              YOUR CHOICES
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              You choose what you create.
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              You decide which photos to upload, which tools to use and which
              results to keep or share. Avoid uploading sensitive information
              unless it is necessary for the feature you are using, and make
              sure you have permission to process images belonging to other
              people.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--accent)]">
                THIRD-PARTY SERVICES
              </p>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Pixora may use third-party providers for AI processing,
                hosting, storage, analytics, payments or other technical
                services. These providers may have their own privacy policies
                and data practices.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--accent)]">
                POLICY UPDATES
              </p>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Pixora may update this Privacy Policy as new tools,
                integrations and data practices are introduced. The date at
                the top of this page will be updated when the policy changes.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Want to start creating?
              </p>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Go back to Pixora and transform your next photo.
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
              href="/terms"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Terms & Conditions
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

