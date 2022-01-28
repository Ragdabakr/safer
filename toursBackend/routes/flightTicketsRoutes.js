const express = require('express');
const flightTicketController = require('./../controllers/flightTicketsController');
const FlightTicket= require('./../models/flightTicketsModel');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(authController.protect ,flightTicketController.getAllflightTickets)
    .post(authController.protect ,flightTicketController.createFlightTicket);

router
    .route('/refundFlightTicket')
    .post(authController.protect ,flightTicketController.refundFlightTickets);
    
router
    .route('/changeFlightTickets')
    .post(authController.protect ,flightTicketController.changeFlightTickets);

router
    .route('/salesFlightTickets')
    .post(authController.protect ,flightTicketController.salesFlightTickes);
    
   
// router
//     .route('/noCommFlightTicketBooking')
//     .post(authController.protect ,flightTicketController.noCommFlightTickets);
    
router
    .route('/:id')
    .get(authController.protect ,flightTicketController.getFlightTicket)
    .patch(authController.protect ,flightTicketController.updateFlightTicket)
    .delete(authController.protect ,flightTicketController.deleteFlightTicket);


    router
    .route('/booking')
    .get(authController.protect ,flightTicketController.getAllflightTicketsBooking)
    .post(authController.protect ,flightTicketController.createFlightTicketBooking);

router
    .route('/booking/:id')
    .get(authController.protect ,flightTicketController.getFlightTicketBooking)
    .patch(authController.protect ,flightTicketController.updateFlightTicketBooking)
    .delete(authController.protect ,flightTicketController.deleteFlightTicketBooking);


module.exports = router;