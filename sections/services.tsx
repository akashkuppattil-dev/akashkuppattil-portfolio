"use client"

import { Card } from "@/components/ui/card"
import { Code2, Cpu, Database, Layout, Lightbulb, Zap, Sparkles, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
    {
        title: "AI Integration",
        description: "Building intelligent applications by integrating LLMs like OpenAI and Anthropic into existing products.",
        icon: Cpu,
        color: "from-blue-500/10"
    },
    {
        title: "Custom Web Apps",
        description: "Versatile full-stack development using React, Next.js, and Django, focused on high-performance.",
        icon: Layout,
        color: "from-purple-500/10"
    },
    {
        title: "UI/UX Design",
        description: "Crafting premium, user-centric designs and intuitive interfaces that elevate digital presence.",
        icon: Zap,
        color: "from-amber-500/10"
    },
    {
        title: "Backend Eng",
        description: "Architecting high-performance APIs and secure server-side logic with NestJS, Node, or Python.",
        icon: Database,
        color: "from-emerald-500/10"
    },
    {
        title: "Prompt Eng",
        description: "Optimizing AI interactions through advanced prompt design to improve accuracy and automation.",
        icon: Lightbulb,
        color: "from-cyan-500/10"
    },
    {
        title: "Technical Consult",
        description: "Comprehensive guidance on technology choice, architecture planning, and scaling digital solutions.",
        icon: Code2,
        color: "from-red-500/10"
    },
]

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                            <Zap className="w-4 h-4 fill-accent/20" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Service Portfolio</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
                            Expert <br />
                            <span className="text-accent italic">Services</span>
                        </h2>
                    </div>
                    <div className="md:w-1/3 text-center md:text-left">
                        <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                            Leveraging deep technical knowledge to deliver <span className="text-foreground font-bold">high-impact</span> digital solutions.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 glass-card border border-white/5 group h-full relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                            <service.icon className="w-8 h-8 text-accent group-hover:text-background transition-colors" />
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-white/10 group-hover:text-accent transition-all" />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black tracking-tight uppercase leading-none">{service.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 md:p-16 rounded-[3rem] glass-card border border-accent/20 text-center space-y-8 relative overflow-hidden"
                >
                    <div className="relative z-10 space-y-6">
                        <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            Ready to <span className="text-accent italic">Incorporate</span> AI?
                        </h4>
                        <div className="">
                            <a href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-accent-foreground font-black rounded-2xl hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 text-[10px] uppercase tracking-widest">
                                Start Collaboration <Sparkles className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
