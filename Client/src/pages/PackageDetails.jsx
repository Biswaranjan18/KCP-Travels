import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CarDropdown from "../components/CarList";
import { tourPackages } from "../assets/assets.js";
import { AppContext } from "../context/AppContext";
import PersonalDetailsForm from "../components/PersionalDetailsForm";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const tourData = tourPackages[id];
  const { selectedCar, setSelectedCar } = useContext(AppContext);

  // Set default car when page loads
  useEffect(() => {
    if (tourData?.recommendedCars?.length > 0 && !selectedCar) {
      setSelectedCar(tourData.recommendedCars[0]);
    }
  }, [id, tourData, selectedCar, setSelectedCar]);

  if (!tourData) {
    return <p className="text-center mt-20">Package not found</p>;
  }

  const handleConfirmBooking = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all details before confirming.");
      return;
    }
    // Example action: navigate or send data to server
    alert(
      `Booking confirmed for:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`
    );
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white text-gray-800 font-sans pt-24">
      {/* Header */}
      <div className="bg-[#174f6c] py-8 px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{tourData.title}</h1>
        <p className="text-lg mt-2">{tourData.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Itinerary */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
          {tourData.itinerary.map((day, index) => (
            <div key={index} className="mb-6 border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                {day.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="border border-gray-200 rounded-xl shadow-sm md:shadow-md p-4 md:p-6 bg-white">
              <div className="flex items-center mb-3">
                <div className="w-2 h-6 bg-green-500 rounded-full mr-2"></div>
                <h4 className="text-lg font-bold text-gray-800">Inclusions</h4>
              </div>
              <ul className="space-y-2 pl-1">
                {tourData.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="border border-gray-200 rounded-xl shadow-sm md:shadow-md p-4 md:p-6 bg-white">
              <div className="flex items-center mb-3">
                <div className="w-2 h-6 bg-red-500 rounded-full mr-2"></div>
                <h4 className="text-lg font-bold text-gray-800">Exclusions</h4>
              </div>
              <ul className="space-y-2 pl-1">
                {tourData.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Box */}
          <div className="border rounded-xl shadow-md p-6 text-center">
            {selectedCar && (
              <div className="shadow-md p-2 text-center">
                <p className="text-gray-500">Starting from</p>
                <p className="text-3xl font-bold text-orange-600">
                  ₹{selectedCar.price.toLocaleString("en-IN")}
                </p>
              </div>
            )}

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold mb-3 transition"
            >
              Book This Package
            </button>

            <button
              onClick={() => {
                const phoneNumber = "919876543210";
                const message = `Hi, I want to book ${tourData.title} package (Package ${
                  Number(id) + 1
                }). Please provide more details.`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold mb-3 transition flex items-center justify-center gap-2"
            >
              WhatsApp Booking
            </button>
          </div>

          {/* Car Dropdown */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
            <CarDropdown
              recommendedCars={tourData.recommendedCars || []}
              defaultCarIndex={Number(id)}
              packageIndex={Number(id)}
            />
          </div>
        </div>
      </div>

      {/* Booking Popup */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 shadow-lg relative w-full max-w-md">
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
      >
        ×
      </button>

      {/* Personal Details Form */}
      <PersonalDetailsForm />
    </div>
  </div>
)}

    </div>
  );
};

export default PackageDetails;
