"use client"

import { Button } from "@/components/ui/button"
import { Code2, Menu, Moon, Sun, X, Info, Box, Cpu, Workflow, Layers, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "About", href: "#about", icon: Info },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Services", href: "#services", icon: Layers },
  { name: "Experience", href: "#experience", icon: Workflow },
  { name: "Projects", href: "#projects", icon: Box },
  { name: "Contact", href: "#contact", icon: Mail },
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
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 50, filter: "blur(10px)" },
    open: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${headerVisible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? "py-4 sm:py-6" : "py-6 sm:py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex justify-between items-center glass p-2 px-4 sm:px-6 rounded-[1.25rem] border-white/5 shadow-2xl transition-all duration-500 ${scrolled ? "bg-background/80" : "bg-transparent border-transparent shadow-none"}`}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-background shadow-lg shadow-accent/20">
                <Code2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </div>
              <span className="text-lg font-black tracking-tighter uppercase block">
                Akash <span className="text-accent">K</span>
              </span>
            </motion.div>

            {/* Controls */}
            <div className="flex items-center gap-2">
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
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                    >
                      {theme === "dark" ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-accent" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              )}

              <Button
                variant="ghost"
                className="group h-11 px-4 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent transition-all duration-300"
                onClick={() => setSideMenuOpen(true)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-background transition-colors hidden xs:inline-block">Open Menu</span>
                  <Menu className="w-5 h-5 text-accent group-hover:text-background transition-colors" />
                </div>
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
              className="fixed inset-0 bg-background/70 backdrop-blur-2xl z-[60]"
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-background border-l border-white/5 z-[70] shadow-2xl p-6 sm:p-12 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12 sm:mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-background shadow-2xl">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Portfolio</p>
                    <p className="text-lg font-black uppercase tracking-tight">Main Menu</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSideMenuOpen(false)}
                  className="w-12 h-12 rounded-full border border-white/5 hover:bg-accent group active:scale-95 transition-all"
                >
                  <X className="w-5 h-5 text-accent group-hover:text-background" />
                </Button>
              </div>

              <div className="flex-grow space-y-1 overflow-y-auto px-2 custom-scrollbar">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between py-5 border-b border-white/[0.03] hover:border-accent/50 transition-all"
                      onClick={() => setSideMenuOpen(false)}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[11px] font-black text-accent/30 group-hover:text-accent transition-colors">0{i + 1}</span>
                        <span className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-foreground group-hover:text-accent group-hover:translate-x-3 transition-all duration-400">
                          {link.name}
                        </span>
                      </div>
                      <link.icon className="w-5 h-5 text-accent/20 group-hover:text-accent transition-all opacity-0 group-hover:opacity-100" />
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto p-6 rounded-[2rem] bg-accent/5 border border-accent/10 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">Get in Touch</p>
                  <a href="mailto:akashskuppattil@gmail.com" className="text-lg sm:text-xl font-black hover:text-accent transition-colors break-all underline decoration-accent/20 underline-offset-4 decoration-2">
                    akashskuppattil@gmail.com
                  </a>
                </div>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <span>© 2026 AKASH K</span>
                  <span className="text-accent italic">Calicut, IN</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
