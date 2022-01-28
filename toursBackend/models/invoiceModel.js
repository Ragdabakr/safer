const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  bookingInfo:{
    type: mongoose.Schema.ObjectId,
     ref: 'Booking',
  },
  completed: {
    type: Boolean,
    default: false
  },
  number: {
    type: Number
  },


},
  
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }

);


// use when populate one
invoiceSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'bookingInfo',
  });
  next();
});

invoiceSchema.pre(/^findOne/, function(next) {
  this.populate({
    path: 'bookingInfo',
  });
  next();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;