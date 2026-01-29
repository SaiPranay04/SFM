# 🔐 Environment Variables Setup

## 📋 Quick Setup Instructions

### Step 1: Install dotenv package
```bash
cd APIDB
npm install dotenv
```

### Step 2: Create `.env` file in APIDB folder
Create a file named `.env` (no extension, just `.env`) in the APIDB directory.

### Step 3: Copy & Paste This Content

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

## ⚠️ Important Notes

### For Production Deployment:
1. **Change JWT_SECRET** to a strong random string:
   ```bash
   # Generate a secure secret:
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

2. **Update MongoDB URI** to your MongoDB Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
   ```

3. **Keep EMAIL_PASSWORD secure** - Use Gmail App Password, not your regular password

---

## ✅ Verification

After creating the `.env` file:

1. Restart your backend server
2. Check console - no errors about missing env variables
3. Test signup - email should send
4. Test login - JWT should work

---

## 🔒 Security Reminders

- ✅ `.env` is already in `.gitignore` - it won't be committed
- ✅ Never share your `.env` file publicly
- ✅ Use different secrets for development and production
- ✅ For production, set environment variables in your hosting platform (Render, Heroku, etc.)

---

## 📁 File Location

```
APIDB/
├── .env          ← Create this file here
├── server.js
├── routes.js
├── models.js
└── package.json
```
