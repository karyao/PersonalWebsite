"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Project Data
// TODO: Implement a databse with projects data
// Right now will be manua
const projectsData = [
  {
    id: 1,
    title: "Film Camera Portfolio",
    description: "A personal portfolio website with a film camera aesthetic, built with Next.js and Framer Motion.",
    fullDescription: `
      This project was created to showcase my work in a unique and engaging way. Inspired by vintage film cameras, 
      I designed an interactive portfolio that mimics the experience of looking through a camera viewfinder.
      
      The site features custom animations built with Framer Motion, including an aperture loading screen and 
      viewfinder transitions between pages. The UI includes camera-inspired elements like exposure settings, 
      frame counters, and film grain effects that can be adjusted in real-time.
      
      The biggest challenge was creating the custom cursor that follows mouse movements and simulates 
      a camera focus reticle. This required careful state management and event handling to ensure smooth performance.
    `,
    image: "/retro-software-interface.png",
    gallery: ["/retro-software-interface.png", "/retro-software-interface.png", "/retro-software-interface.png"],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Responsive Design"],
    features: [
      "Custom camera viewfinder interface",
      "Interactive aperture loading animation",
      "Adjustable visual effects (film grain, exposure, etc.)",
      "Custom camera focus cursor",
      "Responsive design for all devices",
    ],
    technologies: [
      "Next.js for the framework",
      "Framer Motion for animations",
      "Tailwind CSS for styling",
      "TypeScript for type safety",
      "Vercel for deployment",
    ],
    date: "June 2023",
    client: "Personal Project",
    role: "Full-stack Developer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    slug: "film-camera-portfolio",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "An admin dashboard for managing products, orders, and customer data for an online store.",
    fullDescription: `
      This e-commerce dashboard was developed to help store owners manage their online business efficiently.
      It provides a comprehensive overview of sales, inventory, customer data, and order processing.
      
      The dashboard includes real-time analytics with customizable date ranges, product management with
      inventory tracking, order processing workflows, and customer relationship management tools.
      
      I focused on creating an intuitive interface that makes complex data easy to understand through
      visualizations and clear information hierarchy. The dashboard is fully responsive and works
      across all device sizes.
    `,
    image: "/retro-software-interface.png",
    gallery: ["/retro-software-interface.png", "/retro-software-interface.png", "/retro-software-interface.png"],
    tags: ["React", "TypeScript", "Chart.js", "Material UI", "Firebase"],
    features: [
      "Real-time sales analytics",
      "Inventory management",
      "Order processing workflow",
      "Customer data management",
      "Customizable reports and exports",
    ],
    technologies: [
      "React for the frontend",
      "TypeScript for type safety",
      "Chart.js for data visualization",
      "Material UI for component library",
      "Firebase for backend and authentication",
    ],
    date: "March 2023",
    client: "E-commerce Startup",
    role: "Frontend Developer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    slug: "ecommerce-dashboard",
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "A web app that generates images using AI based on text prompts.",
    fullDescription: `
      This AI image generator was built during a 48-hour hackathon, where our team aimed to create a tool that
      would allow users to generate custom images based on text descriptions.
      
      The application uses a fine-tuned version of a popular image generation model, with a React frontend that
      provides an intuitive interface for entering prompts, adjusting parameters, and viewing results.
      
      Users can specify style preferences, color schemes, and composition details in their prompts. The generated
      images can be saved to a gallery, shared on social media, or downloaded in various formats.
      
      Despite the time constraints, we managed to implement features like prompt history, image variation generation,
      and basic editing tools. The project won the "Most Innovative Use of AI" award at the hackathon.
    `,
    image: "/retro-software-interface.png",
    gallery: ["/retro-software-interface.png", "/retro-software-interface.png", "/retro-software-interface.png"],
    tags: ["Python", "TensorFlow", "React", "AI", "Image Generation"],
    features: [
      "Text-to-image generation",
      "Style and parameter customization",
      "Image history and gallery",
      "Variation generation",
      "Social sharing integration",
    ],
    technologies: [
      "Python for backend processing",
      "TensorFlow for the AI model",
      "React for the frontend interface",
      "Flask for API endpoints",
      "AWS for deployment and scaling",
    ],
    date: "November 2022",
    client: "Hackathon Project",
    role: "ML Engineer & Frontend Developer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    slug: "ai-image-generator",
  },
]

export default function ProjectPage() {
  const router = useRouter()
  const params = useParams()
  const [project, setProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [shutterOpen, setShutterOpen] = useState(false)

  // Find the project based on the slug
  useEffect(() => {
    if (params.slug) {
      const foundProject = projectsData.find((p) => p.slug === params.slug)

      if (foundProject) {
        setProject(foundProject)

        // Play camera shutter sound when page loads
        const shutterSound = new Audio("/camera-shutter.mp3")
        shutterSound.volume = 0.3
        shutterSound.play().catch((e) => console.log("Audio play prevented:", e))

        // Animate shutter opening
        setShutterOpen(true)
      } else {
        // Redirect to projects page if project not found
        router.push("/#projects")
      }

      setIsLoading(false)
    }
  }, [params.slug, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Camera shutter animation */}
      <motion.div
        className="fixed inset-0 bg-black z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{
          opacity: shutterOpen ? 0 : 1,
          clipPath: shutterOpen ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Film grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 mix-blend-overlay bg-[url('/film-grain.png')] bg-repeat opacity-10 film-grain-animation"></div>

      {/* Camera viewfinder frame */}
      <div className="fixed inset-0 pointer-events-none z-20 border-[20px] sm:border-[30px] md:border-[40px] border-black">
        {/* Corner markers */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-purple-400/70"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400/70"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400/70"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400/70"></div>

        {/* Camera info display */}
        <div className="absolute top-4 right-4 font-mono text-xs text-purple-400/90 bg-black/50 px-2 py-1 rounded-sm">
          ISO 400 • 1/125s • f/2.8
        </div>

        {/* Frame counter */}
        <div className="absolute bottom-4 right-4 font-mono text-xs text-purple-400/90 bg-black/50 px-2 py-1 rounded-sm">
          FRAME 02/36
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-0">
        {/* Back to home link */}
        <Link href="/#projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>

        {/* Project header with sticker */}
        <header className="relative mb-12">
          <div className="absolute -top-4 left-0 bg-purple-500 text-black text-sm font-bold py-1 px-4 rounded-r-md">
            Project Journey
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mt-6 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-6">{project.description}</p>

          {/* Project metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-purple-400" />
              {project.date}
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-2 text-purple-400" />
              {project.client}
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2 text-purple-400" />
              {project.role}
            </div>
          </div>
        </header>

        {/* Project gallery */}
        <div className="mb-12">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-purple-500/30 mb-4">
            <Image
              src={project.gallery[activeImage] || "/placeholder.svg"}
              fill
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="object-cover"
            />
          </div>

          {/* Thumbnail navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={cn(
                  "relative w-24 h-16 rounded-md overflow-hidden border-2 transition-all",
                  activeImage === index
                    ? "border-purple-500 opacity-100"
                    : "border-purple-500/30 opacity-70 hover:opacity-100",
                )}
              >
                <Image src={image || "/placeholder.svg"} fill alt={`Thumbnail ${index + 1}`} className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Project content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">My Journey</h2>
            <div className="prose prose-invert prose-purple max-w-none mb-8">
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-purple-400 mb-4">Key Features</h2>
            <ul className="space-y-2 mb-8">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-black/30 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Technologies Used</h3>
              <ul className="space-y-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-purple-400 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {project.liveUrl && (
                  <Button
                    className="w-full bg-purple-500 hover:bg-purple-600 text-black"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    View Live Site
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    View Source Code
                    <Github size={16} className="ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add global styles for film grain animation */}
      <style jsx global>{`
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
    </div>
  )
}
