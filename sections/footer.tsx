"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          <div className="max-w-md">
            <h2 className="text-4xl font-semibold tracking-tight mb-8">
              Akash <br className="hidden md:block"/> Kuppattil.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer and Technical Architect focused on delivering precision-engineered digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground block">Navigation</span>
              <nav className="flex flex-col gap-4">
                {["About", "Stack", "Projects", "Services", "Experience"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground block">Connect</span>
              <nav className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/akash-k-developer" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://github.com/akashkuppattil-dev" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                <a href="https://instagram.com/akash__kuppattil" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
            © {currentYear} Akash Kuppattil. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Kerala, India</span>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground hover:opacity-50 transition-opacity"
             >
               Back to top ↑
             </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
