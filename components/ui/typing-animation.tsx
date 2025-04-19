"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
}

/**
 * TypingAnimation - Creates a typewriter effect that cycles through phrases
 */
export function TypingAnimation({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
}: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Typing and deleting effect
  useEffect(() => {
    if (!phrases || phrases.length === 0) return

    const currentPhrase = phrases[currentPhraseIndex]

    // Calculate the typing/deleting speed with some randomness for realism
    const speed = isDeleting ? deletingSpeed - Math.random() * 20 : typingSpeed + Math.random() * 50

    // Handle typing and deleting logic
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (currentText.length < currentPhrase.length) {
          // Continue typing the current phrase
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))
        } else {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases)
        }
      } else {
        // Deleting mode
        if (currentText.length > 0) {
          // Continue deleting the current phrase
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false)
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases])

  // Render the typing animation with a blinking cursor
  return (
    <div className="inline-flex items-center h-8">
      <span className="text-purple-400">{currentText}</span>
      <span
        className={`w-0.5 h-6 bg-purple-400 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 0.2s" }}
      />
    </div>
  )
}
