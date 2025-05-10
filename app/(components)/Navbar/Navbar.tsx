'use client';

import { useState } from 'react'
import Link from 'next/link'
import SearchModal from "../SearchModal"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Our Blogs', path: '/ourBlog' },
    {
      name: 'Programs',
      path: '#',
      dropdownItems: [
        { name: 'Courses', path: '/courses' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Schedule Test', path: '/schedule-test' }
      ]
    },
    { name: 'Co-working Space', path: '/co-working' }
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">U</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                Upskill Institute
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdownItems ? (
                    <div
                      onMouseEnter={() => setProgramsDropdown(true)}
                      onMouseLeave={() => setProgramsDropdown(false)}
                    >
                      <button className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors relative group">
                        {item.name}
                        <span className="ml-2">▼</span>
                      </button>

                      {programsDropdown && (
                        <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1">
                          {item.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="ml-4 bg-white text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors duration-300 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
              <Link
                href="/online-admission"
                className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <>
                      <button
                        onClick={() => setProgramsDropdown(!programsDropdown)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        {item.name}
                        <span className="ml-2">▼</span>
                      </button>
                      {programsDropdown && (
                        <div className="pl-4">
                          {item.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full mt-2 text-blue-800 bg-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                Search
              </button>
              <Link
                href="/online-admission"
                className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
