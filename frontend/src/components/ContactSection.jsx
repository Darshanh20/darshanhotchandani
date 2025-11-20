import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import './ContactSection.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Try to send to backend first
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await axios.post(`${apiUrl}/api/contact`, formData, {
        timeout: 5000
      })
      
      setMessage('Message sent successfully! ✅')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setMessage(''), 4000)
    } catch (error) {
      console.log('Backend error, trying Formspree...')
      // Fallback to Formspree if backend is unavailable
      try {
        const formElement = document.querySelector('form')
        const formDataObj = new FormData(formElement)
        const response = await fetch('https://formspree.io/f/mgvklgag', {
          method: 'POST',
          body: formDataObj,
          headers: {
            'Accept': 'application/json'
          }
        })
        
        if (response.ok) {
          setMessage('Message sent successfully! ✅')
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setMessage(''), 4000)
        } else {
          throw new Error('Formspree error')
        }
      } catch (fallbackError) {
        console.error('Both methods failed:', fallbackError)
        setMessage('Error sending message. Please try again or contact directly.')
        setTimeout(() => setMessage(''), 4000)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="contact-section">
      <h2 className="section-title">Connect With Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      {message && <div className="form-message">{message}</div>}

      <div className="socials">
        <div className="socials-row">
          <a href="https://github.com/Darshanh20" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/github.jpg" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/darshan-hotchandani-497b7b31a/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/Linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
