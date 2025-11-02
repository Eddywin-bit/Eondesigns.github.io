"use client"

import type React from "react"

import { Mail, Linkedin, Instagram, Github, Twitter } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const socialLinks = {
    instagram: "https://instagram.com/thedesigner_edwin",
    linkedin: "https://linkedin.com/in/edwin-gyasi",
    twitter: "https://x.com/gyasi-edwin",
    github: "https://github.com/yourusername",
  }

  const contactEmail = "edwingyasi4@gmail.com"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Work Together</h2>
          <p className="text-lg opacity-90">Have a project in mind? We'd love to hear about it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
              >
                <Mail size={24} />
                {contactEmail}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-primary-foreground/20">
              <p className="text-sm opacity-80">
                Based in New York, working globally. Available for freelance and full-time projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
