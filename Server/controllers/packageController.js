// // controllers/bookingController.js
// const Booking = require('../models/Booking');
// const User = require('../models/User');
// const { sendBookingConfirmation } = require('../utils/emailService');

// exports.createBooking = async (req, res) => {
//   try {
//     const { tourPackage, price, name, phone, email } = req.body;

//     // Check if user exists or create new user
//     let user = await User.findOne({ phone });
//     if (!user) {
//       user = new User({ name, phone, email });
//       await user.save();
//     }

//     // Create booking
//     const booking = new Booking({
//       user: user._id,
//       tourPackage,
//       price,
//       personalDetails: { name, phone, email }
//     });

//     await booking.save();

//     // Add booking to user's bookings
//     user.bookings.push(booking._id);
//     await user.save();

//     // Send confirmation email if email exists
//     if (email) {
//       await sendBookingConfirmation(email, {
//         name,
//         tourPackage,
//         price,
//         bookingId: booking._id
//       });
//     }

//     res.status(201).json({
//       success: true,
//       message: 'Booking created successfully',
//       booking
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//       error: error.message
//     });
//   }
// };

// exports.getUserBookings = async (req, res) => {
//   try {
//     const { phone } = req.params;
//     const user = await User.findOne({ phone }).populate('bookings');
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       bookings: user.bookings
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//       error: error.message
//     });
//   }
// };