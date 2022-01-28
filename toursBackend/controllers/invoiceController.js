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
    const getRandomBookingId = (min = 0, max = 800000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num =  Math.floor(Math.random() * (max - min + 1)) + min;
      return num.toString().padStart(6, "0");
    };

    const newInvoice = await Invoice.create(req.body.data);
    Booking.findOne({_id:newInvoice.bookingInfo}, async function(err,myBooking){
        if (err) {
            console.log(err);
          }

        //   console.log("myBooking >>>>" ,myBooking );
        newInvoice.number = getRandomBookingId();
        newInvoice. completed = true;
        newInvoice.save();
        res.status(201).json({
        status: 'success',
        data: {
            data: newInvoice
            }
        });   
    });

 });


exports.getInvoice = factory.getOne(Invoice ,  {path :'bookingInfo'});
exports.getAllInvoices = factory.getAll(Invoice , {path :'bookingInfo'});
exports.updateInvoice = factory.updateOne(Invoice);
exports.deleteInvoice= factory.deleteOne(Invoice);

exports.getInvoiceFlightTicketBooking = factory.getOne(FlightTicketBookingInvoice ,{path:'flightTicketInfo'});
exports.getAllInvoicesFlightTicketBooking = factory.getAll(FlightTicketBookingInvoice , {path :'flightTicketInfo'});
exports.updateInvoiceFlightTicketBooking= factory.updateOne(FlightTicketBookingInvoice);
exports.deleteInvoiceFlightTicketBooking= factory.deleteOne(FlightTicketBookingInvoice);