"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Preloader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2400) // Slightly longer for architectural reveal
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-background"
                >
                    <div className="relative flex flex-col items-center gap-10">
                        {/* Logo Container - Circle Version */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ 
                                scale: [0.95, 1.05, 1],
                                opacity: 1,
                            }}
                            transition={{ 
                                duration: 1.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-border/20 overflow-hidden flex items-center justify-center bg-background group"
                        >
                            <img 
                                src="/logo.png" 
                                alt="Akash Profile" 
                                className="w-full h-full object-cover transition-transform duration-1000"
                            />
                            
                            {/* Orbiting Ring - High Density Design */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1.5px] border-t-foreground border-transparent rounded-full -m-2 opacity-30"
                            />
                        </motion.div>

                        {/* Text Loader - Identity Reveal */}
                        <div className="space-y-4 text-center">
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 1 }}
                                className="text-[11px] font-black uppercase tracking-[0.8em] text-foreground"
                            >
                                アカシュ
                            </motion.p>
                            
                            <div className="h-[2px] w-24 bg-border/20 relative overflow-hidden mx-auto rounded-full">
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-foreground"
                                />
                            </div>
                            
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1.5 }}
                                className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground block pt-4"
                            >
                                Technical Architect
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
