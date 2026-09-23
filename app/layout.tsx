import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Onatade Abdulmajeed | Full-Stack Software Developer",
  description:
    "Full-Stack Developer, technical writer, and developer relations professional specializing in Java/Spring Boot and TypeScript/React, based in Lagos, Nigeria.",
  openGraph: {
    title: "Onatade Abdulmajeed | Full-Stack Software Developer",
    description:
      "Full-Stack Developer, technical writer, and developer relations professional specializing in Java/Spring Boot and TypeScript/React, based in Lagos, Nigeria.",
    type: "website",
    images: [{ url: "/logo.png", width: 1280, height: 1280, alt: "Onatade Abdulmajeed logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onatade Abdulmajeed | Full-Stack Software Developer",
    description: "Full-Stack Developer, technical writer, and developer relations professional specializing in Java/Spring Boot and TypeScript/React, based in Lagos, Nigeria.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var theme = localStorage.getItem("theme"); var isDark = theme !== "light"; document.documentElement.dataset.theme = isDark ? "dark" : "light"; document.documentElement.classList.toggle("dark", isDark); } catch (error) { document.documentElement.dataset.theme = "dark"; document.documentElement.classList.add("dark"); }`,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
