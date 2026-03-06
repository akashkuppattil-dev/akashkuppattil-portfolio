"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "919947878418"
const PRE_FILLED_MSG = "Hi Akash! I visited your portfolio and I'd love to connect."

export default function WhatsAppWidget() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [showBadge, setShowBadge] = useState(true)

    useEffect(() => {
        setMounted(true)
        // Hide badge after first open
        if (open) setShowBadge(false)
    }, [open])

    if (!mounted) return null

    const handleOpen = () => {
        setOpen(true)
        setShowBadge(false)
    }

    const handleChat = (type: "hire" | "project" | "connect") => {
        const messages = {
            hire: "Hi Akash! I'm interested in hiring you for a role.",
            project: "Hi Akash! I have a project idea and would love to discuss it with you.",
            connect: "Hi Akash! I visited your portfolio and I'd love to connect."
        }
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[type])}`
        window.open(url, "_blank")
    }

    return (
        <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">
            {/* Chat Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.85 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="w-[340px] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/30 bg-white border border-gray-100 dark:bg-zinc-900 border dark:border-zinc-800"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black shadow-inner">
                                    AK
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Akash Kuppattil</p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                        <p className="text-white/80 text-[10px] font-semibold uppercase tracking-widest">Typically replies instantly</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-zinc-800 dark:text-zinc-200 text-sm font-medium leading-relaxed">
                                    👋 Hey! How can I help you today? Select a topic below to chat with me directly on WhatsApp.
                                </p>
                            </motion.div>

                            <div className="flex flex-col gap-2 mt-2">
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    onClick={() => handleChat("hire")}
                                    className="w-full bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-750 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm font-semibold rounded-xl py-3 px-4 flex items-center justify-between transition-colors shadow-sm"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-lg">💼</span> Want to Hire Me?
                                    </span>
                                    <Send className="w-3.5 h-3.5 text-[#25D366]" />
                                </motion.button>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => handleChat("project")}
                                    className="w-full bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-750 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm font-semibold rounded-xl py-3 px-4 flex items-center justify-between transition-colors shadow-sm"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-lg">💡</span> Got a Project Idea?
                                    </span>
                                    <Send className="w-3.5 h-3.5 text-[#25D366]" />
                                </motion.button>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={() => handleChat("connect")}
                                    className="w-full bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-750 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm font-semibold rounded-xl py-3 px-4 flex items-center justify-between transition-colors shadow-sm"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-lg">👋</span> Just want to connect
                                    </span>
                                    <Send className="w-3.5 h-3.5 text-[#25D366]" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 flex items-center justify-center text-white"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            {/* WhatsApp SVG */}
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
                            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[9px] font-black flex items-center justify-center shadow-md"
                        >
                            1
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}
