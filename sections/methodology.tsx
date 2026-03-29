"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    id: "01",
    title: "Strategy & Analysis",
    description: "Defining project goals, user requirements, and technical feasibility to ensure a solid foundation."
  },
  {
    id: "02",
    title: "Architecture & Design",
    description: "Designing scalable system architectures and intuitive user interfaces focused on performance and clarity."
  },
  {
    id: "03",
    title: "Development & Execution",
    description: "Writing clean, production-ready code across the full stack with rigorous attention to detail."
  },
  {
    id: "04",
    title: "Testing & Deployment",
    description: "Ensuring stability through comprehensive testing and deploying to high-performance environments."
  }
]

export default function Methodology() {
  return (
    <section id="process" className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Process</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.1]">
            Standardized <span className="editorial-italic">workflow</span> <br className="hidden md:block"/> for elite product delivery.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <span className="text-4xl font-semibold tracking-tighter text-border group-hover:text-foreground transition-colors duration-500">
                {step.id}
              </span>
              <h3 className="text-xl font-semibold tracking-tight uppercase">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
