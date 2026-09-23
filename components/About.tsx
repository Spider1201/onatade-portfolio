"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const highlights = [
  "6+ Projects Shipped",
  "Java & TypeScript",
  "REST API Design",
  "Lagos, Nigeria",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
      >
        <div>
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.25em] text-[#6b3a00] dark:text-[#f4b860]">02 / 06 · About me</p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            I design, build, and deploy reliable software — end to end.
          </h2>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-[#52647c] dark:text-[#91a0b4]">
            <p>I&apos;m a software engineer from Lagos, Nigeria, with a strong focus on backend development.</p>
            <p>My journey into software engineering started with learning how to build applications, but over time I became more interested in what happens behind the scenes — how systems are designed, how APIs communicate, how data is managed, and how applications are tested, deployed, and kept reliable.</p>
            <p>Most of what I&apos;ve learned has come from building things. I&apos;ve worked on projects ranging from REST APIs and payment integrations to crowdfunding platforms, deployment pipelines, and full-stack applications. Some projects went smoothly. Others involved bugs, failed deployments, confusing errors, and technologies I had never used before. Those experiences taught me to get comfortable with figuring things out instead of giving up when I don&apos;t immediately have the answer.</p>
            <p>Today, I work mainly with Java and Spring Boot, alongside technologies such as JavaScript/TypeScript, React, Node.js, PostgreSQL, MongoDB, Docker, and REST APIs. I&apos;m particularly interested in backend engineering, distributed systems, software testing, and building applications that can actually be used in the real world.</p>
            <p>I also believe that building software is only part of becoming a good engineer. I document what I learn, share my mistakes and lessons publicly, and constantly try to improve how I communicate technical ideas. My #100DaysOfCode journey has been a big part of that — showing up consistently, learning difficult topics, building projects, and sharing the process along the way.</p>
            <p>I&apos;m still learning, still building, and still figuring things out — but that&apos;s exactly what I enjoy about software engineering. If there&apos;s a real problem to solve, I want to build my way toward the answer.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Professional highlights">
            {highlights.map((highlight) => (
              <span key={highlight} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-[#34465e] dark:text-[#d7e0eb]">
                {highlight === "Lagos, Nigeria" && <MapPin size={13} className="text-[#f4b860]" />}
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-[#f4b860]/10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#0b1829] shadow-2xl shadow-black/25">
            <Image src="/profile.jpeg" alt="Onatade Abdulmajeed" fill loading="lazy" sizes="(min-width: 1024px) 360px, (min-width: 640px) 384px, 100vw" className="object-cover" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
