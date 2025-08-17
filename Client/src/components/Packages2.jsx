import React, { useRef, useEffect, useState } from "react";

const plans = [
  {
    title: "Plan A: BBSR to Puri (1 Day)",
    features: [
      "Pickup from Bhubaneswar hotel/airport",
      "Visit Dhauli Peace Pagoda",
      "Puri Jagannath Temple darshan",
      "Lunch at pure veg restaurant",
      "Puri Beach visit",
      "Return to Bhubaneswar by evening",
    ],
    price: "₹2,999",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Plan B: BBSR to Puri & Konark (2 Days)",
    features: [
      "Day 1: BBSR to Puri with temple visit",
      "Overnight stay at Puri (3-star hotel)",
      "Day 2: Konark Sun Temple visit",
      "Chandrabhaga Beach",
      "Pipli applique village",
      "Return to Bhubaneswar",
    ],
    price: "₹5,499",
    color: "bg-green-100",
    textColor: "text-green-800",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Plan C: Koraput Adventure (3 Days)",
    features: [
      "Day 1: BBSR to Koraput (scenic drive)",
      "Visit Duduma Waterfalls",
      "Day 2: Gupteswar Cave Temple",
      "Sabara Srikhetra temple",
      "Day 3: Tribal village visit",
      "Return to Bhubaneswar",
    ],
    price: "₹9,999",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
];

const TourPlans = () => {
  const scrollContainerRef = useRef(null);
  const [currentPlan, setCurrentPlan] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const scrollToPlan = (index) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const plan = container.children[index];
    if (!plan) return;

    const containerWidth = container.clientWidth;
    const planLeft = plan.offsetLeft;
    const planWidth = plan.clientWidth;
    
    const scrollPosition = planLeft - (containerWidth - planWidth) / 2;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!isAutoScrolling || isHovering) return;

    const interval = setInterval(() => {
      const nextPlan = (currentPlan + 1) % plans.length;
      setCurrentPlan(nextPlan);
      scrollToPlan(nextPlan);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPlan, isAutoScrolling, isHovering]);

  const handleScroll = () => {
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + (container.clientWidth / 2);
    let closestPlan = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((plan, index) => {
      const planCenter = plan.offsetLeft + (plan.clientWidth / 2);
      const distance = Math.abs(planCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestPlan = index;
      }
    });

    setCurrentPlan(closestPlan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2374AA] to-[#0d4b75] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Odisha's Best Tour Plans</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Carefully crafted itineraries to experience the soul of Odisha
          </p>
        </div>

        {/* Mobile horizontal scroll container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
          className="md:hidden flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory space-x-4"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[85vw] rounded-2xl shadow-xl ${plan.color} p-6 flex flex-col justify-between transform transition-all duration-300 ${
                currentPlan === index ? "scale-105" : "scale-95 opacity-90"
              }`}
            >
              <div>
                <h2 className={`text-xl font-bold ${plan.textColor} mb-4`}>{plan.title}</h2>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((item, i) => (
                    <li key={i} className="text-gray-800 flex items-start">
                      <span className={`${plan.textColor} font-bold mr-2`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <p className={`${plan.textColor} text-3xl font-bold mb-4`}>{plan.price}</p>
                <button className={`${plan.buttonColor} text-white font-bold py-3 px-6 rounded-full w-full transition-all hover:shadow-lg`}>
                  Book This Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl ${plan.color} p-8 flex flex-col justify-between transform hover:scale-105 transition-all duration-300 h-full`}
            >
              <div>
                <h2 className={`text-2xl font-bold ${plan.textColor} mb-6`}>{plan.title}</h2>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((item, i) => (
                    <li key={i} className="text-gray-800 flex items-start">
                      <span className={`${plan.textColor} font-bold mr-2`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <p className={`${plan.textColor} text-3xl font-bold mb-6`}>{plan.price}</p>
                <button className={`${plan.buttonColor} text-white font-bold py-3 px-8 rounded-full w-full transition-all hover:shadow-lg`}>
                  Book This Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots for mobile */}
        <div className="md:hidden flex justify-center mt-8 space-x-2">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPlan(index);
                scrollToPlan(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPlan === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to plan ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#2374AA] transition-all duration-300 flex items-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contact for Custom Plans
          </button>
        </div>
      </div>

      <style jsx>{`
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