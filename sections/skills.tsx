"use client"

import { motion } from "framer-motion"

const STACK = [
  {
    id: "01",
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    id: "02",
    category: "Frameworks & Libraries",
    items: ["Django", "Django REST Framework", "React", "Next.js", "FastAPI", "NestJS"]
  },
  {
    id: "03",
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis"]
  },
  {
    id: "04",
    category: "Tools & Deployment",
    items: ["Git", "Docker", "Postman", "Vercel", "Render", "Nginx"]
  },
  {
    id: "05",
    category: "AI & Automation",
    items: ["LLM Integration", "DeepFace", "Prompt Engineering", "BeautifulSoup"]
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      } 
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    },
  }

  return (
    <section id="stack" className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Tech Stack</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight leading-[1.1]">
            Curated <span className="editorial-italic">arsenal</span> for <br className="hidden md:block"/> high-performance systems.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {STACK.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium tracking-widest text-muted-foreground">{item.id}</span>
                <div className="h-[1px] flex-grow bg-border" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight uppercase">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.items.map((skill) => (
                  <span key={skill} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
