"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Send, CheckCircle2, Loader2 } from "lucide-react"

export default function Contact() {
  const [formError, setFormError] = useState<string | null>(null)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" })

  const validateForm = () => {
    // Basic Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address."
    }

    // Modern Mobile validation (allows +, -, spaces, but must have digits)
    const digitCheck = /[0-9]/
    if (!digitCheck.test(formData.mobile)) {
      return "The mobile number must contain valid digits."
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    const error = validateForm()
    if (error) {
      setFormError(error)
      return
    }

    setFormState('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormState('success')
        setFormData({ name: "", email: "", mobile: "", message: "" })
        setTimeout(() => setFormState('idle'), 5000)
      } else {
        setFormState('error')
      }
    } catch (err) {
      console.error(err)
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-whatsapp mb-4 sm:mb-6 block">Contact Architecture</span>
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1] mb-8 sm:mb-12 uppercase">
              Ready to build something <span className="editorial-italic font-normal lowercase text-whatsapp">intelligent?</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl mb-12 sm:mb-16 leading-relaxed text-balance">
              Strategic technical consultations for high-performance software and architectural digital systems.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <a href="mailto:akashskuppattil@gmail.com" className="flex items-center justify-between py-6 sm:py-8 border-t border-border group hover:pl-4 transition-all duration-700">
                <span className="text-lg sm:text-2xl font-bold tracking-tighter uppercase break-all pr-4 font-normal">akashskuppattil@gmail.com</span>
                <div className="p-2 sm:p-3 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </a>
              <a href="https://linkedin.com/in/akash-k-developer" target="_blank" className="flex items-center justify-between py-6 sm:py-8 border-t border-border group hover:pl-4 transition-all duration-700">
                <span className="text-lg sm:text-2xl font-bold tracking-tighter uppercase font-normal">LinkedIn</span>
                <div className="p-2 sm:p-3 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </a>
              <a href="https://github.com/akashkuppattil-dev" target="_blank" className="flex items-center justify-between py-6 sm:py-8 border-y border-border group hover:pl-4 transition-all duration-700">
                <span className="text-lg sm:text-2xl font-bold tracking-tighter uppercase font-normal">GitHub</span>
                <div className="p-2 sm:p-3 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col bg-border/5 p-6 sm:p-12 rounded-2xl border border-border"
          >
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-whatsapp/10 rounded-full flex items-center justify-center text-whatsapp mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter uppercase">Inquiry Launched</h3>
                <p className="text-muted-foreground text-sm tracking-[0.2em] font-bold uppercase">Check your email for confirmation.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-foreground pb-1 pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Full Name"
                      className="w-full bg-transparent border-b border-border py-3 sm:py-4 focus:outline-none focus:border-foreground transition-colors text-lg sm:text-xl font-medium tracking-tight placeholder:text-muted-foreground/20"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">Mobile</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      placeholder="+91 —"
                      className="w-full bg-transparent border-b border-border py-3 sm:py-4 focus:outline-none focus:border-foreground transition-colors text-lg sm:text-xl font-medium tracking-tight placeholder:text-muted-foreground/20"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">E-mail</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors text-lg sm:text-xl font-medium tracking-tight placeholder:text-muted-foreground/20"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">Message Summary</label>
                  <textarea 
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project context..."
                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors text-lg sm:text-xl font-medium tracking-tight placeholder:text-muted-foreground/20 resize-none"
                  />
                </div>
                
                <div className="space-y-4">
                   <button 
                    disabled={formState === 'loading'}
                    type="submit"
                    className="w-full py-5 sm:py-6 bg-foreground text-background font-bold tracking-[0.2em] text-[12px] hover:bg-neutral-800 transition-all rounded-none flex items-center justify-center gap-4 group disabled:opacity-50"
                  >
                    {formState === 'loading' ? (
                      <>Processing <Loader2 className="animate-spin" size={14} /></>
                    ) : (
                      <>Launch inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>

                  {formError && (
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-[0.25em] text-center mt-2">{formError}</p>
                  )}
                  {formState === 'error' && (
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest text-center mt-2">Failed to send. Please try direct email.</p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
