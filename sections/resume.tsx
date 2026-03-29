"use client"

import { Download, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-6 block">Technical Dossier</span>
              <h2 className="text-[clamp(3rem,8vw,6rem)] font-semibold tracking-tighter uppercase leading-[0.9] mb-12">
                Professional <br/> <span className="editorial-italic">Verified</span> Assets.
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal">
                A concise documentation of technical expertise, verified achievements, and architectural software history.
              </p>
            </div>

            <div className="space-y-10 pt-8 border-t border-border/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground block">Engineering Depth</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 text-[11px] font-black uppercase tracking-[0.2em] text-foreground">
                <div className="flex flex-col items-center gap-4">
                   <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                   AI Engineering
                </div>
                <div className="flex flex-col items-center gap-4">
                   <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                   RAG & LLM Ops
                </div>
                <div className="flex flex-col items-center gap-4">
                   <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                   Architecture
                </div>
                <div className="flex flex-col items-center gap-4">
                   <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                   Cloud Infrastructure
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
               <a 
                 href="/Akash_K_Full_Stack_Developer_Django_React_Resume.pdf" 
                 download 
                 className="btn-pill bg-foreground text-background text-[11px] font-extrabold uppercase tracking-[0.4em] px-16 py-6 hover:bg-neutral-800 transition-all flex items-center gap-4 group"
               >
                 Download Full PDF <Download size={16} className="group-hover:translate-y-1 transition-transform" />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
