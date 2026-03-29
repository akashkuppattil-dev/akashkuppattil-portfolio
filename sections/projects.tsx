"use client"

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
    link: "https://akashkuppattil.dev/project"
  },
  {
    title: "JOOHAA LUXE",
    category: "E-Commerce & Fashion",
    challenge: "Creating a premium digital storefront for luxury nightwear that balances elegance with high-performance e-commerce.",
    impact: "Designed a high-conversion shopping experience with curated product showcases and mobile-first navigation.",
    stack: ["Next.js", "TailwindCSS", "E-commerce"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    link: "https://akashkuppattil.dev/project",
    imagePos: "object-top"
  },
  {
    title: "Divine Driving School",
    category: "Education & Services",
    challenge: "Modernizing the digital presence of a trusted driving school to attract a younger demographic in Kerala.",
    impact: "A service-oriented platform with curriculum highlights, expert instructor profiles, and streamlined booking flows.",
    stack: ["App Router", "Framer Motion", "SEO"],
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2038&auto=format&fit=crop",
    link: "https://akashkuppattil.dev/project"
  },
  {
    title: "BASIC Trading Company",
    category: "Wholesale & Distribution",
    challenge: "Bridging the gap between bulk manufacturing and event management contractors in the catering industry.",
    impact: "Comprehensive product catalog and inquiry system for event materials and wholesale distribution.",
    stack: ["Product Catalog", "Responsive", "UI/UX"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    link: "https://akashkuppattil.dev/project"
  }
]

const LAB_PROJECTS = [
  {
    title: "FaceConsent AI",
    category: "AI & Privacy Bot",
    challenge: "Lack of specific consent management in automated photo-sharing environments.",
    stack: ["Python", "Flask", "OpenCV", "AI"],
    github: "https://github.com/akashkuppattil-dev/faceconsent"
  },
  {
    title: "Free Bird Impact",
    category: "Social Impact NGO",
    challenge: "Inefficient tracking of beneficiary progress across multiple programs.",
    stack: ["Django", "Python", "Dashboard"],
    github: "https://github.com/akashkuppattil-dev/Free_Bird"
  },
  {
    title: "Logistics Tracker",
    category: "Backend & Analytics",
    challenge: "Lack of real-time visibility into vehicle movement and warehouse operations.",
    stack: ["HTML", "JavaScript", "Tracking"],
    github: "https://github.com/akashkuppattil-dev/Logistics-Tracking-Warehouse-Management-System"
  },
  {
    title: "Review Intelligence API",
    category: "Backend Engineering",
    challenge: "Fragmented sentiment analysis and review management for e-commerce.",
    stack: ["Django REST", "PostgreSQL", "API"],
    github: "https://github.com/akashkuppattil-dev"
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
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Selected Work</span>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.1] mb-8">
            Case <span className="editorial-italic">Studies</span> & <br className="hidden md:block"/> architectural solutions.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Deep-diving into architecture-first solutions, where engineering precision meets elite aesthetics.
          </p>
        </motion.div>

        {/* Live Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
          {LIVE_PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="aspect-[16/10] w-full bg-border/20 rounded-2xl overflow-hidden mb-8 relative border border-border group-hover:border-foreground/20 transition-all duration-700">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${project.imagePos || 'object-center'}`}
                 />
                 <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur-md p-3 rounded-full border border-border">
                       <ArrowUpRight size={18} />
                    </div>
                 </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{project.category}</span>
                   <div className="flex gap-2">
                     {project.stack.map((s) => (
                       <span key={s} className="text-[8px] font-bold uppercase border border-border px-2 py-0.5 rounded-full">{s}</span>
                     ))}
                   </div>
                </div>
                
                <h3 className="text-3xl font-semibold tracking-tight uppercase group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                   <p className="text-sm font-medium leading-relaxed italic text-foreground truncate">"{project.challenge}"</p>
                   <p className="text-muted-foreground leading-relaxed text-balance text-sm">
                     {project.impact}
                   </p>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-all underline underline-offset-4 text-foreground"
                >
                  Launch Project <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lab / Git Projects */}
        <div className="border-t border-border pt-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16"
           >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Engineering Lab</span>
              <h3 className="text-3xl font-semibold tracking-tight uppercase">Proprietary <span className="editorial-italic">&</span> Git Assets</h3>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LAB_PROJECTS.map((lab, i) => (
                <motion.div
                  key={lab.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-border rounded-xl hover:bg-border/10 transition-colors flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                     <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{lab.category}</span>
                        <a href={lab.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                           <Github size={20} />
                        </a>
                     </div>
                     <h4 className="text-xl font-semibold tracking-tight uppercase group-hover:italic transition-all">{lab.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">{lab.challenge}</p>
                  </div>
                  <div className="flex gap-2 mt-8">
                     {lab.stack.map(s => (
                       <span key={s} className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground bg-border/40 px-2 py-1 rounded">{s}</span>
                     ))}
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}
