"use client"

import { Card } from "@/components/ui/card"
import { Code2, Cpu, Database, Layout, Lightbulb, Zap, Sparkles, ArrowUpRight, Brain, Globe, Shield, Layers } from "lucide-react"
import { motion } from "framer-motion"

const services = [
    {
        title: "AI Integration",
        description: "Building intelligent applications powered by OpenAI, Anthropic Claude, Google Gemini, and custom LLM pipelines integrated directly into your products.",
        icon: Brain,
        color: "from-violet-500/10"
    },
    {
        title: "Full-Stack Web Apps",
        description: "End-to-end development with React, Next.js, NestJS, and Django — crafting high-performance, scalable web applications from database to UI.",
        icon: Layers,
        color: "from-blue-500/10"
    },
    {
        title: "UI/UX Design",
        description: "Crafting premium, conversion-focused interfaces using modern design systems, micro-animations, and accessibility-first principles.",
        icon: Layout,
        color: "from-amber-500/10"
    },
    {
        title: "Backend Engineering",
        description: "Architecting robust REST APIs, microservices, and authentication systems using NestJS, Node.js, Django, or FastAPI with enterprise-grade security.",
        icon: Database,
        color: "from-emerald-500/10"
    },
    {
        title: "Prompt Engineering",
        description: "Designing advanced prompt architectures, RAG pipelines, and AI workflows to maximise model accuracy, reasoning quality and automation output.",
        icon: Lightbulb,
        color: "from-cyan-500/10"
    },
    {
        title: "Technical Consulting",
        description: "Expert guidance on tech stack selection, AI adoption strategy, architecture planning, and scaling digital products to production.",
        icon: Code2,
        color: "from-red-500/10"
    },
]

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                            <Zap className="w-4 h-4 fill-accent/20" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Service Portfolio</span>
                        </div>
                        <h2 className="text-4xl xs:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
                            Expert <br />
                            <span className="text-accent italic">Services</span>
                        </h2>
                    </div>
                    <div className="md:w-1/3 text-center md:text-left">
                        <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                            From <span className="text-foreground font-bold">AI engineering</span> to full-stack development — delivering high-impact digital solutions that make a difference.
                        </p>
                    </div>
                </div>

                <div className="flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pb-8 sm:pb-0 snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 -mx-4 sm:mx-0">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                            className="w-[85vw] max-w-[340px] sm:w-auto sm:max-w-none flex-shrink-0 snap-center sm:snap-align-none"
                        >
                            <Card className="p-8 glass-card border border-white/5 group h-full relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="relative z-10 space-y-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                            <service.icon className="w-8 h-8 text-accent group-hover:text-background transition-colors" />
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-white/10 group-hover:text-accent transition-all group-hover:rotate-12" />
                                    </div>

                                    <div className="space-y-3 flex-grow">
                                        <h3 className="text-xl font-black tracking-tight uppercase leading-none">{service.title}</h3>
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
                        <h4 className="text-2xl xs:text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            Ready to Build Something <span className="text-accent italic">Intelligent?</span>
                        </h4>
                        <p className="text-muted-foreground font-medium max-w-md mx-auto">
                            Let's collaborate to bring your vision to life with AI-powered engineering and modern full-stack development.
                        </p>
                        <div>
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
