"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { X, Menu, Moon, Sun, ArrowRight, Github, Linkedin, Instagram } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const prev = scrollY.getPrevious() || 0
      if (latest > 100 && latest > prev) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    })
  }, [scrollY])

  const scrollTo = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren"
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren"
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] h-24 flex items-center bg-background/50 backdrop-blur-xl border-b border-border/10 px-4 md:px-10 lg:px-16"
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col items-start mr-auto">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold tracking-tight text-foreground leading-none"
            >
              Akash Kuppattil
            </button>
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mt-2 px-0.5">
              Full-Stack Developer
            </span>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <nav className="hidden lg:flex items-center gap-8 mr-6">
              {["Work", "Services", "Experience", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all"
                >
                  {link}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/40 transition-colors"
            >
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:flex items-center gap-3 px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] group hover:scale-105 transition-all"
            >
              Start Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              className="lg:hidden text-foreground p-2"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[110] bg-background flex flex-col pt-32 pb-12 px-8 sm:px-16"
          >
            <div className="absolute top-8 right-8 flex items-center gap-6">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
              </button>
              <button 
                className="text-foreground p-2 border border-border rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col h-full justify-between">
              <nav className="flex flex-col gap-6">
                {["Work", "Services", "Experience", "Resume", "Contact"].map((link, idx) => (
                  <motion.button
                    key={link}
                    custom={idx}
                    variants={linkVariants}
                    onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                    className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase text-left hover:italic transition-all group"
                  >
                    <span className="block group-hover:pl-4 transition-all duration-500">
                      {link} <ArrowRight className="inline-block w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 transition-all" />
                    </span>
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto border-t border-border/50 pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-12">
                <div className="space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground block">Connectivity</span>
                   <div className="flex gap-8">
                      <a href="https://github.com/akashkuppattil-dev" target="_blank" className="hover:text-muted-foreground transition-colors"><Github size={24}/></a>
                      <a href="https://linkedin.com/in/akash-k-developer" target="_blank" className="hover:text-muted-foreground transition-colors"><Linkedin size={24}/></a>
                      <a href="https://instagram.com/akash__kuppattil" target="_blank" className="hover:text-muted-foreground transition-colors"><Instagram size={24}/></a>
                   </div>
                </div>

                <div className="text-right hidden sm:block">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">© 2026 Akash Kuppattil</p>
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mt-2">TECHNICAL ARCHITECT</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
