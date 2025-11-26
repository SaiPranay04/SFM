import React, { useState } from 'react';
import axios from 'axios';
import { toast } from '../../utils/toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: 'United States',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const contactHandler = async (e) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone_number) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/api/contacts', formData);
      console.log('Contact saved successfully:', response.data);
      toast.success('Thank you! We will contact you soon.');
      
      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: 'United States',
      });
    } catch (error) {
      console.error('There was an error saving the contact!', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
            <form onSubmit={contactHandler}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
             
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone *"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <select
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Other</option>
                </select>
              </div>
           
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 focus:ring-2 focus:ring-green-500 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Contact Me'}
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
  );
};

export default Contact;