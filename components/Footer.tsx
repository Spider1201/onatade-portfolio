import { BookOpen, Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:onatadeabdulmajeed@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/Spider1201", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/onatade-abdulmajeed", icon: Linkedin },
  { label: "X", href: "https://x.com/spider337761", icon: Twitter },
  { label: "Dev.to", href: "https://dev.to/onatade_abdulmajeed", icon: BookOpen },
  { label: "WhatsApp", href: "https://wa.me/2349078723366", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="font-mono text-xs text-[#91a0b4]">© 2026 Onatade Abdulmajeed</p>
        <div className="flex items-center gap-4" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#91a0b4] transition hover:scale-110 hover:text-[#f4b860]"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
