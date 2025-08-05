import { useState } from "react"
import { NavLink } from "react-router"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "News", to: "/news" },
  { label: "Project", to: "/project" },
  { label: "Results", to: "/results" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
]

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 bg-white w-full border-b z-50">
      <div className="flex items-center justify-between px-4 h-16">
        {/* Logo + Project Name */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/eagle-logo.png" alt="EAGLE Logo" className="h-10 w-14" />
          <span className="font-bold text-lg text-primary">EAGLE</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="px-3 text-lg"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            asChild
            size="icon"
            variant="ghost"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-lg"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-17 left-0 w-full shadow-lg z-50 animate-in fade-in-0 duration-500 slide-in-from-top-2">
          <nav className="flex flex-col gap-1 p-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="w-full text-left text-lg justify-start px-3 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </nav>
  )
}
