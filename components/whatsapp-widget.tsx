"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Briefcase, Zap, MessageCircle, ChevronRight } from "lucide-react"

const WHATSAPP_NUMBER = "919947878418"

const INQUIRY_OPTIONS = [
  { id: "hire", label: "Hire for Development", icon: <Briefcase size={14} />, msg: "Hi Akash! I'm interested in hiring you for a full-stack role." },
  { id: "project", label: "Discuss a Project", icon: <Zap size={14} />, msg: "Hi Akash! I have a high-performance project idea for Lumora Triad." },
  { id: "query", label: "General Inquiry", icon: <MessageCircle size={14} />, msg: "Hi Akash! I have a general query regarding your services." },
]

const SERVICE_OPTIONS = [
  { label: "Web Design & Development", msg: "Hi Akash! I need help with Web Design & Development." },
  { label: "UI/UX Design", msg: "Hi Akash! I'm looking for professional UI/UX Design services." },
  { label: "Branding & Identity", msg: "Hi Akash! I need a Branding & Identity solution." },
  { label: "Backend & API Architecture", msg: "Hi Akash! I need help with Backend & API Development." },
  { label: "E-commerce Solutions", msg: "Hi Akash! I want to build an E-commerce platform." },
  { label: "SEO & Growth", msg: "Hi Akash! I'm looking for SEO & Growth strategies." },
  { label: "AI & Automation", msg: "Hi Akash! I'm interested in AI Integration." },
  { label: "Maintenance & Support", msg: "Hi Akash! I need ongoing Maintenance & Support." },
]

export default function WhatsAppWidget() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [showBadge, setShowBadge] = useState(true)

    useEffect(() => {
        setMounted(true)
        if (open) setShowBadge(false)
    }, [open])

    if (!mounted) return null

    const handleChat = (message: string) => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    return (
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[200] flex flex-col items-end gap-4">
            {/* Chat Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-[320px] sm:w-[360px] max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-white dark:bg-black border border-border/50"
                    >
                        {/* Header: Official WhatsApp Green */}
                        <div className="bg-whatsapp p-6 flex items-center justify-between text-white shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-xs">
                                    AK
                                </div>
                                <div className="space-y-0.5">
                                    <p className="font-bold text-xs uppercase tracking-[0.2em]">Akash Kuppattil</p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">Online | Studio Support</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-black/10 flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Scrollable List Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide bg-zinc-50 dark:bg-black">
                            {/* Primary Inquiries */}
                            <div className="space-y-4">
                                <p className="text-muted-foreground text-[9px] font-bold uppercase tracking-[0.4em] px-2">Primary Intent</p>
                                <div className="space-y-2">
                                    {INQUIRY_OPTIONS.map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => handleChat(opt.msg)}
                                            className="w-full bg-white dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all p-4 rounded-2xl border border-border/40 flex items-center justify-between group shadow-sm"
                                        >
                                           <div className="flex items-center gap-3">
                                              <div className="w-8 h-8 rounded-full bg-whatsapp/10 text-whatsapp flex items-center justify-center">
                                                 {opt.icon}
                                              </div>
                                              <span className="text-[11px] font-bold tracking-tight uppercase text-foreground">{opt.label}</span>
                                           </div>
                                           <ChevronRight size={14} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Service-Specific Queries */}
                            <div className="space-y-4">
                                <p className="text-muted-foreground text-[9px] font-bold uppercase tracking-[0.4em] px-2">Architectural Services</p>
                                <div className="space-y-2">
                                    {SERVICE_OPTIONS.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleChat(opt.msg)}
                                            className="w-full bg-zinc-100/50 dark:bg-zinc-900/30 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-all py-3 px-4 rounded-xl flex items-center justify-between group"
                                        >
                                           <span className="text-[10px] font-medium tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">{opt.label}</span>
                                           <Send size={10} className="opacity-0 group-hover:opacity-100 text-whatsapp transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-900/40 border-t border-border/30 text-center shrink-0">
                           <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60">Avg. response time: 2 hours</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 rounded-full bg-whatsapp text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center group z-[201]"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X className="w-7 h-7" />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge */}
                <AnimatePresence>
                    {showBadge && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full text-white text-[10px] font-black flex items-center justify-center shadow-lg border-2 border-background"
                        >
                            1
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}
