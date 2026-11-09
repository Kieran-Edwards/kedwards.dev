import { personalInfo } from "../data/personalInfo";

const mailIcon = new URL("../assets/icons/site/mail.svg", import.meta.url).href;
const linkedinIcon = new URL("../assets/icons/site/linkedin.svg", import.meta.url).href;
const downloadIcon = new URL("../assets/icons/site/download.svg", import.meta.url).href;

const contactItems = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    value: personalInfo.email,
    icon: mailIcon,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedIn,
    value: "LinkedIn",
    icon: linkedinIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="page-section py-16 md:py-24"
    >
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight">Contact Me</h2>
        </div>

        <div className="space-y-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={item.label === "LinkedIn" ? "noreferrer" : undefined}
              className="card-interactive flex items-center gap-3 px-4 py-3 group"
            >
              <img src={item.icon} alt="" className="w-5 h-5 opacity-60 dark:invert" aria-hidden="true" />
              <span className="group-hover:underline">{item.value}</span>
            </a>
          ))}
          <a
            href="/KIERAN%20EDWARDS%20-%20CV.pdf"
            download
            className="card-interactive flex items-center gap-3 px-4 py-3 group"
          >
            <img src={downloadIcon} alt="" className="w-5 h-5 opacity-60 dark:invert" aria-hidden="true" />
            <span className="group-hover:underline">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
