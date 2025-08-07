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
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/95 shadow-lg backdrop-blur border-b">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo + Project Name */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/eagle-logo.png" alt="EAGLE Logo" className="h-10 w-14 drop-shadow" />
          <span className="text-2xl font-extrabold tracking-tighter">EAGLE</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 ml-8">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl transition text-base font-semibold
                  ${isActive 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-primary/5 text-neutral-700"
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
            className="rounded-lg cursor-pointer"
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
          <div className="mx-2 rounded-2xl bg-white shadow-xl border mt-2 p-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={`block w-full rounded-lg px-4 py-3 text-base font-semibold transition
                    ${isActive ?
                      "bg-primary/10 text-primary" :
                      "hover:bg-primary/5 text-neutral-700"}
                  `}
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
