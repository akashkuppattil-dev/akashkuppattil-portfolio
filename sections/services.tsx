"use client"

import { Card } from "@/components/ui/card"
import {
    Code2, Database, Layout, Lightbulb, Zap, Sparkles, ArrowUpRight,
    Brain, Globe, Layers, ShoppingBag, Image, BarChart3, Rocket, Settings, Headphones
} from "lucide-react"
import { motion } from "framer-motion"

const categories = [
    {
        name: "Build",
        services: [
            {
                title: "Web Development",
                description: "Crafting high-end business sites, portfolios, and conversion-focused landing pages.",
                icon: Globe,
                color: "from-blue-500/10"
            },
            {
                title: "Full-Stack Web Apps",
                description: "End-to-end development with Next.js, NestJS, and Django — building scalable systems.",
                icon: Layers,
                color: "from-indigo-500/10"
            },
            {
                title: "E-Commerce",
                description: "Building robust online stores with secure payments and integrated order management systems.",
                icon: ShoppingBag,
                color: "from-violet-500/10"
            },
            {
                title: "AI Integration",
                description: "Integrating intelligent LLM pipelines and custom AI solutions directly into your products.",
                icon: Brain,
                color: "from-purple-500/10"
            }
        ]
    },
    {
        name: "Design & Grow",
        services: [
            {
                title: "UI/UX Design",
                description: "Premium, modern interfaces with focus on micro-animations and user psychology.",
                icon: Layout,
                color: "from-amber-500/10"
            },
            {
                title: "Digital Marketing",
                description: "Strategic posters, social media presence, and professional branding identity.",
                icon: Image,
                color: "from-orange-500/10"
            },
            {
                title: "SEO & Optimization",
                description: "Enhancing performance, search visibility, and data-driven analytics for growth.",
                icon: BarChart3,
                color: "from-emerald-500/10"
            },
            {
                title: "Prompt Engineering",
                description: "Advanced prompt architectures and RAG pipelines to maximize AI reasoning quality.",
                icon: Lightbulb,
                color: "from-cyan-500/10"
            }
        ]
    },
    {
        name: "Support & Scale",
        services: [
            {
                title: "Backend Engineering",
                description: "Architecting robust REST APIs, microservices, and secure authentication systems.",
                icon: Database,
                color: "from-emerald-500/10"
            },
            {
                title: "Deployment & DevOps",
                description: "Professional hosting, domain management, and server architecture setup for production.",
                icon: Rocket,
                color: "from-rose-500/10"
            },
            {
                title: "Maintenance & Support",
                description: "Continuous bug fixes, security updates, and performance patches to keep apps running.",
                icon: Settings,
                color: "from-slate-500/10"
            },
            {
                title: "Technical Consulting",
                description: "Expert guidance on tech stacks, AI adoption strategy, and architecture planning.",
                icon: Code2,
                color: "from-red-500/10"
            }
        ]
    }
]

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 px-4 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 text-accent group">
                            <motion.div
                                animate={{ rotate: [0, 90, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Zap className="w-5 h-5 fill-accent/20" />
                            </motion.div>
                            <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-80 group-hover:opacity-100 transition-opacity">Expert Solutions</span>
                        </div>
                        <h2 className="relative text-5xl xs:text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] py-4">
                            Expert<br />
                            <span className="text-accent italic relative">
                                Services
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute -bottom-2 left-0 h-2 bg-accent/20 -skew-x-12"
                                />
                            </span>
                        </h2>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden md:block" />
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                            Engineering <span className="text-foreground font-black underline decoration-accent/30 decoration-4 underline-offset-4">elite digital architectures</span> where technical precision meets high-performance aesthetics.
                        </p>
                    </div>
                </div>

                {/* Expert Services Carousel */}
                <div className="relative group overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
                    <motion.div
                        animate={{ x: [0, "-50%"] }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        className="flex gap-6 w-max py-10"
                    >
                        {[...categories.flatMap(cat => cat.services.map(s => ({ ...s, category: cat.name }))),
                        ...categories.flatMap(cat => cat.services.map(s => ({ ...s, category: cat.name })))]
                            .map((service, idx) => (
                                <div key={idx} className="w-[300px] sm:w-[380px] flex-shrink-0 h-full">
                                    <div className="p-8 h-full rounded-[2.5rem] glass-card border border-white/5 flex flex-col items-start gap-8 relative overflow-hidden group hover:border-accent/30 transition-all duration-700 hover:-translate-y-3">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                                        <div className="relative z-10 flex justify-between items-start w-full">
                                            <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:bg-accent transition-all duration-700 shadow-2xl">
                                                <service.icon className="w-8 h-8 text-accent group-hover:text-background transition-colors" />
                                            </div>
                                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/60 group-hover:text-accent transition-colors bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10">
                                                {service.category}
                                            </span>
                                        </div>

                                        <div className="relative z-10 flex-grow space-y-4">
                                            <h3 className="text-2xl font-black uppercase tracking-tighter leading-[0.9] text-foreground group-hover:text-accent transition-colors">{service.title}</h3>
                                            <p className="text-sm text-muted-foreground font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">"{service.description}"</p>
                                        </div>

                                        <div className="relative z-10 w-full pt-8 border-t border-white/5">
                                            <div className="flex items-center gap-3 text-accent transition-all group-hover:gap-5">
                                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Expert Insight</span>
                                                <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </motion.div>

                    {/* Masking gradients */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none hidden sm:block" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none hidden sm:block" />
                </div>

                {/* Final CTA */}
                <div className="pt-12 flex flex-col items-center justify-center gap-12">
                    <motion.div
                        whileInView={{ opacity: [0, 1], y: [20, 0] }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center gap-6 px-12 py-6 bg-accent text-accent-foreground font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
                        >
                            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                            <span className="relative text-[10px] uppercase tracking-[0.3em]">Get a Free Quote</span>
                            <Sparkles className="relative w-5 h-5 animate-pulse" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full p-12 md:p-16 rounded-[3rem] glass-card border border-accent/20 text-center space-y-8 relative overflow-hidden"
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
            </div>
        </section>
    )
}
