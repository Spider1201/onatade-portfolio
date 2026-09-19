import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onatade Abdulmajeed | Full-Stack Software Developer",
  description:
    "Portfolio of Onatade Abdulmajeed, a full-stack software developer building thoughtful digital products.",
  openGraph: {
    title: "Onatade Abdulmajeed | Full-Stack Software Developer",
    description:
      "Explore the work and writing of Onatade Abdulmajeed.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className="h-full"><body className="min-h-full">{children}</body></html>;
}
