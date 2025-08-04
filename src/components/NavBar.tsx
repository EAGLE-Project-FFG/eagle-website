import { NavLink } from "react-router"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const NAV_ITEMS = [
    { label: "Home", to: "/" },
    { label: "Project", to: "/project" },
    { label: "Partners", to: "/partners" },
    { label: "Contact", to: "/contact" },
]

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src="/eagle-logo.png" alt="Logo" className="h-16 w-16 object-contain"/>
        </NavLink>
        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <NavLink to={item.to} className="px-4 py-2">
                    {item.label}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
