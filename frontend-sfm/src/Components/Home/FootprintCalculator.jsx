'use client';

import React, { useState } from 'react';
import { useNavigate } from '../../lib/navigation';
import axios from 'axios';
import { toast } from '../../utils/toast';
import { FaLeaf, FaIndustry, FaBuilding, FaCar, FaPlane, FaTrain, FaLaptop } from 'react-icons/fa';

const FootprintCalculator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [footprintResult, setFootprintResult] = useState(null);
  
  const [formData, setFormData] = useState({
    // Company Details
    companyName: '',
    industry: '',
    country: '',
    totalEmployees: '',
    
    // Office Data
    heatingSource: '',
    surfaceArea: '',
    
    // Fleet Data
    totalCars: '',
    avgKmPerYear: '',
    
    // Travel Data
    shortFlights: '',
    longFlights: '',
    trainJourneys: '',
    
    // IT Equipment
    laptops: '',
    mobiles: '',
    monitors: '',
    desktops: '',
    
    // Energy & Emissions
    energyConsumption: '',
    renewableEnergy: '',
    
    // Year
    year: new Date().getFullYear()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Carbon Footprint Calculation Algorithm
  const calculateFootprint = () => {
    let totalCO2 = 0;
    
    // Office Emissions (heating source - kg CO2 per sq meter per year)
    const heatingEmissions = {
      'Electricity': 0.5,
      'Natural gas': 0.2,
      'Domestic Fuel Oil': 0.3,
      'Biogas': 0.05,
      'Green Electricity': 0,
      'Heating Network': 0.15
    };
    
    const officeEmissions = (formData.surfaceArea || 0) * 
      (heatingEmissions[formData.heatingSource] || 0);
    totalCO2 += officeEmissions;
    
    // Fleet Emissions (kg CO2 per km - average car)
    const fleetEmissions = (formData.totalCars || 0) * 
      (formData.avgKmPerYear || 0) * 0.12; // 120g CO2 per km
    totalCO2 += fleetEmissions;
    
    // Flight Emissions
    const shortFlightEmissions = (formData.shortFlights || 0) * 200; // 200 kg CO2 per short flight
    const longFlightEmissions = (formData.longFlights || 0) * 1000; // 1000 kg CO2 per long flight
    totalCO2 += shortFlightEmissions + longFlightEmissions;
    
    // Train Emissions (much lower)
    const trainEmissions = (formData.trainJourneys || 0) * 14; // 14 kg CO2 per journey
    totalCO2 += trainEmissions;
    
    // IT Equipment (manufacturing + usage - kg CO2 per year per device)
    const laptopEmissions = (formData.laptops || 0) * 200;
    const mobileEmissions = (formData.mobiles || 0) * 80;
    const monitorEmissions = (formData.monitors || 0) * 150;
    const desktopEmissions = (formData.desktops || 0) * 300;
    totalCO2 += laptopEmissions + mobileEmissions + monitorEmissions + desktopEmissions;
    
    // Energy Consumption (kWh to kg CO2)
    const energyEmissions = (formData.energyConsumption || 0) * 0.5; // 0.5 kg CO2 per kWh
    totalCO2 += energyEmissions;
    
    // Renewable Energy Offset (reduce by percentage)
    const renewableOffset = totalCO2 * ((formData.renewableEnergy || 0) / 100);
    totalCO2 -= renewableOffset;
    
    // Calculate per employee
    const perEmployee = formData.totalEmployees > 0 
      ? totalCO2 / formData.totalEmployees 
      : 0;
    
    // Grade the footprint
    let grade = 'F';
    let color = 'red';
    let message = 'High carbon footprint - significant improvements needed';
    
    if (perEmployee < 500) {
      grade = 'A+';
      color = 'green';
      message = 'Excellent! Very low carbon footprint';
    } else if (perEmployee < 1000) {
      grade = 'A';
      color = 'green';
      message = 'Great! Low carbon footprint';
    } else if (perEmployee < 2000) {
      grade = 'B';
      color = 'blue';
      message = 'Good - Room for improvement';
    } else if (perEmployee < 3000) {
      grade = 'C';
      color = 'orange';
      message = 'Average - Consider reducing emissions';
    } else if (perEmployee < 5000) {
      grade = 'D';
      color = 'orange';
      message = 'Below average - Action needed';
    }
    
    return {
      totalCO2: Math.round(totalCO2),
      perEmployee: Math.round(perEmployee),
      grade,
      color,
      message,
      breakdown: {
        office: Math.round(officeEmissions),
        fleet: Math.round(fleetEmissions),
        flights: Math.round(shortFlightEmissions + longFlightEmissions),
        train: Math.round(trainEmissions),
        it: Math.round(laptopEmissions + mobileEmissions + monitorEmissions + desktopEmissions),
        energy: Math.round(energyEmissions),
        renewableOffset: Math.round(renewableOffset)
      }
    };
  };

  const handleCalculate = async () => {
    // Validate required fields
    if (!formData.companyName || !formData.industry || !formData.totalEmployees) {
      toast.error('Please fill in company name, industry, and total employees');
      return;
    }
    
    setIsCalculating(true);
    
    // Calculate footprint
    const result = calculateFootprint();
    setFootprintResult(result);
    
    // Save to database
    try {
      // Save company
      const companyResponse = await axios.post('http://localhost:5000/api/company', {
        name: formData.companyName,
        industry: formData.industry,
        country: formData.country,
        description: `Carbon footprint: ${result.totalCO2} kg CO2/year | Grade: ${result.grade}`
      });
      
      const companyId = companyResponse.data._id;
      
      // Save organization calculation data
      await axios.post('http://localhost:5000/api/organizationcalculations', {
        company_total_employees: formData.totalEmployees,
        company_sector: formData.industry,
        office_heating_source: formData.heatingSource,
        office_surface_area: formData.surfaceArea,
        fleet_totalcars: formData.totalCars,
        fleet_km_avg: formData.avgKmPerYear,
        travel_short_flight: formData.shortFlights,
        travel_long_flight: formData.longFlights,
        travel_train: formData.trainJourneys,
        IT_laptop: formData.laptops,
        IT_mobile: formData.mobiles,
        IT_monitor: formData.monitors,
        IT_desktop: formData.desktops
      });
      
      toast.success('Footprint calculated and saved! Sign up to track your progress.');
      
    } catch (error) {
      console.error('Error saving data:', error);
      toast.warning('Footprint calculated! Sign up to save and track your data.');
    } finally {
      setIsCalculating(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && (!formData.companyName || !formData.industry || !formData.totalEmployees)) {
      toast.error('Please fill in all company details');
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding className="text-3xl text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">Company Information</h3>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your company name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Education">Education</option>
                <option value="Retail">Retail</option>
                <option value="Transportation">Transportation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter country"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Total Employees *</label>
              <input
                type="number"
                name="totalEmployees"
                value={formData.totalEmployees}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of employees"
                min="1"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding className="text-3xl text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Office & Facilities</h3>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Heating Source</label>
              <select
                name="heatingSource"
                value={formData.heatingSource}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="">Select heating source</option>
                <option value="Electricity">Electricity</option>
                <option value="Natural gas">Natural gas</option>
                <option value="Domestic Fuel Oil">Domestic Fuel Oil</option>
                <option value="Biogas">Biogas</option>
                <option value="Green Electricity">Green Electricity</option>
                <option value="Heating Network">Heating Network</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Office Surface Area (sq meters)</label>
              <input
                type="number"
                name="surfaceArea"
                value={formData.surfaceArea}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Total office area"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Energy Consumption (kWh)</label>
              <input
                type="number"
                name="energyConsumption"
                value={formData.energyConsumption}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Total energy used per year"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Renewable Energy (%)</label>
              <input
                type="number"
                name="renewableEnergy"
                value={formData.renewableEnergy}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Percentage of renewable energy"
                min="0"
                max="100"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaCar className="text-3xl text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-800">Fleet & Transportation</h3>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Fleet (number of cars)</label>
              <input
                type="number"
                name="totalCars"
                value={formData.totalCars}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of company cars"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Average km per car per year</label>
              <input
                type="number"
                name="avgKmPerYear"
                value={formData.avgKmPerYear}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Average kilometers driven"
                min="0"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaPlane className="text-3xl text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Business Travel</h3>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Short-haul Flights (per year)</label>
              <input
                type="number"
                name="shortFlights"
                value={formData.shortFlights}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of short flights"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Long-haul Flights (per year)</label>
              <input
                type="number"
                name="longFlights"
                value={formData.longFlights}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of long flights"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaTrain className="inline mr-2" />
                Train Journeys (per year)
              </label>
              <input
                type="number"
                name="trainJourneys"
                value={formData.trainJourneys}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of train journeys"
                min="0"
              />
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLaptop className="text-3xl text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-800">IT Equipment</h3>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Laptops</label>
              <input
                type="number"
                name="laptops"
                value={formData.laptops}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of laptops"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Phones</label>
              <input
                type="number"
                name="mobiles"
                value={formData.mobiles}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of mobiles"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Monitors</label>
              <input
                type="number"
                name="monitors"
                value={formData.monitors}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of monitors"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Desktop Computers</label>
              <input
                type="number"
                name="desktops"
                value={formData.desktops}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Number of desktops"
                min="0"
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (footprintResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <FaLeaf className="text-6xl text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Your Carbon Footprint</h2>
              <p className="text-gray-600">Analysis for {formData.companyName}</p>
            </div>
            
            <div className={`bg-gradient-to-r from-${footprintResult.color}-100 to-${footprintResult.color}-200 rounded-xl p-8 mb-8 text-center`}>
              <div className={`text-6xl font-bold text-${footprintResult.color}-600 mb-2`}>
                {footprintResult.grade}
              </div>
              <div className="text-2xl font-semibold text-gray-800 mb-2">
                {footprintResult.totalCO2.toLocaleString()} kg CO₂/year
              </div>
              <div className="text-lg text-gray-700 mb-1">
                {footprintResult.perEmployee.toLocaleString()} kg CO₂ per employee
              </div>
              <div className="text-gray-600 mt-2">
                {footprintResult.message}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Emissions Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Office & Heating:</span>
                    <span className="font-semibold">{footprintResult.breakdown.office} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fleet:</span>
                    <span className="font-semibold">{footprintResult.breakdown.fleet} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flights:</span>
                    <span className="font-semibold">{footprintResult.breakdown.flights} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Train:</span>
                    <span className="font-semibold">{footprintResult.breakdown.train} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IT Equipment:</span>
                    <span className="font-semibold">{footprintResult.breakdown.it} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy:</span>
                    <span className="font-semibold">{footprintResult.breakdown.energy} kg</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Renewable Offset:</span>
                    <span className="font-semibold">-{footprintResult.breakdown.renewableOffset} kg</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Next Steps</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Data saved successfully</li>
                  <li>📊 Track your progress over time</li>
                  <li>🎯 Set reduction targets</li>
                  <li>📈 Monitor improvements</li>
                  <li>🌱 Get personalized recommendations</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate('/signup')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold text-lg shadow-lg"
              >
                Sign Up to Track Progress
              </button>
              <button
                onClick={() => {
                  setFootprintResult(null);
                  setStep(1);
                  setFormData({
                    companyName: '',
                    industry: '',
                    country: '',
                    totalEmployees: '',
                    heatingSource: '',
                    surfaceArea: '',
                    totalCars: '',
                    avgKmPerYear: '',
                    shortFlights: '',
                    longFlights: '',
                    trainJourneys: '',
                    laptops: '',
                    mobiles: '',
                    monitors: '',
                    desktops: '',
                    energyConsumption: '',
                    renewableEnergy: '',
                    year: new Date().getFullYear()
                  });
                }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
              >
                Calculate Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Carbon Footprint Calculator</h1>
            <p className="text-gray-600">Calculate your organization's environmental impact</p>
          </div>
          
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  s === step ? 'bg-green-600 text-white' : 
                  s < step ? 'bg-green-400 text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                  {s}
                </div>
                {s < 5 && <div className={`w-12 h-1 mx-1 ${s < step ? 'bg-green-400' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
          
          {/* Form Steps */}
          {renderStep()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                ← Previous
              </button>
            )}
            
            {step < 5 ? (
              <button
                onClick={nextStep}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold ml-auto"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold ml-auto shadow-lg disabled:opacity-50"
              >
                {isCalculating ? 'Calculating...' : '🌍 Calculate My Footprint'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootprintCalculator;

