"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface DeviceMockupProps {
    children: ReactNode
    type?: "browser" | "mobile"
    className?: string
}

export function DeviceMockup({ children, type = "browser", className = "" }: DeviceMockupProps) {
    if (type === "mobile") {
        return (
            <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div className={`relative mx-auto border-gray-800 dark:border-gray-700 bg-gray-800 border-[8px] rounded-t-xl h-[450px] max-w-[800px] md:h-[500px]  shadow-2xl overflow-hidden ${className}`}>
            <div className="rounded-t-lg h-[34px] bg-gray-900 flex items-center px-4 gap-1.5 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                <div className="mx-auto bg-white/5 rounded-md px-10 py-0.5 text-[10px] text-white/40 font-mono truncate max-w-[200px]">
                    https://akashkuppattil.dev/project
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 h-full overflow-hidden">
                {children}
            </div>
        </div>
    )
}
