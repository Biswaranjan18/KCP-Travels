import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonalDetailsForm  from "../components/PersionalDetailsForm";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const BookRide = () => {
  const [tripType, setTripType] = useState('one-way');console.log("tripType2",tripType)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showformData, setShowformData] = useState(false);
  const { tripDetails, setTripDetails } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTripTypeChange = (type) => {
     setTripType(type);
    setTripDetails(prev => ({
      ...prev,
      tripType: type,
      to: type === 'local' ? '' : prev.to,
      returnDate: type === 'round-trip' ? prev.returnDate : '',
      returnTime: type === 'round-trip' ? prev.returnTime : '',
      returnTimePeriod: type === 'round-trip' ? prev.returnTimePeriod : 'AM',
      hours: type === 'local' ? '1' : prev.hours,
      packageType: type === 'package' ? 'Select' : 'select',
      pickupTime: type === 'local' ? '10:00' : prev.pickupTime,
      timePeriod: type === 'local' ? 'AM' : prev.timePeriod
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("tripType1",tripType)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowformData(true);
    }, 1500);
  };

  const closeformData = () => {
    setShowformData(false);
  };

  const openWhatsApp = () => {
    let message = `Hi, I want to book a ride:\n`;
    
    if (tripType === 'one-way' || tripType === 'round-trip') {
      message += `From: ${tripDetails.from || 'Not specified'}\n`;
      message += `To: ${tripDetails.to || 'Not specified'}\n`;
      message += `Date: ${tripDetails.pickupDate || 'Not specified'}\n`;
      message += `Time: ${tripDetails.pickupTime || ''} ${tripDetails.timePeriod}\n`;
      if (tripType === 'round-trip') {
        message += `Return Date: ${tripDetails.returnDate || 'Not specified'}\n`;
        message += `Return Time: ${tripDetails.returnTime || ''} ${tripDetails.returnTimePeriod}\n`;
      }
    } else if (tripType === 'local') {
      message += `Location: ${tripDetails.from || 'Not specified'}\n`;
      message += `Date: ${tripDetails.pickupDate || 'Not specified'}\n`;
      message += `Time: ${tripDetails.pickupTime || ''} ${tripDetails.timePeriod}\n`;
      message += `Duration: ${tripDetails.hours} hours\n`;
    } else if (tripType === 'package') {
      message += `Package: ${tripDetails.packageType}\n`;
      message += `Date: ${tripDetails.pickupDate || 'Not specified'}\n`;
      message += `Time: ${tripDetails.pickupTime || ''} ${tripDetails.timePeriod}\n`;
    }
    
    message += `Car Type: ${tripDetails.carType}\n`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917606828043?text=${encodedMessage}`, '_blank');
  };

  const packageOptions = [
    { value: '', label: 'Select' },
    { value: '8hr/80km', label: '8 hours / 80 km' },
    { value: '12hr/120km', label: '12 hours / 120 km' },
  ];

  const cityOptions = [
    { value: '', label: 'Select City/Town' },
    { value: 'bhubaneswar', label: 'Bhubaneswar, Odisha' },
    { value: 'cuttack', label: 'Cuttack, Odisha' },
    { value: 'puri', label: 'Puri, Odisha' },
    { value: 'konark', label: 'Konark, Odisha' },
    { value: 'sambalpur', label: 'Sambalpur, Odisha' },
    { value: 'berhampur', label: 'Berhampur, Odisha' },
    { value: 'rourkela', label: 'Rourkela, Odisha' }
  ];

  const durationOptions = [
    { value: '1', label: 'Select' },
    { value: '8', label: '8 Hours / 80 Kms' },
    { value: '12', label: '12 Hours / 120 Kms' },
  ];

  const timeOptions = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 1;
    return hour < 10 ? `0${hour}:00` : `${hour}:00`;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <div className="h-16 bg-white shadow-sm"></div>
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Left Section - Visual Appeal */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white flex flex-col justify-center relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://img.icons8.com/ios/100/000000/car--v1.png')] bg-repeat bg-[length:100px_100px]"></div>
          </div>
          
          <div className="relative z-10 max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-white">Explore Odisha in Comfort</h1>
            <p className="text-xl mb-8 text-blue-100">Premium car rentals with trusted drivers</p>
            
            {/* Pricing Information Box */}
            <div className="mb-8 p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <h3 className="text-xl font-semibold mb-3 text-black">Transparent Pricing</h3>
              <ul className="space-y-2 text-black">
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-90 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span>Includes driver, fuel, and tolls</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-90 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span>No hidden charges</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-90 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                  </div>
                  <span>Parking fees are extra</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-90 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
                    </svg>
                  </div>
                  <span>GST applicable as per government norms</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition shadow-lg mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Instant Quote on WhatsApp
            </motion.button>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-90 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">24/7 Availability</h3>
                  <p className="text-blue-100">Book anytime, anywhere</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white bg-opacity-90 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">No Hidden Costs</h3>
                  <p className="text-blue-100">Transparent pricing upfront</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white bg-opacity-90 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Verified Drivers</h3>
                  <p className="text-blue-100">Safe and reliable service</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Booking Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-center justify-center p-6"
        >
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Ride</h2>
              <p className="text-gray-600 mb-6">Fill in your trip details</p>
              
              {/* Trip Type Selector with Icons */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => handleTripTypeChange('one-way')}
                  className={`flex flex-col items-center py-3 px-2 rounded-lg font-medium text-sm transition ${
                    tripType === 'one-way' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  One Way
                </button>
                
                <button
                  type="button"
                  onClick={() => handleTripTypeChange('round-trip')}
                  className={`flex flex-col items-center py-3 px-2 rounded-lg font-medium text-sm transition ${
                    tripType === 'round-trip' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                  Round Trip
                </button>
                
                <button
                  type="button"
                  onClick={() => handleTripTypeChange('local')}
                  className={`flex flex-col items-center py-3 px-2 rounded-lg font-medium text-sm transition ${
                    tripType === 'local' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Local Trip
                </button>
                
                <button
                  type="button"
                  onClick={() => handleTripTypeChange('package')}
                  className={`flex flex-col items-center py-3 px-2 rounded-lg font-medium text-sm transition ${
                    tripType === 'package' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                  Taxi Package
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  {/* Pickup Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {tripType === 'local' ? 'Pickup City/Town' : 'Pickup Location'}
                    </label>
                    <div className="relative">
                      {tripType === 'local' ? (
                        <select
                          name="from"
                          className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
                          value={tripDetails.from}
                          onChange={handleChange}
                          required
                        >
                          {cityOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="from"
                          placeholder="Enter pickup location"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          value={tripDetails.from}
                          onChange={handleChange}
                          required
                        />
                      )}
                      <div className="absolute left-3 top-3.5 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      {tripType === 'local' && (
                        <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Destination */}
                  {(tripType === 'one-way' || tripType === 'round-trip') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="to"
                          placeholder="Enter drop location"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          value={tripDetails.to}
                          onChange={handleChange}
                          required
                        />
                        <div className="absolute left-3 top-3.5 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Package Type */}
                  {tripType === 'package' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                      <div className="relative">
                        <select
                          name="packageType"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
                          value={tripDetails.packageType}
                          onChange={handleChange}
                          required
                        >
                          {packageOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                          </svg>
                        </div>
                        <div className="absolute left-3 top-3.5 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Duration */}
                  {tripType === 'local' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <div className="relative">
                        <select
                          name="hours"
                          className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
                          value={tripDetails.hours}
                          onChange={handleChange}
                          required
                        >
                          {durationOptions.map(option => (
                            <option key={option.value} value={option.value} >
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                          </svg>
                        </div>
                        <div className="absolute left-3 top-3.5 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Pickup Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="pickupDate"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          value={tripDetails.pickupDate}
                          onChange={handleChange}
                          required
                        />
                        <div className="absolute left-3 top-3.5 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pickup Time with AM/PM */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <select
                            name="pickupTime"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
                            value={tripDetails.pickupTime}
                            onChange={handleChange}
                            required
                          >
                            {timeOptions.map(time => (
                              <option key={time} value={time} >
                                {time}
                              </option>
                            ))}
                          </select>
                          <div className="absolute left-3 top-3.5 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                          <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <select 
                            name="timePeriod"
                            value={tripDetails.timePeriod}
                            onChange={handleChange}
                            className="border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Return Date and Time */}
                  {tripType === 'round-trip' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                        <div className="relative">
                          <input
                            type="date"
                            name="returnDate"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            value={tripDetails.returnDate}
                            onChange={handleChange}
                            required
                          />
                          <div className="absolute left-3 top-3.5 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Return Time</label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <select
                              name="returnTime"
                              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
                              value={tripDetails.returnTime}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select</option>
                              {timeOptions.map(time => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                            <div className="absolute left-3 top-3.5 text-gray-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </div>
                            <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <select 
                              name="returnTimePeriod"
                              value= {tripDetails.returnTimePeriod}
                              onChange={handleChange}
                              className="border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Car Type</label>
                      <div className="relative">
                        <select
                          name="carType"
                          className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
                          value={tripDetails.carType}
                          onChange={handleChange}
                        >
                          <option>Sedan (4-seater)</option>
                          <option>SUV</option>
                          <option>Hatchback</option>
                          <option>Luxury</option>
                        </select>
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                          </svg>
                        </div>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition shadow-lg ${
                      isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        Confirm Booking
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Personal Details Modal */}
      {showformData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <button
              onClick={closeformData}
              className="absolute -top-10 -right-10 text-white hover:text-gray-200 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <PersonalDetailsForm  tripDetails={tripDetails}/>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BookRide;