"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Preloader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-background"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.08),transparent_70%)]" />
                    
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Logo Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ 
                                scale: [0.8, 1.1, 1],
                                opacity: 1,
                            }}
                            transition={{ 
                                duration: 1.5,
                                ease: "easeOut"
                            }}
                            className="relative w-24 h-24 sm:w-32 sm:h-32"
                        >
                            <img 
                                src="/logo.png" 
                                alt="AK Logo" 
                                className="w-full h-full object-contain filter invert dark:invert-0"
                            />
                            
                            {/* Rotating Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 -m-4 border border-accent/20 border-t-accent rounded-full"
                            />
                        </motion.div>

                        {/* Text Loader */}
                        <div className="space-y-2 text-center relative">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-[10px] font-black uppercase tracking-[0.6em] text-accent"
                            >
                                Check it out
                            </motion.p>
                            <div className="h-[1px] w-32 bg-white/10 relative overflow-hidden mx-auto">
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-accent"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
