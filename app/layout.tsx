import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akash K — Full-Stack Developer | AI Engineer | Software Engineer",
  description:
    "Akash Kuppattil — Full-Stack Developer, AI Engineer & Software Engineer from Kerala, India. Specializing in React, Next.js, NestJS, Django, LLMs, LangChain, and AI-powered production systems. Available for high-impact opportunities in 2026.",
  keywords: "Full-Stack Developer, AI Engineer, Software Engineer, React Developer, Next.js, NestJS, Django, LangChain, LLM, Prompt Engineering, Kerala India, Akash Kuppattil, Freelance Developer",
  openGraph: {
    title: "Akash K — Full-Stack Developer | AI Engineer | Software Engineer",
    description: "Building intelligent production systems at the intersection of AI engineering, full-stack development and software engineering. Available for 2026 opportunities.",
    type: "website",
    url: "https://akashkuppattil-portfolio.vercel.app",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
