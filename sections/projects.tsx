"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Monitor, Server, Shield, Smartphone, Dumbbell, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { DeviceMockup } from "@/components/ui/device-mockup"

const projects = [
  {
    title: "AutoVibe – Car Detailing Website",
    category: "Automotive Services",
    problem: "The objective was to create a sleek, high-performance website that reflects quality and precision for a car detailing service.",
    solution: "Designed a modern, visually engaging, and conversion-focused platform with a focus on premium automotive care presentation.",
    tech: ["Modern Branding", "Service Listings", "Mobile Responsive", "SEO-Friendly"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://akshy-car.vercel.app/",
    icon: Smartphone,
    deviceType: "mobile" as const,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Fitness Forge – Gym Website",
    category: "Health & Fitness",
    problem: "The goal was to create an energetic and motivating digital presence that reflects strength, discipline, and transformation.",
    solution: "Built a dynamic gym website to promote fitness programs, memberships, and personal training services with a motivational theme.",
    tech: ["Membership Plans", "Trainer Intro", "Workout Programs", "Responsive"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://fitness-forge-nu.vercel.app/",
    icon: Dumbbell,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Lumora Triad – Agency Website",
    category: "Software Services",
    problem: "Built to represent premium digital solutions, brand identity, and technical expertise for our own web development company.",
    solution: "Focused on minimalism, animations, and modern UI/UX structure to reflect a high-end software services company.",
    tech: ["Minimalist UX", "Framer Motion", "Animations", "Modern UI"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://www.lumoratriad.in/",
    icon: Server,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Hexamech Linich Tools",
    category: "Industrial & Corporate",
    problem: "The objective was to establish trust, credibility, and industry authority for an industrial tools supplier in India.",
    solution: "A professional corporate website clearly presenting product categories and company strength with a clean design.",
    tech: ["Corporate Layout", "Product Categories", "Inquiry Form", "SEO Optimized"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://www.hexamechlinichtools.com/",
    icon: Monitor,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Enterprise Hospital Management",
    category: "Full-Stack System",
    problem: "Inefficient patient registration and fragmented appointment scheduling causing long wait times and data silos.",
    solution: "Developed a secure platform with streamlined front-office module and high-performance REST APIs for real-time synchronization.",
    tech: ["React.js", "NestJS", "PostgreSQL", "JWT", "RBAC"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Shield,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Logistics & Warehouse Tracking",
    category: "Backend & Analytics",
    problem: "Lack of real-time visibility into vehicle movement and manual warehouse operations causing delays.",
    solution: "Engineered a Python-based tracking system with automated workflows and data analytics for predictive management.",
    tech: ["Python", "Django", "MySQL", "Real-time Tracking", "Data Analytics"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Server,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Free Bird — Social Impact",
    category: "NGO Case Management",
    problem: "Inability to track beneficiary progress effectively across multiple social impact programs.",
    solution: "Built a comprehensive dashboard allowing NGOs to monitor progress, manage beneficiaries, and generate impact reports.",
    tech: ["Django", "MySQL", "Auth", "Report Engine"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Monitor,
    deviceType: "browser" as const,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-rgb),0.05),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center md:justify-start gap-2 text-accent"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Portfolio Showcase</span>
            </motion.div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.9]">
              Featured <span className="text-accent italic">Case</span> Studies
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-xl max-w-md leading-relaxed mx-auto md:mx-0">
            A comprehensive look at systems where <span className="text-foreground font-bold">technical excellence</span> meets high-end UX.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24 md:gap-32 lg:gap-48">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 md:gap-16 lg:gap-24 items-center`}
            >
              {/* Mockup Side */}
              <div className="w-full lg:w-[55%] group">
                <DeviceMockup type={project.deviceType} className="group-hover:scale-[1.01] transition-transform duration-700 ease-out">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </DeviceMockup>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] space-y-6 md:space-y-10">
                <div className="space-y-4 md:space-y-6">
                  <Badge variant="outline" className="text-accent border-accent/20 tracking-widest uppercase text-[9px] md:text-[10px] px-3 md:px-4 py-1.5 font-black glass">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95] group">
                    <span className="bg-left-bottom bg-gradient-to-r from-accent to-accent bg-[length:0%_3px] md:bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] transition-all duration-500 pb-1 md:pb-2">
                      {project.title}
                    </span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">The Challenge</p>
                    <p className="text-base md:text-xl text-muted-foreground italic leading-relaxed font-medium">
                      "{project.problem}"
                    </p>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Our Solution</p>
                    <p className="text-base md:text-xl text-foreground/90 leading-relaxed font-bold">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-4 md:pt-8 flex flex-wrap gap-2 md:gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 md:px-5 py-1.5 md:py-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-accent/5 border border-accent/10 rounded-xl text-accent/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 md:pt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
                  <Button
                    size="lg"
                    className="h-14 md:h-16 px-8 md:px-10 rounded-[1.25rem] bg-accent hover:bg-accent/90 text-accent-foreground font-black text-[10px] md:text-xs uppercase tracking-widest shadow-2xl shadow-accent/20 group flex-1 md:flex-none"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                    <ExternalLink className="ml-3 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] border-white/10 glass hover:bg-accent/10 text-muted-foreground hover:text-accent flex-shrink-0"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-6 h-6 md:w-7 md:h-7" />
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
