import React from 'react';
import { FaUserTie, FaMapMarkedAlt, FaHandsHelping, FaLeaf } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Ramesh Kumar',
    role: 'Lead Driver',
    description: '10+ Years Experience | Safety Expert',
    specialty: 'Knows every hidden gem in Odisha',
  },
  {
    name: 'Suresh Sahoo',
    role: 'Cultural Guide',
    description: 'Puri & Konark Specialist',
    specialty: 'Storyteller of Odisha\'s heritage',
  },
  {
    name: 'Priya Das',
    role: 'Tour Coordinator',
    description: 'Local Culture Expert',
    specialty: 'Creates authentic experiences',
  },
];

const OurStory = () => {
  return (
    <section className="px-4 pt-28 pb-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 mb-6">
          <span className="text-orange-600">Our</span> Journey
        </h1>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-25"></div>
          <div className="relative bg-white shadow-2xl rounded-xl p-8 md:p-10 text-left max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <FaMapMarkedAlt className="text-orange-600 text-2xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Discover Our Roots</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-base mb-6">
              KCPTravels was born from a deep love for our home state, Odisha. What began as a small group of friends showing visitors around has grown into Odisha's most trusted travel experience provider.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <FaHandsHelping className="text-orange-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">Our Mission</h3>
                  <p className="text-gray-600 text-sm">To connect travelers with the authentic soul of Odisha through sustainable tourism.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaLeaf className="text-orange-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">Our Promise</h3>
                  <p className="text-gray-600 text-sm">Responsible travel that benefits local communities and preserves our heritage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
<div className="max-w-7xl mx-auto">
  <div className="text-center mb-16 px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Family</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Our team of local experts will make your Odisha experience unforgettable
    </p>
  </div>
  
  {/* Horizontal scroll container for mobile */}
  <div className="md:hidden px-4">
    <div className="overflow-x-auto pb-6 -mx-4">
      <div className="flex space-x-6 px-4" style={{ minWidth: `${teamMembers.length * 300}px` }}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-72"
          >
            <div className="bg-orange-500 h-3"></div>
            <div className="p-6 flex flex-col items-center">
              <div className="bg-orange-100 text-orange-600 w-28 h-28 rounded-full flex items-center justify-center text-4xl mb-6 border-4 border-white shadow-md">
                <FaUserTie />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h4>
              <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-center mb-4">{member.description}</p>
              <div className="bg-gray-50 w-full p-4 rounded-lg">
                <p className="text-sm text-gray-700 italic">"{member.specialty}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Normal grid for desktop */}
  <div className="hidden md:grid gap-10 grid-cols-1 md:grid-cols-3 px-4">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      >
        <div className="bg-orange-500 h-3"></div>
        <div className="p-6 flex flex-col items-center">
          <div className="bg-orange-100 text-orange-600 w-28 h-28 rounded-full flex items-center justify-center text-4xl mb-6 border-4 border-white shadow-md">
            <FaUserTie />
          </div>
          <h4 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h4>
          <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
          <p className="text-gray-600 text-center mb-4">{member.description}</p>
          <div className="bg-gray-50 w-full p-4 rounded-lg">
            <p className="text-sm text-gray-700 italic">"{member.specialty}"</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Values Section */}
<div className="max-w-7xl mx-auto mt-24">
  <div className="bg-gradient-to-r from-teal-700 to-emerald-600 rounded-2xl p-10 text-white shadow-xl">
    <h2 className="text-3xl font-bold mb-8 text-center font-serif">Why Choose KCP Travels?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="bg-white bg-opacity-25 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <svg className="w-8 h-8 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-emerald-50">Safety First</h3>
        <p className="text-teal-100">Certified drivers, well-maintained vehicles, and 24/7 support</p>
      </div>
      <div className="text-center">
        <div className="bg-white bg-opacity-25 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <svg className="w-8 h-8 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-emerald-50">Local Expertise</h3>
        <p className="text-teal-100">Born and raised in Odisha - we know the real hidden treasures</p>
      </div>
      <div className="text-center">
        <div className="bg-white bg-opacity-25 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <svg className="w-8 h-8 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-emerald-50">Fair Pricing</h3>
        <p className="text-teal-100">No hidden charges - transparent costs from start to finish</p>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default OurStory;