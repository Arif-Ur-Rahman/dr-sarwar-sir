import Image from "next/image";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { cvUrl, profile } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pb-32 sm:pt-20 lg:px-8 lg:pb-40 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
          {/* ── Text column ── */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.04] px-4 py-2 backdrop-blur-md">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  style={{ animation: "pulse-dot 2.6s ease-in-out infinite" }}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
                  {profile.role} · {profile.institution}
                </span>
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="display mt-8 text-[clamp(3rem,8vw,5.25rem)] text-fg">
                <span className="block">{profile.givenName}</span>
                <span className="block">
                  <span className="gradient-text italic">
                    {profile.familyName}
                  </span>
                  <span className="ml-4 align-super font-mono text-[0.22em] uppercase tracking-[0.22em] text-fg-subtle">
                    {profile.credentials}
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-9 max-w-xl">
                <div className="rule-accent" />
                <p className="mt-7 text-lg leading-[1.75] text-fg-muted">
                  {profile.intro}
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-11 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="btn-accent group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                >
                  Get in touch
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                {cvUrl && (
                  <a
                    href={cvUrl}
                    download
                    className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-fg"
                  >
                    <Download size={16} className="text-accent" />
                    Curriculum Vitae
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={330}>
              <dl className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line-soft pt-8 text-sm">
                <div className="flex items-center gap-2.5">
                  <dt className="sr-only">Department</dt>
                  <Sparkles size={15} className="text-accent/70" aria-hidden />
                  <dd className="text-fg-muted">{profile.department}</dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <dt className="sr-only">Location</dt>
                  <MapPin size={15} className="text-accent/70" aria-hidden />
                  <dd className="text-fg-muted">{profile.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* ── Portrait column ── */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <figure className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
              {/* Bloom behind the frame */}
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, rgba(76,201,240,0.28), rgba(106,125,255,0.12) 45%, transparent 72%)",
                }}
              />

              {/* Gradient edge */}
              <div
                className="rounded-[1.75rem] p-px"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(76,201,240,0.55), rgba(255,255,255,0.06) 38%, rgba(106,125,255,0.35))",
                }}
              >
                <div className="relative overflow-hidden rounded-[1.7rem] bg-surface">
                  <Image
                    src={profile.photo}
                    alt={`Portrait of ${profile.honorific} ${profile.name}`}
                    width={608}
                    height={768}
                    priority
                    sizes="(min-width: 1024px) 400px, 320px"
                    className="h-auto w-full object-cover contrast-[1.03] saturate-[0.92]"
                  />
                  {/* Grounds the white studio background into the dark page */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(7,11,18,0.82) 0%, rgba(7,11,18,0.10) 38%, transparent 60%)," +
                        "linear-gradient(to right, rgba(7,11,18,0.30), transparent 30%, transparent 70%, rgba(7,11,18,0.30))",
                    }}
                  />
                  {/* Caption plate */}
                  <figcaption className="absolute inset-x-4 bottom-4 rounded-xl border border-line bg-ink/60 px-4 py-3 backdrop-blur-md">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      Research focus
                    </p>
                    <p className="mt-1.5 text-[13px] leading-snug text-fg">
                      {profile.field}
                    </p>
                  </figcaption>
                </div>
              </div>

              {/* Floating tenure chip */}
              <div className="card absolute -bottom-6 -left-4 hidden px-5 py-3.5 sm:block lg:-left-10">
                <p className="display text-2xl text-fg">2012</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
                  Researching since
                </p>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
