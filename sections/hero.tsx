"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

const WORDS = ["Freelance", "Software", "Full-Stack", "AI", "Frontend"]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length)
    }, 2500)

    return () => {
      clearInterval(wordInterval)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  }

  return (
    <section
      id="hero"
      className="min-h-[100svh] relative flex flex-col justify-center pt-24 sm:pt-32 pb-8 sm:pb-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-12 w-full flex-1 flex flex-col justify-center">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Hire Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-foreground/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Available for hire · 2026</span>
            </div>
          </motion.div>

          {/* Huge Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,14vw,6.5rem)] font-bold tracking-tight text-foreground mb-6 sm:mb-8 flex flex-row flex-wrap items-center gap-x-[0.2em] sm:flex-col sm:items-start sm:gap-x-0 leading-[1.1] sm:leading-[1.05]"
          >
            <span className="shrink-0">Meet アカシュ</span>
            <div className="h-[1.1em] overflow-hidden inline-flex items-end">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary tracking-tighter inline-block"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="shrink-0">Engineer.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10 sm:mb-12"
          >
            I am <span className="text-foreground font-black">Akash Kuppattil</span> — a full-stack architect specialized in high-performance digital ecosystems. From complex AI integrations to enterprise-grade web applications, I bridge the gap between architectural precision and elite aesthetics.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-6 relative z-10">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center w-full sm:w-auto gap-2 h-14 px-8 rounded-xl bg-foreground text-background font-bold text-sm tracking-wide shadow-xl shadow-foreground/10 hover:scale-105 active:scale-95 transition-all"
            >
              View Projects <ArrowRight className="w-5 h-5 ml-1" />
            </button>
            <a
              href="https://github.com/akashkuppattil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto gap-2 h-14 px-8 rounded-xl border-2 border-border bg-background hover:bg-muted text-foreground font-bold text-sm tracking-wide shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <Github className="w-5 h-5" /> GitHub <ArrowRight className="w-4 h-4 ml-1 -rotate-45" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
