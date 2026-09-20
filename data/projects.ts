export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "VeriFund",
    description:
      "A fundraising platform enabling verified organizations to run transparent, time-boxed relief campaigns with full donation and disbursement tracking. Built with JWT auth, role-based access control, and Monnify payment integration.",
    tech: ["Java 21", "Spring Boot", "Spring Security", "MongoDB", "JWT", "Docker"],
    featured: true,
  },
  {
    title: "Club Vest",
    description:
      "A membership management platform supporting multiple user roles, Paystack payment integration, and a responsive dashboard for clubs to manage inventory and memberships.",
    tech: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "Paystack", "Zod"],
    featured: true,
  },
  {
    title: "Mini PaaS",
    description:
      "A deployment pipeline platform with one-click GitHub deploys, auto-generated Dockerfiles, and live build/deploy log streaming via SSE.",
    tech: ["Express.js", "TypeScript", "Docker Engine API", "Caddy", "React", "Vite"],
    featured: true,
  },
  {
    title: "JobPost API",
    description:
      "A production-ready RESTful job-posting API with keyword search and full Swagger/OpenAPI documentation.",
    tech: ["Java 21", "Spring Boot", "MongoDB Atlas", "Docker"],
  },
  {
    title: "Air Easy",
    description:
      "A cross-platform flight reservation app with real-time seat availability, booking flow, and account management.",
    tech: ["Java Spring Boot", "MySQL", "React Native"],
  },
];