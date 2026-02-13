"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, Layout, Database, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background py-16 px-4 sm:px-6"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-30 bg-background"></div>
      <div className="absolute inset-0 -z-20 bg-grid opacity-[0.03] mask-radial"></div>
      <div className="absolute inset-0 -z-10 noise pointer-events-none"></div>

      {/* Floating Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] min-w-[300px] bg-accent/20 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] min-w-[250px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow [animation-delay:2s] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 sm:space-y-12"
      >
        {/* Modern Status Badge */}
        <motion.div
          variants={itemVariants}
          className="px-5 py-2 rounded-2xl glass border border-accent/20 flex items-center gap-3 group hover:border-accent/40 transition-all cursor-default"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent animate-ping absolute"></div>
            <div className="w-2 h-2 rounded-full bg-accent relative"></div>
          </div>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent">
            Available 2026 <span className="text-accent/40 ml-2 hidden sm:inline">| Open for High-Impact Projects</span>
          </span>
        </motion.div>

        {/* Cinematic Headline - Further tuned for mobile widths */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase relative">
            <span className="block drop-shadow-2xl">Creative</span>
            <span className="block text-accent italic relative">
              Software
              <Sparkles className="absolute -top-2 -right-4 sm:-top-4 sm:-right-8 w-6 h-6 sm:w-12 sm:h-12 text-accent animate-pulse" />
            </span>
            <span className="block text-foreground/30">Engineer</span>
          </h1>
        </motion.div>

        {/* Refined Bio Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl w-full p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] via-transparent to-transparent opacity-50"></div>

          <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
            <p className="text-lg sm:text-2xl md:text-3xl text-foreground font-medium leading-tight text-center md:text-left">
              Hey, I'm <span className="font-black text-accent">Akash K</span>. I engineer <span className="underline decoration-accent/40 decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">intelligent production systems</span> for the digital future.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4">
              {[
                { icon: Zap, label: "Full-Stack" },
                { icon: Layout, label: "UI/UX" },
                { icon: Database, label: "AI Systems" }
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-accent group-hover:border-accent/30 transition-all">
                  <tag.icon className="w-3 h-3 sm:w-4 sm:h-4 text-accent" /> {tag.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-2"
        >
          <Button
            size="lg"
            className="h-14 sm:h-16 px-8 sm:px-10 bg-accent hover:bg-accent/90 text-accent-foreground gap-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-accent/20 group w-full sm:flex-1"
            onClick={handleViewProjects}
          >
            Launch Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <a href="/Akash_K_Software_Developer_Resume.pdf" download className="w-full sm:flex-1">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 sm:h-16 px-8 sm:px-10 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-2xl border-white/10 glass hover:bg-accent/5 gap-3 group"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform" /> Resume
            </Button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="pt-8 sm:pt-16 flex flex-col items-center gap-3 sm:gap-4"
        >
          <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-accent/50 to-transparent"></div>
          <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground animate-bounce">Scroll to Explore</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
