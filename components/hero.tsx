"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
            Graphic Design
            <br />
            <span className="text-muted-foreground">That Speaks</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            We create compelling visual identities and design solutions that elevate brands and captivate audiences.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}
