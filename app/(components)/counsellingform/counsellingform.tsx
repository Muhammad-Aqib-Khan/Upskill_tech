'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const images = [
'/upskill1.webp',
'/upskill2.jpg',
];

const CounselingForm: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-[#072d5c] text-white p-6 rounded-lg overflow-hidden">
      {/* Image Slider */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto">
        <Image
          src={images[currentImage]}
          alt="Counseling Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Get a Free Counseling Session</h2>
        <p>Complete the form below, and one of our counselors will promptly get in touch with you.</p>

        <form className="space-y-3">
          <div className="flex gap-3">
            <input type="text" placeholder="Full Name" className="flex-1 p-2 rounded bg-white text-black" />
            <input type="text" placeholder="Course Interested" className="flex-1 p-2 rounded bg-white text-black" />
          </div>

          <div className="flex gap-3">
            <input type="text" placeholder="Contact No" className="flex-1 p-2 rounded bg-white text-black" />
            <input type="email" placeholder="Enter Email Address" className="flex-1 p-2 rounded bg-white text-black" />
          </div>

          <div className="flex gap-3">
            <select className="flex-1 p-2 rounded bg-white text-black">
              <option>Pakistan</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <input type="text" placeholder="Your City" className="flex-1 p-2 rounded bg-white text-black" />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe" className="text-sm">Subscribe to newsletter</label>
          </div>

          <button
            type="submit"
            className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full mt-4"
          >
            Apply Now
          </button>
        </form>
      </div>


    </div>
  );
};

export default CounselingForm;
