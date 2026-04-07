"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  MousePointerClick,
  Palette,
  Smartphone,
  Globe,
  Heart,
} from "lucide-react"

// Deterministic pseudo-random number generator for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const services = [
  {
    id: "retention",
    title: "User Retention",
    icon: Users,
    description: "Designing interfaces that keep users coming back through intuitive workflows and delightful experiences.",
    visual: "retention",
    color: "from-blue-600/20 to-blue-500/20",
  },
  {
    id: "usability",
    title: "Product Usability",
    icon: MousePointerClick,
    description: "Enhancing product usability through user research, testing, and iterative design improvements.",
    visual: "usability",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "mobile",
    title: "Mobile Experience",
    icon: Smartphone,
    description: "Designing responsive mobile interfaces that provide seamless experiences across all devices.",
    visual: "mobile",
    color: "from-indigo-500/20 to-blue-600/20",
  },
  {
    id: "webapp",
    title: "Web Application Interfaces",
    icon: Globe,
    description: "Crafting complex web applications that are powerful yet simple to use for diverse user bases.",
    visual: "webapp",
    color: "from-blue-600/20 to-indigo-500/20",
  },
  {
    id: "systems",
    title: "Design Systems",
    icon: Palette,
    description: "Creating scalable design systems that ensure consistency and accelerate product development.",
    visual: "systems",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: "engagement",
    title: "User Engagement",
    icon: Heart,
    description: "Designing features that drive meaningful user engagement and create lasting product loyalty.",
    visual: "engagement",
    color: "from-blue-500/20 to-blue-600/20",
  },
]

function ServiceVisual({ service }: { service: typeof services[0] }) {
  // Generate deterministic particle positions based on service index
  const serviceIndex = services.findIndex(s => s.id === service.id)
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      startX: seededRandom(serviceIndex * 100 + i * 11) * 400,
      startY: seededRandom(serviceIndex * 100 + i * 13) * 400,
      endX: seededRandom(serviceIndex * 100 + i * 17) * 400,
      endY: seededRandom(serviceIndex * 100 + i * 19) * 400,
    }))
  }, [serviceIndex])

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${service.color} border border-primary/20 overflow-hidden`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: particle.startX,
              y: particle.startY,
              opacity: 0,
            }}
            animate={{
              x: particle.endX,
              y: particle.endY,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Service icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <service.icon className="w-24 h-24 text-primary/40" strokeWidth={1} />
        </motion.div>
      </div>

      {/* UI mockup elements */}
      <div className="absolute bottom-8 left-8 right-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-primary/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
              <service.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="h-2 w-24 bg-foreground/30 rounded" />
              <div className="h-2 w-16 bg-muted-foreground/30 rounded mt-1" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-muted/50 rounded" />
            <div className="h-2 w-3/4 bg-muted/30 rounded" />
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 rounded-lg bg-primary/20 border border-primary/30"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 left-8 w-12 h-12 rounded-full bg-accent/20 border border-accent/30"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.div>
  )
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            What Do I Help Startups Improve?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            I specialize in solving critical UX challenges that directly impact your business metrics and user satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className={`group relative p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedService.id === service.id
                    ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                    : "bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      selectedService.id === service.id
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      selectedService.id === service.id
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>

                {/* Active indicator */}
                {selectedService.id === service.id && (
                  <motion.div
                    layoutId="activeService"
                    className="absolute inset-0 rounded-xl border-2 border-primary/50 pointer-events-none"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Service Visual & Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Visual */}
            <div className="aspect-[4/3] relative">
              <AnimatePresence mode="wait">
                <ServiceVisual service={selectedService} />
              </AnimatePresence>
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-3">{selectedService.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
