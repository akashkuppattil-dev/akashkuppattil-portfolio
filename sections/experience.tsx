"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase, Sparkles, Workflow } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "PHP Developer Intern",
    company: "Trogon Media Pvt Ltd",
    period: "July 2025 – Nov 2025",
    location: "Remote",
    highlights: [
      "Developed and maintained web applications using Laravel & CodeIgniter frameworks",
      "Built responsive, pixel-perfect UI components and integrated backend APIs",
      "Managed deployments, domain setup and server config via cPanel",
      "Collaborated across design and backend teams in an Agile delivery environment",
    ],
    skills: ["PHP", "Laravel", "CodeIgniter", "HTML/CSS", "cPanel", "MySQL"],
  },
  {
    title: "Software Developer Intern",
    company: "Bairuha Tech",
    period: "Jan 2025 – May 2025",
    location: "Calicut, Kerala",
    highlights: [
      "Full-stack development with React.js, NestJS & PostgreSQL — delivering production-ready modules",
      "Implemented secure JWT + RBAC authentication architecture for enterprise-grade access control",
      "Performed thorough API testing, schema validation and performance profiling",
      "Participated in Agile/Scrum sprint planning, code reviews and retrospectives",
    ],
    skills: ["React", "NestJS", "PostgreSQL", "JWT", "RBAC", "TypeScript", "Agile/Scrum"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent px-4 py-1.5 glass border border-accent/20 rounded-full"
          >
            <Workflow className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Professional Path</span>
          </motion.div>
          <h2 className="text-4xl xs:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
            Career <span className="text-accent italic">Architecture</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-xl">
            Real-world experience building production systems across full-stack and AI engineering roles.
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto lg:block gap-5 lg:gap-0 lg:space-y-8 pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide px-4 lg:px-0 -mx-4 lg:mx-0 mt-8 lg:mt-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[90vw] max-w-[400px] lg:w-auto lg:max-w-none flex-shrink-0 snap-center lg:snap-align-none"
            >
              <Card className="p-8 md:p-12 glass-card border border-white/5 relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                  <Briefcase className="w-40 h-40 md:w-60 md:h-60" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
                  {/* Header Side */}
                  <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
                    <Badge variant="outline" className="text-accent border-accent/20 tracking-[0.2em] uppercase text-[9px] px-4 py-1.5 font-black bg-accent/5 glass">
                      {exp.location}
                    </Badge>
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">{exp.title}</h3>
                      <p className="text-xl text-accent font-black italic">{exp.company}</p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground font-black uppercase tracking-widest text-[10px]">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/3 space-y-10">
                    <ul className="space-y-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4 text-base md:text-lg text-foreground font-medium leading-relaxed text-left">
                          <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5 justify-center lg:justify-start">
                      {exp.skills.map((s, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:bg-accent hover:text-white transition-all shadow-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
