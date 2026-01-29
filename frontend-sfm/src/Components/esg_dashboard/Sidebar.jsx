'use client';

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '../../lib/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faChartLine, faFileAlt, faUsers, faShieldAlt, faUpload, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FaLeaf } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    // Set active item based on current path
    const path = location.pathname;
    if (path === '/dashboard') setActiveItem('Home');
    else if (path.includes('/companies')) setActiveItem('Companies');
    else if (path.includes('/metrics')) setActiveItem('Metrics');
    else if (path.includes('/CompanyEsgData')) setActiveItem('CompanyEsgData');
    else if (path.includes('/User')) setActiveItem('Users');
    else if (path.includes('/Roles')) setActiveItem('Roles');
    else if (path.includes('/Permissiontable')) setActiveItem('Permissiontable');
    else if (path.includes('/FileUpload')) setActiveItem('FileUpload');
    else if (path.includes('/ProjectBoundary')) setActiveItem('ProjectBoundary');
  }, [location]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const menuItems = [
    { name: 'Home', path: '/dashboard', icon: faHome },
    { name: 'Companies', path: '/dashboard/companies', icon: faBuilding },
    { name: 'Metrics', path: '/dashboard/metrics', icon: faChartLine },
    { name: 'CompanyEsgData', path: '/dashboard/CompanyEsgData', icon: faFileAlt, label: 'ESG Data Entry' },
    { name: 'Users', path: '/dashboard/User', icon: faUsers },
    { name: 'Roles', path: '/dashboard/Roles', icon: faShieldAlt },
    { name: 'Permissiontable', path: '/dashboard/Permissiontable', icon: faShieldAlt, label: 'Permissions' },
    { name: 'FileUpload', path: '/dashboard/FileUpload', icon: faUpload, label: 'Upload Data' },
    { name: 'ProjectBoundary', path: '/dashboard/ProjectBoundary', icon: faMapMarkerAlt, label: 'Project Boundary' },
  ];

  return (
    <div className="sidebar bg-gradient-to-b from-gray-800 to-gray-900 text-white w-64 min-h-screen p-4 shadow-xl">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-700">
        <div className="bg-green-600 p-2 rounded-lg">
          <FaLeaf className="text-2xl" />
        </div>
        <div>
          <div className="text-xl font-bold">S.F.M</div>
          <div className="text-xs text-gray-400">Sustainability Manager</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={() => handleItemClick(item.name)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeItem === item.name
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                <span className="font-medium text-sm">{item.label || item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="text-xs text-gray-400 text-center">
          <p>© 2024 SFM Platform</p>
          <p className="mt-1">v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;