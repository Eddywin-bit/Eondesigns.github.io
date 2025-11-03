// Navigation scroll effect
const navbar = document.querySelector(".navbar")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scroll
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
      // Close mobile menu if open
      const navMenu = document.querySelector(".nav-menu")
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
      }
    }
  })
})

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const filter = button.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = ""
        card.style.animation = "none"
        // Trigger reflow
        void card.offsetWidth
        card.style.animation = "fadeInUp 0.6s ease both"
      } else {
        card.style.display = "none"
      }
    })
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
    }
  })
}, observerOptions)

// Observe sections for fade in effect
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})
