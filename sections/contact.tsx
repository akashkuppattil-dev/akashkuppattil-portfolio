"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail, Phone, Github, Linkedin, MapPin,
  ArrowUpRight, Send, CheckCircle2, Loader2, User, MessageSquare, Sparkles
} from "lucide-react"

/* ── Contact Info ─────────────────────── */
const INFO_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "akashskuppattil@gmail.com",
    href: "mailto:akashskuppattil@gmail.com",
    small: true,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 9947878418",
    href: "https://wa.me/919947878418",
    small: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kerala, India",
    href: null,
    small: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "akashkuppattil-dev",
    href: "https://github.com/akashkuppattil-dev",
    small: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "akash-k-developer",
    href: "https://linkedin.com/in/akash-k-developer",
    small: false,
  },
]

/* ── Field Component ──────────────────── */
function Field({
  label, id, type = "text", value, onChange, placeholder, required, icon: Icon, rows,
}: {
  label: string; id: string; type?: string; value: string
  onChange: (v: string) => void; placeholder: string; required?: boolean
  icon: React.ElementType; rows?: number
}) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      <div
        className={`relative rounded-2xl border transition-all duration-300 ${focused
            ? "border-accent shadow-lg shadow-accent/10"
            : hasValue
              ? "border-foreground/20"
              : "border-foreground/10"
          } bg-transparent/60 backdrop-blur-sm overflow-hidden`}
      >
        {/* Float label */}
        <AnimatePresence>
          {(focused || hasValue) && (
            <motion.label
              htmlFor={id}
              initial={{ y: 12, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-3 left-12 text-[9px] font-black uppercase tracking-[0.3em] text-accent z-10 pointer-events-none"
            >
              {label}
            </motion.label>
          )}
        </AnimatePresence>

        {/* Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          {rows ? (
            <div className="absolute left-4 top-5 -translate-y-1/2">
              <Icon className={`w-4 h-4 transition-colors ${focused ? "text-accent" : "text-muted-foreground"}`} />
            </div>
          ) : (
            <Icon className={`w-4 h-4 transition-colors ${focused ? "text-accent" : "text-muted-foreground"}`} />
          )}
        </div>

        {rows ? (
          <textarea
            id={id}
            rows={rows}
            value={value}
            required={required}
            placeholder={focused ? "" : placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent pl-12 pr-4 pt-8 pb-4 text-base font-medium placeholder:text-muted-foreground/40 focus:outline-none resize-none"
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            required={required}
            placeholder={focused ? "" : placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent pl-12 pr-4 py-4 text-base font-medium placeholder:text-muted-foreground/40 focus:outline-none"
            style={{ paddingTop: focused || hasValue ? "1.75rem" : "1rem", paddingBottom: focused || hasValue ? "0.5rem" : "1rem" }}
          />
        )}

        {/* Accent bottom line */}
        <motion.div
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        />
      </div>
    </div>
  )
}

/* ── Main Component ───────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Simulate submission (replace with your API call / EmailJS / Formspree)
    await new Promise((r) => setTimeout(r, 1800))
    setStatus("success")
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", message: "" })
      setStatus("idle")
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/25 text-accent"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em]">Let's Work Together</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]"
          >
            Get In <span className="text-accent italic">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-medium max-w-lg mx-auto text-lg"
          >
            Have a project in mind or want to collaborate? Drop me a message — I reply fast.
          </motion.p>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-start">

          {/* ── Left: Info Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Status badge */}
            <div className="p-6 rounded-2xl glass-card border border-green-500/20 flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-green-400/20 animate-ping" />
                <div className="relative w-12 h-12 rounded-full bg-green-400/10 border border-green-500/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500">Currently Available</p>
                <p className="font-black text-lg uppercase tracking-tight">Open to Work · 2026</p>
                <p className="text-xs text-muted-foreground">Full-Stack · AI · Software Roles</p>
              </div>
            </div>

            {/* Contact info items */}
            {INFO_ITEMS.map((item, i) => {
              const Content = (
                <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/5 flex items-center gap-4 group hover:-translate-y-0.5 transition-all duration-300 hover:border-accent/20">
                  <div className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">{item.label}</p>
                    <p className={`font-black text-sm sm:text-base truncate ${item.small ? "lowercase" : "uppercase"} tracking-tight`}>
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  )}
                </div>
              )

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{Content}</a>
                    : Content
                  }
                </motion.div>
              )
            })}
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-foreground/[0.07] bg-card/40 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/10">
              {/* Glow top-right */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight">Send a Message</h3>
                  <p className="text-muted-foreground text-sm mt-1">Fill in the form and I'll get back to you within 24 hours.</p>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-20 h-20 rounded-full bg-green-400/10 border border-green-500/30 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </motion.div>
                      <div>
                        <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Message Sent! 🎉</h4>
                        <p className="text-muted-foreground">Thanks for reaching out. I'll respond within 24 hours.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field
                          label="Full Name" id="name" icon={User}
                          value={form.name} onChange={(v) => setForm({ ...form, name: v })}
                          placeholder="Your full name" required
                        />
                        <Field
                          label="Email Address" id="email" type="email" icon={Mail}
                          value={form.email} onChange={(v) => setForm({ ...form, email: v })}
                          placeholder="Your email" required
                        />
                      </div>

                      {/* Phone */}
                      <Field
                        label="Phone / WhatsApp" id="phone" type="tel" icon={Phone}
                        value={form.phone} onChange={(v) => setForm({ ...form, phone: v })}
                        placeholder="Your phone number (optional)"
                      />

                      {/* Message */}
                      <Field
                        label="Message" id="message" icon={MessageSquare} rows={5}
                        value={form.message} onChange={(v) => setForm({ ...form, message: v })}
                        placeholder="Tell me about your project or idea..." required
                      />

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-14 rounded-2xl bg-accent text-accent-foreground font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-accent/25 hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-[10px] font-medium text-muted-foreground/60 pt-1">
                        🔒 Your information is private and won't be shared.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
