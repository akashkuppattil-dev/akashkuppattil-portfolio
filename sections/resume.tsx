"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary">
            <FileText className="w-8 h-8 text-accent-foreground" />
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">My Resume</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Download my comprehensive resume to see my complete professional background, skills, and achievements.
            </p>
          </div>

         <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
  <a
    href="/Akash_K_Software_Developer_Resume.pdf"
    download="Akash_K_Software_Developer_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
    >
      <Download className="w-5 h-5" />
      Download Resume (PDF)
    </Button>
  </a>

  <a
    href="https://github.com/akashkuppattil-dev"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      variant="outline"
      className="gap-2 bg-transparent"
    >
      View GitHub Profile
    </Button>
  </a>
</div>


          {/* Resume preview card */}
          <Card className="mt-12 p-8 border-border/50 glass max-w-2xl mx-auto">
            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What's Inside:</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Complete professional experience and internships
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Technical skills and expertise areas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Educational background and certifications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Notable projects and achievements
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
