"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ShieldCheck, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const certifications = [
  { title: "Python & Django Certs", provider: "Udemy", icon: "🐍" },
  { title: "JavaScript & React Basis", provider: "Coursera", icon: "⚛️" },
  { title: "SQL & DB Certifications", provider: "Simplilearn", icon: "🗄️" },
  { title: "Web Dev Fundamentals", provider: "FreeCodeCamp", icon: "💻" },
  { title: "Google Cloud Basics", provider: "Google", icon: "☁️" },
  { title: "Meta React Advanced", provider: "Meta", icon: "📱" },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-8 glass-card border border-white/5 group h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.01] group-hover:opacity-[0.05] transition-all transform group-hover:-rotate-12">
                  <Award className="w-32 h-32" />
                </div>

                <div className="flex items-start justify-between mb-10 relative z-10">
                  <div className="text-4xl w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
                    {cert.icon}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent/40 group-hover:text-accent group-hover:rotate-12 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10 flex-grow space-y-3">
                  <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-black italic">{cert.provider}</p>
                </div>

                <div className="mt-8 relative z-10 pt-6 border-t border-white/5">
                  <Badge variant="outline" className="text-accent border-accent/20 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-lg glass">
                    Verified Credential
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
