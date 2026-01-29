'use client';

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About SFM Platform</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Empowering organizations to achieve sustainability goals through innovative ESG management solutions
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            We are a dedicated team committed to making sustainability management accessible and actionable. 
            Our Sustainable Footprint Management platform helps organizations track, measure, and improve their 
            Environmental, Social, and Governance (ESG) metrics. With cutting-edge technology and data-driven 
            insights, we empower businesses to make informed decisions that benefit both their bottom line and the planet.
          </p>
          
          {/* Vision and Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 shadow-xl rounded-xl p-8 border-l-4 border-green-600 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="inline-block bg-green-600 text-white p-4 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To be the global leader in sustainability management technology, enabling every organization 
                to measure, manage, and minimize their environmental impact while maximizing positive social outcomes.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl rounded-xl p-8 border-l-4 border-blue-600 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="inline-block bg-blue-600 text-white p-4 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To provide intuitive, powerful tools that make ESG reporting simple and actionable, 
                helping organizations of all sizes contribute to a sustainable future through data-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Contact Us Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-8">How would you like to contact us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Request a Call */}
            <div className="bg-white p-6 shadow-md rounded-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Request a Call</h3>
              <p className="text-gray-600 mb-4">
                Give us some info so the right person can get back to you.
              </p>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
               
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div className="mb-4">
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <option>Country/Region</option>
                    <option>United States</option>
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>
               
                <button
                  type="submit"
                  className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400"
                >
                  Contact Me
                </button>
              </form>
            </div>

            {/* Give Us a Call */}
            <div className="bg-white p-6 shadow-md rounded-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Give Us a Call</h3>
              <p className="text-gray-600 mb-4 text-lg">
                1-800-664-9073
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">
                  <a href="#" className="text-green-800 hover:underline">
                    Find your local office
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-green-800 hover:underline">
                    Get billing and tech support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-800 hover:underline">
                    Manage billing, licenses, and renewals in Your Account
                  </a>
                </li>
              </ul>
            </div>

            {/* Chat with Us */}
            <div className="bg-white p-6 shadow-md rounded-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Chat with Us</h3>
              <p className="text-gray-600 mb-4">
                Get product info, login help, and live chat with an agent.
              </p>
              <button
                className="bg-green-800 text-white py-2 px-6 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400"
              >
                Let’s Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;