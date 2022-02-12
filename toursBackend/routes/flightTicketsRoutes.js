const express = require('express');
const flightTicketController = require('./../controllers/flightTicketsController');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

// router
//     .route('/')
//      .get(authController.protect ,flightTicketController.getAllflightTickets)
//      .post(authController.protect ,flightTicketController.createFlightTicket);



    router
    .route('/booking')
    .post(authController.protect ,flightTicketController.createFlightTicketBooking);

    router
    .route('/cancelBooking')
    .post(authController.protect ,flightTicketController.refundFlightTickets);


    router
    .route('/booked')
    .get(authController.protect ,flightTicketController.getFlightTicketsBookingList)


router
    .route('/booking/:id')
    .get(authController.protect ,flightTicketController.getFlightTicketBooking)
    .patch(authController.protect ,flightTicketController.updateFlightTicketBooking)
    .delete(authController.protect ,flightTicketController.deleteFlightTicketBooking);


    router
    .route('/invoice')
    .post(authController.protect ,flightTicketController.createFlightTicketInvoice)
    .get(authController.protect ,flightTicketController.getAllflightTicketsInvoices);
    

    router
    .route('/invoice/:id')
    .get(authController.protect ,flightTicketController.getFlightTicketInvoice)
    .delete(authController.protect ,flightTicketController.deleteFlightTicketInvoice);



module.exports = router;