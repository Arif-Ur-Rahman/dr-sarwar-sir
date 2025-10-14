// components/Navbar.tsx (Alternative)
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Service', href: '#service' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full  backdrop-blur-sm border-b border-[#11121D] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Name/Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-sm font-bold text-white tracking-normal leading-[15px]">
              <span className='text-[#B94A5B]'>ARAFAT</span> HOSSAIN SOBUJ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleItemClick(item.name)}
                  className={`px-4 py-2 text-[11px] font-roboto font-semibold  transition-all duration-200 rounded-lg ${
                    activeItem === item.name
                      ? 'text-[#B94A5B] underline underline-offset-[18.5px] decoration-2 decoration-gradient-to-r from-[#F94A5B] to-[#6A4FFF]'
                      : 'text-white hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleItemClick(item.name)}
                className={`block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                  activeItem === item.name
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;