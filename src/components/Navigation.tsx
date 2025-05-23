'use client'
import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && !(event.target as Element).closest('.mobile-menu, .mobile-menu-button')) {
                setIsMenuOpen(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-900 text-2xl">BrandName</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="/home" className="py-4 px-2 text-gray-900 font-medium border-b-4 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition duration-300">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="py-4 px-2 text-gray-500 font-medium border-b-4 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition duration-300">Store</a>
                            </li>
                            <li>
                                <a href="#" className="py-4 px-2 text-gray-500 font-medium border-b-4 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition duration-300">Media</a>
                            </li>
                            <li>
                                <a href="#" className="py-4 px-2 text-gray-500 font-medium border-b-4 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition duration-300">About</a>
                            </li>
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
                            onClick={toggleMenu}
                            className="outline-none mobile-menu-button"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
             <div className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} transition-all duration-300 overflow-hidden mobile-menu md:hidden`}>
                <ul className="divide-y divide-gray-200">
                    <li>
                        <a href="/home" className="block px-4 py-4 text-gray-800 hover:bg-indigo-50 font-medium transition duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/shop" className="block px-4 py-4 text-gray-800 hover:bg-indigo-50 font-medium transition duration-300">
                            Store
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-4 text-gray-800 hover:bg-indigo-50 font-medium transition duration-300">
                            Media
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-4 text-gray-800 hover:bg-indigo-50 font-medium transition duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-4 bg-indigo-600 text-white font-medium">
                            Cart (0)
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;