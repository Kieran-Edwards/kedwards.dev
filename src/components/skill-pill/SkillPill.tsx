import { skillIcons, type Skill } from "./skills";

interface SkillPillProps {
  skill: Skill;
}

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <div className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 shadow-sm rounded-2xl">
      <img className="h-6 w-6" src={skillIcons[skill]} alt="" aria-hidden="true" />
      <p>{skill}</p>
    </div>
  );
}
