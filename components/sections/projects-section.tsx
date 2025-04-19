"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TabButton } from "@/components/ui/tab-button"
import type { ProjectType } from "@/data/projects"

interface ProjectsSectionProps {
  projects: ProjectType[]
  onOpenModal: (project: ProjectType) => void
  playCameraSound: () => void
}

/**
 * ProjectsSection - The projects section of the portfolio
 */
export function ProjectsSection({ projects, onOpenModal, playCameraSound }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState("all")

  // Change the active project tab
  const changeProjectTab = (tab: string) => {
    if (tab !== activeTab) {
      playCameraSound() // Play shutter sound when changing tabs
      setActiveTab(tab)
    }
  }

  // Filter projects based on active tab
  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <motion.div
      key="projects"
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">My Projects</h2>
      <p className="text-gray-300 mb-6">
        Here is a list of my projects I want to showcase :) <br></br>
        Some projects contain <span className="text-purple-400">"Behind the Build"</span> where I write more about the projects!
      </p>

      {/* Project category tabs */}
      <div className="mb-8">
        <div className="bg-black/30 border border-purple-500/30 rounded-lg p-1 overflow-x-auto">
          <div className="flex flex-nowrap min-w-max">
            <TabButton active={activeTab === "all"} onClick={() => changeProjectTab("all")}>
              All Projects
            </TabButton>
            <TabButton active={activeTab === "personal"} onClick={() => changeProjectTab("personal")}>
              Personal Projects
            </TabButton>
            <TabButton active={activeTab === "class"} onClick={() => changeProjectTab("class")}>
              Class Projects
            </TabButton>
            <TabButton active={activeTab === "hackathon"} onClick={() => changeProjectTab("hackathon")}>
              Hackathon Projects
            </TabButton>
          </div>
        </div>
      </div>

      {/* Project grid - showing filtered projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative border border-purple-500/30 rounded-md overflow-hidden bg-black/30 hover:bg-black/50 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              onClick={() => {
                if (!project.hasFullPage) {
                  onOpenModal(project)
                } else {
                  window.location.href = `/projects/${project.slug}`
                }
              }}
            >
              {/* Behind the Build badge for projects with full pages */}
              {project.hasFullPage && (
                <div className="absolute top-0 right-0 z-20 bg-purple-500 text-black text-xs font-bold py-1 px-3 rounded-bl-md">
                  Behind the Build
                </div>
              )}

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

              {/* Project image */}
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  fill
                  alt={project.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project details */}
              <div className="p-4 relative z-10">
                {/* Project title */}
                <h3 className="text-xl font-bold text-purple-300 mb-2">{project.title}</h3>
                {/* Project description with line clamp for consistent card heights */}
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>

                {/* Project tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project action buttons - different for journey vs modal */}
                {project.hasFullPage ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.location.href = `/projects/${project.slug}`
                    }}
                  >
                    View Journey
                    <Camera size={12} className="ml-1" />
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpenModal(project)
                    }}
                  >
                    View Details
                    <Camera size={12} className="ml-1" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          // Empty state when no projects match the filter
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
