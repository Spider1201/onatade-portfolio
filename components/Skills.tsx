"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    name: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    skills: ["React", "React Native", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "Spring Security", "Node.js", "Express.js"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    name: "API & Security",
    skills: ["REST API Design", "JWT", "RBAC", "Swagger/OpenAPI 3", "Zod"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git/GitHub", "AWS", "Google Cloud", "Redis"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">03 / 06 · Toolkit</p>
          <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Skills &amp; Tech Stack
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#91a0b4]">
            A practical toolkit for building dependable products across the frontend, backend, and infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.name}
              variants={cardVariants}
              className="border border-white/10 bg-[#0b1829]/70 p-5 shadow-xl shadow-black/10 transition-colors hover:border-[#f4b860]/25"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7e0eb]">{group.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2" aria-label={`${group.name} skills`}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-[#91a0b4] transition duration-200 hover:scale-[1.03] hover:border-[#f4b860]/45 hover:bg-[#f4b860]/10 hover:text-[#f4b860]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
