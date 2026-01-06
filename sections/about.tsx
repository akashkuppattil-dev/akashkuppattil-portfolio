import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, CheckCircle2, Trophy, Rocket, Target } from "lucide-react"

const mindsets = [
  {
    icon: Target,
    title: "Problem-Solving First",
    description: "I don't just write code; I build systems that solve specific business challenges and user needs."
  },
  {
    icon: Rocket,
    title: "Ownership Mentality",
    description: "I take full responsibility for the lifecycle of features, from ideation to deployment and maintenance."
  },
  {
    icon: Trophy,
    title: "Continuous Excellence",
    description: "Dedicated to writing clean, maintainable, and optimized code that scales with the product."
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="section-title">Professional Mindset</h2>
            <div className="section-accent"></div>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Bridging the gap between complex technical requirements and intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 mb-12">
          {mindsets.map((item, idx) => (
            <Card key={idx} className="premium-card p-6 sm:p-7 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground font-medium">
                I am a <span className="text-accent font-black">Software Developer</span> with a track record of building reliable web systems. My approach combines technical rigor with a product-focused perspective.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Expertise in <span className="text-foreground font-bold">AI Development & Large Language Models.</span></span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Advanced <span className="text-foreground font-bold">Prompt Engineering</span> for automation and creative solutions.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Versatile <span className="text-foreground font-bold">Web Designer & Architect</span> focused on premium UX.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="premium-card p-8 sm:p-10 bg-accent/[0.03] border-accent/20">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">The Profile</h3>
              <div className="space-y-6">
                <div className="pb-4 border-b border-border/50">
                  <p className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground mb-2">Location</p>
                  <p className="font-bold text-lg">Calicut, Kerala, India</p>
                </div>
                <div className="pb-4 border-b border-border/50">
                  <p className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground mb-2">Education</p>
                  <p className="font-bold text-lg">MCA (2025 Graduate)</p>
                </div>
                <div className="pb-6">
                  <p className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground mb-2">Focus</p>
                  <p className="font-black text-lg text-accent uppercase">AI & FULL-STACK</p>
                </div>
              </div>

              <a
                href="/Akash_K_Software_Developer_Resume.pdf"
                download="Akash_K_Software_Developer_Resume.pdf"
                className="block w-full"
              >
                <Button size="lg" className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-black group rounded-2xl">
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  GET FULL RESUME
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
