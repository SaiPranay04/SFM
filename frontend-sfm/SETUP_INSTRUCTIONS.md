# ⚡ Quick Setup Instructions - Next.js Migration

## 🎯 Step-by-Step Setup

### Step 1: Clean Up Old Dependencies

```bash
cd frontend-sfm
rm -rf node_modules package-lock.json
```

### Step 2: Install Next.js Dependencies

```bash
npm install
```

This will install:
- next@^14.2.0
- All existing dependencies (React, MUI, Tailwind, etc.)

### Step 3: Start the Backend Server

In a **separate terminal**:

```bash
cd ../APIDB
npm install
npm start
```

✅ Backend should be running on `http://localhost:5000`

### Step 4: Start Next.js Dev Server

Back in the frontend terminal:

```bash
cd frontend-sfm
npm run dev
```

✅ Frontend will start on `http://localhost:3000`

---

## 🌐 Open in Browser

Navigate to: **http://localhost:3000**

---

## ✅ Verification Checklist

- [ ] No console errors on page load
- [ ] Navbar displays correctly
- [ ] Homepage loads with all sections
- [ ] Can navigate to `/about`, `/service`, `/contact`
- [ ] Can access `/login` and `/signup`
- [ ] Dashboard at `/dashboard` loads with sidebar
- [ ] Can navigate between dashboard pages
- [ ] API calls work (test by visiting `/dashboard/companies`)

---

## 🔧 If Something Goes Wrong

### Issue: Module not found errors

**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or run on different port
PORT=3001 npm run dev
```

### Issue: API calls fail (404 or CORS)

**Solution:**
1. Ensure backend is running on port 5000
2. Check `next.config.js` has correct API proxy
3. Restart Next.js dev server

### Issue: Styles not loading

**Solution:**
```bash
# Rebuild Tailwind
npm run dev
```

---

## 📝 Key Changes Summary

| Aspect | Before (React) | After (Next.js) |
|--------|---------------|-----------------|
| **Start Command** | `npm start` | `npm run dev` |
| **Port** | 3000 | 3000 |
| **Routing** | React Router | Next.js App Router |
| **File Structure** | `src/` only | `app/` + `src/` |
| **Navigation** | `react-router-dom` | Custom adapter in `src/lib/navigation.jsx` |
| **Build Output** | `build/` | `.next/` |

---

## 🚀 Production Build

When ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

---

## 🎨 Design Preserved

✅ All visual styles remain **exactly the same**:
- Same colors, fonts, spacing
- Same Tailwind classes
- Same MUI components
- Same layouts and animations

The migration only changed the **routing system**, not the design!

---

## 📚 Need Help?

- Check `NEXTJS_MIGRATION_GUIDE.md` for detailed documentation
- Review Next.js docs: https://nextjs.org/docs
- Check console for specific error messages

---

**You're all set! 🎉**
