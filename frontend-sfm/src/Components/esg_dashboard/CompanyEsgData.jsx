import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from '../../utils/toast';

const ESGData = () => {
  const [company, setCompany] = useState('');
  const [year, setYear] = useState('');
  const [metrics, setMetrics] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/company');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
    
    const initialMetrics = [
      { metric: 'Energy Consumption', value: '' },
      { metric: 'Renewable Energy', value: '' },
      { metric: 'GHG Emissions', value: '' },
      { metric: 'Employment Rates', value: '' },
      { metric: 'Diversity', value: '' },
      { metric: 'Board Composition', value: '' },
      { metric: 'Ethical Practices', value: '' },
    ];
    setMetrics(initialMetrics);
  }, []);

  const handleMetricChange = (index, event) => {
    const newMetrics = [...metrics];
    newMetrics[index].value = event.target.value;
    setMetrics(newMetrics);
  };

  const handleSave = async () => {
    if (!company) {
      setError('Please select a company');
      toast.error('Please select a company');
      return;
    }
    if (!year) {
      setError('Please enter a year');
      toast.error('Please enter a year');
      return;
    }

    const companyESGData = metrics.map(metric => ({
      companyID: company,
      year,
      metricID: metric.metric,
      value: metric.value,
    }));

    try {
      const response = await axios.post('http://localhost:5000/api/companyesg', companyESGData);
      console.log('ESG data saved successfully:', response.data);
      toast.success('ESG data saved successfully!');
      setError('');
    } catch (error) {
      console.error('Error saving ESG data:', error);
      setError('Error saving ESG data');
      toast.error('Failed to save ESG data');
    }
  };

  return (
    <div className="grid gap-6 mt-14">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2 text-green-800">ESG Data Entry</h1>
          <p className="text-gray-600 mb-6">Enter ESG metrics data for a company</p>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Company *</label>
              <select 
                value={company} 
                onChange={(e) => setCompany(e.target.value)} 
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Select a Company --</option>
                {companies.map(c => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Year *</label>
              <input 
                type="number" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                placeholder="e.g., 2024"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
              />
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Metrics Data</h2>
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-gray-700 font-medium w-1/2">{metric.metric}</span>
                    <input
                      type="number"
                      step="0.01"
                      value={metric.value}
                      onChange={(e) => handleMetricChange(index, e)}
                      placeholder="Enter value"
                      className="border border-gray-300 rounded-lg p-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-1/2 ml-4"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg font-semibold w-full md:w-auto" 
              onClick={handleSave}
            >
              Save ESG Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESGData;
