import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { plans } from '../assets/assets.js';
import PersonalDetailsForm from "../components/PersionalDetailsForm.jsx";

const TourPlans = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const card = container.children[index];
    if (!card) return;

    const containerWidth = container.clientWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.clientWidth;
    
    const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const startAutoScroll = () => {
    if (isScrollingRef.current) return;
    
    autoScrollRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % plans.length;
      setCurrentIndex(nextIndex);
      scrollToCard(nextIndex);
    }, 3000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [currentIndex]);

  const handleScroll = () => {
    isScrollingRef.current = true;
    clearInterval(autoScrollRef.current);
    clearTimeout(scrollTimeoutRef.current);

    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + (container.clientWidth / 2);
    let closestCard = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((card, index) => {
      const cardCenter = card.offsetLeft + (card.clientWidth / 2);
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestCard = index;
      }
    });

    setCurrentIndex(closestCard);
    
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      startAutoScroll();
    }, 5000);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleBookNow = (plan) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedPlan(null);
  };

  const handleViewDetails = (index) => {
    navigate(`/package_details/${index}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-orange-500">Explore</span> Odisha's Best Tour Plans
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beauty, culture, and adventure with our exclusive tour packages.
          </p>
        </div>

        {/* Mobile horizontal scroll */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory space-x-4"
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[85vw] h-[420px] rounded-xl shadow-lg bg-white overflow-hidden relative"
            >
              {/* Front Side - Image */}
              <div className={`absolute inset-0 transition-all duration-500 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'}`}>
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="mt-2">Starting from {plan.price}</p>
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(index);
                      }}
                      className="py-2 px-4 rounded-lg bg-white/90 text-gray-800 font-medium hover:bg-white transition-all"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(plan);
                      }}
                      className={`py-2 px-4 rounded-lg bg-gradient-to-r ${plan.color} text-white font-medium hover:shadow-lg transition-all`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Back Side - Details */}
              <div 
                className={`absolute inset-0 bg-white p-6 transition-all duration-500 ${
                  hoveredCard === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                } flex flex-col`}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  setHoveredCard(index);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  setHoveredCard(null);
                }}
              >
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${plan.textColor} mb-4`}>{plan.title}</h3>
                  <ul className="space-y-3 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <p className={`text-xl font-bold ${plan.textColor}`}>{plan.price}</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(index);
                      }}
                      className="py-2 px-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:shadow-lg transition-all"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(plan);
                      }}
                      className={`py-2 px-4 rounded-lg bg-gradient-to-r ${plan.color} text-white font-medium hover:shadow-lg transition-all`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="relative h-96 w-full cursor-pointer group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front Side - Image */}
              <div className={`absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform ${hoveredCard === index ? 'opacity-0 rotate-y-180' : 'opacity-100'}`}>
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="mt-2">Starting from {plan.price}</p>
                  <div className="flex space-x-2 mt-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(index);
                      }} 
                      className="py-2 px-4 rounded-lg bg-white/90 text-gray-800 font-medium hover:bg-white transition-all"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(plan);
                      }} 
                      className={`py-2 px-4 rounded-lg bg-gradient-to-r ${plan.color} text-white font-medium hover:shadow-lg transition-all`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Back Side - Details */}
              <div className={`absolute inset-0 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform ${
                hoveredCard === index 
                  ? 'opacity-100 rotate-y-0 pointer-events-auto' 
                  : 'opacity-0 -rotate-y-180 pointer-events-none'
              } flex flex-col`}>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${plan.textColor} mb-4`}>{plan.title}</h3>
                  <ul className="space-y-3 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <p className={`text-2xl font-bold ${plan.textColor}`}>{plan.price}</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(index);
                      }} 
                      className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-medium hover:shadow-lg transition-all"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(plan);
                      }} 
                      className={`py-2 px-4 rounded-lg bg-gradient-to-r ${plan.color} text-white font-medium hover:shadow-lg transition-all`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots for mobile */}
        <div className="md:hidden flex justify-center mt-6 space-x-2">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToCard(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-orange-500 w-6" : "bg-gray-400"
              }`}
              aria-label={`Go to plan ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for Personal Details Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white rounded-2xl max-w-md w-full mx-auto p-6 shadow-xl transform transition-all duration-300">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <PersonalDetailsForm 
              plan={selectedPlan}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .-rotate-y-180 {
          transform: rotateY(-180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
};

export default TourPlans;
