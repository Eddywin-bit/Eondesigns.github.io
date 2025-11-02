"use client"

import { Palette, Layout, Package, Smartphone } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand systems including logos, color palettes, and visual guidelines",
  },
  {
    icon: Layout,
    title: "Editorial Design",
    description: "Magazine layouts, book design, and publication design with typographic excellence",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Product packaging that stands out on shelves and communicates brand values",
  },
  {
    icon: Smartphone,
    title: "Digital Design",
    description: "UI/UX design, web design, and digital experiences that engage users",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg group"
              >
                <Icon className="w-12 h-12 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
