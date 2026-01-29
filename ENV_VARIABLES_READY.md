# ✅ Environment Variables - All Set Up!

## 🎯 What I Did:

1. ✅ Updated `APIDB/server.js` to use environment variables
2. ✅ Updated `APIDB/routes.js` to use environment variables
3. ✅ Added `dotenv` to backend dependencies
4. ✅ Created setup instructions

---

# 📋 **COPY & PASTE THESE FILES**

## 🔴 **BACKEND - Create `APIDB/.env`**

### Location: `APIDB/.env`

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/yourDatabaseName

# JWT Secret (change this to a strong random string for production!)
JWT_SECRET=your_jwt_secret_change_this_in_production_123456789

# Email Configuration (Gmail)
EMAIL_USER=sfmpyt04@gmail.com
EMAIL_PASSWORD=faix dltd qecg sjyu

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

---

## 🔵 **FRONTEND - Create `frontend-sfm/.env.local`**

### Location: `frontend-sfm/.env.local`

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# For production deployment, change to your deployed backend URL:
# NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

---

# 🚀 **Quick Setup (3 Steps)**

### **Step 1: Install dotenv**
```bash
cd APIDB
npm install dotenv
```

### **Step 2: Create Backend .env file**
```bash
# In APIDB folder, create a file named .env
# Copy the BACKEND content above into it
```

### **Step 3: Create Frontend .env.local file**
```bash
# In frontend-sfm folder, create a file named .env.local
# Copy the FRONTEND content above into it
```

---

# ✅ **Verification**

After creating both files:

```bash
# Terminal 1 - Backend
cd APIDB
npm install  # Install dotenv
npm start    # Should start without errors

# Terminal 2 - Frontend
cd frontend-sfm
npm run dev  # Should start without errors
```

---

# 🔒 **What's Now Secure**

### ✅ **Before (Hardcoded):**
```javascript
// ❌ Exposed in code
const secret = 'your_jwt_secret';
user: 'sfmpyt04@gmail.com',
pass: 'faix dltd qecg sjyu',
```

### ✅ **After (Environment Variables):**
```javascript
// ✅ Secure
const secret = process.env.JWT_SECRET;
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASSWORD,
```

---

# 📝 **What Changed in Code**

## Backend Files Updated:

### 1. `APIDB/server.js`
- Added: `require('dotenv').config();`
- Changed: MongoDB URI to use `process.env.MONGODB_URI`

### 2. `APIDB/routes.js`
- Changed: JWT secret to use `process.env.JWT_SECRET`
- Changed: Email user to use `process.env.EMAIL_USER`
- Changed: Email password to use `process.env.EMAIL_PASSWORD`

### 3. `APIDB/package.json`
- Added: `"dotenv": "^16.3.1"` to dependencies

---

# 🎯 **For Production Deployment**

When deploying, set these environment variables on your hosting platform:

### **Render.com / Railway.app / Heroku:**
```
MONGODB_URI = mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET = generate_strong_random_secret_here
EMAIL_USER = your_email@gmail.com
EMAIL_PASSWORD = your_app_password
PORT = 5000
NODE_ENV = production
FRONTEND_URL = https://your-frontend.vercel.app
```

### **Vercel (Frontend):**
```
NEXT_PUBLIC_API_URL = https://your-backend.onrender.com
```

---

# ⚠️ **Important Security Notes**

### For Gmail App Password:
1. Go to Google Account Settings
2. Security → 2-Step Verification
3. App passwords → Generate new
4. Use that 16-character password (not your regular Gmail password)

### For JWT Secret (Production):
Generate a strong secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### For MongoDB:
- Local: `mongodb://localhost:27017/yourDatabaseName`
- Atlas: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

---

# 📂 **File Structure**

```
Your Project/
├── APIDB/
│   ├── .env                    ← CREATE THIS (copy backend content)
│   ├── .env.example           ← Optional (for git)
│   ├── ENV_SETUP_INSTRUCTIONS.md
│   ├── server.js              ← UPDATED ✅
│   ├── routes.js              ← UPDATED ✅
│   ├── package.json           ← UPDATED ✅
│   └── ...
│
└── frontend-sfm/
    ├── .env.local             ← CREATE THIS (copy frontend content)
    ├── .env.example           ← Optional (for git)
    ├── ENV_SETUP_INSTRUCTIONS.md
    ├── next.config.js
    └── ...
```

---

# ✅ **You're All Set!**

## What's Protected Now:
- ✅ MongoDB connection string
- ✅ JWT secret key
- ✅ Email credentials
- ✅ API URLs

## What to Do Next:
1. Create the two `.env` files
2. Copy & paste the content above
3. Run `npm install` in APIDB
4. Start both servers
5. Test everything works!

---

**Your secrets are now secure! 🔐**
