import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Selected car
  const [selectedCar, setSelectedCar] = useState(null);
  // const [tripType, setTripType] = useState(null);
// console.log("tripType2",tripType)
  // User personal details
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  // Trip details
  const [tripDetails, setTripDetails] = useState({
    tripType:'one-way',
    from: '',
    to: '',
    pickupDate: '',
    pickupTime: '10:00',
    timePeriod: 'AM',
    carType: 'Sedan (4-seater)',
    returnDate: '',
    returnTime: '',
    returnTimePeriod: 'AM',
    hours: '4',
    packageType: 'select'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  // Function to submit booking
  const submitBookingToBackend = async () => {
    try {
      // setIsSubmitting(true);

      // Construct user object, only include email if it exists
      const user = {
        name: formData.name,
        phone: formData.phone,
        ...(formData.email ? { email: formData.email } : {})
      };

      //Filter out empty tripDetails fields (optional, prevents backend errors)
      const filteredTripDetails = {};
      Object.keys(tripDetails).forEach(key => {
        if (tripDetails[key] !== '') {
          filteredTripDetails[key] = tripDetails[key];
        }
      });
     

// Extra cleanup for one-way trips
if (tripDetails.tripType === "one-way") {
  ["returnDate", "returnTime", "returnTimePeriod"].forEach(f => {
    delete filteredTripDetails[f];
  });
}

const bookingData = { user, tripDetails: filteredTripDetails };

console.log("Submitting booking (cleaned):", bookingData);


      const response = await fetch('http://localhost:8580/api/v1/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || 'Failed to create booking');
      }

      const data = await response.json();

      // toast.success(
      //   <div className="text-center">
      //     <h3 className="font-bold text-lg">Booking Confirmed Successfully!</h3>
      //     <p className="text-sm mt-1">Thank you, {formData.name}!</p>
      //     <p className="text-sm">Your booking reference: {data.data._id}</p>
      //   </div>,
      //   { position: "top-center", autoClose: 5000, theme: "light" }
      // );

      // Reset form
      setFormData({ name: '', phone: '', email: '' });
      setTripDetails({
        tripType:'one-way',from: '', to: '', pickupDate: '', pickupTime: '10:00', timePeriod: 'AM',
        carType: 'Sedan (4-seater)', returnDate: '', returnTime: '', returnTimePeriod: 'AM',
        hours: '4', packageType: 'select'
      });
      setShowPersonalDetails(false);

    } catch (error) {
      toast.error(
        <div className="text-center">
          <p className="text-sm">Error creating booking. Please try again.</p>
          <p className="text-xs mt-1">{error.message}</p>
        </div>,
        { position: "top-center", autoClose: 3000 }
      );
    } finally {
      // setIsSubmitting(false);
    }
  };

  const value = {
    selectedCar,
    setSelectedCar,
    formData,
    setFormData,
    tripDetails,
    setTripDetails,
    showPersonalDetails,
    setShowPersonalDetails,
    submitBookingToBackend,
    isSubmitting, setIsSubmitting
    // tripType, setTripType
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
