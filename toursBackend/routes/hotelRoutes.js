const express = require('express');
const hotelController = require('./../controllers/hotelController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
.route('/booking')
.post(authController.protect ,hotelController.createHotelBooking);


router
.route('/booked')
.get(authController.protect ,hotelController.getHotelBookingList)

router
    .route('/invoice')
    .post(authController.protect ,hotelController.createHotelBookingInvoice)
    

    router
    .route('/invoice/:id')
    .get(authController.protect ,hotelController.getHotelInvoice)
    .delete(authController.protect ,hotelController.deleteHotelInvoice);
   

router.use(authController.protect);
router
    .route('/')
    .get(hotelController.getAllHotels)
    .post(hotelController.createHotel);

router
    .route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel);

router
    .route('/cancelBooking')
    .post(authController.protect ,hotelController.refundHotelBooking);




module.exports = router;