"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute right-[-12rem] top-1/4 h-[32rem] w-[32rem] rounded-full border border-[#f4b860]/10 bg-[#f4b860]/5 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-end gap-16 lg:grid-cols-[1fr_0.42fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">Available for thoughtful collaborations</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">Onatade<br /><span className="text-[#f4b860]">Abdulmajeed</span></h1>
          <p className="mt-8 max-w-xl text-xl font-medium text-[#d7e0eb] sm:text-2xl">Full-Stack Software Developer</p>
          <p className="mt-4 max-w-lg text-base leading-7 text-[#91a0b4]">I turn complex ideas into clear, reliable digital experiences, from the first line of code to the last interaction.</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-3 bg-[#f4b860] px-5 py-3 text-sm font-bold text-[#08111f] transition hover:bg-white">View Projects <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <a href="#contact" className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-[#f4b860] hover:text-[#f4b860]">Get in Touch</a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-3 py-3 text-sm text-[#91a0b4] transition hover:text-white"><Download size={16} /> Resume</a>
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