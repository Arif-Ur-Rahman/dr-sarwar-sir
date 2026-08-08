import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { courses } from "@/content/site";

export default function Teaching() {
  // Hidden until real courses are added in src/content/site.ts
  if (courses.length === 0) return null;

  return (
    <Section
      id="teaching"
      eyebrow="Teaching"
      title="Courses"
      titleAccent="taught"
      lead="Undergraduate and postgraduate courses at East West University."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {courses.map((course, index) => (
          <Reveal key={course.code} delay={(index % 2) * 80}>
            <article className="card card-hover h-full p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm tracking-wide text-accent">
                  {course.code}
                </span>
                <span className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
                  {course.level}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">
                {course.title}
              </h3>
              {course.description && (
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {course.description}
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
