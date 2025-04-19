"use client"

import { useState, useEffect } from "react"

/**
 * CameraFocusCursor - Creates a camera focus reticle that follows the mouse
 */
export function CameraFocusCursor() {
  // Track the cursor position and click state
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)

  // Set up event listeners when component loads
  useEffect(() => {
    // Function to update cursor position when mouse moves
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Functions to track when mouse is clicked
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add event listeners
    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div
      className="custom-cursor pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* SVG drawing of the camera focus reticle */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: isClicking ? "transform 0.1s ease" : "transform 0.3s ease",
          transform: isClicking ? "scale(0.8)" : "scale(1)",
        }}
      >
        {/* Outer circle */}
        <circle cx="20" cy="20" r="19" stroke="#a855f7" strokeWidth="2" />
        {/* Focus lines */}
        <line x1="20" y1="8" x2="20" y2="12" stroke="#a855f7" strokeWidth="2" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="#a855f7" strokeWidth="2" />
        <line x1="8" y1="20" x2="12" y2="20" stroke="#a855f7" strokeWidth="2" />
        <line x1="28" y1="20" x2="32" y2="20" stroke="#a855f7" strokeWidth="2" />
        {/* Center dot */}
        <circle cx="20" cy="20" r="1" fill="#a855f7" />
      </svg>
    </div>
  )
}
