"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Github, Linkedin, Mail, MessageCircle, Send, Twitter } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:onatadeabdulmajeed@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/Spider1201", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/onatade-abdulmajeed", icon: Linkedin },
  { label: "X", href: "https://x.com/spider337761", icon: Twitter },
  { label: "Dev.to", href: "https://dev.to/onatade_abdulmajeed", icon: BookOpen },
  { label: "WhatsApp", href: "https://wa.me/2349078723366", icon: MessageCircle },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvkgkzzd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#b8791f] dark:text-[#f4b860]">06 / 06 · Contact</p>
          <h2 className="max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">Let&apos;s Connect</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#91a0b4]">
            Open to new opportunities and interesting projects - reach out anytime.
          </p>
          <div className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#91a0b4] transition duration-200 hover:scale-110 hover:border-[#f4b860]/45 hover:bg-[#f4b860]/10 hover:text-[#f4b860]"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border border-white/10 bg-[#0b1829]/70 p-6 shadow-xl shadow-black/10 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="font-mono text-xs uppercase tracking-[0.14em] text-[#d7e0eb]">
              Name
              <input name="name" type="text" required className="mt-2 w-full border border-white/10 bg-[#08111f] px-4 py-3 font-sans text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-[#91a0b4] focus:border-[#f4b860]" placeholder="Your name" />
            </label>
            <label className="font-mono text-xs uppercase tracking-[0.14em] text-[#d7e0eb]">
              Email
              <input name="email" type="email" required className="mt-2 w-full border border-white/10 bg-[#08111f] px-4 py-3 font-sans text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-[#91a0b4] focus:border-[#f4b860]" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-5 block font-mono text-xs uppercase tracking-[0.14em] text-[#d7e0eb]">
            Message
            <textarea name="message" required rows={6} className="mt-2 w-full resize-y border border-white/10 bg-[#08111f] px-4 py-3 font-sans text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-[#91a0b4] focus:border-[#f4b860]" placeholder="Tell me a little about your project..." />
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "submitting"} className="inline-flex items-center gap-2 bg-[#f4b860] px-5 py-3 text-sm font-bold text-[#08111f] transition hover:bg-white disabled:cursor-wait disabled:opacity-60">
              {status === "submitting" ? "Sending..." : "Send Message"}
              <Send size={16} aria-hidden="true" />
            </button>
            <p role="status" aria-live="polite" className="text-sm text-[#91a0b4]">
              {status === "success" && "Thanks - your message has been sent."}
              {status === "error" && "Something went wrong. Please try again or email me directly."}
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
