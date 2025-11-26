import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Companies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/company');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching company data', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleViewClick = (companyID) => {
    navigate(`/dashboard/CompanyDetails/${companyID}`);
  };

  return (
    <div className="grid gap-6 mt-14">
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-green-800">Companies</h1>
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Industry</th>
            <th className="border border-gray-300 p-2">Country</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((company) => (
            <tr key={company._id} className="hover:bg-gray-100 transition duration-200">
              <td className="border border-gray-300 p-2">{company.name}</td>
              <td className="border border-gray-300 p-2">{company.industry}</td>
              <td className="border border-gray-300 p-2">{company.country}</td>
              <td className="border border-gray-300 p-2">{company.description?.substring(0, 50)}...</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition duration-300" onClick={() => handleViewClick(company._id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination and other controls can be added here */}
    </div>
    </div>
  );
};

export default Companies;