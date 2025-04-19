"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavButtonProps {
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
  disabled?: boolean
}

/**
 * NavButton - Creates a single button for the navigation bar
 */
export function NavButton({ icon, label, isActive, onClick, disabled = false }: NavButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-full relative",
          // Change button appearance based on if it's active or disabled
          isActive ? "bg-purple-500/20 text-purple-400" : "text-gray-300",
          disabled && "opacity-50 cursor-not-allowed",
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {/* The icon passed as a prop */}
        {icon}
        {/* Small indicator dot for active button */}
        {isActive && <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full" />}
      </Button>
      {/* Button label */}
      <span className="text-xs mt-1 text-gray-300">{label}</span>
    </div>
  )
}
