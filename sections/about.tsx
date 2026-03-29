"use client"

import { motion } from "framer-motion"
import { MapPin, Globe } from "lucide-react"

export default function About() {
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="about" className="section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-20 items-start"
        >
          {/* Headline Section */}
          <div className="lg:w-1/2">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8 uppercase tracking-[0.5em] text-[10px] font-black text-muted-foreground mr-4">
              <Globe className="w-3.5 h-3.5 text-foreground" />
              About Identity
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.95] text-balance mb-8"
            >
              Developer focused on <span className="editorial-italic font-normal lowercase">backend systems</span> and product execution.
            </motion.h2>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-12">
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground leading-snug font-medium text-balance"
            >
              I work across backend architectural design, API development, frontend implementation, and AI systems. I build real-world applications, high-performance systems, and scalable digital products.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-10 border-t border-border flex flex-wrap gap-x-16 gap-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground block">Current Location</span>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-bold tracking-tight uppercase">Kerala, India</span>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground block">Professional Status</span>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-sm font-bold tracking-tight uppercase">Active & Building</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
