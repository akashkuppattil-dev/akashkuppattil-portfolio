"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import {
  Code2, Moon, Sun, X, Sparkles,
  User, Cpu, FolderKanban, Briefcase, BookOpen, Mail,
  Download, Github, Linkedin, MapPin
} from "lucide-react"
import { useTheme } from "next-themes"

const NAV_LINKS = [
  { name: "About", href: "#about", Icon: User },
  { name: "Skills", href: "#skills", Icon: Cpu },
  { name: "Projects", href: "#projects", Icon: FolderKanban },
  { name: "Services", href: "#services", Icon: Briefcase },
  { name: "Experience", href: "#experience", Icon: BookOpen },
  { name: "Contact", href: "#contact", Icon: Mail },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActive] = useState("hero")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  const [hidden, setHidden] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const prev = scrollY.getPrevious() || 0;
      if (latest < 40) {
        setHidden(false)
        setScrolled(false)
      } else if (latest > 40 && latest > prev) {
        // Scrolling down
        setHidden(true)
        setScrolled(true)
      } else {
        // Scrolling up
        setHidden(false)
        setScrolled(true)
      }
    })
  }, [scrollY])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    const ids = ["hero", "about", "skills", "projects", "services", "experience", "contact"]
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const go = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <>
      {/* ════════════════════════════
           DESKTOP HEADER
         ════════════════════════════ */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-[90] flex justify-center px-4 w-full pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-[95vw] sm:max-w-max flex items-center justify-between gap-3 sm:gap-6 px-5 sm:px-6 py-2.5 sm:py-2.5 rounded-full bg-foreground/[0.03] backdrop-blur-3xl border border-border shadow-2xl">

          {/* Logo */}
          <button onClick={() => go("#hero")} className="flex items-center gap-2 group flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Akash Kuppattil</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 ml-4 mr-4 border-x border-border/50 px-6 overflow-x-auto scrollbar-hide">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Experience", href: "#experience" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => go(link.href)}
                className={`flex-shrink-0 relative text-[11px] font-semibold uppercase tracking-widest transition-colors ${activeSection === link.href.replace("#", "") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="active-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />)}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1 items-center justify-center w-5 text-foreground"
            >
              <span className="w-full h-[1px] bg-foreground" />
              <span className="w-full h-[1px] bg-foreground" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ════════════════════════════
           MOBILE APP-STYLE DRAWER
         ════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-up drawer */}
            <motion.div
              key="drawer"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed bottom-0 left-0 right-0 z-[96] lg:hidden rounded-t-[2rem] bg-transparent border-t border-foreground/10 shadow-2xl shadow-black/40 overflow-hidden"
              style={{ maxHeight: "92vh" }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-4 pb-2">
                <div className="w-10 h-1 rounded-full bg-foreground/20" />
              </div>

              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 pb-4 border-b border-foreground/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground shadow-md shadow-accent/20">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-base font-black uppercase tracking-wide">Akash Kuppattil</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-accent">Full-Stack · AI · Software</p>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-xl glass border border-foreground/10 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Grid — App icon style */}
              <div className="px-5 py-5 grid grid-cols-3 gap-3">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "")
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 22 }}
                      onClick={() => go(link.href)}
                      className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl transition-all active:scale-95 ${isActive
                        ? "bg-accent/15 border border-accent/30 text-accent"
                        : "bg-foreground/[0.04] border border-foreground/[0.06] text-foreground hover:bg-foreground/10"
                        }`}
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isActive ? "bg-accent text-accent-foreground" : "bg-foreground/10 text-foreground"
                        }`}>
                        <link.Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{link.name}</span>
                    </motion.button>
                  )
                })}
              </div>

              {/* Quick actions row */}
              <div className="px-5 pb-4 grid grid-cols-2 gap-3">
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => go("#contact")}
                  className="flex items-center justify-center gap-2.5 h-13 py-3.5 rounded-2xl bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-[0.25em] shadow-lg shadow-accent/20 active:scale-95 transition-all"
                >
                  <Sparkles className="w-4 h-4" /> Hire Me
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href="/Akash_K_Software_Developer_Resume.pdf"
                  download
                  className="flex items-center justify-center gap-2.5 h-13 py-3.5 rounded-2xl glass border border-foreground/15 text-[10px] font-black uppercase tracking-[0.25em] active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" /> Resume
                </motion.a>
              </div>

              {/* Social + Theme row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="px-5 pb-6"
              >
                <div className="rounded-2xl bg-foreground/[0.04] border border-foreground/[0.06] p-4 flex items-center justify-between">
                  {/* Socials */}
                  <div className="flex items-center gap-2">
                    <a href="https://github.com/akashkuppattil-dev" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all active:scale-90">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="https://linkedin.com/in/akash-k-developer" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all active:scale-90">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-1.5 ml-2">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Kerala</span>
                    </div>
                  </div>

                  {/* Theme toggle */}
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-10 h-10 rounded-xl glass border border-foreground/10 flex items-center justify-center text-muted-foreground active:scale-90 transition-all"
                  >
                    {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
                    {!mounted && <div className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
