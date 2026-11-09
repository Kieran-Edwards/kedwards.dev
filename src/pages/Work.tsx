import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

const chevronDownIcon = new URL("../assets/icons/site/chevron-down.svg", import.meta.url).href;

const noInvert = new Set(["Halfords", "Tommy Hilfiger"]);

const iconClass = (name: string, base: string) => {
  if (noInvert.has(name)) return base;
  if (name === "Colruyt") return `${base} dark:invert dark:hue-rotate-180`;
  return `${base} dark:invert`;
};

export function Work() {
  const [activeProject, setActiveProject] = useState(projects[0].name);
  const [fadeKey, setFadeKey] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);

  const activeIndex = projects.findIndex((p) => p.name === activeProject);
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;
  const active = projects[safeIndex];
  const isFirst = safeIndex === 0;
  const isLast = safeIndex === projects.length - 1;

  const selectProject = (name: string) => {
    if (name === activeProject) return;
    setActiveProject(name);
    setFadeKey((k) => k + 1);
  };

  const toggleMobileProject = (name: string) => {
    if (name === activeProject) {
      setActiveProject("");
      return;
    }
    setActiveProject(name);
    setFadeKey((k) => k + 1);
  };

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      if (mq.matches && !activeProject) setActiveProject(projects[0].name);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [activeProject]);

  useEffect(() => {
    if (contentRef.current) {
      const style = window.getComputedStyle(contentRef.current.parentElement!);
      const paddingY =
        parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      setCardHeight(contentRef.current.scrollHeight + paddingY);
    }
  }, [activeProject, fadeKey]);

  return (
    <section
      id="work"
      className="page-section pt-16 md:pt-24"
    >
      <h1 className="text-4xl font-bold text-center">WPP Engineering Solutions</h1>
      <p className="pt-4 text-subtle text-center">Front End Engineer</p>
      <p className="text-subtle text-center">Aug 2016 - Nov 2026</p>

      {/* Desktop: horizontal tabs + card */}
      <div className="hidden md:block mt-8 w-full max-w-4xl relative z-10 -mb-px">
        <div className="relative flex w-full">
          <div
            className="absolute top-0 bottom-0 rounded-t-xl border border-b-0 transition-all duration-300 ease-in-out"
            style={{
              width: `${100 / projects.length}%`,
              transform: `translateX(${safeIndex * 100}%)`,
              backgroundColor: "var(--color-surface-raised)",
              borderColor: "var(--color-border)",
            }}
            aria-hidden="true"
          />
          {projects.map((project) => {
            const isActive = project.name === activeProject;
            return (
              <button
                key={project.name}
                type="button"
                onClick={() => selectProject(project.name)}
                aria-pressed={isActive}
                aria-label={project.name}
                className={`relative z-10 flex flex-1 items-center justify-center px-4 py-5 rounded-t-xl transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-(--color-text)"
                    : "text-subtle hover:opacity-100"
                }`}
              >
                <img src={project.icon} alt={project.name} className={iconClass(project.name, "h-6 w-auto max-w-[120px]")} />
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={`card-surface hidden md:block w-full max-w-4xl p-6 overflow-hidden transition-[height,border-radius,background-color,border-color] duration-300 ease-in-out ${
          isFirst ? "rounded-tl-none" : isLast ? "rounded-tr-none" : ""
        }`}
        style={{ height: cardHeight }}
      >
        <div ref={contentRef} key={fadeKey} className="animate-[projectFade_0.25s_ease-out]">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-(--color-text)">{active.name}</h3>
          </div>
          {active.subBrands && (
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              {active.subBrands.map((brand) => (
                <img
                  key={brand.name}
                  src={brand.icon}
                  alt={brand.name}
                  className={iconClass(brand.name, "h-6 w-auto max-w-[120px]")}
                />
              ))}
            </div>
          )}
          <p className="text-muted mb-3">{active.description}</p>
          <div className="text-sm text-subtle space-y-3">
            {active.details.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden mt-8 w-full max-w-4xl space-y-3">
        {projects.map((project) => {
          const isOpen = project.name === activeProject;
          return (
            <div
              key={project.name}
              className="card-surface overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleMobileProject(project.name)}
                aria-expanded={isOpen}
                aria-label={project.name}
                className="w-full flex items-center justify-between gap-3 px-4 py-4 cursor-pointer"
              >
                <img src={project.icon} alt={project.name} className={iconClass(project.name, "h-8 w-auto max-w-[140px]")} />
                <img
                  src={chevronDownIcon}
                  alt=""
                  aria-hidden="true"
                  className={`w-5 h-5 transition-transform duration-300 dark:invert ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 pt-0 border-t border-default">
                    {project.subBrands && (
                      <div className="flex items-center gap-4 mt-3 mb-3 flex-wrap">
                        {project.subBrands.map((brand) => (
                          <img
                            key={brand.name}
                            src={brand.icon}
                            alt={brand.name}
                            className={iconClass(brand.name, "h-5 w-auto max-w-[110px]")}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-muted mb-2 mt-3">{project.description}</p>
                    <div className="text-sm text-subtle space-y-3">
                      {project.details.split("\n\n").map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
