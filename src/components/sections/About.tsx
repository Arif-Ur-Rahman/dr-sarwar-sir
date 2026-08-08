import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { profile, socials } from "@/content/site";

const facts = [
  { label: "Position", value: profile.role },
  { label: "Institution", value: profile.institution },
  { label: "Department", value: profile.department },
  { label: "Location", value: profile.location },
  { label: "Active since", value: "2012" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A career spent"
      titleAccent="reading data"
      lead={profile.tagline}
      bordered={false}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        {/* Prose */}
        <div className="max-w-2xl">
          {profile.biography.map((paragraph, index) => (
            <Reveal key={index} delay={index * 80}>
              <p
                className={
                  index === 0
                    ? "text-lg leading-[1.8] text-fg/90"
                    : "mt-6 text-base leading-[1.85] text-fg-muted"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Profile card */}
        <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
          <aside className="card p-7">
            <h3 className="eyebrow">At a glance</h3>
            <dl className="mt-7 space-y-5">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-line-soft pb-5 last:border-0 last:pb-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-fg">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {socials.length > 0 && (
              <div className="mt-7 border-t border-line pt-7">
                <h4 className="eyebrow">Profiles</h4>
                <ul className="mt-4 space-y-3">
                  {socials.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
                      >
                        {social.label}
                        <ArrowUpRight
                          size={14}
                          className="text-fg-subtle transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-accent"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
