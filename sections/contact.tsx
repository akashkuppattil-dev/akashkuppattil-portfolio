import { Card } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, Instagram, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-accent mx-auto"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you have a project idea, a technical question, or just want to discuss the future of AI and Web, I'm just a click away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <a href="mailto:akashskuppattil@gmail.com" className="group block">
            <Card className="premium-card p-7 flex items-center gap-6 group-hover:bg-accent/5 h-full">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shrink-0 shadow-lg shadow-accent/5">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Email Me</p>
                <p className="font-black text-lg break-all">akashskuppattil@gmail.com</p>
              </div>
            </Card>
          </a>

          {/* Phone/WhatsApp */}
          <a href="https://wa.me/919947878418" target="_blank" className="group block">
            <Card className="premium-card p-7 flex items-center gap-6 group-hover:bg-accent/5 h-full">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shrink-0 shadow-lg shadow-accent/5">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">WhatsApp / Call</p>
                <p className="font-black text-lg">+91 9947878418</p>
              </div>
            </Card>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/akash-k-developer" target="_blank" className="group block">
            <Card className="premium-card p-7 flex items-center gap-6 group-hover:bg-accent/5 h-full">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shrink-0 shadow-lg shadow-accent/5">
                <Linkedin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Professional Profile</p>
                <p className="font-black text-lg">LinkedIn / Akash K</p>
              </div>
            </Card>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/akash__kuppattil" target="_blank" className="group block">
            <Card className="premium-card p-7 flex items-center gap-6 group-hover:bg-accent/5 h-full">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shrink-0 shadow-lg shadow-accent/5">
                <Instagram className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Instagram</p>
                <p className="font-black text-lg">@akash__kuppattil</p>
              </div>
            </Card>
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-border/50 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="https://github.com/akashkuppattil-dev" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-black uppercase tracking-widest text-xs">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <div className="flex items-center gap-2 text-muted-foreground font-black uppercase tracking-widest text-xs">
              <MapPin className="w-5 h-5" />
              Calicut, Kerala, India
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
