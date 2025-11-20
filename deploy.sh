#!/bin/bash

# Vercel Deployment Script for Portfolio
# Run this script to deploy both frontend and backend to Vercel

set -e  # Exit on error

echo "🚀 Starting Vercel Deployment Process..."
echo "========================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed"
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI found"

# Deploy Backend
echo ""
echo "🔧 Deploying Backend..."
echo "------------------------"
cd backend

if [ ! -f vercel.json ]; then
    echo "⚠️  vercel.json not found in backend. Creating it..."
    cat > vercel.json << 'EOF'
{
  "version": 2,
  "builds": [
    {
      "src": "src/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/server.js"
    }
  ]
}
EOF
fi

echo "📝 Backend Environment Variables Needed:"
echo "  - NODE_ENV: production"
echo "  - FRONTEND_URL: (your frontend URL)"
echo "  - SMTP_HOST: (email host)"
echo "  - SMTP_PORT: (email port)"
echo "  - SMTP_USER: (email address)"
echo "  - SMTP_PASS: (email password)"
echo "  - ADMIN_EMAIL: (admin email)"
echo ""

read -p "⏸️  Set environment variables in Vercel dashboard, then press Enter to continue..."

echo "🚀 Deploying backend..."
vercel --prod

echo "✅ Backend deployed!"
BACKEND_URL=$(vercel ls --prod | grep "vercel.app" | head -1)
echo "📍 Backend URL: $BACKEND_URL"

# Deploy Frontend
echo ""
echo "🎨 Deploying Frontend..."
echo "------------------------"
cd ../frontend

echo "📝 Setting Frontend Environment Variables..."
echo "VITE_API_URL: $BACKEND_URL/api"

read -p "⏸️  Configure frontend env vars in Vercel dashboard, then press Enter..."

echo "🚀 Deploying frontend..."
vercel --prod

echo ""
echo "✅ Deployment Complete!"
echo "========================================"
echo "🎉 Your portfolio is now live on Vercel!"
echo ""
echo "📚 Next Steps:"
echo "  1. Test your website in browser"
echo "  2. Verify contact form is working"
echo "  3. Check API endpoints"
echo "  4. Set up custom domain (optional)"
echo "  5. Monitor analytics in Vercel Dashboard"
echo ""
echo "📖 Docs: https://vercel.com/docs"
echo "❓ Help: https://vercel.com/support"
