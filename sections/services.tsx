"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

const SERVICES = [
  {
    id: "01",
    title: "Web Design & Development",
    description: "High-performance, responsive systems. We build web applications with modern technologies that scale. From Next.js frontends to robust API architectures."
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "User-centered digital products. Thoughtful design that drives engagement and conversion. We create intuitive interfaces that users love."
  },
  {
    id: "03",
    title: "Branding & Identity",
    description: "Narrative-driven brand development. Building unique brand voices through comprehensive visual systems and strategic positioning."
  },
  {
    id: "04",
    title: "Backend & API Development",
    description: "Robust, secure server-side logic. We architect and build scalable server-side solutions and integrations. Focused on data integrity and security."
  },
  {
    id: "05",
    title: "E-commerce Solutions",
    description: "Scalable commerce experiences. Full-service digital commerce solutions built for growth. Custom storefronts and optimized checkout flows."
  },
  {
    id: "06",
    title: "SEO & Growth",
    description: "Organic visibility & performance. Technical SEO and digital marketing strategies to increase your business reach and conversion efficiency."
  },
  {
    id: "07",
    title: "AI Integration & Automation",
    description: "Leveraging modern AI and automation to reduce costs and improve business efficiency through custom agents and intelligent process design."
  },
  {
    id: "08",
    title: "Maintenance & Support",
    description: "Ongoing technical partnership. Reliable long-term support to ensure your digital systems remain stable, secure, and performant."
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
    <section id="services" className="section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-whatsapp block">What I do</span>
             <div className="h-[1px] w-12 bg-whatsapp/30" />
             <Sparkles size={12} className="text-whatsapp animate-pulse" />
          </div>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] uppercase">
            Comprehensive <br className="hidden md:block"/> <span className="editorial-italic font-normal lowercase text-whatsapp">digital solutions</span> <br className="hidden md:block"/> crafted for real-world impact.
          </h2>
        </motion.div>

        {/* Mobile View: Horizontal Scroll for "Different UI" */}
        <div className="flex md:hidden overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 gap-6">
           {SERVICES.map((service) => (
             <motion.div 
               key={service.id}
               className="min-w-[85vw] snap-center bg-border/5 p-10 border border-border rounded-3xl flex flex-col justify-between"
             >
                <div className="space-y-8">
                   <div className="flex items-center justify-between">
                      <span className="text-4xl font-bold tracking-tighter text-border">{service.id}</span>
                      <div className="w-10 h-10 rounded-full border border-whatsapp/20 flex items-center justify-center text-whatsapp bg-whatsapp/5">
                         <Sparkles size={14} />
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold tracking-tight uppercase leading-tight">
                     {service.title}
                   </h3>
                   <p className="text-muted-foreground text-base leading-relaxed break-words">
                     {service.description}
                   </p>
                </div>
                <a 
                  href="#contact" 
                  className="mt-12 inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-whatsapp border-b border-whatsapp/20 pb-2 w-fit"
                >
                  Learn More <ArrowRight size={14} />
                </a>
             </motion.div>
           ))}
        </div>
        
        {/* Mobile Swipe Indicator (Only visible on tiny screens) */}
        <div className="flex md:hidden justify-center gap-2 mb-12 opacity-30">
           {SERVICES.slice(0, 4).map((_, i) => (
              <div key={i} className={`h-1 rounded-full ${i === 0 ? 'w-8 bg-whatsapp' : 'w-2 bg-border'}`} />
           ))}
        </div>

        {/* Desktop View: Grid (Stays for md and above) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="p-10 md:p-12 border-r border-b border-border group hover:bg-foreground hover:text-background transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-medium tracking-widest text-muted-foreground group-hover:text-background/60 mb-8 block">
                  {service.id}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-balance text-foreground group-hover:text-background transition-colors uppercase">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-background/80 leading-relaxed text-balance transition-colors">
                  {service.description}
                </p>
              </div>
              <a 
                href="#contact" 
                className="mt-12 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-background transition-colors border-b border-border group-hover:border-background/30 pb-1 w-fit"
              >
                Learn More <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
