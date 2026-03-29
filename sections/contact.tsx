"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" })

  return (
    <section id="contact" className="section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-6 block">Contact Architecture</span>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1] mb-12 uppercase">
              Ready to build something <span className="editorial-italic font-normal lowercase">intelligent?</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-16 leading-relaxed text-balance">
              Strategic technical consultations for high-performance software and architectural digital systems.
            </p>

            <div className="space-y-6">
              <a href="mailto:akashskuppattil@gmail.com" className="flex items-center justify-between py-8 border-t border-border group hover:pl-4 transition-all duration-700">
                <span className="text-2xl font-bold tracking-tighter uppercase">akashskuppattil@gmail.com</span>
                <div className="p-3 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </a>
              <a href="https://linkedin.com/in/akash-k-developer" target="_blank" className="flex items-center justify-between py-8 border-t border-border group hover:pl-4 transition-all duration-700">
                <span className="text-2xl font-bold tracking-tighter uppercase">LinkedIn</span>
                <div className="p-3 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </a>
              <a href="https://github.com/akashkuppattil-dev" target="_blank" className="flex items-center justify-between py-8 border-y border-border group hover:pl-4 transition-all duration-700">
                <span className="text-2xl font-bold tracking-tighter uppercase">GitHub</span>
                <div className="p-3 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col bg-border/5 p-8 sm:p-12 rounded-2xl border border-border"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors text-xl font-bold tracking-tighter uppercase placeholder:text-muted-foreground/20"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 —"
                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors text-xl font-bold tracking-tighter uppercase placeholder:text-muted-foreground/20"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors text-xl font-bold tracking-tighter uppercase placeholder:text-muted-foreground/20"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Message</label>
                <textarea 
                  rows={3}
                  placeholder="Tell me about your project requirement..."
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors text-xl font-bold tracking-tighter uppercase placeholder:text-muted-foreground/20 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-6 bg-foreground text-background font-black uppercase tracking-[0.4em] text-[10px] hover:bg-neutral-800 transition-all rounded-none"
              >
                Launch Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
