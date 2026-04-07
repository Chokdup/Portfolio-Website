"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react"

// Deterministic pseudo-random number generator for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const skills = [
  { name: "User Research", level: 95 },
  { name: "UI Design", level: 98 },
  { name: "UX Strategy", level: 92 },
  { name: "Prototyping", level: 96 },
  { name: "Design Systems", level: 90 },
  { name: "Figma", level: 98 },
]

const highlights = [
  { icon: MapPin, label: "Based in", value: "Thimphu, Bhutan" },
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: GraduationCap, label: "Background", value: "Interactive Design & Development" },
  { icon: Award, label: "Projects", value: "10+ Delivered" },
]

export function AboutSection() {
  // Generate deterministic particle positions
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      left: `${seededRandom(i * 37 + 13) * 100}%`,
      top: `${seededRandom(i * 41 + 17) * 100}%`,
    }))
  }, [])

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            The Designer Behind the Pixels
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Placeholder design - in production this would be an actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                {/* Abstract profile illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Head shape */}
                    <div className="w-32 h-40 bg-foreground/10 rounded-full" />
                    {/* Shoulders */}
                    <div className="w-48 h-24 bg-foreground/10 rounded-t-full mt-4 mx-auto" />
                  </div>
                </div>

                {/* Decorative elements */}
                {particles.map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/50 rounded-full"
                    style={{
                      left: pos.left,
                      top: pos.top,
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-card border border-primary/30 rounded-xl p-4 shadow-xl"
              >
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-12 bg-card border border-primary/30 rounded-xl p-4 shadow-xl"
              >
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 left-8 right-0 bottom-0 border border-primary/20 rounded-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                I&apos;m Chokdup, a UI/UX Designer passionate about creating impactful digital experiences.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 3 years of experience in design and visual storytelling, I specialize in helping startups build user-centric applications that drive retention and growth. Based in Thimphu, Bhutan, my approach combines strategic thinking with meticulous attention to detail.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design is invisible—it simply works. With a background in Interactive Design and Development, every decision I make is rooted in user research, business goals, and a deep understanding of human behavior. My mission is to bridge the gap between user needs and business objectives through thoughtful design.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <highlight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{highlight.label}</div>
                    <div className="font-medium text-sm">{highlight.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-bold mb-4">Core Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
