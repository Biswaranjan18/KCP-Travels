import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { FiMessageSquare, FiMail } from 'react-icons/fi';

const FloatingContactButtons = () => {
  const [expanded, setExpanded] = useState(false);
  const [pulse, setPulse] = useState(true);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {/* Main Contact Button */}
      <button
        onClick={() => {
          setExpanded(!expanded);
          setPulse(false);
        }}
        className={`relative w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${pulse ? 'animate-pulse' : ''}`}
      >
        {expanded ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FiMessageSquare className="text-white text-2xl" />
        )}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          !
        </span>
      </button>

      {/* Expanded Buttons */}
      {expanded && (
        <div className="flex flex-col gap-3 animate-fade-in-up">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918260975372"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 group relative"
          >
            <FaWhatsapp className="text-white text-2xl" />
            <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Chat on WhatsApp
            </span>
          </a>

          {/* Phone Call Button */}
          <a
            href="tel:+918260975372"
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 group relative"
          >
            <FaPhoneAlt className="text-white text-xl" />
            <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Call Us Now
            </span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:biswaranjan8637@gmail.com.com"
            className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 group relative"
          >
            <FiMail className="text-white text-xl" />
            <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Email Us
            </span>
          </a>
        </div>
      )}

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingContactButtons;