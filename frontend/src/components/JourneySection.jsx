import { motion } from 'framer-motion'
import JourneyCard from './JourneyCard'

// Journey data with all milestone information
const JOURNEY_DATA = [
  {
    id: 1,
    title: "Bhartiya Vidya Bhavan's",
    period: '2011-2023',
    description: 'Completed my foundational education here, where I developed core academic skills and built a strong base in mathematics, science, and technology. Also participated in various co-curricular activities that nurtured my interest in computers and problem-solving.',
    icon: 'school.jpg',
    position: 'left',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Charotar University of Science and Technology',
    period: 'B.Tech in Information Technology, 2023 - 2027',
    description: 'Currently pursuing a B.Tech in Information Technology at Charotar University of Science and Technology (2023-2027), where I\'ve built a strong foundation in computer science, software engineering, and full-stack development.',
    icon: 'college.jpeg',
    position: 'right',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 3,
    title: 'CodeClause - Web Development Intern',
    period: 'May 2025 - June 2025',
    description: 'Currently interning as a Web Developer at CodeClause, building real-world projects like a secure, no-login file-sharing platform using React, Supabase, and Netlify — integrating seamless UI with robust backend logic.',
    icon: 'codeclause.jpeg',
    position: 'left',
    color: 'from-orange-500 to-orange-600'
  }
]

// Reusable section title component
const SectionTitle = ({ subtitle, title }) => (
  <div className="text-center mb-16">
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-gray-400 text-sm md:text-base italic mb-4"
    >
      {subtitle}
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent"
    >
      {title}
    </motion.h1>
  </div>
)

// Center connector line component
const CenterLine = () => (
  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
)

// Animated dot marker component
const AnimatedDot = ({ delay }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full"
  >
    <motion.div
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
      className="absolute inset-0 bg-cyan-400 rounded-full opacity-75"
    />
  </motion.div>
)

export default function JourneySection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          subtitle="A snapshot of my academic path and hands-on experience"
          title="My Journey"
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Center gradient line for desktop */}
          <CenterLine />

          {/* Timeline items container */}
          <div className="space-y-12 lg:space-y-24">
            {JOURNEY_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                {/* Desktop layout: Zig-zag pattern */}
                <div className={`hidden lg:grid grid-cols-2 gap-8 items-center ${item.position === 'right' ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
                  {/* Left side content */}
                  <div className={item.position === 'left' ? 'order-1' : 'order-2'}>
                    <JourneyCard item={item} />
                  </div>

                  {/* Center dot and spacer */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <AnimatedDot delay={index * 0.3} />
                    </div>
                  </div>

                  {/* Right side spacer */}
                  <div className={item.position === 'left' ? 'order-3' : 'order-1'} />
                </div>

                {/* Mobile/Tablet layout: Stacked cards */}
                <div className="lg:hidden">
                  <JourneyCard item={item} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1 h-32 bg-gradient-to-t from-cyan-500 to-transparent opacity-0"
          />
        </div>

        {/* Footer accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm">
            More milestones coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
