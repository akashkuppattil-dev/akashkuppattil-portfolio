"use client"

import { Card } from "@/components/ui/card"
import { Cpu, Globe, Server, Workflow, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "AI & Innovation",
    icon: Cpu,
    description: "Integrating intelligence into digital experiences.",
    skills: ["Prompt Engineering", "LLMs (OpenAI, Anthropic)", "AI Tools & Automation", "LangChain", "Vector Databases"],
  },
  {
    title: "Frontend Engineering",
    icon: Globe,
    description: "Crafting premium user interfaces and experiences.",
    skills: ["React.js (Expert)", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX Design", "Figma"],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Architecting scalable and secure server-side logic.",
    skills: ["Python", "Django", "Node.js", "NestJS", "PHP", "Laravel", "Postgres", "MySQL"],
  },
  {
    title: "DevOps & Logic",
    icon: Workflow,
    description: "Streamlining deployment and application flow.",
    skills: ["Docker", "Vercel", "Git", "Actions", "JWT", "RBAC", "System Design"],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-24 space-y-4 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center md:justify-start gap-2 text-accent"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Expertise Spectrum</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
            Technical <span className="text-accent italic">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto md:mx-0 rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card className="p-8 md:p-10 glass border border-white/10 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden h-full">
                {/* Background Icon Decoration */}
                <category.icon className="absolute -right-8 -bottom-8 w-48 h-48 text-accent/5 -rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:text-accent/10" />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-xl shadow-accent/5">
                      <category.icon className="w-8 h-8 text-accent group-hover:text-background transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">{category.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{category.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl bg-accent/5 border border-accent/10 text-foreground/80 hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
