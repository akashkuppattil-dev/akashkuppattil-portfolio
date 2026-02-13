"use client"

import { Button } from "@/components/ui/button"
import { Code2, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHeaderVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: "spring", stiffness: 400, damping: 40 } },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 + 0.3 },
    }),
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${headerVisible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? "py-4" : "py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center glass p-2 px-6 rounded-2xl border-white/5 shadow-2xl transition-all duration-500 ${scrolled ? "bg-background/80" : "bg-transparent border-transparent shadow-none"}`}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-background shadow-xl shadow-accent/20">
                <Code2 className="w-6 h-6 transition-transform group-hover:rotate-12" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase hidden sm:block">
                Akash <span className="text-accent underline decoration-accent/30 underline-offset-4 decoration-4">K</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-10 h-10 rounded-xl hover:bg-accent/10 transition-colors"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-accent" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-xl hover:bg-accent/10"
                onClick={() => setSideMenuOpen(true)}
              >
                <Menu className="w-7 h-7 text-accent" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Side Menu */}
      <AnimatePresence>
        {sideMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSideMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[60]"
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 h-full w-full sm:w-[450px] md:w-[500px] bg-background border-l border-white/5 z-[70] shadow-2xl p-6 sm:p-16 flex flex-col justify-between"
            >
              <div className="space-y-10 sm:space-y-12">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent flex items-center justify-center text-background shadow-2xl shadow-accent/20">
                    <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSideMenuOpen(false)} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/5 hover:bg-accent/10">
                    <X className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Removed "Navigation Menu" text as requested */}
                  <div className="space-y-2 sm:space-y-4">
                    {navLinks.map((link, i) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        custom={i}
                        variants={linkVariants}
                        className="block text-5xl sm:text-7xl font-black uppercase tracking-tighter text-foreground hover:text-accent transition-all hover:translate-x-2 sm:hover:translate-x-4"
                        onClick={() => setSideMenuOpen(false)}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="h-[1px] w-full bg-gradient-to-r from-accent/50 to-transparent"></div>
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Let's Connect</p>
                  <a href="mailto:akashskuppattil@gmail.com" className="text-xl font-bold hover:text-accent transition-colors break-all">
                    akashskuppattil@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
