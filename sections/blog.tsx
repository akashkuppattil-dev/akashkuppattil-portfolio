"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const blogs = [
  {
    title: "Building RAG Pipelines with LangChain & OpenAI",
    excerpt: "A practical guide to building production-ready Retrieval-Augmented Generation systems using LangChain, Pinecone, and the OpenAI API.",
    date: "Jan 2026",
    category: "AI Engineering",
  },
  {
    title: "Full-Stack with Next.js 15 & NestJS",
    excerpt: "Architecture strategies for building robust full-stack applications combining Next.js App Router on the frontend with NestJS microservices.",
    date: "Dec 2025",
    category: "Full-Stack",
  },
  {
    title: "Advanced Prompt Engineering Techniques",
    excerpt: "Deep dive into chain-of-thought, few-shot prompting, and structured output strategies to maximise LLM accuracy in production.",
    date: "Nov 2025",
    category: "AI/Prompt Eng",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent px-4 py-1.5 glass border border-accent/20 rounded-full"
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Knowledge Base</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
            Latest <span className="text-accent italic">Insights</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-lg">
            Sharing what I learn building AI systems and full-stack applications in production.
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 -mx-4 sm:mx-0">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-center md:snap-align-none h-full"
            >
              <Card className="p-8 glass-card border border-white/5 group h-full flex flex-col relative overflow-hidden hover:border-accent/20 transition-all duration-500">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest px-3 py-1.5 bg-accent/5 rounded-lg border border-accent/10 glass">
                    {blog.category}
                  </span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{blog.date}</span>
                </div>

                <div className="relative z-10 flex-grow space-y-4">
                  <h3 className="text-xl font-black tracking-tighter uppercase leading-tight group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-10 relative z-10">
                  <Button variant="ghost" className="w-full justify-between items-center group/btn h-14 rounded-xl border border-white/5 hover:bg-accent hover:text-background transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest">Read More</span>
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
