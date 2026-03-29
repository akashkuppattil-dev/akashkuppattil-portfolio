"use client"

import { motion } from "framer-motion"

const EXPERIENCES = [
  {
    year: "2026 — Present",
    role: "Full-Stack Developer",
    description: "Built and delivered client-based applications. Developed backend systems and APIs. Worked on real-world product requirements."
  },
  {
    year: "Present",
    role: "Co-founder & Developer — Lumora Triad",
    description: "Contributed to design and development of digital products. Worked on web solutions, UI/UX, and system implementation."
  },
  {
    year: "2025",
    role: "Full-Stack Developer Intern — Bairuha Tech",
    description: "Full-stack development with React.js, NestJS & PostgreSQL. Implemented secure authentication and enterprise-grade access control."
  },
  {
    year: "2025",
    role: "Full-Stack Developer Intern — Trogon Media",
    description: "Full-stack development involving responsive web design and backend logic. Managed deployments and collaborated on software architecture."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Experience</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.1]">
            Professional <span className="editorial-italic">journey</span> & <br className="hidden md:block"/> product execution.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 border-t border-border grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-border/5 transition-colors group"
            >
              <div className="md:col-span-3">
                <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">{exp.year}</span>
              </div>
              <div className="md:col-span-9 space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight group-hover:pl-4 transition-all duration-500 border-l-0 group-hover:border-l-4 border-foreground">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-balance max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
