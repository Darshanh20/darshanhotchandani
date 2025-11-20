import { motion } from 'framer-motion'
import './HeroSection.css'
import { useState, useEffect } from 'react'

/**
 * HeroTitle Component
 * Animated main heading with gradient text
 */
const HeroTitle = ({ text }) => (
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="hero-title"
  >
    {text}
  </motion.h1>
)

/**
 * HighlightText Component
 * Typewriter effect for rotating roles
 */
const HighlightText = ({ roles = ['Developer', 'UI/UX Designer', 'Full-Stack Learner'] }) => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <motion.span
      key={currentRole}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="highlight-text"
    >
      {roles[currentRole]}
    </motion.span>
  )
}

/**
 * Subtitle Component
 * Tagline with fade-in animation
 */
const Subtitle = ({ text }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="hero-subtitle"
  >
    {text}
  </motion.p>
)

/**
 * HeroImage Component
 * Floating image with glow effect and hover animations
 */
const HeroImage = ({ src, alt = 'Darshan Hotchandani' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: 100 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.9, delay: 0.3 }}
    className="hero-image-wrapper"
  >
    {/* Glow background */}
    <div className="hero-image-glow"></div>

    {/* Floating frame */}
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="hero-image-frame"
    >
      <img src={src} alt={alt} className="hero-image" />
    </motion.div>

    {/* Floating particles effect */}
    <div className="floating-particles">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  </motion.div>
)

/**
 * CTA Button Component
 * Interactive call-to-action button
 */
const CTAButton = ({ label, href = '#', variant = 'primary' }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 213, 255, 0.6)' }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
    className={`cta-button cta-${variant}`}
  >
    {label}
  </motion.a>
)

/**
 * Main HeroSection Component
 * Premium redesigned hero with modern layout and animations
 */
export default function HeroSection() {
  const roles = ['Developer', 'UI/UX Designer', 'Full-Stack Learner']
  const tagline = 'Creating purposeful digital experiences through code & design'

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hero-section"
    >
      {/* Animated background gradient */}
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      {/* Main content container */}
      <div className="hero-container">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-content-left"
        >
          {/* Eyebrow text */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-eyebrow"
          >
            <span className="eyebrow-dot"></span>
            Welcome to my portfolio
          </motion.div>

          {/* Main heading */}
          <HeroTitle text="Hi, I'm Darshan" />

          {/* Role with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-role"
          >
            <span className="role-prefix">I'm a </span>
            <HighlightText roles={roles} />
          </motion.div>

          {/* Tagline */}
          <Subtitle text={tagline} />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-cta-group"
          >
            <CTAButton label="Let's Connect" href="#contact" variant="primary" />
            <CTAButton label="View My Work" href="#projects" variant="secondary" />
          </motion.div>

          {/* Stats/Info section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Image content */}
        <div className="hero-content-right">
          <HeroImage src="/src/assets/me.png" alt="Darshan Hotchandani" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hero-scroll-indicator"
      >
        <span>Scroll to explore</span>
        <svg className="scroll-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v10M10 14l-4-4M10 14l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </motion.section>
  )
}
