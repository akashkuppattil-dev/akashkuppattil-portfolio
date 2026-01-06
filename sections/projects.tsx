"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, Monitor, Server, Shield, Smartphone } from "lucide-react"

const projects = [
  {
    title: "Enterprise Hospital Management System",
    category: "Full-Stack System",
    problem: "Inefficient patient registration and a fragmented appointment scheduling process leading to long wait times and data silos.",
    solution: "Developed a secure, role-based platform with a streamlined front-office module and high-performance REST APIs for real-time synchronization.",
    outcomes: ["50% reduction in registration time", "Secured sensitive data with JWT/RBAC", "Zero downtime during peak hours"],
    tech: ["React.js", "NestJS", "PostgreSQL", "JWT", "RBAC"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Logistics & Warehouse Tracking",
    category: "Backend & Real-time",
    problem: "Lack of real-time visibility into vehicle movement and manual warehouse operations causing delays and inventory errors.",
    solution: "Engineered a Python-based tracking system with automated workflows and an analytics dashboard for predictive logistics management.",
    outcomes: ["Real-time trip tracking accuracy", "Automated inventory reporting", "Intuitive fleet manager dashboard"],
    tech: ["Python", "Django", "MySQL", "Real-time Tracking", "Data Analytics"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Server,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Free Bird — Social Impact Platform",
    category: "NGO Case Management",
    problem: "Inability to track the progress of beneficiaries effectively across multiple social impact programs.",
    solution: "Built a comprehensive case management dashboard allowing NGOs to monitor progress, manage beneficiaries, and generate impact reports.",
    outcomes: ["Centralized beneficiary database", "Enhanced progress tracking", "Secure multi-role access control"],
    tech: ["Django", "MySQL", "Authentication", "Report Engine"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">Case Studies</h2>
          <div className="section-accent"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of production-grade systems built to solve real-world problems.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
              {/* Image side */}
              <div className="flex-1 w-full order-last lg:order-none">
                <div className="relative group overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-accent/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                </div>
              </div>

              {/* Content side */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-accent border-accent/30 tracking-widest uppercase text-[10px] px-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl font-black tracking-tight leading-tight">{project.title}</h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">The Problem</p>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">The Solution</p>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Key Outcomes</p>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-snug">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                  <div className="flex flex-wrap gap-2 order-2 sm:order-1">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-[9px] font-black uppercase tracking-widest rounded bg-accent/10 text-accent border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 order-1 sm:order-2">
                    <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl border-primary/20 hover:border-accent hover:text-accent" onClick={() => window.open(project.github, "_blank")}>
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button size="lg" className="flex-grow sm:flex-grow-0 h-12 px-8 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xs uppercase tracking-widest" onClick={() => window.open(project.link, "_blank")}>
                      LIVE DEMO
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
