"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["About", "Skills", "Projects", "Articles", "Contact"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const sections = ["home", ...links.map((link) => link.toLowerCase())]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border border-white/10 bg-[#0b1829]/85 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        <a href="#home" className="font-mono text-sm font-bold tracking-tight text-white" onClick={() => setOpen(false)}>
          OA<span className="text-[#f4b860]">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={`text-xs uppercase tracking-[0.16em] transition-colors hover:text-[#f4b860] ${activeSection === link.toLowerCase() ? "text-[#f4b860]" : "text-[#91a0b4]"}`}>
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Toggle color theme" onClick={() => setDark(!dark)} className="rounded-full p-2 text-[#91a0b4] transition hover:bg-white/10 hover:text-[#f4b860]">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button type="button" aria-label="Toggle navigation menu" onClick={() => setOpen(!open)} className="rounded-full p-2 text-white md:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {open && <div className="absolute inset-x-0 top-full mt-2 flex flex-col gap-5 border border-white/10 bg-[#0b1829] p-6 md:hidden">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className={`text-xs uppercase tracking-[0.16em] ${activeSection === link.toLowerCase() ? "text-[#f4b860]" : "text-[#91a0b4]"}`}>{link}</a>)}</div>}
      </nav>
    </header>
  );
}