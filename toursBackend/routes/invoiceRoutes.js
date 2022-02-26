const express = require('express');
const invoiceController = require('./../controllers/invoiceController');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect , authController.restrictTo('أدمن' , 'مشرف'));

router
  .route('/')
  .get(invoiceController.getAllInvoices)
  .post(invoiceController.createInvoice);

router
  .route('/:id')
  .get(invoiceController.getInvoice)
  .patch(invoiceController.updateInvoice)
  .delete(invoiceController.deleteInvoice);


  router
  .route('/f')
  .get(invoiceController.getAllInvoicesFlightTicketBooking);

router
  .route('/f/:id')
  .get(invoiceController.getInvoiceFlightTicketBooking)
  .patch(invoiceController.updateInvoiceFlightTicketBooking)
  .delete(invoiceController.deleteInvoiceFlightTicketBooking);


module.exports = router;