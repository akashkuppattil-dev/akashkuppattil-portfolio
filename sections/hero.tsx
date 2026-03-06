"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Download, Github, ChevronRight } from "lucide-react"

const WORDS = ["Software", "Full-Stack", "AI", "Frontend"]

const STATS = [
  { value: 2, suffix: "+", label: "Years Exp." },
  { value: 20, suffix: "+", label: "Projects" },
  { value: 100, suffix: "%", label: "Updated Tech" },
  { value: 2026, suffix: "", label: "Industry Ready" },
]

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      // Avoid dividing by zero or issues with small numbers
      const increment = Math.max(value / (duration / 16), 1)

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [value, isInView])

  return <span ref={ref}>{count}</span>
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [statIndex, setStatIndex] = useState(0)

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length)
    }, 2500)

    const statInterval = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % STATS.length)
    }, 3000)

    return () => {
      clearInterval(wordInterval)
      clearInterval(statInterval)
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
            className="text-[clamp(3rem,14vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-foreground mb-6 sm:mb-8 flex flex-col items-start"
          >
            <span>Creative</span>
            <div className="h-[1.1em] overflow-hidden flex items-end">
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
            <span>Engineer.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10 sm:mb-12"
          >
            Hello, I am <span className="text-foreground font-black">Akash Kuppattil</span>. Building intelligent production systems — from robust full-stack architectures to dynamic web applications that scale and last.
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

      {/* Desktop Bottom Stats Row */}
      <div className="hidden md:block mt-auto px-12 w-full max-w-7xl mx-auto">
        <div className="border-t border-border pt-8 grid grid-cols-4 gap-8 pb-12">
          {STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold flex items-center mb-1">
                <AnimatedNumber value={stat.value} /><span className="text-primary ml-1">{stat.suffix}</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stats Grid */}
      <div className="block md:hidden mt-auto px-5 w-full pb-8">
        <div className="pt-8 border-t border-border grid grid-cols-2 gap-y-8 gap-x-6">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-start border-l-2 border-primary/20 pl-4 group">
              <div className="text-4xl font-black flex items-start leading-none mb-2 text-foreground group-hover:text-primary transition-colors">
                <AnimatedNumber value={stat.value} />
                <span className="text-primary text-xl mt-0.5 ml-0.5 group-hover:text-foreground transition-colors">{stat.suffix}</span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
