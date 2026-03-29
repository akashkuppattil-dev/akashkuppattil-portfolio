import type React from "react"
import type { Metadata, Viewport } from "next"
import { Instrument_Sans, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: "#000000",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Akash Kuppattil — Technical Architect & Full-Stack Developer",
  description:
    "Engineering elite digital products and high-performance backend systems. Specialized in AI Integration, Scalable Architecture, and Studio-level delivery. Co-founder at Lumora Triad.",
  keywords: "Full-Stack Developer, AI Engineering, Technical Architect, Django, Next.js, Lumora Triad, Akash Kuppattil, Software Engineering",
  metadataBase: new URL("https://akashkuppattil.dev"),
  openGraph: {
    title: "Akash Kuppattil — Technical Architect",
    description: "Engineering digital dominance through high-performance software systems and elite architectural design.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Kuppattil — Technical Architect",
    description: "Engineering digital dominance through elite software systems.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
       <body className={`${instrumentSans.className} font-sans antialiased bg-background text-foreground selection:bg-foreground selection:text-background h-full`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
