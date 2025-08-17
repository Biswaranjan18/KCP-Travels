import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  // WhatsApp chat function
  const openWhatsApp = () => {
    const phoneNumber = '917606828043'; // Your WhatsApp number without '+' or '00'
    const message = 'Hello, I would like to inquire about your services.'; // Default message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 md:pt-24 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header with better spacing */}
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 md:mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          We're here to help! Reach out to us anytime through any of these channels.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Enhanced Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg transform transition-all hover:scale-[1.02] duration-300 col-span-1 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Send us a Message</h3>
            <form className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 md:p-3 text-sm md:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2 md:p-3 text-sm md:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-2 md:p-3 text-sm md:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 md:py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Enhanced Contact Info */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Contact Information</h3>
            
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 p-2 md:p-3 rounded-full">
                <FaPhone className="text-orange-600 text-lg md:text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Call Us</h4>
                <p className="text-gray-600 text-sm md:text-base">+91 12345 67890</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Available 24/7</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-lg">
              <div className="bg-green-100 p-2 md:p-3 rounded-full">
                <FaWhatsapp className="text-green-600 text-lg md:text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">WhatsApp</h4>
                <p className="text-gray-600 text-sm md:text-base">+91 76068 28043</p>
                <button 
                  onClick={openWhatsApp}
                  className="mt-1 md:mt-2 text-xs md:text-sm bg-green-600 hover:bg-green-700 text-white py-1 px-2 md:px-3 rounded-md transition flex items-center"
                >
                  <FaWhatsapp className="mr-1" /> Chat Now
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 p-2 md:p-3 rounded-full">
                <FaEnvelope className="text-blue-600 text-lg md:text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Email</h4>
                <p className="text-gray-600 text-sm md:text-base">contact@odishacabs.com</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-red-50 rounded-lg">
              <div className="bg-red-100 p-2 md:p-3 rounded-full">
                <FaMapMarkerAlt className="text-red-600 text-lg md:text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Our Office</h4>
                <p className="text-gray-600 text-sm md:text-base">123, Infocity Road, Patia</p>
                <p className="text-gray-600 text-sm md:text-base">Bhubaneswar, Odisha 751024</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 p-2 md:p-3 rounded-full">
                <FaClock className="text-purple-600 text-lg md:text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Working Hours</h4>
                <p className="text-gray-600 text-sm md:text-base">Monday - Saturday: 8AM - 10PM</p>
                <p className="text-gray-600 text-sm md:text-base">Sunday: 10AM - 6PM</p>
              </div>
            </div>
          </div>

          {/* Enhanced Google Maps */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Our Location</h3>
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.550607792505!2d85.81352371487372!3d20.29605898638725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909b8e36de7df%3A0x46d4db7c2a34f4c4!2sInfocity%20Rd%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1662032157156!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 md:mt-6 bg-gray-50 p-3 md:p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">How to reach us:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs md:text-sm">
                <li>5 min from Infocity Square</li>
                <li>Near Fortune Towers</li>
                <li>Opposite to Cafe Coffee Day</li>
                <li>Ample parking space available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 md:p-8 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Need immediate assistance?</h3>
          <p className="text-base md:text-xl mb-4 md:mb-6">Call our 24/7 customer support hotline</p>
          <a 
            href="tel:+917606828043" 
            className="inline-block bg-white text-orange-600 font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg hover:bg-gray-100 transition"
          >
            <FaPhone className="inline mr-2" /> Call Now: +91 7606828043
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;