import { SkillPill } from "../components/skill-pill/SkillPill";
import { skills } from "../components/skill-pill/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 scroll-mt-16 flex flex-col items-center justify-center px-4 transition-colors bg-(--color-accent) text-(--color-text-on-accent)"
    >
      <h1 className="text-4xl font-bold tracking-tight text-center">Technical Experience</h1>
      <div className="mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
