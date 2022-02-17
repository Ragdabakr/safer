const express = require('express');
const visaController = require('./../controllers/visaController');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

// router
//     .route('/')
//      .get(authController.protect ,visaController.getAllvisas)
//      .post(authController.protect ,visaController.createvisa);



    router
    .route('/booking')
    .post(authController.protect ,visaController.createVisaBooking);

    router
    .route('/booked')
    .get(authController.protect ,visaController.getVisaBookingList)

    router
    .route('/cancelBooking')
    .post(authController.protect ,visaController.refundVisa);



router
    .route('/booking/:id')
    .get(authController.protect ,visaController.getVisaBooking)
    .patch(authController.protect ,visaController.updateVisaBooking)
    .delete(authController.protect ,visaController.deleteVisaBooking);


    router
    .route('/invoice')
    .post(authController.protect ,visaController.createVisaInvoice)
    .get(authController.protect ,visaController.getAllVisaBookingsInvoices);
    

    router
    .route('/invoice/:id')
    .get(authController.protect ,visaController.getVisaBookingInvoice)
    .delete(authController.protect ,visaController.deleteVisaBookingInvoice);



module.exports = router;