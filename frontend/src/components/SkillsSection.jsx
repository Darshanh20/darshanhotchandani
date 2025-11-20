import { motion } from 'framer-motion'
import './SkillsSection.css'

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true, amount: 0.3 }}
    className="skill-card-wrapper"
  >
    <div className="skill-card">
      <div className="skill-icon">
        <img src={`/src/assets/${skill.icon}`} alt={skill.name} />
      </div>
      <h3>{skill.name}</h3>
    </div>
  </motion.div>
)

const SkillGroup = ({ category, skills }) => (
  <div className="skill-group">
    <h3 className="skill-group-title">{category}</h3>
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </div>
)

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'html.png' },
      { name: 'CSS', icon: 'css.png' },
      { name: 'JavaScript', icon: 'js.png' },
      { name: 'React', icon: 'react.png' },
      { name: 'Tailwind', icon: 'tailwind.png' },
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: 'nodejs.png' },
      { name: 'Supabase', icon: 'Supabase.png' },
      { name: 'MySQL', icon: 'Mysql.png' },
      { name: 'PostgreSQL', icon: 'postgresql.png' },
    ]
  },
  {
    category: 'Design',
    skills: [
      { name: 'Figma', icon: 'figma.png' },
    ]
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'Python', icon: 'python.png' },
      { name: 'C++', icon: 'cpp.png' },
      { name: 'GitHub', icon: 'github.jpg' },
    ]
  }
]

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="tech-stack-section"
    >
      <div className="tech-stack-container">
        <h2 className="section-title">Tech Stack</h2>
        
        <div className="skill-categories">
          {SKILL_CATEGORIES.map((group) => (
            <SkillGroup 
              key={group.category} 
              category={group.category} 
              skills={group.skills} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
