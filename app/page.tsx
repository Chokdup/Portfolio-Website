"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParticleField } from "@/components/portfolio/particles"
import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ServicesSection } from "@/components/portfolio/services-section"
import { PortfolioSection } from "@/components/portfolio/portfolio-section"
import { ProcessSection } from "@/components/portfolio/process-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-4xl md:text-6xl font-bold">
            <span className="text-primary">C</span>hokdup
          </span>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-primary rounded-full max-w-[200px] mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-muted-foreground text-sm"
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <main className="relative min-h-screen">
        {/* Particle background */}
        <ParticleField />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hero Section */}
          <HeroSection />

          {/* Services / Expertise Section */}
          <ServicesSection />

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* Process Section */}
          <ProcessSection />

          {/* About Section */}
          <AboutSection />

          {/* Resume Section */}
          <ResumeSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </motion.div>

        {/* Background gradient overlays */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent" />
        </div>
      </main>
    </>
  )
}
