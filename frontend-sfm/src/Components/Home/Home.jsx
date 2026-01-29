'use client';

import React from 'react';
import { Link } from '../../lib/navigation';
import backgroundImage from '../../Assets/wallpaper.jpg';
import Featureimg from '../../Assets/Statistics investment icon.jpg';
import Reportimg from '../../Assets/Report Icon.jpg';
import Actionimg from '../../Assets/download.jpg';
const Home = () => {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      >
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate_animated animate_fadeIn text-black">
            Welcome to Sustainability Footprint Management
          </h1>
          <p className="text-lg lg:text-xl mb-8 opacity-90 animate_animated animatefadeIn animate_delay-1s text-black">
            Empowering Sustainable Futures for a Better World
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/calculator">
              <button className="bg-green-600 text-white py-4 px-10 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg animate_animated animate_bounceInUp font-bold text-lg">
                🌍 Calculate Your Footprint
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-yellow-500 text-white py-4 px-10 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg animate_animated animate_bounceInUp font-bold text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <img src={Featureimg} alt="Feature 1" className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-semibold mb-2">Data Tracking</h3>
              <p className="text-gray-700">Monitor your carbon footprint with real-time data tracking for better decision-making.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <img src={Reportimg} alt="Feature 2" className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-semibold mb-2">Custom Reports</h3>
              <p className="text-gray-700">Generate customized reports to analyze your sustainability progress and areas for improvement.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <img src={Actionimg} alt="Feature 3" className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-gray-700">Receive tailored advice and actionable insights to reduce your environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-8">We are committed to empowering individuals and organizations to adopt sustainable practices. Our team brings a wealth of experience and a passion for positive environmental change.</p>
          <Link to="/about">
            <button className="bg-green-800 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8">Start your journey towards a greener, more sustainable future today. Every step counts!</p>
          <Link to="/get-started">
            <button className="bg-green-800 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;