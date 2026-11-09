import { personalInfo } from "../../data/personalInfo";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur py-6 px-4 text-center text-slate-500 text-sm dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-400 transition-colors">
      <p>
        &copy; {currentYear} {personalInfo.name}. Built with{" "}
        <a
          className="underline hover:text-slate-900 dark:hover:text-neutral-100 cursor-pointer"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>{" "}
        &amp; Tailwind CSS.
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          className="underline hover:text-slate-900 dark:hover:text-neutral-100 cursor-pointer"
          href={`mailto:${personalInfo.email}`}
        >
          Email
        </a>
        <a
          className="underline hover:text-slate-900 dark:hover:text-neutral-100 cursor-pointer"
          href={personalInfo.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
