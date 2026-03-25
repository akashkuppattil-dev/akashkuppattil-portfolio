"use client"

import { Code2, Github, Linkedin, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-transparent border-t border-white/5 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-background shadow-lg shadow-accent/20">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Akash <span className="text-accent">K</span>
              </span>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-xs font-black uppercase tracking-widest text-accent">Full-Stack Dev · AI Engineer · Software Eng</p>
              <p className="text-muted-foreground text-sm font-medium max-w-xs">
                Building intelligent production systems at the intersection of AI, full-stack development, and software engineering.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/akashkuppattil-dev", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/akash-k-developer", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/akash__kuppattil", label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Navigate</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm font-black uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:akashskuppattil@gmail.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors lowercase">
                  akashskuppattil@gmail.com
                </span>
              </a>
              <a href="https://wa.me/919947878418" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                  +91 99478 78418
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-xl glass border border-green-500/20 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-green-400">Available for Work · 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
            © {currentYear} Akash Kuppattil. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black text-muted-foreground/50 uppercase tracking-widest">Kerala, India</span>
            <span className="text-muted-foreground/20 mx-2">·</span>
            <a href="#hero" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] hover:text-accent transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
