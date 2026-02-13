"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="hero"
      className="min-h-[100vh] flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.03]"></div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full px-4 relative z-10 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 text-accent"
        >
          <Sparkles className="w-3.5 h-3.5 fill-accent/20" />
          <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.3em]">
            Available for Design & Development 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="space-y-2 mb-10 w-full overflow-hidden">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase flex flex-col items-center">
            <span className="block text-foreground drop-shadow-2xl">Creative</span>
            <span className="flex items-center gap-2 sm:gap-4 text-accent italic">
              <span className="h-[1px] md:h-[2px] w-8 md:w-32 bg-accent/30 rounded-full hidden xs:block"></span>
              Fullstack
              <span className="h-[1px] md:h-[2px] w-8 md:w-32 bg-accent/30 rounded-full hidden xs:block"></span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/30">Developer</span>
          </h1>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl w-full p-8 md:p-12 rounded-[2.5rem] glass border border-white/10 shadow-3xl text-center mb-12 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-[2.5rem] -z-10 group-hover:opacity-100 transition-opacity opacity-50"></div>

          <p className="text-base md:text-2xl text-muted-foreground leading-relaxed font-medium px-2 md:px-4">
            Hi, I'm <span className="text-foreground font-black underline decoration-accent/40 decoration-4 underline-offset-4">Akash K</span>.
            I craft immersive digital experiences where <span className="text-accent italic">stunning visuals</span> meet
            <span className="text-primary font-bold"> high-performance</span> code.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Next.js", "AI Integration", "Premium UX", "Software Architecture"].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-xl bg-accent/5 border border-accent/10 text-[9px] font-black uppercase tracking-widest text-accent/80">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="h-16 px-12 bg-accent hover:bg-accent/90 text-accent-foreground gap-4 text-xs font-black uppercase tracking-[0.2em] rounded-[1.25rem] shadow-2xl shadow-accent/20 group relative overflow-hidden"
            onClick={handleViewProjects}
          >
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Button>

          <a href="/Akash_K_Software_Developer_Resume.pdf" download className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-16 px-12 text-xs font-black uppercase tracking-[0.2em] rounded-[1.25rem] border-white/10 glass hover:bg-accent/5 transition-all flex gap-3"
            >
              <Download className="w-5 h-5" /> Download CV
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Elements for 3D Feel */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-24 h-24 border border-accent/20 rounded-2xl rotate-12 hidden lg:block glass"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] w-16 h-16 border border-primary/20 rounded-full hidden lg:block glass"
      />
    </section>
  )
}

