"use client"

import { Card } from "@/components/ui/card"
import { Cpu, Globe, Server, Workflow, Sparkles, Brain, Database, Code2, GitBranch, Zap, Cloud, Shield } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Engineering intelligent solutions with cutting-edge AI/ML capabilities.",
    skills: ["Prompt Eng", "LLMs", "LangChain", "RAG", "OpenAI API", "Anthropic", "Vector DB", "Hugging Face"],
    color: "from-violet-500/10"
  },
  {
    title: "Frontend",
    icon: Globe,
    description: "Crafting visually superior and performant user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "shadcn/ui"],
    color: "from-blue-500/10"
  },
  {
    title: "Backend Core",
    icon: Server,
    description: "Building resilient and distributed server-side ecosystems.",
    skills: ["Node.js", "NestJS", "Django", "FastAPI", "PHP", "Laravel", "REST APIs", "GraphQL"],
    color: "from-emerald-500/10"
  },
  {
    title: "Databases",
    icon: Database,
    description: "Designing and managing powerful data architectures.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pinecone", "Supabase", "Firebase"],
    color: "from-amber-500/10"
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description: "Optimising lifecycle and scaling of applications in the cloud.",
    skills: ["Docker", "Vercel", "AWS", "Google Cloud", "CI/CD", "GitHub Actions", "Nginx"],
    color: "from-cyan-500/10"
  },
  {
    title: "Security & Auth",
    icon: Shield,
    description: "Implementing robust security layers and access control.",
    skills: ["JWT", "RBAC", "OAuth 2.0", "Auth.js", "SSL/TLS", "API Security", "bcrypt"],
    color: "from-red-500/10"
  },
]

const aiTools = [
  { name: "ChatGPT", category: "AI Chat" },
  { name: "Claude", category: "AI Chat" },
  { name: "Gemini", category: "AI Chat" },
  { name: "Cursor", category: "AI IDE" },
  { name: "GitHub Copilot", category: "AI Code" },
  { name: "Midjourney", category: "AI Image" },
  { name: "Stable Diffusion", category: "AI Image" },
  { name: "ElevenLabs", category: "AI Voice" },
  { name: "Perplexity", category: "AI Search" },
  { name: "Notion AI", category: "AI Productivity" },
  { name: "Runway ML", category: "AI Video" },
  { name: "Make.com", category: "AI Automation" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-transparent relative overflow-hidden">
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
            A curated suite of modern technologies — from <span className="text-foreground font-black">AI/ML systems</span> to full-stack frameworks — engineered to deliver elite performance.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 pb-6 sm:pb-0 snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 -mx-4 sm:mx-0">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="w-[85vw] max-w-[340px] sm:w-auto sm:max-w-none flex-shrink-0 snap-center sm:snap-align-none h-full"
            >
              <Card className="p-6 glass-card h-full flex flex-col items-start gap-5 relative overflow-hidden group border border-border/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                <div className="relative z-10 w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:bg-accent transition-all duration-500 shadow-xl">
                  <category.icon className="w-7 h-7 text-accent group-hover:text-background transition-colors" />
                </div>

                <div className="relative z-10 space-y-2 flex-grow">
                  <h3 className="text-lg font-black uppercase tracking-tight leading-none text-foreground group-hover:text-accent transition-colors">{category.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{category.description}</p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto pt-4">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[8px] font-black uppercase tracking-widest rounded-lg bg-foreground/5 border border-border text-muted-foreground hover:bg-accent/10 hover:text-accent hover:border-accent/40 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-[2rem] glass-card border border-accent/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent"></div>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <Zap className="w-4 h-4 fill-accent/20" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">AI Tools Mastery</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter leading-none">
                  AI Tools <span className="text-accent italic">2026</span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground font-medium max-w-xs">
                Proficient with the latest generation of AI tools for productivity, development, and creative workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group"
                >
                  <div className="flex flex-col items-start px-4 py-3 rounded-xl glass border border-white/10 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-default min-w-[120px]">
                    <span className="text-xs font-black uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">{tool.name}</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/60 mt-0.5">{tool.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
