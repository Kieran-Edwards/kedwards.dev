import { personalInfo } from "../data/personalInfo";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center bg-slate-50 px-4 text-slate-900"
    >
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <div className="mt-6 flex flex-col items-center gap-2 text-slate-600">
        <a className="underline hover:text-slate-900" href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </a>
        <a
          className="underline hover:text-slate-900"
          href={personalInfo.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}