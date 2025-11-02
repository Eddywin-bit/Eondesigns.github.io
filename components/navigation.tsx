"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity">
          STUDIO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#work" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Work
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="#work" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Work
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
