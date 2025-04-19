"use client"

import { motion } from "framer-motion"

/**
 * ViewfinderTransition - Creates a camera viewfinder transition animation
 */
export function ViewfinderTransition() {
  return (
    <div className="absolute inset-0 z-30 bg-black flex items-center justify-center">
      {/* Separate the animation props from styling */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          clipPath: "circle(75% at 50% 50%)",
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div className="w-24 h-24 rounded-full border-8 border-purple-400 flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-400 rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
