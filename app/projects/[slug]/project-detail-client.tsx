"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, ExternalLink, Quote } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects-data"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link href="/#portfolio">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
        <div className="absolute inset-0 bg-background/60" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 border border-primary/10 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              {project.hook}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Key Metric */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-2xl"
            >
              <span className="text-3xl font-bold text-primary">{project.metrics}</span>
              <span className="text-muted-foreground">Key Impact</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SAR Sections */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            {/* Situation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                  S
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">The Situation</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                {project.situation}
              </p>
            </motion.div>

            {/* Action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                  A
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">The Action</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                {project.action}
              </p>
            </motion.div>

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                  R
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">The Result</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                {project.result}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-card/50 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Design Process</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {project.designProcess.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < project.designProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-primary/20 z-0" />
                  )}
                  
                  <div className="bg-card border border-primary/20 rounded-xl p-5 relative z-10 h-full">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mockups Gallery */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Visual Design
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Project Mockups</h2>
          </motion.div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {project.mockups.map((mockup, index) => (
              <motion.div
                key={mockup.src}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${project.color} border border-primary/20 overflow-hidden`}>
                  {/* Placeholder mockup visualization */}
                  <div className="absolute inset-4 md:inset-8 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/30 shadow-2xl overflow-hidden">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="h-5 bg-background/50 rounded-md" />
                      </div>
                    </div>
                    {/* Content placeholder */}
                    <div className="p-6 space-y-4">
                      <div className="h-4 w-1/3 bg-primary/30 rounded" />
                      <div className="h-3 w-2/3 bg-muted/50 rounded" />
                      <div className="h-3 w-1/2 bg-muted/50 rounded" />
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="h-24 bg-primary/20 rounded-lg" />
                        <div className="h-24 bg-primary/15 rounded-lg" />
                        <div className="h-24 bg-primary/10 rounded-lg" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="h-16 bg-muted/30 rounded-lg" />
                        <div className="h-16 bg-muted/30 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-muted-foreground mt-4">{mockup.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 bg-card/50 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium mb-8 text-balance">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold">{project.testimonial.author}</p>
                <p className="text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to create something impactful?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let&apos;s discuss how thoughtful design can drive results for your product.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start a Conversation
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/#portfolio">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
