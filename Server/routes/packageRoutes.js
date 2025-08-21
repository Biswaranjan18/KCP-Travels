// // routes/bookingRoutes.js
// const express = require('express');
// const router = express.Router();
// const bookingController = require('../controllers/bookingController');
// const auth = require('../middlewares/auth');

// // Public routes
// router.post('/', bookingController.createBooking);
// router.get('/user/:phone', bookingController.getUserBookings);

// // Protected routes (admin)
// // router.use(auth);
// // router.get('/', bookingController.getAllBookings);
// // router.put('/:id/status', bookingController.updateBookingStatus);

// module.exports = router;