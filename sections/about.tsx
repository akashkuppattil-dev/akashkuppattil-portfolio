"use client"

import { Card } from "@/components/ui/card"
import { BrainCircuit, Rocket, Globe2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const mindsets = [
  {
    icon: BrainCircuit,
    title: "AI-First Approach",
    description: "Integrating cognitive intelligence into every system I build, from simple sites to complex enterprise workflows."
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description: "I focus on high-performance backends and frontends that don't just work—they scale to millions."
  },
  {
    icon: Globe2,
    title: "Global UX Standards",
    description: "Designing interfaces that are internationally intuitive, accessible, and fast on any device."
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-accent">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Philosophy</span>
              </div>
              <h2 className="text-4xl xs:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Crafting <br />
                <span className="text-accent italic">Intelligence</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              I specialize in bridging the gap between <span className="text-foreground font-black">advanced AI capabilities</span> and <span className="text-accent italic">seamless user interactions</span>.
            </p>
            <div className="flex justify-center lg:justify-start gap-10">
              <div>
                <h4 className="text-4xl font-black text-accent tracking-tighter">98%</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Optimization</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-accent tracking-tighter">150+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">AI Solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {mindsets.map((item, idx) => (
              <Card key={idx} className={`p-8 glass border border-white/10 group hover:border-accent/30 transition-all ${idx === 0 ? "sm:col-span-2" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <item.icon className="w-6 h-6 text-accent group-hover:text-background transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                  {item.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto pt-20 border-t border-white/5"
        >
          <p className="text-xl xs:text-2xl md:text-4xl font-black text-foreground leading-[1.1] uppercase tracking-tighter">
            Transforming complex data into <span className="text-accent italic">beautiful user stories</span> and high-performance applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
