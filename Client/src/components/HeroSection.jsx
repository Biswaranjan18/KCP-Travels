import React from "react";
import desktopImage from "../assets/Gemini_Generated_Image_stp0v2stp0v2stp0_cleanup.webp";
import mobileImage from "../assets/mobileview.webp";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] sm:h-screen w-full overflow-hidden">
      {/* Background Images - Different for mobile and desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Desktop Image (hidden on mobile) */}
          <img
            src={desktopImage}
            alt="Beautiful Odisha landscape"
            className="hidden sm:block w-full h-full object-cover object-top md:object-center"
            loading="eager"
            style={{
              position: 'absolute',
              height: '115%',
              objectPosition: 'top'
            }}
          />
          
          {/* Mobile Image (shown on mobile) */}
          <img
            src={mobileImage}
            alt="Beautiful Odisha landscape mobile view"
            className="block sm:hidden w-full h-full object-cover object-top"
            loading="eager"
            style={{
              position: 'absolute',
              height: '125%',
              objectPosition: 'top'
            }}
          />
          
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
            style={{
              height: '115%'
            }}
          />
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-5 md:px-12 lg:px-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-5 md:mb-7">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 animate-text">
                Discover Odisha
              </span>
              <br />
              <span className="text-white">with Comfort & Confidence</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-7 md:mb-9">
              Plan your journey from Bhubaneswar to Puri, Konark, and beyond with
              our trusted local experts.
            </p>

            <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
              <Link
  to="book-car"
  className="relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 overflow-hidden group whitespace-nowrap"
>
  {/* Background shine effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
  
  {/* Text container (for z-index control) */}
  <span className="relative z-10 flex items-center">
    Book Now
    {/* Arrow icon that slides on hover */}
    <svg 
      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
  
  {/* Pulse ring effect on hover */}
  <span className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
  
  {/* Shadow effect */}
  <span className="absolute inset-0 shadow-lg shadow-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</Link>
  <Link
  to="packages"
  className="relative inline-flex items-center justify-center bg-white/90 text-gray-800 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-500 overflow-hidden group whitespace-nowrap border border-gray-200 hover:border-transparent"
>
  {/* Globe icon with hover animation */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-700 group-hover:rotate-[30deg]" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
  
  {/* Text with sliding effect */}
  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
    View Packages
  </span>

  {/* Animated background elements */}
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
  
  {/* Subtle gradient overlay */}
  <span className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
  
  {/* Border animation */}
  <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200/50 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100"></span>
  
  {/* Soft shadow */}
  <span className="absolute inset-0 shadow-md shadow-gray-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text {
          background-size: 200% auto;
          animation: text 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;