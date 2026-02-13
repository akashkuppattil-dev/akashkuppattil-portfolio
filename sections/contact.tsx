"use client"

import { Card } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, Instagram, MapPin, ArrowUpRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const contactLinks = [
  {
    label: "Email Me",
    value: "akashskuppattil@gmail.com",
    href: "mailto:akashskuppattil@gmail.com",
    icon: Mail,
    color: "accent"
  },
  {
    label: "WhatsApp / Call",
    value: "+91 9947878418",
    href: "https://wa.me/919947878418",
    icon: Phone,
    color: "primary"
  },
  {
    label: "LinkedIn Professional",
    value: "linkedin.com/in/akash-k-developer",
    href: "https://linkedin.com/in/akash-k-developer",
    icon: Linkedin,
    color: "accent"
  },
  {
    label: "Instagram Feed",
    value: "@akash__kuppattil",
    href: "https://instagram.com/akash__kuppattil",
    icon: Instagram,
    color: "accent"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-accent"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Interaction Hub</span>
              </motion.div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                Let's <br />
                <span className="text-accent italic underline decoration-accent/20 decoration-8 underline-offset-4">Connect</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-lg">
                Whether you have a project idea, a technical question, or just want to discuss the future of AI and Web, I'm just a click away.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.25rem] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Current Base</p>
                  <p className="text-2xl font-black uppercase tracking-tight">Calicut, Kerala, India</p>
                </div>
              </div>

              <a href="https://github.com/akashkuppattil-dev" target="_blank" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.25rem] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Github className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Open Source</p>
                  <p className="text-2xl font-black uppercase tracking-tight">github.com/akashk</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-1 gap-6">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group block"
              >
                <Card className="p-8 md:p-10 glass border border-white/5 group-hover:border-accent/30 transition-all duration-500 relative overflow-hidden flex items-center justify-between">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

                  <div className="flex items-center gap-8 relative z-10">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <link.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2">{link.label}</p>
                      <p className="text-xl md:text-2xl font-black tracking-tight uppercase break-all">{link.value}</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors relative z-10">
                    <ArrowUpRight className="w-6 h-6" />
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
