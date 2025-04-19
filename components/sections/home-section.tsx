"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"

interface HomeSectionProps {
  onNavigate: (section: string) => void
  typingPhrases: string[]
}

/**
 * HomeSection - The home/landing section of the portfolio
 */
export function HomeSection({ onNavigate, typingPhrases }: HomeSectionProps) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center justify-center max-w-3xl mx-auto"
    >
      {/* Greeting and name */}
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-center text-white mb-4">
        <span className="text-purple-400">Hi,</span> I'm Karen!
      </h1>

      {/* Short description with typing animation */}
      <div className="text-base xs:text-lg sm:text-xl md:text-2xl text-center font-mono text-gray-300 mb-6 md:mb-8 h-8">
        <TypingAnimation phrases={typingPhrases} />
      </div>

      {/* Call to action buttons */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => onNavigate("projects")}
          className="bg-purple-500 hover:bg-purple-600 text-black font-mono"
        >
          View My Work
        </Button>
        <Button
          onClick={() => onNavigate("contact")}
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-500/20"
        >
          Contact Me
        </Button>
      </div>
    </motion.div>
  )
}
