import { skillIcons, type Skill } from "./skills";

interface SkillPillProps {
  skill: Skill;
}

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <div className="flex items-center gap-2 border border-slate-200 bg-white text-slate-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 px-4 py-2 shadow-sm rounded-2xl transition-all duration-200 hover:scale-110">
      <img className="h-6 w-6" src={skillIcons[skill]} alt="" aria-hidden="true" />
      <p>{skill}</p>
    </div>
  );
}
