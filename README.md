# Darshan Hotchandani - Full Stack Portfolio Website

A modern, full-stack portfolio website built with **React (Vite)** frontend and **Node.js/Express** backend.

## 📁 Project Structure

```
portfolio-website/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML entry point
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Frontend dependencies
│
├── backend/               # Express.js server
│   ├── src/
│   │   ├── config/        # Configuration
│   │   ├── controllers/   # Route handlers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Utility functions
│   │   └── server.js      # Main server file
│   ├── .env.example       # Example environment variables
│   └── package.json       # Backend dependencies
│
├── Assets/                # Shared assets (images, files)
├── style.css              # Old portfolio CSS (reference)
├── index.html             # Old portfolio HTML (reference)
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ and npm
- Git

### Installation

1. **Clone and install frontend:**
```bash
cd frontend
npm install
```

2. **Clone and install backend:**
```bash
cd backend
npm install
```

## 🎨 Frontend Setup

### Running the Frontend

**Development Mode:**
```bash
cd frontend
npm run dev
```
Opens at `http://localhost:3000`

**Build for Production:**
```bash
cd frontend
npm run build
```

### Project Components

#### Pages
- **Home** (`src/pages/Home.jsx`) - Hero section, skills, and journey
- **About** (`src/pages/About.jsx`) - About Me section
- **Projects** (`src/pages/Projects.jsx`) - Portfolio projects showcase
- **Contact** (`src/pages/Contact.jsx`) - Contact form and social links

#### Components
- **Navbar** - Navigation with mobile hamburger menu
- **Footer** - Footer with copyright
- **HeroSection** - Developer and Designer intro
- **SkillsSection** - Technology skills with levels
- **JourneySection** - Education and experience timeline
- **ProjectsSection** - Project showcase with images
- **AboutSection** - About me text
- **ContactSection** - Contact form with backend integration

### CSS Organization

Each component has its own CSS file (`ComponentName.css`) for modular styling. Global styles are in `src/index.css`.

### Using Your Assets

Copy your images from the `Assets/` folder to `frontend/src/assets/`:
```bash
# Copy all asset files
cp -r ../Assets/* ./src/assets/
```

## 🔧 Backend Setup

### Running the Backend

**Development Mode (with auto-reload):**
```bash
cd backend
npm run dev
```

**Production Mode:**
```bash
cd backend
npm start
```
Server runs on `http://localhost:5000`

### Environment Variables

Create a `.env` file in the backend folder (copy from `.env.example`):

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Gmail SMTP Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=your_email@gmail.com

# Database (Future use)
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=portfolio
```

### Setting Up Gmail for Emails

1. Enable 2-Step Verification on [Google Account](https://myaccount.google.com/)
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `.env`

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/contact` | Submit contact form |

**Contact Form Request:**
```json
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "message": "Your message here"
}
```

## 🔗 Frontend-Backend Connection

### Proxy Configuration (Development)

The frontend is configured to proxy API requests to the backend in `vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
}
```

This means you can call `/api/contact` from the frontend, and it will forward to `http://localhost:5000/contact`.

### Direct API Calls (Production)

In production, update the API URL in your `.env`:
```env
VITE_API_URL=https://your-backend-domain.com
```

Access it in your components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const response = await fetch(`${apiUrl}/api/contact`, { ... })
```

## 🌐 Running Both Frontend and Backend

### Option 1: Two Terminal Windows

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

### Option 2: Concurrently (Recommended)

Install `concurrently`:
```bash
npm install -g concurrently
```

Create a script at the root:
```bash
concurrently "cd frontend && npm run dev" "cd backend && npm run dev"
```

## 📤 Deployment

### Frontend Deployment (Vercel)

1. **Create Vercel Account** - [vercel.com](https://vercel.com)
2. **Connect GitHub Repository**
3. **Configure Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Add Environment Variables:**
   ```
   VITE_API_URL=https://your-backend-domain.com
   ```
5. **Deploy** - Automatic on push to main branch

### Backend Deployment (Render)

1. **Create Render Account** - [render.com](https://render.com)
2. **New Web Service**
3. **Connect GitHub Repository**
4. **Configure:**
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Add Environment Variables** from `.env`
6. **Deploy**

### Backend Deployment (Railway)

1. **Go to [railway.app](https://railway.app)**
2. **New Project > GitHub Repo**
3. **Add Variables** from `.env`
4. **Deploy Automatically**

### Connect Frontend to Deployed Backend

After deploying backend, update frontend `.env`:
```env
VITE_API_URL=https://your-backend-service.onrender.com
```

Redeploy frontend with new API URL.

## 🛠️ Customization Guide

### Adding Your Content

#### Update Profile Information
- Edit `src/components/Navbar.jsx` - Change name and links
- Edit `src/components/AboutSection.jsx` - Update about text
- Edit `src/components/ContactSection.jsx` - Update contact info

#### Update Projects
- Edit `src/components/ProjectsSection.jsx` - Modify PROJECTS array

#### Update Skills
- Edit `src/components/SkillsSection.jsx` - Modify SKILLS object

#### Update Journey
- Edit `src/components/JourneySection.jsx` - Modify JOURNEY_ITEMS array

#### Update Resume Link
1. Place your resume PDF in `public/resume.pdf`
2. Update link in `src/components/Navbar.jsx`

### Styling Changes

- **Global Colors:** Edit `src/index.css`
- **Component Colors:** Edit respective `.css` files
- **Theme:** Search for cyan (`#0ff`) and orange (`#FFA500`) hex codes

### Adding New Components

1. Create `src/components/NewComponent.jsx`
2. Create `src/components/NewComponent.css`
3. Import and use in pages

## 🔐 Security Notes

- Never commit `.env` files (use `.env.example`)
- Validate all user inputs on backend
- Use HTTPS in production
- Implement rate limiting for API endpoints (future enhancement)

## 📋 Checklist Before Going Live

- [ ] Update portfolio content and images
- [ ] Set up email (SMTP credentials)
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Render/Railway
- [ ] Update `VITE_API_URL` in frontend `.env`
- [ ] Test contact form
- [ ] Test mobile responsiveness
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Remove old HTML/CSS files from root

## 🐛 Troubleshooting

### Frontend won't connect to backend
- Check CORS configuration in `backend/src/middleware/corsMiddleware.js`
- Verify `FRONTEND_URL` in backend `.env`
- Check that backend is running on port 5000

### Contact form not sending emails
- Verify SMTP credentials in `.env`
- Check Gmail app password setup
- Verify `ADMIN_EMAIL` is set correctly

### Assets not loading
- Copy images from `Assets/` to `frontend/src/assets/`
- Update image paths in components if needed

### Port conflicts
```bash
# Find and kill process on port 3000 or 5000
lsof -i :3000
kill -9 <PID>
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Express.js Guide](https://expressjs.com)
- [React Router](https://reactrouter.com)
- [Nodemailer](https://nodemailer.com)

## 📝 License

MIT License

## 👤 Author

Darshan Hotchandani

- GitHub: [@Darshanh20](https://github.com/Darshanh20)
- LinkedIn: [Darshan Hotchandani](https://www.linkedin.com/in/darshan-hotchandani-497b7b31a/)

---

**Happy coding! 🚀**
