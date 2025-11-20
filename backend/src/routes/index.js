const express = require('express')
const { sendContactEmail } = require('../controllers/contactController')

const router = express.Router()

// POST /contact - Handle contact form submission
router.post('/contact', sendContactEmail)

// GET /health - Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

module.exports = router
