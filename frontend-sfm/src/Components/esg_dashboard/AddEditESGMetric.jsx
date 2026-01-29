'use client';

import React, { useState } from 'react';
import { useNavigate } from '../../lib/navigation';
import axios from 'axios';
import { toast } from '../../utils/toast';

const AddEditESGMetric = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Environmental',
    subcategory: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.category.trim()) newErrors.category = true;
    if (!formData.subcategory.trim()) newErrors.subcategory = true;
    if (!formData.description.trim()) newErrors.description = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/esgmetric', formData);
      console.log('ESG metric stored successfully:', response.data);
      toast.success('ESG metric created successfully!');
      setTimeout(() => navigate('/dashboard/metrics'), 1500);
    } catch (error) {
      console.error('There was an error saving the ESG metric details!', error);
      toast.error('Failed to save ESG metric. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/dashboard/metrics');
  };

  return (
    <div className="grid gap-6 mt-14">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2 text-green-800">Add New ESG Metric</h1>
          <p className="text-gray-600 mb-6">Define a new Environmental, Social, or Governance metric</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Metric Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2`}
                placeholder="e.g., Carbon Emissions"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Metric name is required</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`mt-1 block w-full border ${errors.category ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2`}
              >
                <option value="Environmental">Environmental</option>
                <option value="Social">Social</option>
                <option value="Governance">Governance</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">Category is required</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subcategory *</label>
              <input
                type="text"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className={`mt-1 block w-full border ${errors.subcategory ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2`}
                placeholder="e.g., GHG Emissions"
              />
              {errors.subcategory && <p className="text-red-500 text-sm mt-1">Subcategory is required</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`mt-1 block w-full border ${errors.description ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2`}
                rows="4"
                placeholder="Describe the metric and how it should be measured"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
            </div>
            
            <div className="flex gap-3 pt-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isLoading ? 'Saving...' : 'Save Metric'}
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

export default AddEditESGMetric;
