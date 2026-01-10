"use client"
import { Button } from "@/components/ui/button"
import { Code2, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
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
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setMounted(true)
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setHeaderVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${headerVisible ? '' : '-translate-y-full'} ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-lg shadow-accent/5" : "bg-background/80 backdrop-blur-xl py-3"
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

            {/* Desktop menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex w-10 h-10 rounded-xl"
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
            >
              <Menu className="w-6 h-6 text-accent" />
            </Button>

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

    {/* Side Menu */}
    <div className={`fixed right-0 top-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border/50 transform transition-transform duration-300 z-50 ${sideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-8">
        <div className="flex justify-between items-center mb-12">
          <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-background shadow-lg shadow-accent/20">
            <Code2 className="w-6 h-6" />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setSideMenuOpen(false)} className="w-12 h-12 rounded-full">
            <X className="w-8 h-8 text-accent" />
          </Button>
        </div>
        <div className="space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-3xl font-black uppercase tracking-tight text-foreground hover:text-accent transition-colors"
              onClick={() => setSideMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
