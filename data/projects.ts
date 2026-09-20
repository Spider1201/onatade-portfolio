export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  apiUrl?: string;
  docsUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "VeriFund",
    description:
      "A fundraising platform enabling verified organizations to run transparent, time-boxed relief campaigns with full donation and disbursement tracking. Built with JWT auth, role-based access control, and Monnify payment integration.",
    tech: ["Java 21", "Spring Boot", "Spring Security", "MongoDB", "JWT", "Docker"],
    githubUrl: "https://github.com/Spider1201/VeriFund",
    liveUrl: "https://verifund-f.vercel.app/",
    apiUrl: "https://verifund-mmwl.onrender.com",
    docsUrl: "https://verifund-mmwl.onrender.com/swagger-ui/index.html",
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
    githubUrl: "https://github.com/Spider1201/deployment-system",
    featured: true,
  },
  {
    title: "JobPost API",
    description:
      "A production-ready RESTful job-posting API with keyword search and full Swagger/OpenAPI documentation.",
    tech: ["Java 21", "Spring Boot", "MongoDB Atlas", "Docker"],
    githubUrl: "https://github.com/Spider1201/job-post",
    liveUrl: "https://jobposting-app.netlify.app/",
    apiUrl: "https://job-post-api.onrender.com",
    docsUrl: "https://job-post-api.onrender.com/swagger-ui/index.html",
  },
  {
    title: "Air Easy",
    description:
      "A cross-platform flight reservation app with real-time seat availability, booking flow, and account management.",
    tech: ["Java Spring Boot", "MySQL", "React Native"],
  },
  {
    title: "Location Finder",
    description:
      "A mobile app for discovering nearby places within a custom search radius, using live location and an interactive satellite map view. Features a distance slider, search, and one-tap 'Get My Location'.",
    tech: ["React Native", "Google Maps API"],
    githubUrl: "https://github.com/Spider1201/Location-Finder",
  },
  {
    title: "Hospital Management System",
    description:
      "A desktop application for managing patient records, appointments, and staff data, built collaboratively with a team, with ownership of backend services and UI components.",
    tech: ["Java Spring", "JavaFX", "MongoDB"],
    githubUrl: "https://github.com/Spider1201/HospitalManagementSystem",
  },
];