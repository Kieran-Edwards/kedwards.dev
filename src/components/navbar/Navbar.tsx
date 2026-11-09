import { useEffect, useState } from "react";
import { personalInfo } from "../../data/personalInfo";

const sunIcon = new URL("../../assets/icons/site/sun.svg", import.meta.url).href;
const moonIcon = new URL("../../assets/icons/site/moon.svg", import.meta.url).href;
const keIcon = new URL("../../assets/icons/site/KE.svg", import.meta.url).href;

type Page = "about" | "skills" | "work" | "contact";

const pages: { id: Page; label: string }[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState<Page>("about");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

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
      { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const page of pages) {
      const el = document.getElementById(page.id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (atBottom) setActiveId("contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id: Page) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const themeButton = (
    <button
      type="button"
      onClick={toggleDark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
    >
      <img
        src={dark ? sunIcon : moonIcon}
        alt=""
        aria-hidden="true"
        className="w-5 h-5 dark:invert"
      />
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-neutral-700 dark:bg-neutral-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            className="cursor-pointer font-bold text-slate-900 dark:text-neutral-100 flex items-center gap-2"
            onClick={() => scrollTo("about")}
          >
            <img src={keIcon} alt="" aria-hidden="true" className="h-6 w-6 dark:invert" />
            {personalInfo.name}
          </button>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-600 sm:gap-2 dark:text-neutral-300">
            {pages.map((page) => (
              <a
                key={page.id}
                href={`#${page.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(page.id);
                }}
                aria-current={activeId === page.id ? "location" : undefined}
                className={`rounded-md px-2 py-2 transition-colors sm:px-3 cursor-pointer ${
                  activeId === page.id
                    ? "bg-(--color-accent) text-white"
                    : "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
                }`}
              >
                {page.label}
              </a>
            ))}
            {themeButton}
          </div>

          {/* Mobile: theme + menu */}
          <div className="sm:hidden flex items-center gap-1">
            {themeButton}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block w-6 h-4" aria-hidden="true">
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur overflow-hidden transition-all duration-300 ease-in-out dark:border-neutral-700 dark:bg-neutral-800/95 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-t-transparent pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="px-4 py-2 space-y-1">
          {pages.map((page) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              tabIndex={open ? 0 : -1}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(page.id);
              }}
              aria-current={activeId === page.id ? "location" : undefined}
              className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                activeId === page.id
                  ? "bg-(--color-accent) text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
              }`}
            >
              {page.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
