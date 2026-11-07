import { personalInfo } from "../data/personalInfo";
import meImage from "../assets/Me-web.jpg";

export function About() {
  return (
    <section
      id="about"
      className="flex min-h-[90vh] scroll-mt-20 flex-col items-center justify-center bg-slate-100 px-4 pt-20 text-slate-900"
    >
      <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200 shadow-lg md:h-40 md:w-40">
        <img
          src={meImage}
          alt={personalInfo.name}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-6xl font-bold tracking-tight">{personalInfo.name}</h1>
      <p className="mt-4 text-lg font-bold text-yellow-500">{personalInfo.title}</p>
      <p className="mt-4 max-w-2xl text-center text-2xl text-slate-500">
        {personalInfo.about}
      </p>
      <p className="mt-4 text-sm text-slate-500">
        {personalInfo.location} ·{" "}
        <a className="underline hover:text-slate-700" href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </a>
      </p>
    </section>
  );
}