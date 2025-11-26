# 🚨 Quick Fix: MongoDB Connection Error

## Your Error

```
MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
```

**Meaning**: MongoDB is not running!

---

## ✅ Solution (Windows)

### **Option 1: Start as Windows Service (Recommended)**

1. **Open PowerShell as Administrator**
   - Press `Win + X`
   - Click **"Windows PowerShell (Admin)"** or **"Terminal (Admin)"**

2. **Run this command:**
   ```powershell
   net start MongoDB
   ```

3. **Expected output:**
   ```
   The MongoDB service is starting.
   The MongoDB service was started successfully.
   ```

### **Option 2: Start via MongoDB Compass**

1. **Open MongoDB Compass** (the GUI app)
2. Click the **"Connect"** button
3. It will auto-start the local MongoDB server
4. Wait for green "Connected" status

### **Option 3: Start Manually**

1. **Find MongoDB installation path:**
   - Usually: `C:\Program Files\MongoDB\Server\[version]\bin\`

2. **Open Command Prompt as Admin**

3. **Run:**
   ```cmd
   "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
   ```
   *(Adjust version number and path as needed)*

---

## ✅ Verify MongoDB is Running

### **Method 1: Check Service**
```powershell
Get-Service MongoDB
```

Should show **"Running"**

### **Method 2: Test Connection**
```powershell
mongosh
```

Should connect and show MongoDB prompt

### **Method 3: Check Port**
```powershell
netstat -an | findstr :27017
```

Should show `LISTENING` on port 27017

---

## 🚀 Complete Startup Sequence

Once MongoDB is running:

### **Terminal 1 - Backend**
```bash
cd APIDB
npm start
```
✅ Should show: `Server running on port 5000`

### **Terminal 2 - Frontend**
```bash
cd frontend-sfm
npm start
```
✅ Browser opens to `http://localhost:3000`

---

## 🎯 Test the New Calculator

1. **Open your browser**: `http://localhost:3000`

2. **Click "🌍 Calculate Your Footprint"**

3. **Fill in the 5-step form:**
   - Company info
   - Office data
   - Fleet info
   - Travel data
   - IT equipment

4. **View your results!**
   - Total CO₂ emissions
   - Grade (A+ to F)
   - Detailed breakdown
   - Recommendations

5. **Sign up to track progress**

---

## 🔧 If MongoDB Still Won't Start

### **Check if MongoDB is Installed**
```powershell
Get-Service MongoDB
```

If error says "service doesn't exist":

**Install MongoDB:**
1. Download from: https://www.mongodb.com/try/download/community
2. Run installer
3. Choose "Complete" installation
4. Select "Install MongoDB as a Service"
5. Restart computer

### **Check Data Directory**
MongoDB needs a data directory:

```powershell
# Create if missing
mkdir C:\data\db

# Give permissions
icacls C:\data\db /grant Everyone:F
```

### **Reinstall MongoDB Service**
```powershell
# Remove old service
sc delete MongoDB

# Install MongoDB from program directory
cd "C:\Program Files\MongoDB\Server\7.0\bin"
mongod.exe --config "C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg" --install

# Start service
net start MongoDB
```

---

## 📋 Common Issues & Solutions

### **Issue: "Access is denied"**
**Solution**: Run PowerShell as Administrator

### **Issue: "Service not found"**
**Solution**: MongoDB not installed or not installed as service

### **Issue: "Port 27017 already in use"**
**Solution**: MongoDB might already be running
```powershell
# Check what's using the port
netstat -ano | findstr :27017

# Kill the process (use PID from above)
taskkill /PID <PID> /F
```

### **Issue: "Data directory not found"**
**Solution**: Create the data directory
```powershell
mkdir C:\data\db
```

---

## 🌐 Alternative: Use MongoDB Atlas (Cloud)

If local MongoDB keeps failing, use cloud:

### **Quick Atlas Setup (5 minutes)**

1. **Sign up**: https://www.mongodb.com/cloud/atlas
2. **Create FREE cluster** (M0)
3. **Get connection string**
4. **Update `APIDB/server.js`:**

```javascript
mongoose.connect('mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/sustainabilityDB', {
  // options
});
```

5. **Whitelist IP**: 0.0.0.0/0 (allow all for testing)

---

## ✅ Success Checklist

- [ ] MongoDB service is running
- [ ] `mongosh` connects successfully
- [ ] Port 27017 is listening
- [ ] Backend starts without errors
- [ ] Frontend loads at localhost:3000
- [ ] Calculator page works
- [ ] No console errors

---

## 🆘 Still Having Issues?

1. **Restart Computer** - Often fixes Windows service issues
2. **Check Firewall** - Allow MongoDB through Windows Firewall
3. **Check Antivirus** - May block MongoDB
4. **Use MongoDB Compass** - Easiest way to start locally
5. **Try Atlas** - Cloud alternative (always works)

---

## 📞 Quick Commands Reference

```powershell
# Start MongoDB
net start MongoDB

# Stop MongoDB
net stop MongoDB

# Check status
Get-Service MongoDB

# Test connection
mongosh

# Check port
netstat -an | findstr :27017

# Start backend
cd APIDB && npm start

# Start frontend (new terminal)
cd frontend-sfm && npm start
```

---

**Remember**: MongoDB MUST be running before starting the backend server!

---

*Get MongoDB running, then enjoy your new Carbon Footprint Calculator!* 🌍✨

