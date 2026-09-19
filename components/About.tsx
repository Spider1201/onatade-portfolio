"use client";

import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";

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
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">02 / 06 · About me</p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Building with care, from idea to impact.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#91a0b4]">
            I&apos;m a Full-Stack Developer based in Lagos, Nigeria, with hands-on experience designing, building, and maintaining scalable, secure software across both client and server. I work comfortably across Java/Spring Boot and JavaScript/TypeScript/Node.js, with a track record of shipping clean APIs, integrating payment gateways (Paystack, Monnify), and collaborating with product and design teams to deliver reliable applications end-to-end. I care about writing well-tested, well-documented code and enjoy solving real organizational problems — currently exploring FinTech, EdTech, and Web3.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Professional highlights">
            {highlights.map((highlight) => (
              <span key={highlight} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-[#d7e0eb]">
                {highlight === "Lagos, Nigeria" && <MapPin size={13} className="text-[#f4b860]" />}
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-[#f4b860]/10" />
          <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-3xl border border-white/10 bg-[#0b1829] shadow-2xl shadow-black/25">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(244,184,96,0.16),transparent_38%)]" />
            <div className="relative flex w-full items-center justify-center pb-12 text-center">
              <div>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#f4b860]/30 bg-[#f4b860]/10 text-[#f4b860]">
                  <Camera size={25} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d7e0eb]">Professional photo</p>
                <p className="mt-2 text-sm text-[#91a0b4]">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
