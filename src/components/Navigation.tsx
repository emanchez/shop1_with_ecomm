'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/shop', label: 'Store' },
    { href: '/media', label: 'Media' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (path: string) => {
    return pathname === path || 
           (path !== '/' && pathname.startsWith(path));
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-900 text-2xl">BrandName</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`py-4 px-2 font-medium border-b-4 transition duration-300 ${
                      isActive(link.href)
                        ? 'text-indigo-600 border-indigo-600'
                        : 'text-gray-500 border-transparent hover:text-indigo-600 hover:border-indigo-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
                  Cart (0)
                </button>
              </li>
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full absolute left-0 right-0 shadow-md`}>
        <ul className="divide-y divide-gray-200">
          {navLinks.map((link) => (
            <li key={`mobile-${link.href}`}>
              <Link
                href={link.href}
                className={`block px-4 py-4 font-medium transition duration-300 ${
                  isActive(link.href)
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-800 hover:bg-indigo-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/cart"
              className="block px-4 py-4 bg-indigo-600 text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart (0)
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;