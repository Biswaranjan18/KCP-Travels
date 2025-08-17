import React, { useState } from 'react';

const TourPlannerUI = () => {
  const [activeTab, setActiveTab] = useState('guided'); // 'guided' or 'custom'
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [accommodation, setAccommodation] = useState("Standard");
  const [customPlan, setCustomPlan] = useState({
    days: 3,
    startDate: '',
    travelers: 2
  });

  const toggleSelect = (item, list, setList) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  return (
    <div className="p-6 bg-white min-h-screen max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-gray-100 p-1 rounded-full">
          <button
            className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === 'guided' ? 'bg-orange-500 text-white shadow' : 'text-gray-700'}`}
            onClick={() => setActiveTab('guided')}
          >
            Guided Tour Planner
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === 'custom' ? 'bg-orange-500 text-white shadow' : 'text-gray-700'}`}
            onClick={() => setActiveTab('custom')}
          >
            Create Your Own Itinerary
          </button>
        </div>
      </div>

      {/* Guided Tour Planner */}
      {activeTab === 'guided' && (
        <div className="space-y-10">
          {/* Ready-to-Go Tour Plans */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-2 text-[#0a2540]">Popular Tour Plans</h2>
            <p className="text-center text-gray-600 mb-6">Choose from our expertly crafted itineraries</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Golden Triangle (3 Days)",
                  price: 8999,
                  highlights: ["Puri Temple", "Konark Sun Temple", "Chilika Lake"],
                  description: "Perfect introduction to Odisha's cultural heritage"
                },
                {
                  title: "Coastal Explorer (5 Days)",
                  price: 14999,
                  highlights: ["Puri Beach", "Gopalpur", "Chandipur"],
                  description: "Discover Odisha's stunning coastline"
                },
                {
                  title: "Tribal & Wildlife (7 Days)",
                  price: 21999,
                  highlights: ["Simlipal", "Tribal Villages", "Bhitarkanika"],
                  description: "Immerse in nature and indigenous cultures"
                }
              ].map((plan, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-[#0a2540]">{plan.title}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <ul className="text-sm text-gray-700 space-y-2 mb-6">
                      {plan.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span> {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <p className="text-orange-500 font-bold text-lg">₹{plan.price.toLocaleString()}</p>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                        Customize This Plan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Panel */}
          <div className="bg-[#fef6f1] rounded-xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-6 text-[#0a2540]">Customize Your Selected Plan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block font-medium mb-2">Add Destinations</label>
                  <div className="flex flex-wrap gap-2">
                    {["Dhauli", "Pipli", "Raghurajpur", "Udayagiri"].map(dest => (
                      <button
                        key={dest}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          selectedDestinations.includes(dest) 
                            ? 'bg-orange-100 border-orange-500 text-orange-600' 
                            : 'bg-white border-gray-300'
                        }`}
                        onClick={() => toggleSelect(dest, selectedDestinations, setSelectedDestinations)}
                      >
                        + {dest}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-2">Upgrade Accommodation</label>
                  <div className="flex gap-3">
                    {["Budget", "Standard", "Luxury"].map(type => (
                      <button
                        key={type}
                        className={`px-4 py-2 rounded border ${
                          accommodation === type 
                            ? 'bg-orange-100 border-orange-500 text-orange-600' 
                            : 'bg-white border-gray-300'
                        }`}
                        onClick={() => setAccommodation(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-inner">
                <h4 className="text-lg font-semibold mb-4">Your Customized Plan</h4>
                <div className="space-y-3">
                  <p><span className="font-medium">Base Plan:</span> Golden Triangle</p>
                  <p><span className="font-medium">Added:</span> {selectedDestinations.join(', ') || 'None'}</p>
                  <p><span className="font-medium">Accommodation:</span> {accommodation}</p>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-orange-600 font-bold text-xl">
                      Estimated Price: ₹{(8999 + (accommodation === 'Luxury' ? 5000 : accommodation === 'Standard' ? 2000 : 0)).toLocaleString()}
                    </p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                  Get Full Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Your Own Itinerary */}
      {activeTab === 'custom' && (
        <div className="bg-[#f8fafc] rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#0a2540]">Build From Scratch</h2>
          <p className="text-center text-gray-600 mb-8">Design your perfect trip with our flexible planner</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Trip Details */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Trip Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Trip Duration</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={customPlan.days}
                    onChange={(e) => setCustomPlan({...customPlan, days: e.target.value})}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map(d => (
                      <option key={d} value={d}>{d} {d === 1 ? 'Day' : 'Days'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border rounded"
                    value={customPlan.startDate}
                    onChange={(e) => setCustomPlan({...customPlan, startDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Travelers</label>
                  <input 
                    type="number" 
                    min="1"
                    className="w-full p-2 border rounded"
                    value={customPlan.travelers}
                    onChange={(e) => setCustomPlan({...customPlan, travelers: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Destination Selection */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Destinations</h3>
              <div className="space-y-3">
                {["Puri", "Konark", "Bhubaneswar", "Chilika", "Gopalpur", "Simlipal", "Dhauli", "Raghurajpur"].map(dest => (
                  <div key={dest} className="flex items-center">
                    <input
                      type="checkbox"
                      id={dest}
                      checked={selectedDestinations.includes(dest)}
                      onChange={() => toggleSelect(dest, selectedDestinations, setSelectedDestinations)}
                      className="mr-2"
                    />
                    <label htmlFor={dest}>{dest}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Submit */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Activities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Temples", "Beaches", "Wildlife", "Boating", "Hiking", "Museums", "Shopping", "Local Food"].map(act => (
                    <div key={act} className="flex items-center">
                      <input
                        type="checkbox"
                        id={act}
                        checked={selectedActivities.includes(act)}
                        onChange={() => toggleSelect(act, selectedActivities, setSelectedActivities)}
                        className="mr-2"
                      />
                      <label htmlFor={act} className="text-sm">{act}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Your Custom Trip</h3>
                <div className="space-y-3 mb-4">
                  <p><span className="font-medium">Duration:</span> {customPlan.days} days</p>
                  <p><span className="font-medium">Destinations:</span> {selectedDestinations.length || 'None'}</p>
                  <p><span className="font-medium">Activities:</span> {selectedActivities.length || 'None'}</p>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                  Generate Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPlannerUI;