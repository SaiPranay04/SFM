# 📐 Project Structure Visualization

## 🏗️ Complete Directory Tree

```
frontend-sfm/
│
├── 📂 app/                          # Next.js App Router (NEW)
│   ├── 📄 layout.jsx               # Root layout wrapper
│   ├── 📄 page.jsx                 # Homepage (/)
│   ├── 📄 providers.jsx            # Client-side providers
│   │
│   ├── 📂 about/
│   │   └── 📄 page.jsx             # About Us (/about)
│   │
│   ├── 📂 contact/
│   │   └── 📄 page.jsx             # Contact Form (/contact)
│   │
│   ├── 📂 service/
│   │   └── 📄 page.jsx             # Services (/service)
│   │
│   ├── 📂 calculator/
│   │   └── 📄 page.jsx             # Carbon Calculator (/calculator)
│   │
│   ├── 📂 login/
│   │   └── 📄 page.jsx             # User Login (/login)
│   │
│   ├── 📂 signup/
│   │   └── 📄 page.jsx             # User Registration (/signup)
│   │
│   └── 📂 dashboard/               # Dashboard Section
│       ├── 📄 layout.jsx           # Dashboard layout (with Sidebar)
│       ├── 📄 page.jsx             # Dashboard Home (/dashboard)
│       │
│       ├── 📂 companies/
│       │   └── 📄 page.jsx         # Companies List
│       │
│       ├── 📂 metrics/
│       │   └── 📄 page.jsx         # ESG Metrics
│       │
│       ├── 📂 User/
│       │   └── 📄 page.jsx         # User Management
│       │
│       ├── 📂 Roles/
│       │   └── 📄 page.jsx         # Role Management
│       │
│       ├── 📂 Permissiontable/
│       │   └── 📄 page.jsx         # Permissions
│       │
│       ├── 📂 AddEditCompany/
│       │   └── 📄 page.jsx         # Add/Edit Company
│       │
│       ├── 📂 AddEditESGMetric/
│       │   └── 📄 page.jsx         # Add/Edit Metric
│       │
│       ├── 📂 CompanyDetails/
│       │   └── 📂 [companyID]/     # Dynamic Route
│       │       └── 📄 page.jsx     # Company Details
│       │
│       ├── 📂 CompanyEsgData/
│       │   └── 📄 page.jsx         # ESG Data Entry
│       │
│       ├── 📂 FileUpload/
│       │   └── 📄 page.jsx         # Upload Excel
│       │
│       └── 📂 ProjectBoundary/
│           └── 📄 page.jsx         # Project Boundary
│
├── 📂 src/                          # Components & Utilities
│   │
│   ├── 📂 Components/
│   │   │
│   │   ├── 📂 Home/                # Public Page Components
│   │   │   ├── 📄 Navbar.jsx      # Navigation bar
│   │   │   ├── 📄 Home.jsx        # Home page content
│   │   │   ├── 📄 About.jsx       # About page content
│   │   │   ├── 📄 Service.jsx     # Service page content
│   │   │   ├── 📄 Contact.jsx     # Contact form
│   │   │   └── 📄 FootprintCalculator.jsx
│   │   │
│   │   ├── 📂 esg_dashboard/      # Dashboard Components
│   │   │   ├── 📄 Sidebar.jsx     # Dashboard sidebar
│   │   │   ├── 📄 Dashboard.jsx   # Dashboard content
│   │   │   ├── 📄 Card.jsx        # Dashboard card
│   │   │   ├── 📄 ESGChart.jsx    # Chart component
│   │   │   ├── 📄 Companies.jsx   # Companies list
│   │   │   ├── 📄 CompanyDetails.jsx
│   │   │   ├── 📄 AddEditCompany.jsx
│   │   │   ├── 📄 Metrics.jsx     # Metrics management
│   │   │   ├── 📄 AddEditESGMetric.jsx
│   │   │   ├── 📄 CompanyEsgData.jsx
│   │   │   ├── 📄 User.jsx        # User management
│   │   │   ├── 📄 Roles.jsx       # Role management
│   │   │   ├── 📄 PermissionTable.jsx
│   │   │   ├── 📄 FileUpload.jsx  # File upload
│   │   │   └── 📄 ProjectBoundary.jsx
│   │   │
│   │   └── 📂 common/              # Shared Components
│   │       └── 📄 Toast.jsx        # Toast notifications
│   │
│   ├── 📂 core/                    # Auth Components
│   │   ├── 📄 LoginPage.jsx       # Login page
│   │   └── 📄 SignUpPage.jsx      # Signup page
│   │
│   ├── 📂 lib/                     # Utility Libraries
│   │   └── 📄 navigation.jsx      # Navigation adapter (NEW)
│   │
│   ├── 📂 utils/                   # Helper Functions
│   │   ├── 📄 toast.js            # Toast utility
│   │   └── 📄 designTokens.js     # Design tokens
│   │
│   ├── 📂 Assets/                  # Images & Media
│   │   └── 📄 wallpaper.jpg       # Background image
│   │
│   └── 📄 index.css                # Global Styles
│
├── 📂 public/                       # Static Files
│   ├── 📄 favicon.ico              # Favicon
│   ├── 📄 manifest.json            # Web manifest
│   └── 📄 robots.txt               # SEO robots
│
├── 📄 next.config.js               # Next.js Config (NEW)
├── 📄 jsconfig.json                # Path Aliases (NEW)
├── 📄 postcss.config.js            # PostCSS Config (NEW)
├── 📄 tailwind.config.js           # Tailwind Config (UPDATED)
├── 📄 .eslintrc.json               # ESLint Config (NEW)
├── 📄 .gitignore                   # Git Ignore (UPDATED)
├── 📄 package.json                 # Dependencies (UPDATED)
│
└── 📚 Documentation/
    ├── 📄 README.md                # Main README
    ├── 📄 SETUP_INSTRUCTIONS.md    # Quick setup
    ├── 📄 NEXTJS_MIGRATION_GUIDE.md # Detailed guide
    ├── 📄 MIGRATION_COMPLETE.md    # Migration summary
    ├── 📄 QUICK_REFERENCE.md       # Quick commands
    └── 📄 PROJECT_STRUCTURE.md     # This file
```

---

## 🎯 Route Mapping

### File-Based Routing

Next.js automatically creates routes based on file structure:

| File Path | URL | Description |
|-----------|-----|-------------|
| `app/page.jsx` | `/` | Homepage |
| `app/about/page.jsx` | `/about` | About page |
| `app/contact/page.jsx` | `/contact` | Contact page |
| `app/service/page.jsx` | `/service` | Services page |
| `app/calculator/page.jsx` | `/calculator` | Calculator |
| `app/login/page.jsx` | `/login` | Login |
| `app/signup/page.jsx` | `/signup` | Signup |
| `app/dashboard/page.jsx` | `/dashboard` | Dashboard home |
| `app/dashboard/companies/page.jsx` | `/dashboard/companies` | Companies list |
| `app/dashboard/metrics/page.jsx` | `/dashboard/metrics` | Metrics |
| `app/dashboard/CompanyDetails/[companyID]/page.jsx` | `/dashboard/CompanyDetails/:id` | Dynamic route |

---

## 📦 Component Organization

### Public Pages (src/Components/Home/)
Components used on public-facing pages:
- **Navbar**: Main navigation
- **Home**: Homepage hero and content
- **About**: About us information
- **Service**: Services showcase
- **Contact**: Contact form
- **FootprintCalculator**: Carbon calculator

### Dashboard Components (src/Components/esg_dashboard/)
Components for authenticated dashboard:
- **Sidebar**: Dashboard navigation
- **Dashboard**: Main dashboard view
- **Companies**: Company management
- **Metrics**: ESG metrics management
- **User/Roles/Permissions**: Access control
- **Data Entry**: Forms and uploads

### Common Components (src/Components/common/)
Reusable across entire app:
- **Toast**: Global notification system

### Auth Components (src/core/)
Authentication flows:
- **LoginPage**: User login
- **SignUpPage**: User registration

---

## 🔧 Configuration Files

### next.config.js
- API proxy to backend
- Image optimization
- MUI transpilation
- Build settings

### jsconfig.json
- Path aliases (`@/*`)
- Import shortcuts
- IDE support

### tailwind.config.js
- Scans `app/` and `src/`
- Custom theme
- Plugins

### postcss.config.js
- Tailwind processing
- Autoprefixer

---

## 🎨 Styling Organization

### Global Styles
- `src/index.css` - Tailwind directives, global CSS, animations

### Component Styles
- Tailwind utility classes (inline)
- MUI styled components
- Custom CSS in components

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `SETUP_INSTRUCTIONS.md` | Quick start guide |
| `NEXTJS_MIGRATION_GUIDE.md` | Detailed migration explanation |
| `MIGRATION_COMPLETE.md` | Summary of what was migrated |
| `QUICK_REFERENCE.md` | Command cheat sheet |
| `PROJECT_STRUCTURE.md` | This file - visual guide |

---

## 🔄 Data Flow

```
User Request
    ↓
Next.js Router (app/*/page.jsx)
    ↓
Layout (app/layout.jsx or app/dashboard/layout.jsx)
    ↓
Page Component
    ↓
Component (src/Components/*)
    ↓
API Call (Axios → /api/* → Backend Express)
    ↓
MongoDB
    ↓
Response back up the chain
```

---

## 🚀 Entry Points

### Development
- **Entry**: `npm run dev` → `next dev`
- **Port**: 3000
- **Hot Reload**: Automatic

### Production
- **Build**: `npm run build` → `next build`
- **Start**: `npm start` → `next start`
- **Optimized**: Yes

---

## 🎯 Key Directories Explained

### `/app` Directory (NEW)
- **Purpose**: Next.js routing and layouts
- **Contains**: Page components, layouts, providers
- **Benefit**: File-based routing, automatic code splitting

### `/src` Directory (PRESERVED)
- **Purpose**: Reusable components and utilities
- **Contains**: All original React components
- **Benefit**: Keeps component logic separate from routing

### `/public` Directory
- **Purpose**: Static files served as-is
- **Contains**: Images, icons, manifest
- **Access**: `/favicon.ico` → `public/favicon.ico`

---

## 🔗 Import Path Examples

```javascript
// Navigation (from src/Components/*)
import { Link, useNavigate } from '../../lib/navigation';

// Components (from app/*/page.jsx)
import Navbar from '../../src/Components/Home/Navbar';
import Dashboard from '../../src/Components/esg_dashboard/Dashboard';

// Utils
import { toast } from '../../utils/toast';
import designTokens from '../../utils/designTokens';

// External
import axios from 'axios';
import { useState } from 'react';
```

---

## 📊 Component Dependencies

```
app/layout.jsx
    └── Providers
        └── Toast (global)

app/page.jsx
    └── Navbar
    └── Home

app/dashboard/layout.jsx
    └── Sidebar

app/dashboard/page.jsx
    └── Dashboard
        ├── Card
        └── ESGChart

app/dashboard/companies/page.jsx
    └── Companies (fetches from API)
```

---

## 🎨 Style Dependencies

```
Tailwind CSS (utility classes)
    ↓
Material-UI (component library)
    ↓
Custom CSS (src/index.css)
    ↓
Component-specific styles
```

---

## 💡 Understanding the Structure

### Why Two Directories?

1. **`/app`** - Routing Structure
   - Only contains routing logic
   - Page wrappers
   - Layout definitions

2. **`/src`** - Component Library
   - Actual component code
   - Business logic
   - Reusable components

This separation keeps routing (Next.js) separate from components (React), making it easier to:
- Understand routing structure at a glance
- Reuse components across different routes
- Maintain component logic independently

---

**Understanding this structure is key to navigating the codebase efficiently! 🗺️**
