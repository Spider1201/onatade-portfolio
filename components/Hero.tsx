"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute right-[-12rem] top-1/4 h-[32rem] w-[32rem] rounded-full border border-[#f4b860]/10 bg-[#f4b860]/5 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-end gap-16 lg:grid-cols-[1fr_0.42fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">Open to full-stack roles and collaborations that solve real problems</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">Onatade<br /><span className="text-[#f4b860]">Abdulmajeed</span></h1>
          <p className="mt-8 max-w-xl text-xl font-medium text-[#d7e0eb] sm:text-2xl">Full-Stack Developer · Technical Writer · Developer Relations</p>
          <motion.a href="#articles" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="mt-5 inline-flex rounded-full border border-[#f4b860]/35 bg-[#f4b860]/10 px-4 py-2 font-mono text-xs text-[#f4b860] shadow-[0_0_18px_rgba(244,184,96,0.12)] transition hover:border-[#f4b860] hover:bg-[#f4b860]/15 hover:shadow-[0_0_24px_rgba(244,184,96,0.25)]">
            <span aria-hidden="true">📅 Day 94 of #100DaysOfCode — Week 15</span>
          </motion.a>
          <p className="mt-4 max-w-lg text-base leading-7 text-[#91a0b4]">I turn complex ideas into clear, reliable digital experiences, from the first line of code to the last interaction.</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="hero-project-cta group inline-flex items-center gap-3 border border-[#f4b860]/60 bg-[#f4b860] px-5 py-3 text-sm font-bold text-[#08111f] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#ffd38a] hover:text-[#08111f] hover:shadow-[0_8px_24px_rgba(244,184,96,0.2)]">View Projects <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <a href="#contact" className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-[#f4b860] hover:text-[#f4b860]">Get in Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="Onatade-Abdulmajeed-Resume.pdf" className="inline-flex items-center gap-2 px-3 py-3 text-sm text-[#91a0b4] transition hover:text-white"><Download size={16} /> Resume</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="hidden border-l border-white/10 pl-8 lg:block">
          <p className="font-mono text-xs leading-6 text-[#91a0b4]">01 / 06<br /><span className="text-white">Scroll to explore</span></p>
          <ArrowDown size={18} className="mt-10 text-[#f4b860]" />
        </motion.div>
      </div>
    </section>
  );
}