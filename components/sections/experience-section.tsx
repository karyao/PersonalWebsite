"use client"

import { motion } from "framer-motion"

/**
 * ExperienceSection - The experience section of the portfolio
 */
export function ExperienceSection() {
  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">Experience & Skills</h2>

      {/* Skills section */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Technical Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Programming Languages */}
          <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Programming Languages</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                JavaScript/TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Python
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Java
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                C/C++
              </li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Frameworks & Libraries</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                React & Next.js
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Numpy & Pandas
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                TailwindCSS
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Django
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Tools & Platforms */}
          <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Tools & Platforms</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Git & GitHub
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Docker
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                VSCode
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Figma
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Soft Skills</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Problem Solving
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Team Collaboration
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Communication
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Adaptability
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Work Experience</h3>

        <div className="space-y-8">
          {/* Experience Item 1 */}
          <div className="relative border-l-2 border-purple-500/50 pl-6 pb-2">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
            <h4 className="text-xl font-bold text-purple-300">Coding Instructor</h4>
            <p className="text-purple-200/70 mb-2">Code Ninjas • Jan 2024 - Dec 2024 </p>
            <p className="text-gray-300 mb-3">Description 1</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Unity</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Javascript</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Teaching</span>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative border-l-2 border-purple-500/50 pl-6 pb-2">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
            <h4 className="text-xl font-bold text-purple-300">More stuff</h4>
            <p className="text-purple-200/70 mb-2">Place • Date</p>
            <p className="text-gray-300 mb-3">Description 2</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Tool 1</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Tool 2</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Tool 3</span>
            </div>
          </div>


        </div>
      </div>

      {/* Volunteer Experience */}
      <div>
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Volunteer Experience</h3>

        <div className="relative border-l-2 border-purple-500/50 pl-6">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
          <h4 className="text-xl font-bold text-purple-300">Assistant Director of Events</h4>
          <p className="text-purple-200/70 mb-2">SFU Computing Science Student Society • Sept 2024 - Dec 2024</p>
          <p className="text-gray-300 mb-3">
            Organized and coordinated events for the student society for over 2,000 students
          </p>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold text-purple-300 mb-4 pt-5">Education</h3>

        <div className="relative border-l-2 border-purple-500/50 pl-6">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
          <h4 className="text-xl font-bold text-purple-300">BSc in Computing Science</h4>
          <p className="text-purple-200/70 mb-2">Simon Fraser University • May 2024 - Present </p>
          <p className="text-gray-300 mb-3">
            Relevant coursework: Data Structures and Algorithms, Systems Programming, Computational Data Science
          </p>
          <p className="text-gray-300">Minor in Statistics</p>
        </div>
      </div>
    </motion.div>
  )
}
