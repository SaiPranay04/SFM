import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from '../../utils/toast';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const Metrics = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/esgmetric');
      setMetrics(response.data);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      toast.error('Failed to load metrics');
    }
  };

  const handleMetricsClick = () => {
    navigate('/dashboard/AddEditESGMetric');
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/esgmetric/${id}`);
        setMetrics(metrics.filter(m => m._id !== id));
        toast.success('Metric deleted successfully');
      } catch (error) {
        console.error('Error deleting metric:', error);
        toast.error('Failed to delete metric');
      }
    }
  };

  const filteredMetrics = metrics.filter(metric =>
    metric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    metric.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    metric.subcategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'Environmental':
        return 'bg-green-100 text-green-800';
      case 'Social':
        return 'bg-blue-100 text-blue-800';
      case 'Governance':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid gap-6 mt-14">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-green-800">ESG Metrics</h1>
              <p className="text-gray-600 mt-1">Manage your sustainability metrics</p>
            </div>
            <button 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2 font-semibold" 
              onClick={handleMetricsClick}
            >
              <FaPlus /> Add New Metric
            </button>
          </div>
          
          <div className="mb-6">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search metrics by name, category, or subcategory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-3 w-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Subcategory</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMetrics.length > 0 ? (
                  filteredMetrics.map((metric) => (
                    <tr key={metric._id} className="hover:bg-gray-50 transition duration-150">
                      <td className="px-4 py-4 font-medium text-gray-900">{metric.name}</td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeColor(metric.category)}`}>
                          {metric.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">{metric.subcategory}</td>
                      <td className="px-4 py-4 text-gray-600 max-w-md truncate">{metric.description}</td>
                      <td className="px-4 py-4">
                        <div className="flex justify-center gap-2">
                          <button 
                            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-1"
                            title="Edit"
                          >
                            <FaEdit /> Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(metric._id, metric.name)}
                            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-1"
                            title="Delete"
                          >
                            <FaTrash /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                      {searchTerm ? 'No metrics found matching your search' : 'No metrics available. Add your first metric!'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredMetrics.length} of {metrics.length} metrics
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
