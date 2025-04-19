"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  playCameraSound: () => void
}

/**
 * ContactSection - The contact section of the portfolio
 */
export function ContactSection({ playCameraSound }: ContactSectionProps) {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-8">
        Have a question or want to work together? Feel free to reach out using the form below or connect with me on
        social media.
      </p>

      {/* Contact form */}
      <form className="space-y-4">
        {/* Name and email fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-purple-300 mb-2 text-sm">Name</label>
            <input
              type="text"
              className="w-full bg-black/30 border border-purple-500/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
          <div>
            <label className="block text-purple-300 mb-2 text-sm">Email</label>
            <input
              type="email"
              className="w-full bg-black/30 border border-purple-500/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>

        {/* Subject field */}
        <div>
          <label className="block text-purple-300 mb-2 text-sm">Subject</label>
          <input
            type="text"
            className="w-full bg-black/30 border border-purple-500/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>

        {/* Message field */}
        <div>
          <label className="block text-purple-300 mb-2 text-sm">Message</label>
          <textarea
            rows={5}
            className="w-full bg-black/30 border border-purple-500/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          ></textarea>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-black"
          onClick={(e) => {
            e.preventDefault()
            playCameraSound()
          }}
        >
          Send Message
        </Button>
      </form>

      {/* Social media links */}
      <div className="mt-12">
        <h3 className="text-xl text-purple-300 mb-4">Connect With Me</h3>
        <div className="flex flex-wrap gap-2 md:gap-4">
          <Button
            variant="outline"
            className="rounded-full border-purple-500/50 text-purple-400 hover:bg-purple-500/20 px-4 py-2 h-auto"
          >
            GitHub
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-purple-500/50 text-purple-400 hover:bg-purple-500/20 px-4 py-2 h-auto"
          >
            LinkedIn
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-purple-500/50 text-purple-400 hover:bg-purple-500/20 px-4 py-2 h-auto"
          >
            Twitter
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-purple-500/50 text-purple-400 hover:bg-purple-500/20 px-4 py-2 h-auto"
          >
            Instagram
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
