import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CompanyP_logo from '../assets/title logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // React Router hook to get current path

  const closeMobileMenu = () => setIsOpen(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = 'tel:+917606828043';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Book a Car', path: '/book-car' },
    { name: 'Custom Tour', path: '/custom-tour' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // SVG Icons
  const MenuIcon = () => (
    <svg className="h-7 w-7 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="h-7 w-7 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="h-5 w-5 mr-2 text-blue-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-0' : 'bg-white/95 backdrop-blur-sm py-2'}`}>
      <div className="px-6 md:px-12 lg:px-24 mx-auto w-full">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group relative" onClick={closeMobileMenu}>
              <img 
                src={CompanyP_logo} 
                alt="Company Logo"
                className="h-16 w-auto transition-all duration-300 group-hover:opacity-90"
              />
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 md:mx-8">
            <div className="flex space-x-1">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  onClick={closeMobileMenu}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 relative ${
                    isActive(path)
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {name}
                  <span className={`block h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 origin-left ${
                    isActive(path) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-75'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-base font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <PhoneIcon />
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-all"
              aria-label="Menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-12 lg:px-24 pt-2 pb-6 space-y-2 bg-white border-t border-slate-100 shadow-inner">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                isActive(path)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
