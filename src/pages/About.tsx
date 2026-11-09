import { personalInfo } from "../data/personalInfo";
import meImage from "../assets/Me-web.jpg";

export function About() {
  return (
    <section
      id="about"
      className="page-section min-h-[90vh] scroll-mt-20 pt-20 bg-(--color-surface-alt)"
    >
      <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 shadow-lg md:h-40 md:w-40 border-default">
        <img
          src={meImage}
          alt={personalInfo.name}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-6xl font-bold tracking-tight text-center">{personalInfo.name}</h1>
      <p className="mt-4 text-lg font-bold text-yellow-500 text-center">{personalInfo.title}</p>
      <p className="mt-4 max-w-2xl text-center text-2xl text-subtle">
        {personalInfo.about}
      </p>
      <p className="mt-4 text-sm text-subtle">
        {personalInfo.location} ·{" "}
        <a className="link-muted" href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </a>
      </p>
    </section>
  );
}