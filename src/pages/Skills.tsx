import { SkillPill } from "../components/skill-pill/SkillPill";
import { skills } from "../components/skill-pill/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 scroll-mt-20 flex flex-col items-center justify-center bg-teal-800 text-slate-900 px-4"
    >
      <h1 className="text-4xl text-slate-100 font-bold tracking-tight">Techincal Experience</h1>
      <div className="mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
