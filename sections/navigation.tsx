"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-lg shadow-accent/5" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileOpen(false);
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background shadow-lg shadow-accent/20 transition-transform group-hover:scale-110">
              <Code2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">
              Akash <span className="text-accent underline decoration-accent/30 underline-offset-4">K</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-xl hover:bg-accent/10 transition-colors"
                title="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-accent" />}
              </Button>
            )}

            <a href="#contact" className="hidden sm:block">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-6 rounded-full shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5">
                CONNECT
              </Button>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10 rounded-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6 text-accent" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-2xl border-b border-border/50 animate-fade-in shadow-2xl">
          <div className="px-6 py-10 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-2xl font-black uppercase tracking-tight text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-black h-14 uppercase tracking-widest text-sm rounded-2xl shadow-xl shadow-accent/20">
                  CONNECT
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
