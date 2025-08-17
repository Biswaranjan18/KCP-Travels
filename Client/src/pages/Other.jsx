// import React, { useState } from "react";
// import PersonalDetailsModal from "./PersonalDetailsModal";

// export default function PackageCard() {
//   const [showModal, setShowModal] = useState(false);

//   const handleConfirm = (details) => {
//     console.log("Booking confirmed:", details);
//     alert(`Booking confirmed for ${details.name} (${details.email})`);
//   };

//   return (
//     <div className="p-4 border rounded-xl shadow-lg">
//       {/* Your package details here */}
//       <h3 className="text-lg font-bold mb-2">Amazing Package</h3>
//       <p className="mb-3">Price: ₹20,500</p>

//       {/* Button */}
//       <button
//         onClick={() => setShowModal(true)}
//         className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold mb-3 transition"
//       >
//         Book This Package
//       </button>

//       {/* Modal */}
//       <PersonalDetailsModal
//         isOpen={showModal}
//         onClose={() => setShowModal(false)}
//         onSubmit={handleConfirm}
//       />
//     </div>
//   );
// }
