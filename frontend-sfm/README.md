# 🌱 Sustainable Footprint Management - Next.js Edition

A modern, full-stack web application for tracking and managing organizational environmental impact, built with **Next.js 14**, **React 18**, **Material-UI**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- Backend API running on port 5000

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** 🎉

---

## 📁 Project Structure

```
frontend-sfm/
├── app/                      # Next.js App Router
│   ├── layout.jsx           # Root layout
│   ├── page.jsx             # Homepage
│   ├── providers.jsx        # Client providers
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── service/             # Services page
│   ├── calculator/          # Carbon calculator
│   ├── login/               # Login page
│   ├── signup/              # Signup page
│   └── dashboard/           # Dashboard routes
│       ├── layout.jsx       # Dashboard layout (with Sidebar)
│       ├── page.jsx         # Dashboard home
│       ├── companies/       # Company management
│       ├── metrics/         # ESG metrics
│       ├── User/            # User management
│       ├── Roles/           # Role management
│       └── ...              # Other dashboard pages
│
├── src/                     # Components & utilities
│   ├── Components/
│   │   ├── Home/           # Public pages components
│   │   ├── esg_dashboard/  # Dashboard components
│   │   └── common/         # Shared components
│   ├── core/               # Authentication pages
│   ├── lib/                # Utilities
│   │   └── navigation.jsx  # Navigation adapter
│   ├── utils/              # Helper functions
│   ├── Assets/             # Images, icons
│   └── index.css           # Global styles
│
├── public/                  # Static files
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
└── package.json            # Dependencies
```

---

## 🎨 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18.3
- **Styling**: Tailwind CSS + Material-UI (MUI)
- **Icons**: FontAwesome, Heroicons, React Icons
- **Charts**: Chart.js + react-chartjs-2
- **Animations**: Framer Motion + Animate.css
- **HTTP Client**: Axios

### Backend (Separate Service)
- **Runtime**: Node.js + Express
- **Database**: MongoDB
- **API Port**: 5000

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start Next.js dev server (port 3000)

# Production
npm run build        # Create optimized production build
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## 🌐 Routes

### Public Routes
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero section |
| `/about` | About us page |
| `/contact` | Contact form |
| `/service` | Services overview |
| `/calculator` | Carbon footprint calculator |
| `/login` | User login |
| `/signup` | User registration |

### Dashboard Routes (Authentication Required)
| Route | Description |
|-------|-------------|
| `/dashboard` | Main dashboard |
| `/dashboard/companies` | Company management |
| `/dashboard/metrics` | ESG metrics |
| `/dashboard/CompanyEsgData` | ESG data entry |
| `/dashboard/User` | User management |
| `/dashboard/Roles` | Role management |
| `/dashboard/Permissiontable` | Permissions |
| `/dashboard/AddEditCompany` | Add/edit company |
| `/dashboard/AddEditESGMetric` | Add/edit metric |
| `/dashboard/CompanyDetails/[id]` | Company details |
| `/dashboard/FileUpload` | Upload Excel data |
| `/dashboard/ProjectBoundary` | Project boundary |

---

## 🔌 API Integration

The frontend proxies all API calls to the backend server:

```javascript
// next.config.js configures proxy
axios.get('/api/company')  // → http://localhost:5000/api/company
```

### Starting the Backend

```bash
cd ../APIDB
npm install
npm start
```

Backend runs on **http://localhost:5000**

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14.2.0 | React framework |
| react | ^18.3.1 | UI library |
| @mui/material | ^6.2.1 | Material Design components |
| tailwindcss | ^3.4.16 | Utility-first CSS |
| axios | ^1.7.9 | HTTP client |
| chart.js | ^4.4.7 | Data visualization |
| framer-motion | ^11.13.5 | Animations |
| jspdf | ^2.5.2 | PDF generation |

---

## 🎯 Features

### ✨ User Management
- User authentication (login/signup)
- Role-based access control
- User profiles and permissions

### 🏢 Company Management
- Add, edit, view companies
- Company profiles with details
- Industry and location tracking

### 📊 ESG Metrics
- Define custom ESG metrics
- Environmental, Social, Governance categories
- Metric tracking and reporting

### 📈 Data Entry & Visualization
- Manual ESG data entry
- Excel file upload
- Charts and graphs
- Historical data tracking

### 🧮 Carbon Calculator
- Interactive footprint calculator
- Multi-category emissions tracking
- Real-time calculations

### 🔐 Role Management
- Define custom roles
- Permission assignment
- Access control

### 📄 Reporting
- Project boundary definition
- PDF report generation
- Data export capabilities

### 🎨 Modern UI/UX
- Clean, professional design
- Responsive layout
- Smooth animations
- Toast notifications
- Intuitive navigation

---

## 🎨 Design System

### Colors
- **Primary**: Green (#16a34a)
- **Secondary**: Teal
- **Background**: Light gray (#f8fafc)
- **Text**: Dark gray (#1f2937)

### Components
- Material-UI components for complex interactions
- Tailwind utility classes for rapid styling
- Custom components in `src/Components/`

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid layouts

---

## 📖 Documentation

Detailed guides are available:

1. **SETUP_INSTRUCTIONS.md** - Quick setup guide
2. **NEXTJS_MIGRATION_GUIDE.md** - Architecture explanation
3. **MIGRATION_COMPLETE.md** - Migration summary

---

## 🔧 Configuration

### Environment Variables (Optional)

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
MONGODB_URI=mongodb://localhost:27017/yourDatabaseName
```

### Next.js Config

`next.config.js` includes:
- API proxy configuration
- Image optimization settings
- MUI package transpilation

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npx kill-port 3000
# Or use different port
PORT=3001 npm run dev
```

### Module Not Found
```bash
rm -rf node_modules .next
npm install
```

### API Calls Fail
1. Ensure backend is running on port 5000
2. Check `next.config.js` proxy settings
3. Verify API endpoints in backend

### Styles Not Loading
```bash
npm run dev
# Next.js will rebuild Tailwind
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Traditional Server
```bash
npm run build
npm start
# Runs on port 3000
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Material-UI** - Component library
- **Tailwind CSS** - Utility-first CSS
- **Vercel** - Hosting platform

---

## 📞 Support

For issues or questions:
- Check documentation in `/docs`
- Review troubleshooting section
- Refer to [Next.js Documentation](https://nextjs.org/docs)

---

**Built with ❤️ using Next.js 14**

🌱 Making sustainability management simple and effective.
