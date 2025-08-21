import React from 'react'

const Package = () => {
   return (
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Packages</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                Add New Package
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[1, 2, 3].map(item => (
                <div key={item} className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                    {item === 1 ? "Basic" : item === 2 ? "Premium" : "Business"}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Package {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">Includes luxury car with chauffeur for {item*4} hours</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">${item*99}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
}

export default Package
