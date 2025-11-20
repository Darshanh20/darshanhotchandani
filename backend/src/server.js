const express = require('express')
const bodyParser = require('body-parser')
const corsMiddleware = require('./middleware/corsMiddleware')
const errorHandler = require('./middleware/errorHandler')
const routes = require('./routes/index')
const config = require('./config/config')

const app = express()

// Middleware
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(corsMiddleware)

// Routes
app.use('/api', routes)

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Darshan Portfolio Backend API',
    version: '1.0.0',
    environment: config.nodeEnv,
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact'
    }
  })
})

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path
  })
})

// Error handler
app.use(errorHandler)

// For Vercel deployment
if (require.main === module) {
  const PORT = config.port
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(`Environment: ${config.nodeEnv}`)
    console.log(`Frontend URL: ${config.frontendUrl}`)
  })
}

module.exports = app
