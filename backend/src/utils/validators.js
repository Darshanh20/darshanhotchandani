const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateContactForm = (data) => {
  const errors = {}

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required'
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email is required'
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

module.exports = {
  validateEmail,
  validateContactForm
}
