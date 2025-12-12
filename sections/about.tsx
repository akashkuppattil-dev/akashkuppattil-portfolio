import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-8 border-border/50">
              <div className="space-y-4 text-foreground/90">
                <p className="leading-relaxed text-lg">
                  I'm a Junior Software Developer passionate about building reliable, scalable web applications. I
                  specialize in backend-focused development while maintaining strong frontend fundamentals.
                </p>

                <p className="leading-relaxed text-lg">
                  I have hands-on experience with{" "}
                  <span className="font-semibold text-foreground">Python, PHP, JavaScript, TypeScript, and Java</span>,
                  and I've worked with frameworks such as{" "}
                  <span className="font-semibold text-foreground">
                    Django, React.js, NestJS, Laravel, and CodeIgniter
                  </span>
                  .
                </p>

                <p className="leading-relaxed text-lg">
                  My strengths include{" "}
                  <span className="font-semibold text-foreground">
                    REST API development, JWT & RBAC authentication, database design, debugging, testing, and
                    performance optimization
                  </span>
                  . Through my internships, I've gained practical experience in Agile/Scrum workflows, collaborative
                  development, and delivering clean, maintainable code.
                </p>

                <p className="leading-relaxed text-lg">
                  I enjoy solving real-world problems through technology and continuously improving my skills.
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 border-border/50 glass">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold"> AKASH K | MCA | WEB DEVELOPER</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">Calicut, Kerala, India</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-medium text-accent">Available for Work</p>
                  </div>
                </div>
              </div>
            </Card>

           <a href="/Akash_K_Software_Developer_Resume.pdf"
  download="Akash_K_Software_Developer_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <Button
    size="lg"
    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
  >
    <Download className="w-4 h-4" />
    Resume (PDF)
  </Button>
</a>

          </div>
        </div>
      </div>
    </section>
  )
}
