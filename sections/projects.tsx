"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Sparkles, Monitor, Server, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { DeviceMockup } from "@/components/ui/device-mockup"

const projects = [
  {
    title: "Hexamech Tools",
    category: "Industrial & Corporate",
    problem: "The objective was to establish trust, credibility, and industry authority for an industrial tools supplier in India.",
    solution: "A professional corporate website clearly presenting product categories and company strength with a clean design.",
    tech: ["Corporate Layout", "SEO Optimized"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://www.hexamechlinichtools.com/",
    icon: Monitor,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "JOOHAA LUXE",
    category: "E-Commerce & Fashion",
    problem: "Creating a premium digital storefront for luxury nightwear that balances elegance with high-performance e-commerce.",
    solution: "Designed a high-conversion shopping experience with curated product showcases and mobile-first navigation.",
    tech: ["Next.js", "Tailwind", "E-commerce"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://jhoha-web.vercel.app/",
    icon: Smartphone,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Divine Driving School",
    category: "Education & Services",
    problem: "Modernizing the digital presence of a trusted driving school to attract a younger demographic in Kerala.",
    solution: "A service-oriented platform with curriculum highlights, expert instructor profiles, and streamlined booking flows.",
    tech: ["App Router", "Framer Motion", "SEO"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://v0-driving-school-website-rouge.vercel.app/",
    icon: Smartphone, // Using Smartphone as a fallback since Car might not be imported
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "BASIC Trading Company",
    category: "Wholesale & Distribution",
    problem: "Bridging the gap between bulk manufacturing and event management contractors in the catering industry.",
    solution: "Comprehensive product catalog and inquiry system for event materials and wholesale distribution.",
    tech: ["Product Catalog", "Responsive", "UI/UX"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://v0-basic-trading-company-website.vercel.app/",
    icon: Monitor,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "FaceConsent AI",
    category: "AI & Privacy Bot",
    problem: "Lack of specific consent management in automated photo-sharing environments and social platforms.",
    solution: "AI-driven privacy platform using facial recognition to automate and verify photo-sharing permissions.",
    tech: ["Python", "Flask", "OpenCV", "AI"],
    github: "https://github.com/akashkuppattil-dev/faceconsent",
    link: "https://github.com/akashkuppattil-dev/faceconsent",
    icon: Shield,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Free Bird Impact",
    category: "Social Impact NGO",
    problem: "Inefficient tracking of beneficiary progress across multiple social impact programs.",
    solution: "Built a comprehensive dashboard allowing NGOs to monitor progress, manage beneficiaries, and generate reports.",
    tech: ["Django", "Python", "Dashboard"],
    github: "https://github.com/akashkuppattil-dev/Free_Bird",
    link: "https://github.com/akashkuppattil-dev/Free_Bird",
    icon: Monitor,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Logistics Tracker",
    category: "Backend & Analytics",
    problem: "Lack of real-time visibility into vehicle movement and manual warehouse operations causing delays.",
    solution: "Engineered a tracking system with automated workflows and data analytics for predictive management.",
    tech: ["HTML", "JavaScript", "Tracking"],
    github: "https://github.com/akashkuppattil-dev/Logistics-Tracking-Warehouse-Management-System",
    link: "https://github.com/akashkuppattil-dev/Logistics-Tracking-Warehouse-Management-System",
    icon: Server,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Review Intelligence API",
    category: "Backend Engineering",
    problem: "Fragmented sentiment analysis and review management for e-commerce platforms.",
    solution: "Robust Django REST API for processing and managing large-scale product reviews with high-performance endpoints.",
    tech: ["Django REST", "PostgreSQL", "API"],
    github: "https://github.com/akashkuppattil-dev/product-review-api",
    link: "https://github.com/akashkuppattil-dev/product-review-api",
    icon: Server,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent px-4 py-1.5 glass border border-accent/20 rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Featured Work</span>
          </motion.div>
          <h2 className="text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] drop-shadow-sm">
            Case <span className="text-accent italic">Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-medium">
            Deep-diving into <span className="text-foreground font-bold">architecture-first</span> solutions, where engineering precision meets elite aesthetics.
          </p>
        </div>

        <div className="relative group/carousel">
          {/* Scroll Progress / Indicator - Visible only on mobile */}
          <div className="flex sm:hidden items-center justify-center gap-2 mb-8 animate-pulse">
            <div className="h-[2px] w-8 bg-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Swipe to explore</span>
            <div className="h-[2px] w-8 bg-accent" />
          </div>

          <div className="flex flex-nowrap overflow-x-auto sm:flex-col snap-x snap-mandatory sm:snap-none scrollbar-hide px-4 sm:px-0 -mx-4 sm:mx-0 gap-6 sm:gap-0 sm:space-y-32 md:space-y-48 pb-12 sm:pb-0 items-start sm:items-stretch group">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-[78vw] sm:w-auto flex-shrink-0 snap-center sm:snap-align-none flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2 group relative">
                  {/* Backdrop Glow */}
                  <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

                  <DeviceMockup type={project.deviceType} className="shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-white/[0.05] glass transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                  </DeviceMockup>
                </div>

                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                  <div className="space-y-4 sm:space-y-6">
                    <Badge variant="outline" className="text-accent border-accent/20 tracking-widest uppercase text-[10px] px-5 py-2 font-black glass-card">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl xs:text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none group">
                      <span className="bg-left-bottom bg-gradient-to-r from-accent to-accent bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 pb-2">
                        {project.title}
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-6 sm:space-y-8 max-w-xl mx-auto lg:mx-0">
                    <div className="space-y-3 border-l-2 border-white/5 pl-6 group/item hover:border-accent transition-colors text-left sm:text-left">
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">The Challenge</p>
                      <p className="text-base sm:text-xl text-muted-foreground font-medium italic leading-relaxed">
                        "{project.problem}"
                      </p>
                    </div>
                    <div className="space-y-3 border-l-2 border-white/5 pl-6 group/item hover:border-accent transition-colors text-left sm:text-left">
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">The Impact</p>
                      <p className="text-base sm:text-xl text-foreground font-black uppercase tracking-tight">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 text-[9px] font-black uppercase tracking-widest bg-white/5 border border-white/10 rounded-xl text-muted-foreground hover:bg-accent hover:text-white hover:border-accent transition-all">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="h-14 sm:h-16 px-10 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xs uppercase tracking-widest shadow-2xl shadow-accent/20 group w-full sm:w-auto overflow-hidden relative"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Launch <ExternalLink className="w-4 h-4" />
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl border-white/5 glass-card hover:bg-accent/10 flex-shrink-0 group"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-6 h-6 sm:w-7 h-7 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
