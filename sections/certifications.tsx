"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ShieldCheck, Sparkles, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const certifications = [
  { title: "Python & Django Development", provider: "Udemy", icon: "🐍", year: "2024", image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop" },
  { title: "JavaScript & React Fundamentals", provider: "Coursera", icon: "⚛️", year: "2023", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" },
  { title: "SQL & Database Management", provider: "Simplilearn", icon: "🗄️", year: "2023", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2036&auto=format&fit=crop" },
  { title: "Web Development Bootcamp", provider: "FreeCodeCamp", icon: "💻", year: "2022", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
  { title: "Google Cloud Essentials", provider: "Google Cloud", icon: "☁️", year: "2024", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
  { title: "React Advanced Patterns", provider: "Meta", icon: "📱", year: "2024", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { title: "AI & Prompt Engineering", provider: "DeepLearning.AI", icon: "🤖", year: "2025", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" },
  { title: "LangChain for LLM Apps", provider: "Udemy", icon: "🔗", year: "2025", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" },
  { title: "Full-Stack NestJS & TypeScript", provider: "Udemy", icon: "🏗️", year: "2024", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop" },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent px-4 py-1.5 glass border border-accent/20 rounded-full"
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-sans">Validation & Mastery</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
            Official <span className="text-accent italic">Mastery</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-lg">
            Continuously learning and validating expertise across AI, full-stack development, and cloud infrastructure.
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 pb-8 sm:pb-0 snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 -mx-4 sm:mx-0">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="w-[85vw] max-w-[340px] sm:w-auto sm:max-w-none flex-shrink-0 snap-center sm:snap-align-none h-full"
            >
              <Card className="p-0 glass-card border border-white/5 group h-full flex flex-col relative overflow-hidden hover:border-accent/20 transition-all duration-500">
                {/* Mockup Image Header */}
                <div className="w-full h-36 relative overflow-hidden border-b border-border/50">
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 transition-opacity"></div>
                  <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                </div>

                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.01] group-hover:opacity-[0.05] transition-all transform group-hover:-rotate-12 pointer-events-none">
                    <Award className="w-32 h-32" />
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div className="text-3xl w-14 h-14 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
                      {cert.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{cert.year}</span>
                      <div className="w-8 h-8 rounded-xl bg-accent/5 flex items-center justify-center text-accent/50 group-hover:text-accent group-hover:rotate-12 transition-all">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow space-y-2">
                    <h3 className="text-lg font-black tracking-tighter uppercase leading-tight text-foreground group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-bold italic">{cert.provider}</p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border">
                    <Badge variant="outline" className="text-accent border-accent/20 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-lg bg-accent/5">
                      Verified Credential
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
