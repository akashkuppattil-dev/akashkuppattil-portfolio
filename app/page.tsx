"use client"

import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/sections/navigation"
import Hero from "@/sections/hero"
import About from "@/sections/about"
import Skills from "@/sections/skills"
import Services from "@/sections/services"
import Experience from "@/sections/experience"
import Projects from "@/sections/projects"
import Education from "@/sections/education"
import Certifications from "@/sections/certifications"
import Blog from "@/sections/blog"
import Resume from "@/sections/resume"
import Contact from "@/sections/contact"
import Footer from "@/sections/footer"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Force scroll to top on mount/refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <ThemeProvider>
      {/* Global Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Motion Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-accent/30 rounded-full blur-xl pointer-events-none z-[999] mix-blend-difference hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />

      <Navigation />

      <main className="relative overflow-hidden bg-background">
        {/* Continuous Grain Texture */}
        <div className="fixed inset-0 pointer-events-none noise z-50 opacity-[0.03]"></div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />

        {/* Subtle Section Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mx-auto"></div>

        <Experience />
        <Education />
        <Certifications />
        <Blog />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  )
}
