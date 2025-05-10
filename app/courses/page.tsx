
"use client";

import { useState, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SearchAndFilter from '../(components)/SearchAndFilter';
export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Web Development',
  'Ecommerce shopify, Google ads,Facebook ads',
    "youtube Automation",
    "Digital Marketing",
    'Design',
    'Marketing',
    'Mobile Development',
    'Cloud Computing',
    'Cybersecurity',
    'Business',
    'AI & ML',
    "graphic design"
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      duration: '6 months',
      level: 'Intermediate',
      image: '/courses/web.png ',
      description: 'Master modern web development with MERN stack (MongoDB, Express.js, React.js, Node.js).',
      features: ['Live Projects', '24/7 Support', 'Industry Experts', 'Job Placement']
    },
    {
      id: 2,
      title: 'Ecommerce shopify,Google,Facebook ads',
      duration: '3 months',
      level: 'Beginner to Intermediate',
      image: '/courses/ecommer.jpeg',
      description: 'Learn to build and manage an online store using Shopify, Google Ads, and Facebook Ads.',
      features: ['Shopify Setup', 'Ad Campaigns', 'Analytics']
    }
,
    {
      id: 3,
      title: 'Graphic design,UI/UX Design',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      image: '/courses/graphic.avif',
      description: 'Design user-centric interfaces using Figma, Adobe XD, and modern design principles.',
      features: ['Portfolio Building', 'Design Tools', 'Live Projects', 'Industry Mentors']
    },
    {
      id: 4,
      title: 'Digital Marketing',
      duration: '3 months',
      level: 'Beginner',
      image: '/courses/digital.webp',
      description: 'Master SEO, SEM, Social Media Marketing, and Content Strategy.',
      features: ['Google Certification', 'Real Campaigns', 'Analytics', 'Market Research']
    },
    {
      id: 5,
      title: 'Mobile App Development',
      duration: '6 months',
      level: 'Intermediate',
      image: '/courses/app.jpg',
      description: 'Build iOS and Android apps using React Native and Flutter.',
      features: ['Cross-platform Dev', 'App Store Publishing', 'UI Frameworks', 'API Integration']
    },
    {
      id: 6,
      title: 'crypto trading ,forex trading',
      duration: '3 months',
      level: 'Beginner',
      image: '/courses/crypto.avif',
      description: 'in this course you will learn how to trade in crypto and forex market we will lead and provides you signals to trade when to buy and when to sell',
      features: ['Documentation', 'Style Guides', 'Tools Training']
    },
    {
      id: 7,
      title: 'Ai prompt engineering',
      duration: '6 months',
      level: 'Intermediate',
      image: '/courses/prompt.webp',
      Description: 'prompt engineering with ChatGPT and other AI tools the most demanding skill in the market you must need to know ',
      features: ['Live Projects', '24/7 Support', 'Industry Experts', 'Job Placement']
    },
    {
    id: 8,
    title : 'youtube Automation',
    duration: '3 months',
    level: 'Beginner to Intermediate',
    image: '/courses/youtube.jpg',
    description: 'Learn to create and manage a successful YouTube channel,including seo and monetization strategies.',
    features: ['Content Strategy', 'Video Editing',, 'Monetization Techniques']
    },



    {
      id: 9,
      title: 'Business Intelligence',
      duration: '4 months',
      level: 'Intermediate',
      image: '/courses/bussines.png',
      description: 'Master data visualization and business analytics tools.',
      features: ['Tableau', 'Power BI', 'SQL', 'Data Modeling']
    },

    {
      id: 10,
      title: 'Project Management',
      duration: '4 months',
      level: 'Intermediate',
      image: '/courses/project_management.png',
      description: 'Master Agile, Scrum, and traditional project management.',
      features: ['PMP Prep', 'Agile/Scrum', 'Risk Management', 'Team Leadership']
    },
    {
      id: 11,
      title: 'Technical Writing',
      duration: '3 months',
      level: 'Beginner',
      image: '/courses/technical.png',
      description: 'Create technical documentation and API references.',
      features: ['Documentation', 'API Writing', 'Style Guides', 'Tools Training']
    },
    {
      id: 12,
      title: 'client Hunting',
      duration: '1 months',
      level: 'Beginner',
      image: '/courses/clint.jpg',
      description: 'Create technical documentation and API references.',
      features: ['Documentation', 'API Writing', 'Style Guides', 'Tools Training']
    }
  ];

  // Add categories to your existing courses data
  const coursesWithCategories = courses.map(course => ({
    ...course,
    category: getCategoryForCourse(course.title) // Helper function to assign categories
  }));

  // Filter courses based on search and category
  const filteredCourses = useMemo(() => {
    return coursesWithCategories.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (course.description ?? '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [coursesWithCategories, searchQuery, selectedCategory]);

  return (
    <>
      <Head>
        <title>Courses - Upskill Institute</title>
        <meta name="description" content="Explore our wide range of professional courses" />
      </Head>

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Professional Courses</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Transform your career with our industry-focused professional courses designed to give you the edge in today's competitive market.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SearchAndFilter
            categories={categories}
            onSearch={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            selectedCategory={selectedCategory}
          />

          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl text-gray-600">No courses found matching your criteria</h3>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform border-4 border-blue-900/20 hover:scale-105">
                  <div className="relative h-48  ">
                    <div className="absolute inset-0 bg-blue-900/20 " />
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-zinc-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="mr-4">⏱ {course.duration}</span>
                      <span>📊 {course.level}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="space-y-2 mb-6">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                
                      <Link
                        href="/online-admission"
                       className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Enroll Now →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Helper function to assign categories
function getCategoryForCourse(title: string): string {
  const categoryMap: { [key: string]: string } = {
    'Web Development': 'Web Development',
    'Data Science': 'Data Science',
    'UI/UX Design': 'Design',
    'Digital Marketing': 'Marketing',
    'Mobile App Development': 'Mobile Development',
    'Cloud Computing': 'Cloud Computing',
    'Cybersecurity': 'Cybersecurity',
    'Business Intelligence': 'Business',
    'Artificial Intelligence': 'AI & ML',
    // Add mappings for other courses
  };

  return categoryMap[title] || 'Other';
}
