import { useEffect, useState } from "react";
import { personalInfo } from "../../data/personalInfo";

type Page = "about" | "work" | "skills" | "contact";

const pages: { id: Page; label: string }[] = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState<Page>("about");

  useEffect(() => {
    const visible = new Map<Page, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as Page;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        }

        let next: Page | undefined;
        let ratio = -1;
        for (const [id, value] of visible) {
          if (value > ratio) {
            next = id;
            ratio = value;
          }
        }
        if (next) setActiveId(next);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const page of pages) {
      const el = document.getElementById(page.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: Page) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            className="cursor-pointer font-bold text-slate-900"
            onClick={() => scrollTo("about")}
          >
            {personalInfo.name}
          </button>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-600 sm:gap-2">
            {pages.map((page) => (
              <a
                key={page.id}
                href={`#${page.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(page.id);
                }}
                aria-current={activeId === page.id ? "location" : undefined}
                className={`rounded-md px-2 py-2 transition-colors sm:px-3 ${
                  activeId === page.id
                    ? "bg-slate-100 text-slate-900"
                    : "hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
