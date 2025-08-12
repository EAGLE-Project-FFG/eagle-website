import { Link, NavLink } from "react-router";
import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const nav = [
    { label: "Home", to: "/" },
    { label: "News", to: "/news" },
    { label: "Project", to: "/project" },
    { label: "Results", to: "/results" },
    { label: "Partners", to: "/partners" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="border-t bg-white/90 backdrop-blur">
      {/* Top area */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid justify-center gap-8 md:grid-cols-3 md:items-center">
          {/* Brand */}
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/eagle-logo.png"
                alt="EAGLE Logo"
                className="h-8 w-10"
              />
              <span className="text-3xl font-extrabold tracking-tight drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.15)]">
                <span className="bg-gradient-to-r from-[#C0D444] to-[#A4BA35] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(192,212,68,0.25)]">
                  EA
                </span>
                <span className="bg-gradient-to-r from-[#1E4A89] to-[#163C70] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(30,74,137,0.25)]">
                  GLE
                </span>
              </span>
            </Link>
            <p className="max-w-[15rem] text-left text-xs text-muted-foreground">
              Enterprise Architecture Knowledge Graph for Learning & Exploration
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2 md:justify-items-start">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-primary ${
                    isActive
                      ? "font-medium text-primary"
                      : "text-muted-foreground"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* Funding */}
          <div className="w-full md:w-auto md:justify-self-end">
            <a
              href="https://www.ffg.at/"
              target="_blank"
              rel="noreferrer"
              aria-label="FFG Website"
              className="block w-full"
            >
              <img
                src="/ffg-logo.png"
                alt="FFG Logo"
                className="w-full max-w-[200px] object-contain md:max-w-[200px]"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar with socials + legal */}
      <div className="border-t">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {year} EAGLE. All rights reserved.</span>

          {/* Socials: center on mobile, right on desktop */}
          <div className="flex items-center justify-center gap-2 md:order-last">
            <a
              href="https://github.com/EAGLE-Project-FFG"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 transition hover:bg-muted"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href="mailto:dominik.bork@tuwien.ac.at"
              aria-label="Email"
              className="rounded-md p-2 transition hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/dirigenta/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 transition hover:bg-muted"
            >
              <SiLinkedin className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Link to="/imprint" className="hover:text-primary">
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
