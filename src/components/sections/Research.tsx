import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { researchAreas } from "@/content/site";

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Areas of"
      titleAccent="interest"
      lead="The methods and application domains I work in, and the kinds of problems I supervise students on."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map(({ title, description, icon: Icon }, index) => (
          <Reveal key={title} delay={(index % 3) * 90}>
            <article className="card card-hover group h-full p-7">
              <span className="icon-tile h-12 w-12">
                <Icon size={21} strokeWidth={1.6} aria-hidden />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-fg">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
