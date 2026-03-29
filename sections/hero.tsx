"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3 
      } 
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-start items-start bg-background px-6 sm:px-12 md:px-16 lg:px-20 pt-[180px] pb-24"
    >
      <div className="w-full h-full flex flex-col justify-between relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full h-full flex-grow"
        >
          {/* Main Headline Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-20 sm:mb-32">
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3.5rem,12.5vw,9rem)] font-bold tracking-tighter leading-[0.85] uppercase max-w-7xl"
            >
              Full Stack <br/> Developer
            </motion.h1>

            <motion.div 
              variants={itemVariants} 
              className="mt-12 md:mt-0 md:max-w-[340px] flex flex-col gap-2 items-start md:items-start"
            >
               <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground leading-[1.4] text-balance">
                 specialized in Web Development, <br className="hidden md:block"/> UX / UI, Front End Development, <br className="hidden md:block"/> and Automation.
               </span>
            </motion.div>
          </div>

          {/* Value Prop & Connect Section */}
          <div className="mt-auto grid grid-cols-1 md:grid-cols-12 w-full gap-16 md:gap-24 py-12 sm:py-20 border-t border-border/50">
             <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-8 flex flex-col items-start gap-12">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground leading-[1.3] text-balance max-w-3xl">
                  Are you looking for visual statement through spotless Web Design and Development so you can increase brand awareness and sell more.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-16 w-full">
                   <button 
                     onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                     className="btn-pill bg-foreground text-background text-[11px] font-black uppercase tracking-[0.4em] px-16 py-6 hover:bg-neutral-800 transition-all flex items-center gap-4 group"
                   >
                      Start Project <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={18} />
                   </button>

                   <div className="flex flex-col gap-4 items-start">
                      <span className="text-[10px] font-black uppercase tracking-[0.6em] text-muted-foreground">Let's connect</span>
                      <nav className="flex flex-row gap-x-8 sm:gap-x-10">
                         {["Github", "Instagram", "Linkedin"].map((link) => (
                            <a 
                              key={link} 
                              href={`https://${link.toLowerCase()}.com/akashkuppattil-dev`} 
                              target="_blank" 
                              className="text-sm sm:text-lg font-black tracking-tighter text-foreground hover:italic transition-all uppercase whitespace-nowrap"
                            >
                              {link}
                            </a>
                         ))}
                      </nav>
                   </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
