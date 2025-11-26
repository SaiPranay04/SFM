# 🚀 Quick Setup Guide - Sustainable Footprint Management Platform

This guide will help you get the SFM platform up and running in just a few minutes!

## ✅ Prerequisites Checklist

Before starting, make sure you have:

- [ ] **Node.js** installed (v16 or higher) - [Download here](https://nodejs.org/)
- [ ] **MongoDB** installed and running - [Download here](https://www.mongodb.com/try/download/community)
- [ ] **Git** installed - [Download here](https://git-scm.com/)
- [ ] A code editor like **VS Code** - [Download here](https://code.visualstudio.com/)

## 🎯 Step-by-Step Setup

### Step 1: Check Prerequisites

Open a terminal and verify installations:

```bash
# Check Node.js version
node --version
# Should show v16.x.x or higher

# Check npm version
npm --version
# Should show 8.x.x or higher

# Check MongoDB installation
mongod --version
# Should show MongoDB version info
```

### Step 2: Start MongoDB

**Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**macOS:**
```bash
# Start MongoDB
brew services start mongodb-community
```

**Linux:**
```bash
# Start MongoDB
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod
```

Verify MongoDB is running:
```bash
# Connect to MongoDB shell
mongosh
# You should see a connection message
```

### Step 3: Setup Backend

Open a terminal in the project root directory:

```bash
# Navigate to backend directory
cd APIDB

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env
# Edit .env with your settings if needed

# Start the backend server
npm start
```

✅ You should see: `Server running on port 5000`

**Keep this terminal window open!**

### Step 4: Setup Frontend

Open a **NEW** terminal window (keep the backend running):

```bash
# Navigate to frontend directory
cd frontend-sfm

# Install dependencies
npm install

# Start the development server
npm start
```

✅ Your browser should automatically open to `http://localhost:3000`

If it doesn't, manually open your browser and go to `http://localhost:3000`

## 🎉 First Time Use

### Create Your First Account

1. Click **"Sign Up"** in the navigation bar
2. Fill in:
   - Username: `admin`
   - Email: `admin@sfm.com`
   - Password: `admin123` (or your choice)
   - Confirm Password: `admin123`
3. Click **"Sign Up"**
4. You should see a success message

### Log In

1. Click **"Login"**
2. Enter your credentials
3. Click **"Sign in"**
4. You'll be redirected to the Dashboard

### Add Your First Company

1. On the Dashboard, click **"Add New Company"**
2. Fill in the company details:
   - Name: `Green Tech Inc.`
   - Industry: `Technology`
   - Country: `United States`
   - Description: `A sustainable technology company`
3. Click **"Save Company"**
4. You should see a success notification

### Add ESG Metrics

1. Navigate to **"Metrics"** from the sidebar
2. Click **"Add New Metric"**
3. Fill in:
   - Metric Name: `Carbon Emissions`
   - Category: `Environmental`
   - Subcategory: `GHG Emissions`
   - Description: `Total carbon emissions in tonnes`
4. Click **"Save Metric"**

### Enter ESG Data

1. Go to **"ESG Data Entry"** from the sidebar
2. Select your company from the dropdown
3. Enter the year: `2024`
4. Fill in values for each metric
5. Click **"Save ESG Data"**

## 🔍 Troubleshooting

### Problem: MongoDB won't start

**Solution:**
```bash
# Check if MongoDB is already running
ps aux | grep mongod

# If it's running, you're good!
# If not, try starting it manually:
mongod --dbpath /path/to/your/data/directory
```

### Problem: Port 3000 or 5000 already in use

**Solution:**
```bash
# Find and kill the process using the port
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# On macOS/Linux:
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

### Problem: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Try installing again
npm install
```

### Problem: Backend can't connect to MongoDB

**Solution:**
Check `APIDB/server.js` and make sure the MongoDB connection string is correct:
```javascript
mongoose.connect('mongodb://localhost:27017/sustainabilityDB', {
  // options
});
```

### Problem: CORS errors in browser console

**Solution:**
Make sure the backend is running on port 5000 and the frontend is making requests to `http://localhost:5000/api`

## 📊 Default Features Available

After setup, you can:

✅ **User Management**
- Create and manage user accounts
- Assign roles and permissions

✅ **Company Management**
- Add, view, edit, and delete companies
- Track company details and profiles

✅ **ESG Metrics**
- Define custom sustainability metrics
- Categorize by Environmental, Social, Governance

✅ **Data Entry**
- Manual data entry for metrics
- Bulk upload via Excel templates

✅ **Analytics Dashboard**
- View company count
- Track metrics count
- Visualize ESG scores

✅ **Role-Based Access Control**
- Create custom roles
- Assign granular permissions

## 🔐 Security Notes

⚠️ **Important for Production:**

1. Change the JWT secret in `APIDB/routes.js`:
   ```javascript
   const secret = 'your_jwt_secret'; // Change this!
   ```

2. Update email credentials if using email features

3. Enable HTTPS for production deployments

4. Use environment variables for sensitive data

5. Set up proper MongoDB authentication

## 📚 Next Steps

Now that you're set up, explore:

1. **Dashboard** - View analytics and metrics
2. **Companies** - Manage your company database
3. **Metrics** - Define your ESG tracking parameters
4. **Users** - Add team members with different roles
5. **Roles & Permissions** - Customize access control
6. **Project Boundary** - Define carbon tracking boundaries

## 💡 Tips for Best Experience

- **Use Chrome or Firefox** for best compatibility
- **Keep MongoDB running** whenever using the app
- **Don't close backend terminal** while using the app
- **Create test data** to explore all features
- **Check console logs** if something doesn't work

## 🆘 Need Help?

If you're stuck:

1. Check the console logs (F12 in browser)
2. Check backend terminal for errors
3. Review the main README.md
4. Check MongoDB logs: `tail -f /var/log/mongodb/mongod.log`

## 🎯 Quick Command Reference

```bash
# Start MongoDB
sudo systemctl start mongod  # Linux
brew services start mongodb-community  # macOS
net start MongoDB  # Windows

# Start Backend (from APIDB directory)
npm start

# Start Frontend (from frontend-sfm directory)
npm start

# Check if ports are in use
lsof -ti:3000  # Frontend port
lsof -ti:5000  # Backend port

# Kill process on port
kill -9 $(lsof -ti:3000)
```

---

**Congratulations! 🎉 You're all set up and ready to start managing sustainability data!**

For detailed documentation, see the main [README.md](README.md) file.

