import React, { useRef, useState } from "react";
import { carData } from '../assets/assets.js';

const AllCar = () => {
  const scrollRefs = useRef({});
  const [scrollPosition, setScrollPosition] = useState({});

  const handleScroll = (category) => {
    const container = scrollRefs.current[category];
    if (container) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const position = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollPosition(prev => ({ ...prev, [category]: position }));
    }
  };

  return (
    <div className="px-4 md:px-10 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Fleet Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of vehicles for all your travel needs.
          </p>
        </div>

        {carData.map((section) => (
          <div key={section.category} className="mb-16">
            <div className="flex items-center mb-8 px-2 sm:px-0">
              <div className="w-2 h-8 bg-blue-600 mr-3 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {section.category}
              </h2>
            </div>
            
            {/* Mobile horizontal scroll container */}
            <div className="sm:hidden relative">
              <div 
                ref={el => scrollRefs.current[section.category] = el}
                onScroll={() => handleScroll(section.category)}
                className="overflow-x-auto pb-4 scrollbar-hide"
              >
                <div className="flex space-x-4 w-max px-2">
                  {section.cars.map((car) => (
                    <div
                      key={car.name}
                      className="w-72 flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative h-48 overflow-hidden group">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex flex-col justify-end">
                          <h3 className="text-xl font-bold text-white">{car.name}</h3>
                          <div className="flex items-center mt-1">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-white text-sm">4.8 (120)</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">8h / 80km:</span>
                            <span className="text-gray-800 font-semibold">₹{car.rates["8h80"]}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">12h / 120km:</span>
                            <span className="text-gray-800 font-semibold">₹{car.rates["12h120"]}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Extra Km:</span>
                            <span className="font-medium">₹{car.extraKm}/km</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Extra Hour:</span>
                            <span className="font-medium">₹{car.extraHr}/hr</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Night Charges:</span>
                            <span className="font-medium">₹{car.night}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll indicators */}
              {/* <div className="flex justify-center mt-2 space-x-1">
                {section.cars.map((_, index) => {
                  const position = scrollPosition[section.category] || 0;
                  const dotPosition = index / (section.cars.length - 1);
                  const isActive = position >= dotPosition - 0.1 && position <= dotPosition + 0.1;
                  
                  return (
                    <div 
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? 'w-4 bg-blue-600' : 'w-2 bg-gray-300'
                      }`}
                    />
                  );
                })}
              </div> */}
            </div>
            
            {/* Desktop grid layout */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.cars.map((car) => (
                <div
                  key={car.name}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white">{car.name}</h3>
                      <div className="flex items-center mt-1">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white text-sm">4.8 (120)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">8h / 80km:</span>
                        <span className="text-gray-800 font-semibold">₹{car.rates["8h80"]}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">12h / 120km:</span>
                        <span className="text-gray-800 font-semibold">₹{car.rates["12h120"]}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Extra Km:</span>
                        <span className="font-medium">₹{car.extraKm}/km</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Extra Hour:</span>
                        <span className="font-medium">₹{car.extraHr}/hr</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Night Charges:</span>
                        <span className="font-medium">₹{car.night}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCar;