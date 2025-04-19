export interface ProjectType {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  hasFullPage: boolean
  slug?: string
  category: "personal" | "class" | "hackathon"
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Film Camera Portfolio",
    description:
      "A personal portfolio website with a film camera aesthetic, built with Next.js and Framer Motion. Features custom animations, interactive elements, and responsive design to showcase my work in a unique and engaging way.",
    image: "/retro-software-interface.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    hasFullPage: true,
    slug: "film-camera-portfolio",
    category: "personal",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description:
      "An admin dashboard for managing products, orders, and customer data for an online store. Includes real-time analytics, inventory management, and a comprehensive order processing system with customizable reports.",
    image: "/retro-software-interface.png",
    tags: ["React", "TypeScript", "Chart.js"],
    hasFullPage: true,
    slug: "ecommerce-dashboard",
    category: "personal",
  },
  {
    id: 3,
    title: "Weather Application",
    description:
      "A weather forecast app that displays current conditions and 5-day predictions. Features location-based forecasts, interactive maps, and severe weather alerts to keep users informed about changing weather conditions.",
    image: "/retro-software-interface.png",
    tags: ["JavaScript", "API Integration", "CSS"],
    hasFullPage: false,
    category: "class",
  },
  {
    id: 4,
    title: "Task Management Tool",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality. Includes features like task categorization, priority levels, due dates, and progress tracking to help users stay organized and efficient.",
    image: "/retro-software-interface.png",
    tags: ["React", "Redux", "Firebase"],
    hasFullPage: false,
    category: "class",
  },
  {
    id: 5,
    title: "AI Image Generator",
    description:
      "A web app that generates images using AI based on text prompts. Leverages machine learning models to create unique visuals from textual descriptions, with options to customize style, color palette, and composition.",
    image: "/retro-software-interface.png",
    tags: ["Python", "TensorFlow", "React"],
    hasFullPage: true,
    slug: "ai-image-generator",
    category: "hackathon",
  },
  {
    id: 6,
    title: "Smart Home Dashboard",
    description:
      "An IoT dashboard for controlling and monitoring smart home devices. Provides a centralized interface for managing connected devices, automating routines, and analyzing energy usage patterns for greater efficiency.",
    image: "/retro-software-interface.png",
    tags: ["IoT", "React", "Node.js"],
    hasFullPage: false,
    category: "hackathon",
  },
]
