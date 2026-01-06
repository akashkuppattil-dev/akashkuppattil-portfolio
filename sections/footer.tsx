import { Github, Linkedin, Mail, Code2, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/[0.03] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-black tracking-tighter uppercase">Akash K</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering high-performance software solutions for business challenges. Based in Calicut, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors font-medium border-b border-transparent hover:border-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground mb-6">Technologies</h4>
            <ul className="space-y-3 text-sm">
              {["Python / Django", "Next.js / React", "NestJS / Node", "PostgreSQL / MySQL"].map((tech) => (
                <li key={tech} className="text-muted-foreground font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground mb-6">Social Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/akashkuppattil-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-accent hover:bg-accent hover:text-background shadow-lg shadow-accent/5"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/akash-k-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-accent hover:bg-accent hover:text-background shadow-lg shadow-accent/5"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/akash__kuppattil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-accent hover:bg-accent hover:text-background shadow-lg shadow-accent/5"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:akashskuppattil@gmail.com"
                className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-accent hover:bg-accent hover:text-background shadow-lg shadow-accent/5"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
          <p>© {currentYear} AKASH K — Software Developer</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Built with Next.js 16</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
