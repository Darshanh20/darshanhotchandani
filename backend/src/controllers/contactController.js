const transporter = require('../utils/emailService')
const config = require('../config/config')

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, message) are required'
      })
    }

    // Send email to admin
    await transporter.sendMail({
      from: config.smtp.user,
      to: config.admin.email,
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    // Send confirmation to user
    await transporter.sendMail({
      from: config.smtp.user,
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you soon.</p>
        <p>Best regards,<br>Darshan Hotchandani</p>
      `
    })

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    })
  } catch (error) {
    console.error('Contact email error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    })
  }
}

module.exports = {
  sendContactEmail
}
