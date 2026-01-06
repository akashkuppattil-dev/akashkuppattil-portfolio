import { Card } from "@/components/ui/card"
import { Code2, Cpu, Database, Layout, Lightbulb, Zap } from "lucide-react"

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
        description: "Architecting high-performance RESTful APIs and secure server-side logic with NestJS, Node, or Python.",
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
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="section-title mx-auto inline-block text-center w-full">Services & Expertise</h2>
                    <div className="section-accent mx-auto"></div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Leveraging deep technical knowledge to deliver high-impact digital solutions for startups and enterprises.
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-hidden pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                    {services.map((service, idx) => (
                        <Card key={idx} className="premium-card p-7 group hover:bg-accent/5 transition-colors duration-500 min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
                            <div className="space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                    <service.icon className="w-7 h-7 text-accent group-hover:text-background" />
                                </div>
                                <h3 className="text-xl font-black tracking-tight uppercase">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 p-8 rounded-3xl bg-accent/5 border border-accent/20 text-center space-y-4">
                    <h4 className="text-2xl font-black uppercase tracking-tight">Ready to innovate together?</h4>
                    <p className="text-muted-foreground">I am passionate about solving complex challenges with AI and modern software architecture.</p>
                    <div className="pt-2">
                        <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-black rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                            LET'S TALK
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
