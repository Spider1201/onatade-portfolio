"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Github, Server } from "lucide-react";
import { projects } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const projectActionClassName = "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#91a0b4] transition duration-200 ease-out hover:scale-105 hover:border-[#f4b860]/60 hover:bg-[#f4b860]/15 hover:text-[#f4b860]";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">04 / 06 · Selected work</p>
          <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#91a0b4]">
            A selection of products and platforms built to solve practical problems with thoughtful engineering.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className={`group relative flex min-h-[21rem] flex-col border bg-[#0b1829]/70 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 ${project.featured ? "border-[#f4b860]/35" : "border-white/10 hover:border-[#f4b860]/25"}`}
            >
              {project.featured && (
                <span className="absolute right-5 top-5 rounded-full border border-[#f4b860]/25 bg-[#f4b860]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4b860]">
                  Featured
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-white">{project.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#91a0b4]">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8" aria-label={`${project.title} technology stack`}>
                {project.tech.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-[#d7e0eb]">
                    {technology}
                  </span>
                ))}
              </div>
              {(project.githubUrl || project.liveUrl || project.apiUrl || project.docsUrl) && (
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} title="View GitHub repository" className={projectActionClassName}>
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} title="View live demo" className={projectActionClassName}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.apiUrl && (
                    <a href={project.apiUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} API`} title="Open API" className={projectActionClassName}>
                      <Server size={18} />
                    </a>
                  )}
                  {project.docsUrl && (
                    <a href={project.docsUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} API documentation`} title="Read API documentation" className={projectActionClassName}>
                      <BookOpen size={18} />
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
