"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import type { ProjectType } from "@/data/projects"

interface ProjectModalProps {
  project: ProjectType | null
  isOpen: boolean
  onClose: () => void
}

/**
 * ProjectModal - Creates a camera-themed modal for project details
 */
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with film grain */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm film-grain-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Camera shutter animation */}
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{
              clipPath: "circle(150% at 50% 50%)",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{
              clipPath: "circle(0% at 50% 50%)",
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
            }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 w-full max-w-4xl mx-4 bg-gray-900 border-2 border-purple-500/30 rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Camera viewfinder frame styling */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-purple-400/70"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-purple-400/70"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-purple-400/70"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400/70"></div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-purple-400 border border-purple-400/30 hover:bg-purple-500/20 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Project image */}
            <div className="relative h-64 md:h-80">
              <Image src={project.image || "/placeholder.svg"} fill alt={project.title} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

              {/* Project title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-300">{project.title}</h2>
              </div>
            </div>

            {/* Project details */}
            <div className="p-6">
              {/* Project description */}
              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Project tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional project details - these would be populated with real data in a full implementation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Key Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Responsive design for all device sizes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Interactive user interface with animations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Data visualization and analytics dashboard</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Development Process</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Agile methodology with weekly sprints</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>User testing and iterative improvements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Continuous integration and deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
