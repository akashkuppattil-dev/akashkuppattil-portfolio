"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const LIVE_PROJECTS = [
  {
    title: "Lumora Triad",
    category: "Product Studio & Agency",
    challenge: "Establishing a premium digital studio identity for high-performance software and brand solutions.",
    impact: "A minimalist editorial platform showcasing studio capabilities and elite project delivery.",
    stack: ["Studio Design", "Next.js", "Editorial"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "https://www.lumoratriad.in/"
  },
  {
    title: "Hexamech Tools",
    category: "Industrial & Corporate",
    challenge: "The objective was to establish trust, credibility, and industry authority for an industrial tools supplier in India.",
    impact: "A professional corporate website clearly presenting product categories and company strength with a clean design.",
    stack: ["Corporate Layout", "SEO Optimized", "Responsive"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.hexamechlinichtools.com/"
  },
  {
    title: "JOOHAA LUXE",
    category: "E-Commerce & Fashion",
    challenge: "Creating a premium digital storefront for luxury nightwear that balances elegance with high-performance e-commerce.",
    impact: "Designed a high-conversion shopping experience with curated product showcases and mobile-first navigation.",
    stack: ["Next.js", "TailwindCSS", "E-commerce"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    link: "https://jhoha-web.vercel.app/",
    imagePos: "object-top"
  },
  {
    title: "Divine Driving School",
    category: "Education & Services",
    challenge: "Modernizing the digital presence of a trusted driving school to attract a younger demographic in Kerala.",
    impact: "A service-oriented platform with curriculum highlights, expert instructor profiles, and streamlined booking flows.",
    stack: ["App Router", "Framer Motion", "SEO"],
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2038&auto=format&fit=crop",
    link: "https://v0-driving-school-website-rouge.vercel.app/"
  },
  {
    title: "BASIC Trading Company",
    category: "Wholesale & Distribution",
    challenge: "Bridging the gap between bulk manufacturing and event management contractors in the catering industry.",
    impact: "Comprehensive product catalog and inquiry system for event materials and wholesale distribution.",
    stack: ["Product Catalog", "Responsive", "UI/UX"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    link: "https://v0-basic-trading-company-website.vercel.app/"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 sm:mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-whatsapp mb-4 block">Selected Work</span>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.1] mb-8">
            Case <span className="editorial-italic text-whatsapp">Studies</span> & <br className="md:block"/> 
            <a href="#contact" className="hover:text-whatsapp transition-colors underline-offset-[12px] hover:underline decoration-1 transition-all">architectural <span className="editorial-italic">solutions.</span></a>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed text-balance">
            Deep-diving into architecture-first solutions, where engineering precision meets elite aesthetics.
          </p>
        </motion.div>

        {/* Live Case Studies - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
          {LIVE_PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="aspect-[16/10] w-full bg-border/20 rounded-2xl overflow-hidden mb-8 relative border border-border group-hover:border-whatsapp/30 transition-all duration-700">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${project.imagePos || 'object-center'}`}
                 />
                 <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-whatsapp/90 backdrop-blur-md p-3 rounded-full text-white">
                       <ArrowUpRight size={18} />
                    </div>
                 </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{project.category}</span>
                   <div className="flex flex-wrap gap-2">
                     {project.stack.map((s) => (
                       <span key={s} className="text-[8px] font-bold uppercase border border-border px-2 py-0.5 rounded-full group-hover:border-whatsapp/50 group-hover:text-whatsapp transition-colors">{s}</span>
                     ))}
                   </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase group-hover:text-whatsapp group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                   <p className="text-xs sm:text-sm font-medium leading-relaxed italic text-foreground truncate max-w-full">"{project.challenge}"</p>
                   <p className="text-muted-foreground leading-relaxed text-balance text-xs sm:text-sm">
                     {project.impact}
                   </p>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-whatsapp transition-all underline underline-offset-4 text-foreground w-fit"
                >
                  Launch Project <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
