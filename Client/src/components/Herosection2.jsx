import React from "react";
import backgroundImage from "../assets/Gemini_Generated_Image_stp0v2stp0v2stp0_cleanup.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with increased bottom height on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={backgroundImage}
            alt="Beautiful Odisha landscape"
            className="w-full h-full object-cover object-top md:object-center"
            loading="eager"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '115%', // Increased height on all devices
              objectPosition: 'top' // Ensure top alignment is maintained
            }}
          />
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
            style={{
              height: '115%' // Match the increased image height
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
              <a
                href="#book"
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 group whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Book a Ride
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </a>
              <a
                href="#packages"
                className="relative inline-flex items-center justify-center bg-white/90 text-gray-800 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/30 group whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                View Packages
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </a>
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
        
        /* Mobile-specific image height increase */
        @media (max-width: 768px) {
          .absolute.inset-0.z-0.overflow-hidden div img {
            height: 125%;
          }
          .absolute.inset-0.bg-gradient-to-r {
            height: 125%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;