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
    <section id="education" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-accent"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Academic Foundation</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none">
            Education <span className="text-accent italic">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 glass border border-white/10 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <GraduationCap className="w-32 h-32 rotate-12" />
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-lg">
                      {edu.status}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight leading-none group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <p className="text-xl text-muted-foreground font-bold italic">{edu.institution}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-lg font-black uppercase tracking-widest text-foreground/80">{edu.period}</span>
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
