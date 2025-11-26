import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBuilding, FaIndustry, FaGlobe, FaFileAlt } from 'react-icons/fa';

const CompanyDetails = () => {
  const { companyID } = useParams();
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/company/${companyID}`);
        setCompanyDetails(response.data);
      } catch (error) {
        console.error('Error fetching company details', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompanyDetails();
  }, [companyID]);

  if (isLoading) {
    return (
      <div className="grid gap-6 mt-14">
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!companyDetails) {
    return (
      <div className="grid gap-6 mt-14">
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600">Company not found</p>
            <button 
              onClick={() => navigate('/dashboard/companies')}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Back to Companies
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 mt-14">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-green-800 mb-2">Company Details</h1>
              <p className="text-gray-600">View comprehensive information about this company</p>
            </div>
            <button 
              onClick={() => navigate('/dashboard/companies')}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Back to List
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaBuilding className="text-2xl text-green-600" />
                <label className="text-sm font-semibold text-gray-700">Company Name</label>
              </div>
              <p className="text-2xl font-bold text-gray-900 ml-9">{companyDetails.name}</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaIndustry className="text-2xl text-blue-600" />
                <label className="text-sm font-semibold text-gray-700">Industry</label>
              </div>
              <p className="text-xl text-gray-900 ml-9">{companyDetails.industry || 'Not specified'}</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaGlobe className="text-2xl text-purple-600" />
                <label className="text-sm font-semibold text-gray-700">Country</label>
              </div>
              <p className="text-xl text-gray-900 ml-9">{companyDetails.country || 'Not specified'}</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaFileAlt className="text-2xl text-orange-600" />
                <label className="text-sm font-semibold text-gray-700">Description</label>
              </div>
              <p className="text-gray-700 leading-relaxed ml-9">
                {companyDetails.description || 'No description available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
