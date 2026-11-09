export interface Project {
  name: string;
  icon: string;
  description: string;
  details: string;
  subBrands?: { name: string; icon: string }[];
}

export const projects: Project[] = [
  {
    name: "Halfords",
    icon: new URL("../assets/icons/projects/Halfords.svg", import.meta.url).href,
    description:
      "High-traffic e-commerce and PWA platform for cycling and automotive retail, built on a modern headless React/Next.js stack.",
    details:
      "Contributed to a headless checkout migration from legacy SFRA to a modern Salesforce headless implementation, including legacy-to-headless transitions across React and Next.js/PWA storefront work with SSR considerations.\n\nWorked as a core engineer on the headless checkout team, integrating complex secure payment gateways and using React Query for efficient state management in collaboration with backend developers. Supported e-commerce workflows within Salesforce Commerce Cloud (SFCC) and contributed across a modern delivery stack including TypeScript and CI/CD.\n\nMaintained an automated testing ecosystem with Jest (unit), BackstopJS (visual regression), and Playwright (E2E), and developed modular custom components within an organised Storybook design system.\n\nApplied agentic AI development workflows with rigorous auditing and refactoring to meet security, accessibility (WCAG), and performance standards, while contributing positively to Agile ceremonies, communication, and team culture in a globally distributed team alongside Backend, QA, UX, and Product stakeholders.",
  },
  {
    name: "New Look",
    icon: new URL("../assets/icons/projects/NewLook.svg", import.meta.url).href,
    description:
      "Fashion retail website maintained as an AngularJS application with ongoing feature delivery and site support.",
    details:
      "Worked on an AngularJS codebase delivering ongoing site changes and maintenance for the client. Implemented complex Buy Now, Pay Later checkout integrations and collaborated on-site with the London team.\n\nSupported the transition work required for GDPR implementation across the site.",
  },
  {
    name: "Colruyt",
    icon: new URL("../assets/icons/projects/Colruyt.svg", import.meta.url).href,
    description:
      "E-commerce platform for a European supermarket chain, evolving from a vanilla JavaScript codebase.",
    details:
      "Contributed to a vanilla JavaScript project for a European supermarket chain, working within a collaborative team delivering ongoing improvements.\n\nTook part in the early transition toward introducing React components into the existing vanilla JS site.",
  },
  {
    name: "PVH",
    icon: new URL("../assets/icons/projects/PVH.svg", import.meta.url).href,
    description:
      "Multi-brand fashion platform serving Tommy Hilfiger and Calvin Klein from a shared codebase.",
    details:
      "Worked on a single codebase that powered both Tommy Hilfiger and Calvin Klein, with a unified system that switched design and API sources based on the site being accessed.\n\nHelped gradually modernise the platform toward a more streamlined approach, including early-stage React implementations.",
    subBrands: [
      { name: "Tommy Hilfiger", icon: new URL("../assets/icons/projects/Tommy.svg", import.meta.url).href },
      { name: "Calvin Klein", icon: new URL("../assets/icons/projects/Calvin.svg", import.meta.url).href },
    ],
  },
  {
    name: "Selfridges",
    icon: new URL("../assets/icons/projects/Selfridges.svg", import.meta.url).href,
    description:
      "Luxury retail project where I began my professional front-end career in an Agile team environment.",
    details:
      "My first professional project, undertaken early in my career as a graduate/junior developer.\n\nIt was where I learned core development practices and gained my first experience working within an Agile team.",
  },
];
