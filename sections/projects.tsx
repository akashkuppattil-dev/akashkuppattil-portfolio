"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Dumbbell, Sparkles, Monitor, Server, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { DeviceMockup } from "@/components/ui/device-mockup"

const projects = [
  {
    title: "AutoVibe – Car Detailing",
    category: "Automotive Services",
    problem: "The objective was to create a sleek, high-performance website that reflects quality and precision for a car detailing service.",
    solution: "Designed a modern, visually engaging, and conversion-focused platform with a focus on premium automotive care presentation.",
    tech: ["Branding", "Services", "Mobile Responsive"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://akshy-car.vercel.app/",
    icon: Smartphone,
    deviceType: "mobile" as const,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Fitness Forge – Gym",
    category: "Health & Fitness",
    problem: "The goal was to create an energetic and motivating digital presence that reflects strength, discipline, and transformation.",
    solution: "Built a dynamic gym website to promote fitness programs, memberships, and personal training services with a motivational theme.",
    tech: ["Memberships", "Training", "Responsive"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://fitness-forge-nu.vercel.app/",
    icon: Dumbbell,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Lumora Triad – Agency",
    category: "Software Services",
    problem: "Built to represent premium digital solutions, brand identity, and technical expertise for our own web development company.",
    solution: "Focused on minimalism, animations, and modern UI/UX structure to reflect a high-end software services company.",
    tech: ["Minimalism", "Motion", "Modern UI"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://www.lumoratriad.in/",
    icon: Server,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
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
    title: "Enterprise Hospital",
    category: "Full-Stack System",
    problem: "Inefficient patient registration and fragmented appointment scheduling causing long wait times and data silos.",
    solution: "Developed a secure platform with streamlined front-office module and high-performance REST APIs for real-time synchronization.",
    tech: ["NestJS", "PostgreSQL", "JWT/RBAC"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Shield,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Logistics Tracker",
    category: "Backend & Analytics",
    problem: "Lack of real-time visibility into vehicle movement and manual warehouse operations causing delays.",
    solution: "Engineered a Python-based tracking system with automated workflows and data analytics for predictive management.",
    tech: ["Python", "Django", "Tracking"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Server,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Free Bird Impact",
    category: "Social Impact NGO",
    problem: "Inability to track beneficiary progress effectively across multiple social impact programs.",
    solution: "Built a comprehensive dashboard allowing NGOs to monitor progress, manage beneficiaries, and generate reports.",
    tech: ["Django", "Dashboard", "Auth"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Monitor,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col items-center text-center space-y-6">
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

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
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
                <div className="space-y-6">
                  <Badge variant="outline" className="text-accent border-accent/20 tracking-widest uppercase text-[10px] px-5 py-2 font-black glass-card">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl xs:text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none group">
                    <span className="bg-left-bottom bg-gradient-to-r from-accent to-accent bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 pb-2">
                      {project.title}
                    </span>
                  </h3>
                </div>

                <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                  <div className="space-y-3 border-l-2 border-white/5 pl-6 group/item hover:border-accent transition-colors">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">The Challenge</p>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium italic leading-relaxed">
                      "{project.problem}"
                    </p>
                  </div>
                  <div className="space-y-3 border-l-2 border-white/5 pl-6 group/item hover:border-accent transition-colors">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">The Impact</p>
                    <p className="text-lg md:text-xl text-foreground font-black uppercase tracking-tight">
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

                <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="h-16 px-10 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xs uppercase tracking-widest shadow-2xl shadow-accent/20 group w-full sm:w-auto overflow-hidden relative"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Launch Project <ExternalLink className="w-4 h-4" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-16 h-16 rounded-2xl border-white/5 glass-card hover:bg-accent/10 flex-shrink-0 group"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
