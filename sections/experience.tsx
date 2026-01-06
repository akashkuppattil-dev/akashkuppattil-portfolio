import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    title: "PHP Developer Intern",
    company: "Trogon Media Pvt Ltd",
    period: "July 2025 – Sept 2025",
    location: "Remote",
    highlights: [
      "Worked with Laravel & CodeIgniter frameworks",
      "Built responsive UI components (HTML, CSS, JS, Bootstrap)",
      "Managed deployments with cPanel",
      "Hosted updates, database setup, and configuration",
      "Collaborated across design + backend teams",
    ],
    skills: ["PHP", "Laravel", "CodeIgniter", "HTML", "CSS", "Bootstrap", "cPanel"],
  },
  {
    title: "Software Developer Intern",
    company: "Bairuha Tech, Calicut",
    period: "Jan 2025 – May 2025",
    location: "Calicut, Kerala",
    highlights: [
      "Full-stack development with React.js, NestJS, PostgreSQL",
      "Implemented secure JWT + RBAC authentication systems",
      "Performed API testing, debugging, and validations",
      "Improved backend performance and response times",
      "Participated in Agile/Scrum sprint planning and reviews",
    ],
    skills: ["React.js", "NestJS", "PostgreSQL", "JWT", "RBAC", "Agile"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Professional Experience</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline connector (hidden on mobile, shown on desktop) */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-accent/20 ml-6"></div>

              {/* Content */}
              <Card className="p-6 sm:p-7 lg:ml-24 premium-card group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black uppercase tracking-tight">{exp.title}</h3>
                    <p className="text-lg text-accent font-bold tracking-tight">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5">
                    <div className="flex items-center gap-2 text-muted-foreground font-bold text-xs uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-bold text-xs uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                      <span className="text-accent font-black mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-accent/5 text-accent border-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
