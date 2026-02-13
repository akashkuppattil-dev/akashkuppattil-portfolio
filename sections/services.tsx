"use client"

import { Card } from "@/components/ui/card"
import { Code2, Cpu, Database, Layout, Lightbulb, Zap, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const services = [
    {
        title: "AI & LLM Integration",
        description: "Building intelligent applications by integrating LLMs like OpenAI and Anthropic into existing workflows and products.",
        icon: Cpu,
    },
    {
        title: "Custom Web Applications",
        description: "Versatile full-stack development using React, Next.js, and Django, focused on high-performance and scalability.",
        icon: Layout,
    },
    {
        title: "UI/UX & Brand Design",
        description: "Crafting premium, user-centric designs and intuitive interfaces that elevate digital presence and engagement.",
        icon: Zap,
    },
    {
        title: "Backend Engineering",
        description: "Architecting high-性能 RESTful APIs and secure server-side logic with NestJS, Node, or Python.",
        icon: Database,
    },
    {
        title: "Prompt Engineering",
        description: "Optimizing AI interactions through advanced prompt design to improve accuracy, creativity, and automation efficiency.",
        icon: Lightbulb,
    },
    {
        title: "Technical Consulting",
        description: "Comprehensive guidance on technology choice, architecture planning, and scaling digital solutions.",
        icon: Code2,
    },
]

export default function Services() {
    return (
        <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-24 space-y-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-accent"
                    >
                        <Zap className="w-4 h-4 fill-accent/20" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Service Spectrum</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none">
                        Our <span className="text-accent italic">Expert</span> Services
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-10 glass border border-white/10 group hover:border-accent/30 transition-all duration-500 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <service.icon className="w-24 h-24 rotate-12" />
                                </div>

                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-[1.25rem] bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                        <service.icon className="w-8 h-8 text-accent group-hover:text-background transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight uppercase leading-none">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 p-10 md:p-16 rounded-[2.5rem] glass border border-accent/20 text-center space-y-8 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 space-y-6">
                        <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Ready to innovate <span className="text-accent italic">together</span>?</h4>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
                            I am passionate about solving complex challenges with AI and modern software architecture.
                        </p>
                        <div className="pt-4">
                            <a href="#contact" className="inline-flex items-center gap-4 px-12 py-5 bg-accent text-accent-foreground font-black rounded-2xl hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 text-xs uppercase tracking-widest group">
                                Start Your Project
                                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
