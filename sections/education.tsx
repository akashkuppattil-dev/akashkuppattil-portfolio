"use client"

import { motion } from "framer-motion"

const EDUCATION = [
  {
    year: "2023 – 2025",
    degree: "Master of Computer Applications (MCA)",
    institution: "AWH Engineering College — Calicut, Kerala"
  },
  {
    year: "2019 – 2022",
    degree: "Bachelor of Computer Science (BSc CS)",
    institution: "SAFI Institute of Advanced Study — Malappuram, Kerala"
  }
]

export default function Education() {
  return (
    <section id="education" className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Education</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.1]">
            Academic <span className="editorial-italic">foundation</span> & <br className="hidden md:block"/> technical core.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {EDUCATION.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 border border-border rounded-2xl hover:bg-border/5 transition-colors group"
            >
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase block mb-6">{edu.year}</span>
              <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-foreground transition-colors">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {edu.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
