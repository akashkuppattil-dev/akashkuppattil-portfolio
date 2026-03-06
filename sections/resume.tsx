"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, FileText, Sparkles, Github, Code2, Brain, Zap } from "lucide-react"
import { motion } from "framer-motion"

const highlights = [
  { icon: Code2, label: "Full-Stack Developer", desc: "React, Next.js, NestJS, Django, PHP" },
  { icon: Brain, label: "AI Engineer", desc: "LLMs, LangChain, RAG, Prompt Eng" },
  { icon: Zap, label: "Software Engineer", desc: "System Design, APIs, Cloud, DevOps" },
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent px-4 py-1.5 glass border border-accent/20 rounded-full"
          >
            <FileText className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Documentation</span>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
              Professional <br />
              <span className="text-accent italic">Dossier</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              A comprehensive look into my journey as a <span className="text-foreground font-black">Full-Stack Developer</span>,{" "}
              <span className="text-accent font-black">AI Engineer</span>, and{" "}
              <span className="text-foreground font-black">Software Engineer</span> — with real-world projects and verified achievements.
            </p>
          </div>

          {/* Role Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item, i) => (
              <div key={i} className="p-6 glass-card border border-white/5 rounded-2xl text-left group hover:border-accent/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="w-5 h-5 text-accent group-hover:text-background transition-colors" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-tight mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <a
              href="/Akash_K_Software_Developer_Resume.pdf"
              download="Akash_K_Software_Developer_Resume.pdf"
              className="w-full"
            >
              <Button
                size="lg"
                className="h-16 px-10 bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xs uppercase tracking-widest shadow-2xl shadow-accent/20 rounded-2xl w-full group"
              >
                <Download className="w-5 h-5 mr-3 group-hover:translate-y-1 transition-transform" />
                Download Resume PDF
              </Button>
            </a>

            <a
              href="https://github.com/akashkuppattil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 glass border-white/10 hover:bg-accent/5 font-black text-xs uppercase tracking-widest rounded-2xl w-full"
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub Profile
              </Button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 glass-card border border-white/5 text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:rotate-12 transition-all">
              <FileText className="w-40 h-40" />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3 text-accent mb-6">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-xl font-black uppercase tracking-tight">Executive Summary</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-muted-foreground uppercase tracking-widest leading-none">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-150 transition-transform"></div>
                  Full Professional Background
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-150 transition-transform"></div>
                  AI Engineering & LLM Projects
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-150 transition-transform"></div>
                  Full-Stack Technical Depth
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-150 transition-transform"></div>
                  MCA — Computer Science
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-150 transition-transform"></div>
                  Verified Certifications 2025
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-150 transition-transform"></div>
                  Production-Ready Work History
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
