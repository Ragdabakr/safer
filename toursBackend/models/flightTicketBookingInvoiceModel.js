const mongoose = require('mongoose');

const flightTicketBookingInvoiceSchema = new mongoose.Schema({

    createdAt: {
      type: Date,
      default: Date.now()
    },
    flightTicketInfo:{
      type: mongoose.Schema.ObjectId,
      ref: 'FlightTicketBooking',
    },
    companyAccount:String,
    airlineAccount:String,
    paymentMethod:String,
    totalPrice:Number,
    completed: {
      type: Boolean,
      default: false
    },
    number: {
      type: Number
    },
    type: {
      type: String
    },
    note: {
      type: String
    },

    pnrNumber:{
      type: String
    },
    destination :{
      type: String
    },
   date :{
      type: Date
    }

},
  
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }

);


// use when populate one
flightTicketBookingInvoiceSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'flightTicketInfo',
  });
  next();
});

flightTicketBookingInvoiceSchema.pre(/^findOne/, function(next) {
  this.populate({
    path: 'flightTicketInfo',
  });
  next();
});

const FlightTicketBookingInvoice = mongoose.model('FlightTicketBookingInvoice', flightTicketBookingInvoiceSchema);

module.exports = FlightTicketBookingInvoice;