"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Lightbulb, PenTool, Rocket, type LucideIcon } from "lucide-react"

// Deterministic pseudo-random number generator for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
  details: string[]
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into understanding your business goals, target users, and market landscape through research and stakeholder interviews.",
    icon: Search,
    details: ["User Research", "Competitive Analysis", "Stakeholder Interviews", "Goal Definition"],
  },
  {
    number: "02",
    title: "Strategy",
    description: "Synthesize research insights into actionable strategies, defining user journeys and information architecture.",
    icon: Lightbulb,
    details: ["User Personas", "Journey Mapping", "Information Architecture", "Feature Prioritization"],
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive interfaces through iterative design, from wireframes to high-fidelity prototypes with user validation.",
    icon: PenTool,
    details: ["Wireframing", "Visual Design", "Prototyping", "Usability Testing"],
  },
  {
    number: "04",
    title: "Delivery",
    description: "Hand off polished designs with comprehensive documentation, supporting development and measuring success post-launch.",
    icon: Rocket,
    details: ["Design Specs", "Developer Handoff", "Quality Assurance", "Success Metrics"],
  },
]

function ProcessVisual({ step, index }: { step: Step; index: number }) {
  // Generate deterministic dot positions based on step index
  // Round to 2 decimal places to avoid hydration mismatch from floating point precision
  const dots = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      left: `${Math.round((10 + seededRandom(index * 100 + i * 17) * 80) * 100) / 100}%`,
      top: `${Math.round((10 + seededRandom(index * 100 + i * 23) * 80) * 100) / 100}%`,
    }))
  }, [index])

  return (
    <div
      className={`${
        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
      } hidden lg:block`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 relative overflow-hidden"
      >
        {/* Animated elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-32 h-32 border border-primary/20 rounded-full"
          />
        </div>
        <div className="absolute inset-8 flex items-center justify-center">
          <step.icon className="w-20 h-20 text-primary/30" strokeWidth={1} />
        </div>

        {/* Decorative dots with deterministic positions */}
        {dots.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            How I Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A proven design process that transforms ideas into impactful digital experiences.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } mb-8 lg:mb-24`}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center"
                    >
                      <step.icon className="w-7 h-7 text-primary" />
                    </motion.div>

                    <div>
                      {/* Number & Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <ProcessVisual step={step} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
