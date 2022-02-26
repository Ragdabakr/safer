const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const Invoice = require('../models/invoiceModel');
const FlightTicketBookingInvoice = require('../models/flightTicketBookingInvoiceModel');
const cloudinary = require('cloudinary');

// ---------------- Cloudinary---------------- 

cloudinary.config({ 
   cloud_name: 'reg1rego3', 
   api_key: '277578515871442', 
   api_secret: 'CWT6HwmwzFWHFvX0M_JVZtMsE9g' 
});

// ---------------- Create new invoice---------------- 

exports.createInvoice =  catchAsync(async (req, res) => {
  const user = req.user;
  const data= req.body.data;
  const newInvoice = await Invoice.create(req.body.data);
  Booking.findOne({number:newInvoice.number}, async function(err,foundBooking){ 
    if (err) {console.log(err); }
      foundBooking.createdInvoice = true;
     foundBooking.save();
  res.status(201).json({
    status: 'success',
    data: {
        data: foundBooking
    }
     });
  });
 });


exports.getInvoice = factory.getOne(Invoice ,  {path :'tourName'});
exports.getAllInvoices = factory.getAll(Invoice , {path :'tourName'});
exports.updateInvoice = factory.updateOne(Invoice);
exports.deleteInvoice= factory.deleteOne(Invoice);

exports.getInvoiceFlightTicketBooking = factory.getOne(FlightTicketBookingInvoice ,{path:'flightTicketInfo'});
exports.getAllInvoicesFlightTicketBooking = factory.getAll(FlightTicketBookingInvoice , {path :'flightTicketInfo'});
exports.updateInvoiceFlightTicketBooking= factory.updateOne(FlightTicketBookingInvoice);
exports.deleteInvoiceFlightTicketBooking= factory.deleteOne(FlightTicketBookingInvoice);