"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Sparkles, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const certifications = [
  { title: "Python & Django Certifications", provider: "Udemy", icon: "🐍" },
  { title: "JavaScript & React Basics", provider: "Coursera", icon: "⚛️" },
  { title: "SQL & Database Certifications", provider: "Simplilearn", icon: "🗄️" },
  { title: "Web Development Fundamentals", provider: "FreeCodeCamp", icon: "💻" },
  { title: "Google Cloud Basics", provider: "Google", icon: "☁️" },
  { title: "Meta React Advanced", provider: "Meta", icon: "📱" },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 space-y-4 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center md:justify-start gap-2 text-accent"
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Validation & Mastery</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none">
            Official <span className="text-accent italic">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto md:mx-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Card
                className="p-8 glass border border-white/10 group hover:border-accent/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                  <Award className="w-32 h-32 rotate-12" />
                </div>

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="text-4xl bg-background/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 drop-shadow-xl group-hover:scale-110 transition-transform">{cert.icon}</div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative z-10 flex-grow space-y-2">
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight leading-tight group-hover:text-accent transition-colors">{cert.title}</h3>
                  <p className="text-lg text-muted-foreground font-bold italic">{cert.provider}</p>
                </div>

                <div className="mt-8 relative z-10">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg border-none shadow-lg shadow-accent/20">
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
