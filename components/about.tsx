"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <Image src="/professional-studio-workspace-design.jpg" alt="Studio workspace" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">About Our Studio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a collective of designers, strategists, and creative thinkers dedicated to crafting meaningful
              visual experiences. With over a decade of combined expertise, we've helped brands across industries tell
              their stories through compelling design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach combines strategic thinking with meticulous attention to detail. We believe great design is
              not just beautiful—it's purposeful, functional, and transformative.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
