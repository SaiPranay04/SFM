'use client';

import React, { useState } from 'react';
import { useNavigate } from '../../lib/navigation';
import axios from 'axios';
import { toast } from '../../utils/toast';

const AddEditCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    country: '',
    description: ''
  });

  const [isValidName, setIsValidName] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    if (name === 'name') {
      setIsValidName(value.trim() !== '');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name.trim()) {
      setIsValidName(false);
      toast.error('Company name is required');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/company', formData);
      console.log('Company details stored successfully:', response.data);
      toast.success('Company created successfully!');
      setTimeout(() => navigate('/dashboard/companies'), 1500);
    } catch (error) {
      console.error('There was an error saving the company details!', error);
      toast.error('Failed to save company details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/dashboard/companies');
  };

  return (
    <div className="grid gap-6 mt-14">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2 text-green-800">Add New Company</h1>
          <p className="text-gray-600 mb-6">Fill in the company details below</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full border ${!isValidName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2`}
                placeholder="Enter company name"
              />
              {!isValidName && <p className="text-red-500 text-sm mt-1">Company name is required</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Technology, Manufacturing"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter country"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                placeholder="Enter company description"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isLoading ? 'Saving...' : 'Save Company'}
              </button>
              <button 
                type="button" 
                onClick={handleCancel}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditCompany;
