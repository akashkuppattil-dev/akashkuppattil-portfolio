"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Briefcase, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "PHP Developer Intern",
    company: "Trogon Media Pvt Ltd",
    period: "July 2025 – Nov 2025",
    location: "Remote",
    highlights: [
      "Worked with Laravel & CodeIgniter frameworks",
      "Built responsive UI components (HTML, CSS, JS, Bootstrap)",
      "Managed deployments with cPanel",
      "Hosted updates, database setup, and configuration",
      "Collaborated across design + backend teams",
    ],
    skills: ["PHP", "Laravel", "CodeIgniter", "HTML", "CSS", "Bootstrap", "cPanel"],
  },
  {
    title: "Software Developer Intern",
    company: "Bairuha Tech, Calicut",
    period: "Jan 2025 – May 2025",
    location: "Calicut, Kerala",
    highlights: [
      "Full-stack development with React.js, NestJS, PostgreSQL",
      "Implemented secure JWT + RBAC authentication systems",
      "Performed API testing, debugging, and validations",
      "Improved backend performance and response times",
      "Participated in Agile/Scrum sprint planning and reviews",
    ],
    skills: ["React.js", "NestJS", "PostgreSQL", "JWT", "RBAC", "Agile"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent -rotate-12 translate-y-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-accent"
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Career Journey</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
            Professional <span className="text-accent italic">Path</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <Card className="p-8 md:p-12 glass border border-white/10 premium-card hover:border-accent/30 transition-all duration-500 overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 text-accent/5 transition-colors group-hover:text-accent/10">
                  <Briefcase className="w-32 h-32 rotate-12" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                  {/* Left Side: Header Info */}
                  <div className="lg:w-1/3 space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/20 tracking-[0.2em] uppercase text-[9px] px-4 py-1.5 font-black bg-accent/5">
                      {exp.location}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none text-foreground">{exp.title}</h3>
                    <p className="text-xl text-accent font-bold italic">{exp.company}</p>

                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-3 text-muted-foreground font-bold uppercase tracking-widest text-[10px]">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Details */}
                  <div className="lg:w-2/3 space-y-8">
                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-4 text-base md:text-lg text-foreground/80 leading-relaxed group/item"
                        >
                          <span className="text-accent font-black transition-transform group-hover/item:scale-125 mt-1.5">
                            <Sparkles className="w-4 h-4" />
                          </span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 pt-6">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-5 py-2 glass border border-accent/10 text-accent/80 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                          {skill}
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
