'use client';

import React from 'react';
import { FaLeaf, FaChartLine, FaFileAlt, FaUsers, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      icon: <FaLeaf className="text-5xl text-green-600 mb-4" />,
      title: "ESG Metrics Management",
      description: "Track and manage Environmental, Social, and Governance metrics for your organization with comprehensive data analytics."
    },
    {
      icon: <FaChartLine className="text-5xl text-blue-600 mb-4" />,
      title: "Carbon Footprint Analysis",
      description: "Measure and analyze your carbon footprint with real-time data tracking and detailed insights for better decision-making."
    },
    {
      icon: <FaFileAlt className="text-5xl text-purple-600 mb-4" />,
      title: "Sustainability Reporting",
      description: "Generate comprehensive sustainability reports that comply with international standards and frameworks."
    },
    {
      icon: <FaUsers className="text-5xl text-orange-600 mb-4" />,
      title: "Stakeholder Management",
      description: "Manage relationships with stakeholders and ensure transparent communication of your sustainability initiatives."
    },
    {
      icon: <FaGlobe className="text-5xl text-teal-600 mb-4" />,
      title: "Global Compliance",
      description: "Stay compliant with global sustainability regulations and standards across different regions and industries."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-red-600 mb-4" />,
      title: "Risk Assessment",
      description: "Identify and mitigate environmental and social risks with our advanced risk assessment tools and methodologies."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive sustainability management solutions to help your organization achieve its environmental and social goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of organizations making a positive impact on the environment
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;