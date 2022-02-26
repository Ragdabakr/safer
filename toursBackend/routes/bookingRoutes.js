const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.use(authController.protect);

router.get('/checkout-session/:tourId', bookingController.getCheckoutSession);
router
  .route('/')
  .get(authController.protect , bookingController.getAllBookings)

// router.use(authController.protect , authController.restrictTo('أدمن' , 'مشرف'));

router
  .route('/')
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)

  router
  .route('/:id/tours/:tourId')
  .delete(bookingController.deleteBooking);



router.route('/monthly-plan/:year').get(bookingController.getMonthlyPlan);
router.route('/weekly-plan/week').get(bookingController.getWeeklyPlan);
router.route('/remaining-Seats-Plan/seats').get(bookingController.getRemainingSeatsPlan);

module.exports = router;