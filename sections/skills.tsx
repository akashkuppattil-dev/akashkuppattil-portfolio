import { Card } from "@/components/ui/card"
import {
  Code2,
  Database,
  GitBranch,
  Zap,
  Settings,
  Cpu,
  Braces,
  Box,
  Palette,
  TerminalSquare,
  Globe,
  Server,
  Workflow,
  ShieldCheck,
} from "lucide-react"

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
    skills: ["Python", "Django", "Node.js", "NestJS", "PHP", "Laravel", "PostgreSQL", "MySQL"],
  },
  {
    title: "DevOps & Logic",
    icon: Workflow,
    description: "Streamlining deployment and application flow.",
    skills: ["Docker", "Vercel", "Git", "GitHub Actions", "JWT", "RBAC", "System Design"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-accent"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive suite of technologies and methodologies I use to bring ideas to life.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-hidden pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="premium-card p-6 sm:p-7 group overflow-hidden relative min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
            >
              {/* Background Icon Decoration */}
              <category.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-accent/5 -rotate-12 group-hover:scale-110 group-hover:text-accent/10 transition-all duration-500" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-background" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight">{category.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg bg-background border border-border/50 text-foreground/70 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
