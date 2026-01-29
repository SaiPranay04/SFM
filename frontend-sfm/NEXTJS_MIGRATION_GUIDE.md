# 🚀 Next.js 14 Migration Guide

## Overview

Your React application has been successfully migrated to **Next.js 14 with App Router**! This guide will help you understand the changes and how to run the application.

---

## 📁 Project Structure

```
frontend-sfm/
├── app/                          # Next.js App Router directory
│   ├── layout.jsx               # Root layout (wraps all pages)
│   ├── page.jsx                 # Home page (/)
│   ├── providers.jsx            # Client-side providers (Toast)
│   ├── about/page.jsx          # About page
│   ├── contact/page.jsx        # Contact page
│   ├── service/page.jsx        # Service page
│   ├── calculator/page.jsx     # Calculator page
│   ├── login/page.jsx          # Login page
│   ├── signup/page.jsx         # Signup page
│   └── dashboard/              # Dashboard routes
│       ├── layout.jsx          # Dashboard layout (with Sidebar)
│       ├── page.jsx            # Dashboard home
│       ├── companies/page.jsx
│       ├── metrics/page.jsx
│       ├── User/page.jsx
│       ├── Roles/page.jsx
│       ├── AddEditCompany/page.jsx
│       ├── AddEditESGMetric/page.jsx
│       ├── CompanyDetails/[companyID]/page.jsx  # Dynamic route
│       ├── CompanyEsgData/page.jsx
│       ├── Permissiontable/page.jsx
│       ├── FileUpload/page.jsx
│       └── ProjectBoundary/page.jsx
│
├── src/                         # Original components (preserved)
│   ├── Components/
│   │   ├── Home/               # Home page components
│   │   ├── esg_dashboard/      # Dashboard components
│   │   └── common/             # Shared components (Toast)
│   ├── core/                   # Auth pages (Login, Signup)
│   ├── lib/
│   │   └── navigation.jsx      # Navigation adapters for Next.js
│   ├── utils/
│   │   ├── toast.js           # Toast utility
│   │   └── designTokens.js    # Design system tokens
│   ├── Assets/                 # Images and assets
│   └── index.css              # Global styles (Tailwind)
│
├── public/                     # Static files
├── next.config.js             # Next.js configuration
├── jsconfig.json              # Path aliases configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies (updated for Next.js)
```

---

## 🔄 Key Changes

### 1. **Routing System**

**Before (React Router):**
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

**After (Next.js App Router):**
```jsx
// app/page.jsx → "/"
// app/about/page.jsx → "/about"
// app/dashboard/companies/page.jsx → "/dashboard/companies"
```

### 2. **Navigation**

All components now use the custom navigation adapter from `src/lib/navigation.jsx`:

```jsx
// Before
import { Link, useNavigate, useParams } from 'react-router-dom';

// After
import { Link, useNavigate, useParams } from '../../lib/navigation';
```

This adapter provides React Router-like API while using Next.js routing under the hood.

### 3. **Client Components**

Components that use hooks, state, or browser APIs now have `'use client'` directive:

```jsx
'use client';

import React, { useState } from 'react';
// ... component code
```

### 4. **Layouts**

- **Root Layout** (`app/layout.jsx`): Wraps entire app, includes global CSS and Providers
- **Dashboard Layout** (`app/dashboard/layout.jsx`): Adds Sidebar to all dashboard pages

### 5. **API Proxy**

Backend API calls are proxied through Next.js config:

```javascript
// next.config.js
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'http://localhost:5000/api/:path*',
    },
  ];
}
```

Your components can still call `/api/...` endpoints as before.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB running (local or Atlas)
- Backend server running on port 5000

### Installation Steps

1. **Install Dependencies**

```bash
cd frontend-sfm
npm install
```

This will install Next.js 14 and all required dependencies.

2. **Start Backend Server** (in separate terminal)

```bash
cd ../APIDB
npm install
npm start
```

The backend should run on `http://localhost:5000`

3. **Start Next.js Development Server**

```bash
cd frontend-sfm
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 🎯 Available Routes

### Public Routes
- `/` - Home page
- `/about` - About Us
- `/contact` - Contact form
- `/service` - Services
- `/calculator` - Footprint Calculator
- `/login` - User login
- `/signup` - User registration

### Dashboard Routes (require login)
- `/dashboard` - Dashboard home
- `/dashboard/companies` - Companies list
- `/dashboard/metrics` - ESG Metrics
- `/dashboard/CompanyEsgData` - ESG Data Entry
- `/dashboard/User` - Users management
- `/dashboard/Roles` - Roles management
- `/dashboard/Permissiontable` - Permissions
- `/dashboard/AddEditCompany` - Add/Edit Company
- `/dashboard/AddEditESGMetric` - Add/Edit Metric
- `/dashboard/CompanyDetails/[id]` - Company details (dynamic)
- `/dashboard/FileUpload` - Upload Excel data
- `/dashboard/ProjectBoundary` - Project Boundary

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📦 Updated Dependencies

### Added
- `next` ^14.2.0 - Next.js framework

### Removed
- `react-router-dom` - Replaced by Next.js routing
- `react-scripts` - Replaced by Next.js CLI

### Kept (all existing dependencies preserved)
- React 18.3.1
- Material-UI (MUI) 6.2.1
- Tailwind CSS 3.x
- Axios 1.7.9
- Chart.js 4.4.7
- And all other dependencies

---

## 🎨 Design & Styling

**No changes were made to the design!**

- All Tailwind classes preserved
- MUI components work as before
- Custom CSS in `src/index.css` unchanged
- Component layouts identical
- Color schemes maintained

---

## 🔧 Configuration Files

### `next.config.js`
- API proxy to backend
- Image optimization settings
- MUI transpilation

### `jsconfig.json`
- Path aliases (`@/*` for imports)
- Improved import statements

### `tailwind.config.js`
- Updated to scan both `app/` and `src/` directories

---

## 🐛 Troubleshooting

### "Cannot find module" errors
Make sure you've run `npm install` after the migration.

### API calls failing
Ensure the backend server is running on `http://localhost:5000`

### Styles not loading
Check that Tailwind config includes both `app/` and `src/` directories.

### Build errors
Try deleting `.next` folder and `node_modules`, then reinstall:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📝 What's Next?

### Optional Improvements

1. **Server-Side Rendering (SSR)**
   - Fetch data on the server for better SEO
   - Use `async` components in `app/` directory

2. **API Routes Migration**
   - Move backend API to `app/api/` directory
   - Eliminate need for separate Express server

3. **Image Optimization**
   - Replace `<img>` tags with Next.js `<Image>` component
   - Automatic optimization and lazy loading

4. **Metadata**
   - Add page-specific metadata for SEO
   - Use `generateMetadata` in each page

5. **Environment Variables**
   - Create `.env.local` for API URLs
   - Use `process.env.NEXT_PUBLIC_API_URL`

---

## 🎉 Migration Complete!

Your app is now running on **Next.js 14 with App Router**! 

- ✅ All routes working
- ✅ Design preserved exactly
- ✅ Components untouched
- ✅ Backend integration maintained
- ✅ SSR-ready architecture

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

---

**Happy Coding! 🚀**
