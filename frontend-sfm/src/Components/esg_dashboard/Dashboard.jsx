import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import ESGChart from './ESGChart';

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyCount, setCompanyCount] = useState(0);
  const [metricCount, setMetricCount] = useState(0);

  useEffect(() => {
    document.body.classList.add('dashboard');
    
    // Fetch company count
    const fetchData = async () => {
      try {
        const companiesResponse = await axios.get('http://localhost:5000/api/company');
        setCompanyCount(companiesResponse.data.length);
        
        const metricsResponse = await axios.get('http://localhost:5000/api/esgmetric');
        setMetricCount(metricsResponse.data.length);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    
    fetchData();
    
    return () => {
      document.body.classList.remove('dashboard');
    };
  }, []);

  const handleAddCompanyClick = () => {
    navigate('/dashboard/AddEditCompany');
  };

  return (
    <div className="grid gap-6 mt-14">
      <div className="flex-grow p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-green-800">Dashboard</h1>
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="text-2xl text-gray-700">Good Morning! 👋</h2>
            <p className="text-gray-500">Welcome to your ESG Dashboard</p>
          </div>
          <div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg" onClick={handleAddCompanyClick}>
              Add New Company
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" title="Total Companies" value={companyCount} />
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" title="Total Metrics" value={metricCount} />
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" title="Recent ESG Score">
            <ESGChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;