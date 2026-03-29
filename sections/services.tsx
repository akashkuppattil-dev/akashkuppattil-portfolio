"use client"

import { motion } from "framer-motion"

const SERVICES = [
  {
    id: "01",
    title: "Web Development",
    description: "Modern, responsive websites built for performance and clarity."
  },
  {
    id: "02",
    title: "Full Stack Applications",
    description: "End-to-end systems with frontend, backend, and database architecture."
  },
  {
    id: "03",
    title: "Backend & API Development",
    description: "Secure, scalable APIs using Django REST Framework."
  },
  {
    id: "04",
    title: "AI Integration",
    description: "AI-powered features, automation tools, and smart workflows."
  },
  {
    id: "05",
    title: "UI/UX Design",
    description: "Clean interface design using Figma with modern usability."
  },
  {
    id: "06",
    title: "Maintenance & Support",
    description: "Ongoing updates, fixes, deployment, and optimization."
  }
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      } 
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    },
  }

  return (
    <section id="services" className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">What I do</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.1]">
            Comprehensive <span className="editorial-italic">digital solutions</span> <br className="hidden md:block"/> crafted for real-world impact.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="p-10 md:p-12 border-r border-b border-border group hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <span className="text-xs font-medium tracking-widest text-muted-foreground group-hover:text-background/60 mb-8 block">
                {service.id}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-balance text-foreground group-hover:text-background transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-background/80 leading-relaxed text-balance transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
