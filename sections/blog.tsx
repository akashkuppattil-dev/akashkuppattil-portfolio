"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const blogs = [
  {
    title: "Lessons from Building Real-Time Applications",
    excerpt:
      "Discover key insights and best practices for developing real-time applications using modern tech stacks and architectural patterns.",
    date: "Dec 2024",
    category: "Backend",
  },
  {
    title: "Choosing Between Django and NestJS",
    excerpt:
      "A comprehensive comparison of Django and NestJS, exploring when to use each framework and their unique advantages for different project types.",
    date: "Nov 2024",
    category: "Architecture",
  },
  {
    title: "Backend Authentication Best Practices (JWT & RBAC)",
    excerpt:
      "Deep dive into implementing secure authentication systems using JWT tokens and role-based access control for enterprise applications.",
    date: "Oct 2024",
    category: "Security",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-accent"
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Knowledge Base</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none">
            Latest <span className="text-accent italic">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="p-10 glass border border-white/10 group hover:border-accent/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-transparent"></div>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-lg border border-accent/10">{blog.category}</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{blog.date}</span>
                </div>

                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight uppercase leading-tight group-hover:text-accent transition-colors">{blog.title}</h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium">{blog.excerpt}</p>

                <div className="mt-auto">
                  <Button variant="ghost" className="w-full justify-between items-center group/btn overflow-hidden h-14 rounded-xl border border-white/5 hover:bg-accent hover:text-background transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest">Read Article</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
