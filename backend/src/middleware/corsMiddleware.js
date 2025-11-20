const cors = require('cors')
const config = require('../config/config')

const corsOptions = {
  origin: config.frontendUrl,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

const corsMiddleware = cors(corsOptions)

module.exports = corsMiddleware
