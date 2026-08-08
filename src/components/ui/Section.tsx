import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  /** Optional trailing words of the title, rendered in the accent gradient. */
  titleAccent?: string;
  lead?: string;
  children: ReactNode;
  /** Adds a top hairline to separate this section from the one above. */
  bordered?: boolean;
};

/**
 * Shared section shell: consistent width, rhythm, and header treatment so
 * every band on the page reads as part of one system.
 */
export default function Section({
  id,
  eyebrow,
  title,
  titleAccent,
  lead,
  children,
  bordered = true,
}: SectionProps) {
  return (
    <section id={id} className="w-full">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {bordered && <div className="hairline" />}
        <div className="py-24 sm:py-28 lg:py-32">
          <Reveal as="header" className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display mt-6 text-4xl text-fg sm:text-5xl">
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span className="gradient-text italic">{titleAccent}</span>
                </>
              )}
            </h2>
            <div className="rule-accent mt-7" />
            {lead && (
              <p className="mt-7 text-base leading-relaxed text-fg-muted sm:text-lg">
                {lead}
              </p>
            )}
          </Reveal>
          <div className="mt-14 sm:mt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}
