# Sustainable Footprint Management (SFM) Platform

A full-stack web application for managing Environmental, Social, and Governance (ESG) metrics, helping organizations track and improve their sustainability performance.

## 🌟 Features

- **Dashboard Analytics**: Real-time visualization of ESG metrics and company data
- **Company Management**: Add, edit, view, and manage company profiles
- **ESG Metrics**: Define and track custom sustainability metrics across Environmental, Social, and Governance categories
- **Data Entry**: Bulk upload via Excel or manual entry of ESG data
- **User Management**: Role-based access control with customizable permissions
- **Role & Permission System**: Fine-grained access control for different user types
- **Project Boundary**: Define carbon sources, sinks, and reservoirs
- **Modern UI/UX**: Clean, responsive design with toast notifications and smooth animations

## 🛠️ Tech Stack

### Frontend
- **React** 18.3.1
- **React Router DOM** 7.0.2
- **Tailwind CSS** 3.4.16
- **Material-UI (MUI)** 6.2.1
- **Chart.js** 4.4.7 with react-chartjs-2
- **Axios** for API calls
- **React Icons** & **Font Awesome** icons
- **Framer Motion** for animations

### Backend
- **Node.js** with **Express** 4.19.2
- **MongoDB** with **Mongoose** 8.4.3
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Multer** for file uploads
- **XLSX** for Excel file processing
- **Nodemailer** for email notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (v5 or higher) - Running locally or have a connection string
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd "new project"
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd APIDB

# Install dependencies
npm install

# Start MongoDB (if running locally)
# On Windows:
mongod

# On macOS/Linux:
sudo systemctl start mongod

# Start the backend server
npm start
# Or for development with auto-reload:
npm run dev
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend-sfm

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will start on `http://localhost:3000`

## 🔧 Configuration

### Backend Configuration

Edit `APIDB/server.js` to configure MongoDB connection:

```javascript
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  // Configuration options
});
```

### Email Configuration

To enable email notifications, update the credentials in `APIDB/routes.js`:

```javascript
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password',
  },
});
```

## 📁 Project Structure

```
new project/
├── APIDB/                      # Backend server
│   ├── server.js              # Express server setup
│   ├── routes.js              # API routes
│   ├── models.js              # MongoDB schemas
│   ├── uploads/               # Uploaded files directory
│   └── package.json           # Backend dependencies
│
├── frontend-sfm/              # Frontend application
│   ├── public/                # Static files
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Home/         # Landing pages
│   │   │   ├── esg_dashboard/ # Dashboard components
│   │   │   └── common/       # Shared components
│   │   ├── core/             # Authentication pages
│   │   ├── utils/            # Utilities & helpers
│   │   ├── App.js            # Main app component
│   │   └── index.js          # Entry point
│   └── package.json          # Frontend dependencies
│
└── README.md                 # This file
```

## 🎯 Usage

### First Time Setup

1. **Start MongoDB** and make sure it's running
2. **Start the backend server** from the `APIDB` directory
3. **Start the frontend** from the `frontend-sfm` directory
4. **Open your browser** and navigate to `http://localhost:3000`

### Creating Your First User

1. Click on **Sign Up** in the navigation bar
2. Fill in your details (username, email, password)
3. Click **Sign Up** to create your account
4. You'll receive a welcome email (if configured)
5. **Log in** with your credentials

### Adding Companies and Metrics

1. Navigate to **Dashboard** after logging in
2. Click **Add New Company** to create a company profile
3. Go to **Metrics** to define ESG metrics
4. Use **ESG Data Entry** to input metric values for companies
5. View analytics and reports on the **Dashboard**

## 🔐 API Endpoints

### Authentication
- `POST /api/signup` - Register new user
- `POST /api/login` - User login

### Companies
- `GET /api/company` - Get all companies
- `GET /api/company/:id` - Get single company
- `POST /api/company` - Create company
- `DELETE /api/company/:id` - Delete company

### ESG Metrics
- `GET /api/esgmetric` - Get all metrics
- `POST /api/esgmetric` - Create metric
- `DELETE /api/esgmetric/:id` - Delete metric

### Company ESG Data
- `GET /api/companyesg` - Get all ESG data
- `POST /api/companyesg` - Submit ESG data

### Users
- `GET /api/users` - Get all users
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Roles & Permissions
- `GET /api/roles` - Get all roles
- `POST /api/roles` - Create role
- `PUT /api/roles/:id` - Update role
- `DELETE /api/roles/:id` - Delete role
- `GET /api/permissions/:roleId` - Get permissions
- `POST /api/permissions/:roleId` - Update permissions

### File Upload
- `POST /api/upload` - Upload Excel file

### Contacts
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Submit contact form

### Project Boundary
- `GET /api/boundary` - Get boundaries
- `POST /api/boundary` - Create boundary
- `DELETE /api/boundary/:id` - Delete boundary

## 🎨 Design System

The application uses a consistent design system with:

- **Primary Colors**: Green shades (#16a34a, #15803d, #166534) for sustainability theme
- **Secondary Colors**: Blue for accents and interactive elements
- **Typography**: Modern sans-serif fonts with consistent sizing
- **Components**: Reusable UI components with Tailwind CSS
- **Animations**: Smooth transitions and toast notifications
- **Responsive**: Mobile-first design approach

## 🐛 Troubleshooting

### MongoDB Connection Issues

If you see "MongoServerError: connect ECONNREFUSED":
1. Make sure MongoDB is running: `sudo systemctl status mongod`
2. Check if MongoDB is on port 27017: `netstat -an | grep 27017`
3. Verify connection string in `server.js`

### Port Already in Use

If port 3000 or 5000 is already in use:
```bash
# Kill process on port 3000 (frontend)
npx kill-port 3000

# Kill process on port 5000 (backend)
npx kill-port 5000
```

### Dependencies Issues

If you encounter dependency issues:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

## 📝 Development

### Running in Development Mode

Backend with auto-reload:
```bash
cd APIDB
npm run dev
```

Frontend:
```bash
cd frontend-sfm
npm start
```

### Building for Production

```bash
cd frontend-sfm
npm run build
```

The optimized production build will be in the `build/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- React and the React community
- Material-UI for beautiful components
- Tailwind CSS for utility-first styling
- MongoDB for flexible data storage
- All open-source contributors

## 📧 Support

For support, email support@sfm-platform.com or open an issue in the repository.

---

**Built with ❤️ for a sustainable future** 🌍
