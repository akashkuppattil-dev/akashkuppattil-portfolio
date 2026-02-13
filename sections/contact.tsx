"use client"

import { Card } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const contactLinks = [
  {
    label: "Direct Email",
    value: "akashskuppattil@gmail.com",
    href: "mailto:akashskuppattil@gmail.com",
    icon: Mail,
    isEmail: true
  },
  {
    label: "WhatsApp",
    value: "+91 9947878418",
    href: "https://wa.me/919947878418",
    icon: Phone,
  },
  {
    label: "LinkedIn Professional",
    value: "linkedin.com/in/akash-k",
    href: "https://linkedin.com/in/akash-k-developer",
    icon: Linkedin,
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/[0.03] rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">

          <div className="lg:w-1/2 space-y-12 text-center lg:text-left flex flex-col justify-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-accent px-4 py-1.5 glass border border-accent/20 rounded-full"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Get in Touch</span>
              </motion.div>
              <h2 className="text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                Initiate <br />
                <span className="text-accent italic">Dialogue</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                Ready to collaborate on high-performance systems or cutting-edge AI integrations? I'm available for new opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-row gap-8 justify-center lg:justify-start pt-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-0.5">Location</p>
                  <p className="text-lg font-black uppercase tracking-tight">KERALA, INDIA</p>
                </div>
              </div>

              <a href="https://github.com/akashkuppattil-dev" target="_blank" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-0.5">Codebase</p>
                  <p className="text-lg font-black uppercase tracking-tight">GITHUB.COM/AKASHK</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-4 flex flex-col justify-center">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group block"
              >
                <Card className="p-6 sm:p-8 glass-card border border-white/5 flex items-center justify-between group-hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[1rem] sm:rounded-[1.25rem] bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 flex-shrink-0">
                      <link.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-black text-accent/60 uppercase tracking-[0.2em] mb-1">{link.label}</p>
                      <p className={`text-base sm:text-2xl font-black tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis ${link.isEmail ? 'lowercase' : 'uppercase'}`}>
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-4">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:text-background" />
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
