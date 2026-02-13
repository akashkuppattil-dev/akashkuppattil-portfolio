"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, CheckCircle2, Trophy, Rocket, Target, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const mindsets = [
  {
    icon: Target,
    title: "Problem-Solving First",
    description: "I don't just write code; I build systems that solve specific business challenges and user needs."
  },
  {
    icon: Rocket,
    title: "Ownership Mentality",
    description: "I take full responsibility for the lifecycle of features, from ideation to deployment and maintenance."
  },
  {
    icon: Trophy,
    title: "Continuous Excellence",
    description: "Dedicated to writing clean, maintainable, and optimized code that scales with the product."
  }
]

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-accent"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Philosophy</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none">
              Professional <span className="text-accent italic">Mindset</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-md leading-relaxed">
            Bridging the gap between <span className="text-foreground font-bold">complex technical requirements</span> and <span className="text-accent italic">intuitive user experiences</span>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
        >
          {mindsets.map((item, idx) => (
            <Card key={idx} className="p-10 glass border border-white/10 group hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                {item.description}
              </p>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-12"
          >
            <div className="space-y-8 text-xl sm:text-2xl leading-relaxed text-muted-foreground font-medium">
              <p className="text-foreground text-3xl font-black leading-tight">
                I am a <span className="text-accent italic underline decoration-accent/20 decoration-8 underline-offset-4">Software Developer</span> with a track record of building reliable web systems.
              </p>
              <ul className="space-y-6">
                {[
                  { text: "Expertise in AI Development & Large Language Models.", highlight: "AI Development" },
                  { text: "Advanced Prompt Engineering for automation and creative solutions.", highlight: "Prompt Engineering" },
                  { text: "Versatile Web Designer & Architect focused on premium UX.", highlight: "Premium UX" }
                ].map((li, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span>{li.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="p-10 glass border border-accent/20 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors"></div>
              <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter">The Profile</h3>
              <div className="space-y-8">
                <div className="pb-6 border-b border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-accent mb-3">Location</p>
                  <p className="font-bold text-2xl uppercase">Calicut, Kerala, India</p>
                </div>
                <div className="pb-6 border-b border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-accent mb-3">Education</p>
                  <p className="font-bold text-2xl uppercase">MCA (2025 Graduate)</p>
                </div>
                <div className="pb-10">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-accent mb-3">Focus</p>
                  <p className="font-black text-3xl text-foreground uppercase tracking-tighter italic">AI & FULL-STACK</p>
                </div>
              </div>

              <a
                href="/Akash_K_Software_Developer_Resume.pdf"
                download
                className="block w-full"
              >
                <Button size="lg" className="w-full h-16 bg-accent hover:bg-accent/90 text-accent-foreground font-black group rounded-2xl shadow-2xl shadow-accent/20 text-xs uppercase tracking-widest gap-4">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Get Full Resume
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
