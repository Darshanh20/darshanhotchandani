import { useState } from 'react'
import './Navbar.css'
import resumePDF from '../assets/resume.pdf'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    // Reload the page
    window.location.href = '/'
    closeMenu()
  }

  const handleResumeClick = () => {
    // Open resume in new tab
    window.open(resumePDF, '_blank')
    closeMenu()
  }

  return (
    <nav className="navbar">
      <div className="name" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        Darshan Hotchandani
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navlinks ${isOpen ? 'active' : ''}`}>
        <li><a href="#" onClick={handleResumeClick}>Resume</a></li>
        <li><a href="#aboutme" onClick={closeMenu}>About Me</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#connectme" onClick={closeMenu}>Connect With Me</a></li>
      </ul>
    </nav>
  )
}
