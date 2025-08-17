import React from 'react';
import { FaUserShield, FaCarAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaUserShield className="w-full h-full" />,
      title: 'Verified Professionals',
      description: 'Our drivers undergo rigorous background checks and training to ensure your safety throughout the journey.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: <FaCarAlt className="w-full h-full" />,
      title: 'Premium Vehicles',
      description: 'Fleet of well-maintained, air-conditioned cars sanitized after every trip for your comfort.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: <FaMapMarkedAlt className="w-full h-full" />,
      title: 'Local Experts',
      description: 'Drivers who know Odisha intimately - its hidden gems, best eateries, and cultural insights.',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
  ];

  return (
    <section className="relative py-10 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Exceptional Service <span className="text-orange-500">Guaranteed</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're committed to making your Odisha experience comfortable, safe, and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110`}>
                <div className={`w-10 h-10 ${feature.color}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center flex-grow">
                {feature.description}
              </p>
              <div className="mt-6 flex justify-center">
                <span className={`h-1 w-8 rounded-full ${feature.bg} transition-all duration-300 group-hover:w-16 group-hover:${feature.color.replace('text', 'bg')}`}></span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => navigate("/book-car")} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:shadow-md">
            <FiHeart className="mr-2 h-5 w-5" />
            Book With Confidence
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;