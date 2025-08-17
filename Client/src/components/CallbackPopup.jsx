import React, { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CallbackPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation for phone number
    if (phone.length < 10) {
      toast.error("📱 Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const response = await fetch("http://localhost:8580/api/callbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Callback request submitted successfully!");
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        toast.error(data.message || "❌ Something went wrong");
      }
    } catch (error) {
      toast.error("🚨 Server error, please try again");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-4 w-56 sm:w-96 bg-green-100 border border-green-300 p-4 rounded-lg shadow-lg z-50 text-sm transition-all duration-300">
      {/* Close button */}
      <button
        className="absolute -top-2 -right-2 bg-orange-500 text-white p-1 rounded-full text-xs hover:bg-orange-600 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        <FaTimes size={10} />
      </button>

      {!isSubmitted ? (
        // Form
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="whitespace-nowrap font-medium block sm:inline-block mb-1 sm:mb-0">
              Request a callback:
            </span>

            <div className="flex flex-1 min-w-0">
              {/* Phone Input */}
              <div className="flex items-center border rounded-lg overflow-hidden bg-white w-[120px] sm:w-[140px]">
                <span className="px-1 text-gray-500">+91</span>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^0-9]/g, "")) // allow only numbers
                  }
                  className="px-2 py-1 outline-none text-sm w-full"
                  required
                  maxLength="10"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="ml-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded font-semibold text-sm whitespace-nowrap transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        // Success message inside popup (optional)
        <div className="flex items-center justify-center space-x-2 text-green-700">
          <FaCheck className="text-green-600" />
          <span>Thank you! We'll call you shortly.</span>
        </div>
      )}
    </div>
  );
};

export default CallbackPopup;
