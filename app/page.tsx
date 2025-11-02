"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProjectGrid from "@/components/project-grid"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <ProjectGrid />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
