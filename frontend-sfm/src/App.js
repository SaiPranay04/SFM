import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Service from './Components/Home/Service';
import FootprintCalculator from './Components/Home/FootprintCalculator';
import LoginPage from './core/LoginPage';
import SignUpPage from './core/SignUpPage';
import Dashboard from './Components/esg_dashboard/Dashboard';
import Companies from './Components/esg_dashboard/Companies';
import AddEditCompany from './Components/esg_dashboard/AddEditCompany';
import AddEditESGMetric from './Components/esg_dashboard/AddEditESGMetric';
import CompanyDetails from './Components/esg_dashboard/CompanyDetails';
import CompanyEsgData from './Components/esg_dashboard/CompanyEsgData';
import Metrics from './Components/esg_dashboard/Metrics';
import Roles from './Components/esg_dashboard/Roles';
import PermissionTable from './Components/esg_dashboard/PermissionTable';
import FileUpload from './Components/esg_dashboard/FileUpload';
import ProjectBoundary from './Components/esg_dashboard/ProjectBoundary';
import Sidebar from './Components/esg_dashboard/Sidebar';
import User from './Components/esg_dashboard/User';
import Toast from './Components/common/Toast';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Toast />
      <Navbar />
      <div className="flex">
        {location.pathname.startsWith('/dashboard') && <Sidebar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/calculator" element={<FootprintCalculator />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/companies" element={<Companies />} />
            <Route path="/dashboard/AddEditCompany" element={<AddEditCompany />} />
            <Route path="/dashboard/AddEditESGMetric" element={<AddEditESGMetric />} />
            <Route path="/dashboard/CompanyDetails/:companyID" element={<CompanyDetails />} />
            <Route path="/dashboard/CompanyEsgData" element={<CompanyEsgData />} />
            <Route path="/dashboard/metrics" element={<Metrics />} />
            <Route path="/dashboard/roles" element={<Roles />} />
            <Route path="/dashboard/Permissiontable" element={<PermissionTable />} />
            <Route path="/dashboard/FileUpload" element={<FileUpload />} />
            <Route path="/dashboard/ProjectBoundary" element={<ProjectBoundary />} />
            <Route path="/dashboard/User" element={<User />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
