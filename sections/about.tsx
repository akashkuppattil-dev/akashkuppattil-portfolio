"use client"

import { Card } from "@/components/ui/card"
import { BrainCircuit, Rocket, Globe2, Sparkles, Code2, Cpu, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const mindsets = [
  {
    icon: BrainCircuit,
    title: "AI-First Engineering",
    description: "I build every system with AI at its core — from intelligent backends to LLM-powered features that learn and adapt over time."
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description: "High-performance backends and frontends that don't just work — they scale to millions of users without breaking a sweat."
  },
  {
    icon: Globe2,
    title: "Global UX Standards",
    description: "Designing interfaces that are internationally intuitive, deeply accessible, and blazing fast on any device or network."
  }
]

const stats = [
  { value: 10, suffix: "+", label: "Freelance Projects" },
  { value: 4, suffix: "", label: "Academic Projects" },
  { value: 3, suffix: "", label: "Roles Mastered" },
  { value: 100, suffix: "%", label: "Up-to-date Tech" },
]

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = Math.max(value / (duration / 16), 1)

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [value, isInView])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
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
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Who I Am</span>
              </div>
              <h2 className="text-4xl xs:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Building <br />
                <span className="text-accent italic">Intelligence</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              I'm a <span className="text-foreground font-black">Full-Stack Developer</span>,{" "}
              <span className="text-accent font-black">AI Engineer</span>, and{" "}
              <span className="text-foreground font-black">Software Engineer</span> from Kerala, India. I specialize in bridging{" "}
              <span className="text-foreground font-black">advanced AI capabilities</span> with{" "}
              <span className="text-accent italic">seamless production systems</span>.
            </p>

            {/* Role Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { icon: Code2, label: "Full-Stack Dev" },
                { icon: Cpu, label: "AI Engineer" },
                { icon: Users, label: "Software Eng" },
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-accent/20 group hover:border-accent/50 hover:bg-accent/5 transition-all">
                  <role.icon className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">{role.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left p-4 rounded-2xl glass-card border border-white/5">
                  <h4 className="text-3xl sm:text-4xl font-black text-accent tracking-tighter">
                    <AnimatedNumber value={stat.value} />{stat.suffix}
                  </h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-2 gap-4 w-[100vw] sm:w-full -mx-4 sm:mx-0 px-4 sm:px-0 snap-x snap-mandatory scrollbar-hide pb-6 sm:pb-0"
          >
            {mindsets.map((item, idx) => (
              <div key={idx} className={`w-[85vw] sm:w-auto flex-shrink-0 snap-center sm:snap-align-none h-full ${idx === 0 ? "sm:col-span-2" : ""}`}>
                <Card className="p-8 glass border border-white/10 group hover:border-accent/30 transition-all h-full flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-background transition-colors" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                    {item.description}
                  </p>
                </Card>
              </div>
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
            Transforming complex challenges into <span className="text-accent italic">beautiful, intelligent systems</span> that scale and last.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
