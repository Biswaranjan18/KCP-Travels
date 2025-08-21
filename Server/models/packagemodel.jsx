// // models/Booking.js
// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   tourPackage: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   bookingDate: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'confirmed', 'cancelled'],
//     default: 'pending'
//   },
//   personalDetails: {
//     name: {
//       type: String,
//       required: true
//     },
//     phone: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function(v) {
//           return /^\d{10}$/.test(v);
//         },
//         message: props => `${props.value} is not a valid phone number!`
//       }
//     },
//     email: {
//       type: String,
//       validate: {
//         validator: function(v) {
//           return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//         },
//         message: props => `${props.value} is not a valid email!`
//       }
//     }
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Booking', bookingSchema);