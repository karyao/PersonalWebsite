"use client"

import type React from "react"

import { motion } from "framer-motion"

interface TabButtonProps {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}

/**
 * TabButton - Creates a tab button with an animated underline indicator
 */
export function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-all relative ${
        active ? "text-purple-400" : "text-gray-400 hover:text-purple-300"
      }`}
    >
      {/* Tab label */}
      {children}

      {/* Animated underline indicator for active tab */}
      {active && (
        <motion.div
          layoutId="projectsActiveTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </button>
  )
}
