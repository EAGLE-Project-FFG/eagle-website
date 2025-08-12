import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "News", to: "/news" },
  { label: "Project", to: "/project" },
  { label: "Results", to: "/results" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 shadow-lg backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo + Project Name */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/eagle-logo.png"
            alt="EAGLE Logo"
            className="h-10 w-14 drop-shadow"
          />
          <span className="text-3xl font-extrabold tracking-tight drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.15)]">
            <span className="bg-gradient-to-r from-[#C0D444] to-[#A4BA35] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(192,212,68,0.25)]">
              EA
            </span>
            <span className="bg-gradient-to-r from-[#1E4A89] to-[#163C70] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(30,74,137,0.25)]">
              GLE
            </span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="ml-8 hidden gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2 text-base font-semibold transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-neutral-700 hover:bg-primary/5"
                  }`
                }
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            asChild
            size="icon"
            variant="ghost"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="cursor-pointer rounded-lg"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 z-50 w-full animate-in fade-in-0 slide-in-from-top-2 md:hidden">
          <div className="mx-2 mt-2 flex flex-col gap-2 rounded-2xl border bg-white p-4 shadow-xl">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={`block w-full rounded-lg px-4 py-3 text-base font-semibold transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-neutral-700 hover:bg-primary/5"
                  } `}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
