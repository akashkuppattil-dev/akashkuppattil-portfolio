"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "AWH Engineering College — Calicut, Kerala",
    period: "2023 – 2025",
    status: "Graduated",
  },
  {
    degree: "Bachelor of Computer Science (BSc CS)",
    institution: "SAFI Institute of Advanced Study — Malappuram, Kerala",
    period: "2019 – 2022",
    status: "Graduated",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent px-4 py-1.5 glass border border-accent/20 rounded-full"
          >
            <GraduationCap className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Academic Core</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
            Education <span className="text-accent italic">Journey</span>
          </h2>
        </div>

        <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-2 gap-5 md:gap-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 -mx-4 sm:mx-0">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-center md:snap-align-none"
            >
              <Card className="p-10 glass-card border border-white/5 group relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.06] transition-all transform group-hover:rotate-12 group-hover:scale-110">
                  <GraduationCap className="w-48 h-48" />
                </div>

                <div className="relative z-10 space-y-10 flex flex-col h-full">
                  <div className="space-y-6">
                    <Badge variant="outline" className="text-accent border-accent/30 tracking-widest uppercase text-[10px] px-5 py-2 font-black glass">
                      {edu.status}
                    </Badge>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-muted-foreground font-black italic">{edu.institution}</p>
                  </div>

                  <div className="mt-auto flex items-center gap-5 pt-10 border-t border-white/5">
                    <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/10">
                      <Calendar className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-0.5">Duration</p>
                      <p className="text-xl font-black uppercase tracking-tight text-foreground">{edu.period}</p>
                    </div>
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
