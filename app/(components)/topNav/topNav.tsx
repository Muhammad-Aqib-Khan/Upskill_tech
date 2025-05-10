'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type TopNavBarProps = {
  showTopNav: boolean;
};

export default function TopNav({ showTopNav }: TopNavBarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <nav
        className={`bg-gradient-to-r from-blue-900 to-blue-700 text-white transition-all duration-300 ease-in-out z-50 ${
          showTopNav ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            {/* Left side */}
            <div className="flex items-center space-x-6">
              <a
                href="tel:+12345678900"
                className="flex items-center hover:text-blue-200 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1 234 567 8900
              </a>
              <a
                href="upskilltechtandlianwala@gmail.com"
                className="flex items-center hover:text-blue-200 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                upskilltechtandlianwala@gmail.com
              </a>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                'Online Admission',
                'How to Pay',
                'Verification',
                'Job Placement',
                'Ambassador Programs',
                'Success Stories',
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium hover:text-blue-200 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="bg-white text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors duration-300 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
        </div>
      )}
    </>
  );
}
