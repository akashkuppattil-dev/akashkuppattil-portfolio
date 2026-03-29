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

import Methodology from "@/sections/methodology"
import Resume from "@/sections/resume"
import Contact from "@/sections/contact"
import Footer from "@/sections/footer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MarqueeBanner from "@/components/marquee-banner"
import Preloader from "@/components/preloader"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeProvider>
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />



      <Navigation />
      <Preloader />

      <main className="relative overflow-hidden bg-background">
        {/* Grain Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none noise z-50 opacity-[0.025]"></div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Methodology />

        {/* Section Break */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <Experience />
        <Education />
        <Certifications />

        <Resume />
        <Contact />
      </main>

      <Footer />
      <WhatsAppWidget />
    </ThemeProvider>
  )
}
