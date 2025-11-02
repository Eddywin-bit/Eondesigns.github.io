"use client"

import { useState } from "react"
import ProjectCard from "./project-card"

const projects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    category: "branding",
    image: "/minimalist-brand-identity-design.jpg",
    description: "Complete brand identity system for a luxury lifestyle brand",
  },
  {
    id: 2,
    title: "Editorial Magazine Layout",
    category: "editorial",
    image: "/editorial-magazine-design-layout.jpg",
    description: "Modern editorial design for contemporary art magazine",
  },
  {
    id: 3,
    title: "Sustainable Packaging",
    category: "packaging",
    image: "/sustainable-eco-friendly-packaging-design.jpg",
    description: "Eco-conscious packaging design for organic product line",
  },
  {
    id: 4,
    title: "Digital Interface Design",
    category: "digital",
    image: "/digital-interface-ui-design.jpg",
    description: "User-centered interface design for mobile application",
  },
  {
    id: 5,
    title: "Corporate Branding",
    category: "branding",
    image: "/corporate-branding-design.png",
    description: "Comprehensive branding for tech startup",
  },
  {
    id: 6,
    title: "Book Cover Design",
    category: "editorial",
    image: "/book-cover-design-typography.jpg",
    description: "Award-winning book cover design series",
  },
  {
    id: 7,
    title: "Product Packaging",
    category: "packaging",
    image: "/product-packaging-design-cosmetics.jpg",
    description: "Premium cosmetics packaging design",
  },
  {
    id: 8,
    title: "Web Design System",
    category: "digital",
    image: "/web-design-system-components.jpg",
    description: "Comprehensive design system for enterprise platform",
  },
]

const categories = ["all", "branding", "editorial", "packaging", "digital"]

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="work" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Featured Work</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
