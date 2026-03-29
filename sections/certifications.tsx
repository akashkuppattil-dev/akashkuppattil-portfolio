"use client"

import { motion } from "framer-motion"

const CERTS = [
  {
    id: "01",
    title: "AI & Prompt Engineering",
    provider: "DeepLearning.AI",
    year: "2025"
  },
  {
    id: "02",
    title: "Python & Django Development",
    provider: "Udemy",
    year: "2024"
  },
  {
    id: "03",
    title: "LangChain for LLM Apps",
    provider: "Udemy",
    year: "2025"
  },
  {
    id: "04",
    title: "Full-Stack NestJS & TypeScript",
    provider: "Udemy",
    year: "2024"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Validation</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.1]">
            Professional <span className="editorial-italic">mastery</span> & <br className="hidden md:block"/> certifications.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTS.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-border rounded-xl hover:bg-border/5 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                 <span className="text-xs font-medium text-muted-foreground">{cert.id}</span>
                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{cert.year}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-foreground transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.provider}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
