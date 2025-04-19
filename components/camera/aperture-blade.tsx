"use client"

import { motion } from "framer-motion"

interface ApertureBladeProps {
  rotation: number
  isOpen: boolean
}

/**
 * ApertureBlade - Creates a single blade for the aperture animation
 */
export function ApertureBlade({ rotation, isOpen }: ApertureBladeProps) {
  return (
    <motion.div
      className="absolute w-40 h-40 origin-bottom-right"
      // Initial state and animation
      initial={{ rotate: rotation, opacity: 1 }}
      animate={{
        rotate: rotation,
        scaleX: isOpen ? 0.6 : 1, // Shrink when aperture opens
        opacity: isOpen ? 0 : 1, // Fade out when aperture opens
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ transformOrigin: "100% 100%" }}
    >
      {/* The actual blade shape */}
      <div
        className="absolute bottom-0 right-0 w-full h-full bg-black"
        style={{
          clipPath: "polygon(100% 100%, 0% 100%, 100% 0%)", // Triangle shape
          boxShadow: "inset 0 0 10px rgba(168, 85, 247, 0.3)", // Purple glow
        }}
      />
    </motion.div>
  )
}
