import { motion } from 'framer-motion'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="about-section">
      <h2 className="section-title">About Me</h2>
      <article className="about-content">
        <p>
          I’m a developer and designer who thrives where creativity meets technology. With a sharp eye for detail and a user-first mindset, I turn ideas into smooth, meaningful digital experiences — blending design, development, and problem-solving into one purposeful workflow.
        </p>
        <p>
         I’ve built a strong foundation in HTML, CSS, JavaScript, and I craft intuitive interfaces using Figma and modern UI tools. My current stack includes React + Tailwind, and I bring real-world features to life using Supabase, MySQL, and PostgreSQL. I’m actively learning deeper backend integration — building and connecting databases, designing APIs, and understanding how full-stack systems work behind the scenes.
        </p>
        <p>
         Alongside this, I’m sharpening my logic with Python and C++, helping me write cleaner, efficient, and scalable code.
        </p>
        <p>
          Beyond the tech, I love leading, collaborating, and elevating projects. Whether it’s guiding a team, shaping a design system, or architecting a feature end-to-end, I approach every challenge with clarity, creativity, and intention.
        </p>
        <p>If you're working on something impactful, I’d love to connect. I’m always excited to contribute, learn, and build with people who share the same passion for clean design, purposeful development, and meaningful digital experiences.</p>
      </article>
    </motion.section>
  )
}
