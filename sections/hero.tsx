"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,_var(--accent)_0%,_transparent_50%)] opacity-[0.05]"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-4 animate-fade-in relative z-10 flex flex-col items-center">
        {/* Welcome Text */}
        <div className="mb-4 animate-slide-up flex items-center gap-2">
          <span className="text-lg">👋</span>
          <p className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-accent">
            Hi, I'm Akash K — Welcome to my digital workspace
          </p>
        </div>

        {/* Impactful Headline */}
        <div className="text-center space-y-4 mb-10 w-full">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
            <span className="block text-foreground animate-slide-up [animation-delay:100ms]">Software</span>
            <span className="relative inline-flex items-center gap-4 py-2 animate-slide-up [animation-delay:200ms]">
              <span className="text-accent italic">&</span>
              <span className="h-[2px] w-12 md:w-24 bg-accent/30 rounded-full"></span>
              <span className="text-foreground">Web</span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50 animate-slide-up [animation-delay:300ms]">Developer</span>
          </h1>
        </div>

        {/* Sophisticated Description Card */}
        <div className="max-w-2xl w-full p-5 md:p-8 rounded-2xl md:rounded-3xl bg-card/30 backdrop-blur-md border border-white/10 shadow-2xl animate-slide-up [animation-delay:400ms] text-center mb-8 md:mb-12">
          <p className="text-sm md:text-xl text-muted-foreground leading-relaxed text-balance">
            Specializing in <span className="text-accent font-bold">AI Development</span> & <span className="text-primary font-bold">Prompt Engineering</span>. Building high-performance, intelligent systems where refined design meets scalable code.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["React Specialist", "Full-Stack Architect", "UI/UX Designer"].map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-[10px] font-black uppercase tracking-widest text-accent">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up [animation-delay:500ms]">
          <Button
            size="lg"
            className="h-14 px-10 bg-accent hover:bg-accent/90 text-accent-foreground gap-3 text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-accent/20 relative group overflow-hidden"
            onClick={handleViewProjects}
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <a href="/Akash_K_Software_Developer_Resume.pdf" download className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 px-10 text-xs font-black uppercase tracking-[0.2em] rounded-2xl border-white/10 hover:bg-accent/5 backdrop-blur-sm transition-all flex gap-3"
            >
              <Download className="w-4 h-4" /> Get Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
