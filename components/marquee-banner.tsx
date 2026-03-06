"use client"

import { motion } from "framer-motion"

const items = [
    "Full-Stack Development",
    "AI Engineering",
    "Software Architecture",
    "LLM Integration",
    "React & Next.js",
    "NestJS & Django",
    "Prompt Engineering",
    "UI/UX Design",
    "Cloud & DevOps",
    "PostgreSQL & Redis",
    "LangChain & RAG",
    "TypeScript",
]

export default function MarqueeBanner() {
    return (
        <div className="w-full overflow-hidden bg-accent py-4 relative z-10">
            {/* Left / right fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-accent to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-accent to-transparent z-10 pointer-events-none" />

            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
                className="flex gap-0 whitespace-nowrap w-max"
            >
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-4 px-6">
                        <span className="text-accent-foreground font-black text-sm uppercase tracking-[0.25em]">{item}</span>
                        <span className="text-accent-foreground/40 font-black text-lg">✦</span>
                    </span>
                ))}
            </motion.div>
        </div>
    )
}
