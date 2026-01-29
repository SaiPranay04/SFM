# 🔐 Frontend Environment Variables Setup

## 📋 Quick Setup Instructions

### Step 1: Create `.env.local` file in frontend-sfm folder
Create a file named `.env.local` in the frontend-sfm directory.

### Step 2: Copy & Paste This Content

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# For production deployment, change to your deployed backend URL:
# NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

---

## 🚀 For Production Deployment

When deploying to Vercel, Netlify, or other platforms:

### Option 1: Keep Using Proxy (Current Setup)
The `next.config.js` already has a proxy configured. You don't need to change anything in your components!

### Option 2: Use Environment Variable in Components
If you want to use the env variable in your components, update API calls:

```javascript
// Instead of:
axios.get('http://localhost:5000/api/company')

// Use:
axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/company`)
```

But with the current proxy setup, you can keep using:
```javascript
axios.get('/api/company')  // Proxy handles it!
```

---

## 📍 Deployment Platform Setup

### Vercel:
1. Go to Project Settings
2. Environment Variables
3. Add: `NEXT_PUBLIC_API_URL` = `https://your-backend-url.com`

### Netlify:
1. Site settings → Build & deploy
2. Environment → Environment variables
3. Add: `NEXT_PUBLIC_API_URL` = `https://your-backend-url.com`

---

## ⚠️ Important Notes

- ✅ `.env.local` is in `.gitignore` - safe!
- ✅ `NEXT_PUBLIC_` prefix makes it available in browser
- ✅ Restart dev server after changing env files
- ✅ For production, set on hosting platform

---

## 📁 File Location

```
frontend-sfm/
├── .env.local    ← Create this file here
├── app/
├── src/
├── next.config.js
└── package.json
```
