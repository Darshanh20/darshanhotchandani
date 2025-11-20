# Backend Directory Structure

## Overview
This is the Express.js backend server for the Darshan Hotchandani portfolio website.

## Folder Structure
```
backend/
├── src/
│   ├── config/
│   │   └── config.js           # Configuration management
│   ├── controllers/
│   │   └── contactController.js # Business logic for routes
│   ├── middleware/
│   │   ├── corsMiddleware.js   # CORS configuration
│   │   └── errorHandler.js     # Global error handling
│   ├── routes/
│   │   └── index.js            # API routes
│   ├── utils/
│   │   ├── emailService.js     # Email sending utility
│   │   └── validators.js       # Input validation utilities
│   └── server.js               # Main server file
├── .env.example                # Example environment variables
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the backend directory using `.env.example` as a template:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- `PORT`: Server port (default: 5000)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: Email configuration
- `ADMIN_EMAIL`: Email to receive contact form submissions
- `FRONTEND_URL`: Your frontend URL for CORS

### 3. Run the Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status.

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "Your Name",
  "email": "your.email@example.com",
  "message": "Your message here"
}
```
Sends an email notification. Requires SMTP configuration.

## Environment Variables

### Required (for email functionality)
- `SMTP_HOST`: SMTP server hostname
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username/email
- `SMTP_PASS`: SMTP password or app password
- `ADMIN_EMAIL`: Email to receive contact submissions

### Optional
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment type (development/production)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:3000)
- `DB_*`: Database configuration (for future use)

## Email Configuration (Gmail Example)

1. Go to [Google Account](https://myaccount.google.com/)
2. Enable 2-Step Verification
3. Create an [App Password](https://myaccount.google.com/apppasswords)
4. Use the app password in your `.env` file

## Middleware

### CORS
Handles cross-origin requests from the frontend.

### Body Parser
Parses JSON and URL-encoded request bodies.

### Error Handler
Catches and formats all errors globally.

## Controllers

### contactController
- `sendContactEmail`: Handles contact form submissions, validates input, and sends emails.

## Utilities

### emailService
Configures and exports the Nodemailer transporter for sending emails.

### validators
Validation functions for form inputs.

## Error Handling

All errors are caught by the global error handler middleware and returned in a consistent JSON format:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (only in development)"
}
```

## CORS Configuration

By default, the backend accepts requests from `http://localhost:3000` (the frontend).
Modify `FRONTEND_URL` in `.env` to change the allowed origin.

## Database Integration (Future)

The backend is structured to support database integration. Configure database credentials in `.env`:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=portfolio
```

## Deployment

### Render (Recommended for Backend)
1. Push your code to GitHub
2. Go to [Render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Set Build Command: `npm install`
6. Set Start Command: `npm start`
7. Add environment variables from `.env`

### Railway
1. Sign up at [Railway.app](https://railway.app)
2. Connect GitHub repository
3. Add environment variables
4. Deploy automatically

## Troubleshooting

**Port already in use:**
```bash
# Change PORT in .env or kill the process
lsof -i :5000
kill -9 <PID>
```

**Email not sending:**
- Check SMTP credentials
- Enable "Less secure app access" (for Gmail)
- Check firewall/antivirus settings

**CORS errors:**
- Verify `FRONTEND_URL` matches your frontend address
- Check browser console for exact error

## License
MIT
