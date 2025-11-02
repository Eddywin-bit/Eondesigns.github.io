"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    description: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-video mb-4">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowUpRight className="text-white" size={32} />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground uppercase tracking-wide">{project.category}</p>
        <h3 className="text-xl font-bold group-hover:text-muted-foreground transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </div>
  )
}
