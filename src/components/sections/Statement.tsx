import Reveal from "@/components/ui/Reveal";
import { fullName, profile } from "@/content/site";

/**
 * Full-width pull quote. The text is the professor's own statement of intent,
 * lifted from his biography — no new claims are made here.
 */
export default function Statement() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="hairline" />
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-line px-8 py-16 text-center sm:px-14 sm:py-20 lg:px-20">
            {/* Interior glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 70% 90% at 50% 0%, rgba(76,201,240,0.12), transparent 70%)," +
                  "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0) 60%)," +
                  "rgba(10,16,24,0.5)",
              }}
            />

            {/* Oversized opening quote */}
            <span
              aria-hidden
              className="display gradient-text pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none text-[9rem] leading-none opacity-[0.18] sm:text-[12rem]"
            >
              &ldquo;
            </span>

            <blockquote className="relative mx-auto max-w-3xl">
              <p className="display text-[clamp(1.6rem,3.4vw,2.6rem)] text-fg">
                I like to connect and apply information technology to other
                disciplines &mdash;{" "}
                <span className="gradient-text italic">
                  biology, business, and social networks
                </span>{" "}
                &mdash; to address and support the demands they actually have.
              </p>
            </blockquote>

            <figcaption className="mt-10">
              <div className="rule-accent mx-auto" />
              <p className="mt-6 text-sm font-semibold tracking-tight text-fg">
                {fullName}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
                {profile.role}, {profile.institution}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
