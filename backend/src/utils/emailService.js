const nodemailer = require('nodemailer')
const config = require('../config/config')

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: false,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass
  }
})

// Verify transporter connection (optional)
transporter.verify((error) => {
  if (error) {
    console.warn('Email transporter warning:', error.message)
  } else {
    console.log('Email transporter is ready')
  }
})

module.exports = transporter
