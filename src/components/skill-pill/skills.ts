export const skillIcons = {
  React: new URL("../../assets/icons/skills/React.svg", import.meta.url).href,
  Typescript: new URL("../../assets/icons/skills/Typescript.svg", import.meta.url).href,
  Tailwind: new URL("../../assets/icons/skills/Tailwind.svg", import.meta.url).href,
  Redux: new URL("../../assets/icons/skills/Redux.svg", import.meta.url).href,
  JS: new URL("../../assets/icons/skills/JS.svg", import.meta.url).href,
  Jest: new URL("../../assets/icons/skills/Jest.svg", import.meta.url).href,
  Playwright: new URL("../../assets/icons/skills/Playwright.svg", import.meta.url).href,
  RestAPIs: new URL("../../assets/icons/skills/RestAPIs.svg", import.meta.url).href,
  SFCC: new URL("../../assets/icons/skills/SFCC.svg", import.meta.url).href,
  AngularJS: new URL("../../assets/icons/skills/AngularJS.svg", import.meta.url).href,
  CSS3: new URL("../../assets/icons/skills/CSS3.svg", import.meta.url).href,
  Figma: new URL("../../assets/icons/skills/Figma.svg", import.meta.url).href,
  Git: new URL("../../assets/icons/skills/Git.svg", import.meta.url).href,
  HTML5: new URL("../../assets/icons/skills/HTML5.svg", import.meta.url).href,
  Sass: new URL("../../assets/icons/skills/Sass.svg", import.meta.url).href,
  Storybook: new URL("../../assets/icons/skills/Storybook.svg", import.meta.url).href,
} as const;

export type Skill = keyof typeof skillIcons;

export const skills = Object.keys(skillIcons) as Skill[];
