"use client"

import { Code2, Github, Linkedin, Instagram, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Akash <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">K</span>
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-medium max-w-xs text-center md:text-left">
              Architecting high-performance digital systems with human-centric design.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com/akashkuppattil-dev" },
              { icon: Linkedin, href: "https://linkedin.com/in/akash-k-developer" },
              { icon: Instagram, href: "https://instagram.com/akash__kuppattil" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
            © {currentYear} Lumora Triad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#hero" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] hover:text-accent transition-colors">Back to top</a>
            <a href="#" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] hover:text-accent transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
