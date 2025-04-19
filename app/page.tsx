"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Camera, User, Briefcase, Mail, FileText, Menu, X, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

// Import components
import { CameraFocusCursor } from "@/components/camera/camera-focus-cursor"
import { ViewfinderTransition } from "@/components/camera/viewfinder-transition"
import { LoadingAnimation } from "@/components/camera/loading-animation"
import { CameraViewfinderFrame } from "@/components/camera/camera-viewfinder-frame"
import { CameraSettingsPanel } from "@/components/camera/camera-settings-panel"
import { ProjectModal } from "@/components/projects/project-modal"
import { NavButton } from "@/components/ui/nav-button"

// Import sections
import { HomeSection } from "@/components/sections/home-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"

// Import data and hooks
import { projectsData } from "@/data/projects"
import { useCameraSound } from "@/hooks/use-camera-sound"
import type { CameraSettings } from "@/types/camera"

/**
 * Main Home component for the film camera portfolio
 */
export default function Home() {
  // ---- STATE MANAGEMENT ----
  // Animation and loading states
  const [isStarting, setIsStarting] = useState(true) // Controls if we're in startup mode
  const [isViewfinderOpen, setIsViewfinderOpen] = useState(false) // Controls viewfinder transition
  const [apertureOpen, setApertureOpen] = useState(false) // Controls aperture animation

  // Navigation and UI states
  const [activeSection, setActiveSection] = useState("home") // Current content section
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Mobile menu visibility
  const [isSettingsOpen, setIsSettingsOpen] = useState(false) // Settings panel visibility

  // Project modal states
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Define the navigation sections for keyboard navigation
  const navSections = ["home", "about", "experience", "projects", "contact"]

  // Camera visual settings - these control the visual effects
  const [cameraSettings, setCameraSettings] = useState<CameraSettings>({
    filmGrain: 10, // Controls film grain overlay opacity (0-100)
    colorTemperature: 40, // Controls color temperature (0=cool, 100=warm)
    exposure: 50, // Controls brightness (0-100)
    contrast: 60, // Controls contrast (0-100)
    vignette: 20, // Controls vignette effect darkness (0-100)
  })

  // Get camera sound functions
  const { playCameraSound, playStartupSound } = useCameraSound()

  // Phrases for the typing animation
  const typingPhrases = [
    "I am a Computing Science student.",
    "I'm a Software developer.",
    "I'm an avid spicy noodles lover.",
  ]

  // ---- CAMERA STARTUP SEQUENCE ----
  // This runs once when the component loads
  useEffect(() => {
    // Start aperture opening animation after a delay
    setTimeout(() => {
      setApertureOpen(true)

      // Play camera startup sound
      playStartupSound()

      // End loading sequence after animations complete
      setTimeout(() => {
        setIsStarting(false) // Exit loading screen

        // Open viewfinder after a delay
        setTimeout(() => {
          setIsViewfinderOpen(true)
        }, 1000)
      }, 1500)
    }, 1000)
  }, []) // Empty dependency array means this runs once on mount

  // ---- KEYBOARD NAVIGATION FOR MAIN TABS ----
  // Set up event listeners for arrow key navigation
  useEffect(() => {
    // Handle keyboard arrow key presses
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle left and right arrow keys
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        // Prevent default behavior (like scrolling)
        e.preventDefault()

        // Get current index in the navigation sections array
        const currentIndex = navSections.indexOf(activeSection)

        // Calculate new index based on arrow key direction
        let newIndex
        if (e.key === "ArrowRight") {
          // Move to next section (or wrap to first)
          newIndex = (currentIndex + 1) % navSections.length
        } else {
          // Move to previous section (or wrap to last)
          newIndex = (currentIndex - 1 + navSections.length) % navSections.length
        }

        // Change to the new section
        changeSection(navSections[newIndex])
      }
    }

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyDown)

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeSection]) // Re-run effect when activeSection changes

  // Handle direct navigation to sections via URL hash
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1) // Remove the # character

      // If the hash corresponds to one of our sections, activate that section
      if (navSections.includes(sectionId)) {
        setActiveSection(sectionId)

        // Clear the hash to avoid confusion with future navigation
        // but do it without causing a page reload
        window.history.replaceState(null, document.title, window.location.pathname)
      }
    }
  }, []) // Only run once on component mount

  // ---- HELPER FUNCTIONS ----

  // Change the active section/page
  const changeSection = (section: string) => {
    if (section !== activeSection) {
      playCameraSound() // Play shutter sound when changing sections
      setActiveSection(section)
      setIsMobileMenuOpen(false) // Close mobile menu after selection
    }
  }

  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    playCameraSound() // Play camera sound when opening modal
  }

  // Close project modal
  const closeProjectModal = () => {
    playCameraSound() // Play camera sound when closing modal
    setIsModalOpen(false)
    // Clear selected project after animation completes
    setTimeout(() => {
      setSelectedProject(null)
    }, 500)
  }

  // Update camera settings
  const handleSettingChange = (setting: string, value: number) => {
    setCameraSettings((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  // ---- RENDER COMPONENT ----
  return (
    <main className="h-screen w-full overflow-hidden bg-gray-900 relative cursor-none">
      {/* Custom cursor styles */}
      <style jsx global>{`
        /* Hide default cursor */
        * {
          cursor: none !important;
        }
        
        /* Custom cursor styling */
        .custom-cursor {
          pointer-events: none;
          position: fixed;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          mix-blend-mode: difference;
        }

        /* Film grain animation */
        @keyframes filmGrain {
          0%, 100% { background-position: 0% 0%; }
          20% { background-position: 20% 20%; }
          40% { background-position: 40% 10%; }
          60% { background-position: 10% 40%; }
          80% { background-position: 30% 5%; }
        }

        .film-grain-animation {
          animation: filmGrain 0.5s steps(3) infinite;
        }
      `}</style>

      {/* Camera focus cursor - follows mouse */}
      <CameraFocusCursor />

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />

      {/* Film grain overlay - opacity controlled by settings */}
      <div
        className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay bg-[url('/film-grain.png')] bg-repeat film-grain-animation"
        style={{
          opacity: cameraSettings.filmGrain / 100,
        }}
      ></div>

      {/* Visual effects layer - controlled by settings */}
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          // Vignette effect (dark corners)
          boxShadow: `inset 0 0 ${cameraSettings.vignette * 2}px rgba(0,0,0,${cameraSettings.vignette / 100})`,
          // Combined filter effects
          filter: `brightness(${0.7 + (cameraSettings.exposure / 100) * 0.6}) 
                  contrast(${0.8 + (cameraSettings.contrast / 100) * 0.4}) 
                  sepia(${cameraSettings.colorTemperature > 50 ? (cameraSettings.colorTemperature - 50) / 200 : 0}) 
                  hue-rotate(${cameraSettings.colorTemperature < 50 ? ((50 - cameraSettings.colorTemperature) / 100) * 30 : 0}deg)`,
        }}
      ></div>

      {/* ---- SIMPLIFIED LOADING ANIMATION ---- */}
      <AnimatePresence>
        {isStarting && <LoadingAnimation isStarting={isStarting} apertureOpen={apertureOpen} />}
      </AnimatePresence>

      {/* ---- VIEWFINDER TRANSITION ANIMATION ---- */}
      <AnimatePresence>{!isStarting && !isViewfinderOpen && <ViewfinderTransition />}</AnimatePresence>

      {/* ---- MAIN CONTENT WITH VIEWFINDER FRAME ---- */}
      <div className="relative h-full w-full">
        {/* Camera viewfinder frame */}
        <CameraViewfinderFrame />

        {/* Mobile menu button - only visible on small screens */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 right-4 z-30 md:hidden bg-black/90 p-3 rounded-full text-purple-400 border border-purple-400/30"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ---- NAVIGATION - CAMERA CONTROLS ---- */}
        <div
          className={cn(
            "fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-1 sm:gap-2 md:gap-4 bg-black/90 p-2 md:p-3 rounded-lg transition-all duration-300 border border-purple-500/30",
            // Hide on mobile unless menu is open
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 md:opacity-100 md:translate-y-0",
          )}
        >
          {/* Home button */}
          <NavButton
            icon={<Camera size={20} />}
            label="Home"
            isActive={activeSection === "home"}
            onClick={() => changeSection("home")}
          />
          {/* About button */}
          <NavButton
            icon={<User size={20} />}
            label="About"
            isActive={activeSection === "about"}
            onClick={() => changeSection("about")}
          />
          {/* Experience button - replacing Blog */}
          <NavButton
            icon={<FileText size={20} />}
            label="Experience"
            isActive={activeSection === "experience"}
            onClick={() => changeSection("experience")}
          />
          {/* Projects button */}
          <NavButton
            icon={<Briefcase size={20} />}
            label="Projects"
            isActive={activeSection === "projects"}
            onClick={() => changeSection("projects")}
          />
          {/* Contact button */}
          <NavButton
            icon={<Mail size={20} />}
            label="Contact"
            isActive={activeSection === "contact"}
            onClick={() => changeSection("contact")}
          />
          {/* Settings button */}
          <NavButton
            icon={<Settings size={20} />}
            label="Settings"
            isActive={isSettingsOpen}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          />
        </div>

        {/* ---- CAMERA SETTINGS PANEL ---- */}
        <AnimatePresence>
          {isSettingsOpen && (
            <CameraSettingsPanel
              isOpen={isSettingsOpen}
              settings={cameraSettings}
              onClose={() => setIsSettingsOpen(false)}
              onSettingChange={handleSettingChange}
            />
          )}
        </AnimatePresence>

        {/* ---- CONTENT SECTIONS ---- */}
        <div className="h-full overflow-auto px-4 py-10 sm:px-6 sm:py-12 md:p-24 bg-gray-800/20">
          <AnimatePresence mode="wait">
            {/* ---- HOME SECTION ---- */}
            {activeSection === "home" && <HomeSection onNavigate={changeSection} typingPhrases={typingPhrases} />}

            {/* ---- ABOUT SECTION ---- */}
            {activeSection === "about" && <AboutSection />}

            {/* ---- EXPERIENCE SECTION ---- */}
            {activeSection === "experience" && <ExperienceSection />}

            {/* ---- PROJECTS SECTION ---- */}
            {activeSection === "projects" && (
              <ProjectsSection
                projects={projectsData}
                onOpenModal={openProjectModal}
                playCameraSound={playCameraSound}
              />
            )}

            {/* ---- CONTACT SECTION ---- */}
            {activeSection === "contact" && <ContactSection playCameraSound={playCameraSound} />}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
