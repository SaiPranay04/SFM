# ⚡ Quick Reference Card

## 🚀 Essential Commands

### Start Development
```bash
cd frontend-sfm
npm install              # First time only
npm run dev             # Start Next.js dev server
```
**Frontend**: http://localhost:3000

### Start Backend (Separate Terminal)
```bash
cd APIDB
npm install              # First time only
npm start               # Start Express server
```
**Backend**: http://localhost:5000

---

## 📂 Key File Locations

| What | Where |
|------|-------|
| **Pages** | `app/*/page.jsx` |
| **Layouts** | `app/layout.jsx`, `app/dashboard/layout.jsx` |
| **Components** | `src/Components/` |
| **Styles** | `src/index.css` |
| **Navigation Helper** | `src/lib/navigation.jsx` |
| **Config** | `next.config.js` |

---

## 🔗 Route Mapping

| URL | File |
|-----|------|
| `/` | `app/page.jsx` |
| `/about` | `app/about/page.jsx` |
| `/dashboard` | `app/dashboard/page.jsx` |
| `/dashboard/companies` | `app/dashboard/companies/page.jsx` |
| `/dashboard/CompanyDetails/:id` | `app/dashboard/CompanyDetails/[companyID]/page.jsx` |

---

## 🎨 Adding New Pages

### Public Page
1. Create `app/my-page/page.jsx`
2. Export default component
3. Access at `/my-page`

```jsx
export default function MyPage() {
  return <div>My Page Content</div>;
}
```

### Dashboard Page
1. Create `app/dashboard/my-page/page.jsx`
2. Export default component
3. Sidebar auto-includes layout
4. Access at `/dashboard/my-page`

---

## 🔧 Common Tasks

### Add Component with State
```jsx
'use client';  // Required for hooks!

import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Navigate Programmatically
```jsx
'use client';

import { useNavigate } from '../../lib/navigation';

export default function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/dashboard/companies');
  };
  
  return <button onClick={handleClick}>Go to Companies</button>;
}
```

### Link to Another Page
```jsx
import { Link } from '../../lib/navigation';

<Link href="/about">About Us</Link>
```

### Fetch Data (Client-Side)
```jsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyComponent() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('/api/company').then(res => setData(res.data));
  }, []);
  
  return <div>{/* Render data */}</div>;
}
```

---

## 🐛 Quick Fixes

### Error: "Module not found"
```bash
npm install
```

### Error: Port in use
```bash
npx kill-port 3000
npm run dev
```

### Styles not updating
```bash
# Stop server (Ctrl+C), then:
npm run dev
```

### API calls failing
1. Check backend is running: `http://localhost:5000/api/company`
2. Check browser console for errors
3. Verify `next.config.js` proxy settings

---

## 📝 Cheat Sheet

### When to use `'use client'`
- ✅ Component uses `useState`, `useEffect`, or other React hooks
- ✅ Component has event handlers (`onClick`, `onChange`)
- ✅ Component uses browser APIs (`window`, `document`)
- ✅ Component uses context or providers
- ❌ Static content with no interactivity

### Import Paths
```jsx
// Navigation (works like React Router)
import { Link, useNavigate, useParams } from '../../lib/navigation';

// Components
import Navbar from '../../src/Components/Home/Navbar';

// Utils
import { toast } from '../../utils/toast';

// Axios
import axios from 'axios';
```

---

## 🎯 Testing Checklist

After changes, verify:
- [ ] Page loads without errors
- [ ] Navigation works
- [ ] API calls succeed
- [ ] Styles render correctly
- [ ] No console errors

---

## 📚 Learn More

- **Next.js Docs**: https://nextjs.org/docs
- **App Router**: https://nextjs.org/docs/app
- **React Docs**: https://react.dev

---

## 💡 Tips

1. **Always restart dev server** after config changes
2. **Use `'use client'`** for interactive components
3. **Keep API calls** in `useEffect` or event handlers
4. **Check browser console** for errors first
5. **Backend must run** for API calls to work

---

**Keep this handy while developing! 🚀**
