import React, { useState, useEffect, useContext } from "react";
import { cars } from "../assets/assets.js";
import { AppContext } from '../context/AppContext';
import PersonalDetailsForm from '../components/PersionalDetailsForm.jsx'; // Import the form component

const CarDropdown = ({ packageIndex = 0, onCarSelect, onPrevious }) => {
  const packageCars = cars[packageIndex] || [];
  const { selectedCar, setSelectedCar } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    if (packageCars.length > 0) {
      const defaultCar = packageCars[0];
      setSelectedCar(defaultCar);
      if (onCarSelect) {
        onCarSelect(defaultCar);
      }
    }
  }, [packageIndex, packageCars, onCarSelect]);

  const handleChange = (event) => {
    const selected = packageCars.find(car => car.name === event.target.value);
    setSelectedCar(selected);
    if (onCarSelect) {
      onCarSelect(selected);
    }
  };

  const handleBookNow = () => {
    setShowForm(true);
    setBookingSuccess(false);
  };

  const handleFormSubmit = (formData) => {
    // Here you would typically send data to your backend
    console.log('Booking details:', {
      car: selectedCar,
      customer: formData
    });
    
    // Simulate successful booking
    setBookingSuccess(true);
    setTimeout(() => {
      setShowForm(false);
      setBookingSuccess(false);
    }, 3000);
  };

  if (packageCars.length === 0) {
    return (
      <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
        <p className="text-gray-500 text-center py-4">
          No vehicles available for this package.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Package {packageIndex + 1}
              </span>
            </div>

            <div className="mb-4">
              <label htmlFor="car-select" className="block text-sm font-medium text-gray-700 mb-1">
                Select vehicle:
              </label>
              <select
                id="car-select"
                value={selectedCar?.name || ""}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                {packageCars.map((car) => (
                  <option key={car.name} value={car.name}>
                    {car.name} 
                  </option>
                ))}
              </select>
            </div>

            {selectedCar && (
              <>
                <div className="mb-4">
                  <img
                    src={selectedCar.img}
                    alt={selectedCar.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>

                <div className="mb-3">
                  <h3 className="font-medium text-gray-800">{selectedCar.name}</h3>
                  <p className="text-lg font-bold text-green-600">
                    ₹{selectedCar.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCar.features.map((feature, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  {onPrevious && (
                    <button
                      onClick={onPrevious}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  
                  <button
                    onClick={handleBookNow}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md hover:from-blue-700 hover:to-blue-600 transition-colors shadow-md"
                  >
                    Book This Package
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Personal Details Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white rounded-2xl max-w-md w-full mx-auto p-6 shadow-xl transform transition-all duration-300">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-500">Thank you for your booking. We'll contact you shortly.</p>
              </div>
            ) : (
              <PersonalDetailsForm 
                onSubmit={handleFormSubmit}
                carName={selectedCar?.name}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CarDropdown;