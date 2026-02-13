"use client"

import { Code2, Github, Linkedin, Instagram, Twitter, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-background">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Akash <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">K</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-medium max-w-xs text-center md:text-left">
              Architecting high-performance digital systems with human-centric design.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com/akashkuppattil-dev" },
              { icon: Linkedin, href: "https://linkedin.com/in/akash-k-developer" },
              { icon: Instagram, href: "https://instagram.com/akash__kuppattil" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#", isX: true }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              >
                {social.isX ? (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) : (
                  <social.icon className="w-5 h-5" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">
            © {currentYear} Lumora Triad. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#hero" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] hover:text-accent transition-colors">Back to top</a>
            <a href="#" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] hover:text-accent transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Brand Text Background */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02]">
          <h1 className="text-[15rem] font-black tracking-tighter uppercase leading-none text-foreground whitespace-nowrap">AKASH KUPPATTIL</h1>
        </div>
      </div>
    </footer>
  )
}
