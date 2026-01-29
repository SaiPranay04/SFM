'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from '../../utils/toast';
import { FaDownload, FaUpload, FaFileExcel } from 'react-icons/fa';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
          selectedFile.type === 'application/vnd.ms-excel') {
        setFile(selectedFile);
        toast.info(`File selected: ${selectedFile.name}`);
      } else {
        toast.error('Please select a valid Excel file (.xlsx or .xls)');
        e.target.value = null;
      }
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    
    if (!file) {
      toast.error('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);
    try {
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('File uploaded successfully!');
      setFile(null);
      // Reset file input
      document.getElementById('file-input').value = null;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('File upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="grid gap-6 mt-14">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2 text-green-800">Upload Metrics Data</h1>
          <p className="text-gray-600 mb-8">Upload your ESG metrics data using our Excel template</p>
          
          {/* Download Template Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <FaFileExcel className="text-4xl text-blue-600 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Step 1: Download Template</h3>
                <p className="text-gray-700 mb-4">
                  Download our Excel template and fill in your ESG metrics data. The template includes all required fields and formats.
                </p>
                <a href="/template.xlsx" download="template.xlsx">
                  <button 
                    type="button" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2 font-semibold"
                  >
                    <FaDownload /> Download Excel Template
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <FaUpload className="text-4xl text-green-600 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Step 2: Upload Your Data</h3>
                <p className="text-gray-700 mb-4">
                  Once you've filled in the template, upload it here to import your ESG metrics data.
                </p>
                
                <form onSubmit={handleFileUpload} className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-green-500 transition-colors">
                    <input
                      id="file-input"
                      type="file"
                      accept=".xlsx, .xls"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                    />
                    {file && (
                      <p className="mt-2 text-sm text-green-600 font-medium">
                        ✓ Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </p>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={!file || isUploading}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2"
                  >
                    <FaUpload /> {isUploading ? 'Uploading...' : 'Upload Excel File'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
