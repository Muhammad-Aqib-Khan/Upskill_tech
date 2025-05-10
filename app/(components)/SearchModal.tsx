import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  link: string;
  category: string;
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const searchData: SearchResult[] = [
    // Courses
    { title: 'Full Stack Web Development', link: '/courses/web-development', category: 'Courses' },
    { title: 'Data Science & Analytics', link: '/courses/data-science', category: 'Courses' },
    { title: 'UI/UX Design', link: '/courses/ui-ux', category: 'Courses' },
    { title: 'Digital Marketing', link: '/courses/digital-marketing', category: 'Courses' },
    { title: 'Cybersecurity Expert', link: '/courses/cybersecurity', category: 'Courses' },

    // Certifications
    { title: 'AWS Cloud Practitioner', link: '/certifications/aws', category: 'Certifications' },
    { title: 'Google Project Management', link: '/certifications/google-pm', category: 'Certifications' },
    { title: 'Microsoft Azure Administrator', link: '/certifications/azure', category: 'Certifications' },
    { title: 'CompTIA Security+', link: '/certifications/comptia', category: 'Certifications' },

    // Services
    { title: 'Job Placement Services', link: '/job-placement', category: 'Services' },
    { title: 'Testing Services', link: '/testing-services', category: 'Services' },
    { title: 'Co-working Space', link: '/co-working', category: 'Services' },
    { title: 'Student Ambassador Program', link: '/ambassador-programs', category: 'Services' },

    // Information
    { title: 'About Us', link: '/about', category: 'Information' },
    { title: 'Success Stories', link: '/success-stories', category: 'Information' },
    { title: 'Contact Us', link: '/contact', category: 'Information' },
    { title: 'Online Admission', link: '/online-admission', category: 'Information' },
    { title: 'How to Pay', link: '/how-to-pay', category: 'Information' },
    { title: 'Certificate Verification', link: '/verification', category: 'Information' }
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl relative">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search courses, certifications, and more..."
              className="w-full px-4 py-2 text-lg focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto p-4">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.link}
                className="block p-3 hover:bg-gray-50 rounded-lg"
                onClick={onClose}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{result.title}</span>
                  <span className="text-sm text-gray-500">{result.category}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {searchQuery && results.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No results found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
