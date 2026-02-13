"use client"

import { Card } from "@/components/ui/card"
import { Cpu, Globe, Server, Workflow, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "AI & Intelligence",
    icon: Cpu,
    description: "Integrating high-level intelligence into digital architectures.",
    skills: ["Prompt Eng", "LLMs", "LangChain", "Vector DB"],
  },
  {
    title: "Frontend",
    icon: Globe,
    description: "Crafting visually superior and performant user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
  },
  {
    title: "Backend Core",
    icon: Server,
    description: "Building resilient and distributed server-side ecosystems.",
    skills: ["Node.js", "Django", "NestJS", "PHP", "Postgres"],
  },
  {
    title: "Infrastructure",
    icon: Workflow,
    description: "Optimizing the lifecycle and security of applications.",
    skills: ["Docker", "Vercel", "CI/CD", "JWT/RBAC", "Cloud"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Technical Spectrum</span>
            </div>
            <h2 className="text-4xl xs:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Technical <br />
              <span className="text-accent italic">Arsenal</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-lg font-medium leading-relaxed">
            A curated suite of modern technologies engineered to deliver <span className="text-foreground font-black">elite performance</span> and unmatched scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-8 glass-card h-full flex flex-col items-start gap-8 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:bg-accent transition-all duration-500 shadow-xl">
                  <category.icon className="w-8 h-8 text-accent group-hover:text-background transition-colors" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{category.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg bg-white/5 border border-white/5 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
