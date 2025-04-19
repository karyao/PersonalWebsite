"use client"

import { motion } from "framer-motion"
import { ApertureBlade } from "@/components/camera/aperture-blade"

interface LoadingAnimationProps {
  isStarting: boolean
  apertureOpen: boolean
}

/**
 * LoadingAnimation - Creates the camera startup animation
 */
export function LoadingAnimation({ isStarting, apertureOpen }: LoadingAnimationProps) {
  if (!isStarting) return null

  return (
    <motion.div
      className="absolute inset-0 z-40 bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Camera brand and model */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-10 left-0 right-0 text-center"
      >
        <h1 className="text-purple-400 font-mono text-xl tracking-widest">DIGICAM</h1>
        <p className="text-purple-400/60 font-mono text-sm tracking-wider">MODEL DX-2025</p>
      </motion.div>

      {/* Aperture animation - simplified loading screen */}
      <div className="relative w-60 h-60 flex items-center justify-center">
        {/* Aperture blades - 6 triangular blades that form the aperture */}
        {[...Array(6)].map((_, i) => (
          <ApertureBlade key={i} rotation={i * 60} isOpen={apertureOpen} />
        ))}

        {/* Center lens element */}
        <motion.div
          className="relative z-10 w-20 h-20 rounded-full bg-gray-900 border-4 border-gray-800 flex items-center justify-center"
          animate={{
            scale: apertureOpen ? 1.2 : 1,
            boxShadow: apertureOpen ? "0 0 30px rgba(168, 85, 247, 0.6)" : "0 0 10px rgba(168, 85, 247, 0.2)",
          }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700"
            animate={{
              scale: apertureOpen ? 1.1 : 1,
            }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
              animate={{
                scale: apertureOpen ? 1.1 : 1,
              }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              <motion.div
                className="w-4 h-4 rounded-full bg-purple-500"
                animate={{
                  scale: apertureOpen ? [1, 2, 0.5] : 1,
                  opacity: apertureOpen ? [1, 0.8, 1] : 1,
                }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
