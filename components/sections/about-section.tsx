"use client"

import { motion } from "framer-motion"

/**
 * AboutSection - The about section of the portfolio
 */
export function AboutSection() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">About Me</h2>
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        <p>I'm a Computing Science student passionate about creating meaningful digital experiences.</p>
        <p>{/* Add your about content here */}</p>
        {/* Education section */}
        <h3 className="text-xl text-purple-300 mt-6 mb-3">Education</h3>
        <p>
          BSc in Computing Science
          <br />
          <span className="text-purple-300/70">Simon Fraser University, May 2024 - Present </span>
        </p>
      </div>
    </motion.div>
  )
}
