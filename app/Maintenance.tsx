"use client";
import { useState, useEffect } from 'react';

export default function MaintenancePopup() {
  const [showPopup, setShowPopup] = useState(true);

  // Close popup handler
  const handleClose = () => {
    setShowPopup(false);
  };

  // Show popup on page load/reload
  useEffect(() => {
    setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm  z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full animate-fade-in">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-red-600">⚠️ Maintenance Notice</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          Sorry, the website is currently undergoing scheduled maintenance. 
          We'll be back soon! Please check back later.
        </p>
        <button
          onClick={handleClose}
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
        >
          Close This Message
        </button>
      </div>
    </div>
  );
}