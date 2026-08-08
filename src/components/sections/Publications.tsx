import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { publications } from "@/content/site";

export default function Publications() {
  // Hidden until real entries are added in src/content/site.ts
  if (publications.length === 0) return null;

  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Selected"
      titleAccent="publications"
      lead="Peer-reviewed journal articles and conference papers."
    >
      <ol className="space-y-4">
        {publications.map((publication, index) => (
          <Reveal key={`${publication.year}-${publication.title}`} delay={index * 60}>
            <li className="card card-hover group p-7">
              <div className="grid gap-3 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-8">
                <span className="display text-2xl text-accent">
                  {publication.year}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-fg">
                    {publication.href ? (
                      <a
                        href={publication.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-1.5 transition-colors hover:text-accent"
                      >
                        {publication.title}
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 translate-y-0.5 text-fg-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </a>
                    ) : (
                      publication.title
                    )}
                  </h3>
                  <p className="mt-2.5 text-sm text-fg-muted">
                    {publication.authors}
                  </p>
                  <p className="mt-1 text-sm italic text-fg-subtle">
                    {publication.venue}
                  </p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
