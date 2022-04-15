const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const bookingSchema = new mongoose.Schema({

  createdAt: {
    type: Date,
    default: Date.now()
  },

  tourName: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tour',
    required: [true, 'Booking must belong to a Tour!']
  },
  budget: {
    type: mongoose.Schema.ObjectId,
    ref: 'Budget',
  },
  number: {
    type: Number
  },
  tourInfo: {
    tourDate:String,
    adult: Number,
    child: Number,
    infant:Number,
   },
    paymentInfo: {
      paymentWay: { type: String },
      downPayment:Number,
      totalPrice: Number,
      tourPrice:Number,
      orderStatus: String,
      bankNo:String,
      receivedAmount: Number,
      remainingAmount: Number,
    },
    contactInfo: {
          fullName: { type: String },
          phone: String,
          email: String,
          address: String,
      },
      cancel: {
        type: Boolean, default: false
    },
    createdInvoice: {
      type: Boolean, default: false
  },
    travellerInfo: [{
        firstName: { type: String },
        lastName: String,
        passportNo: String,
        age: String,
    }],
  },


  
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }

);


// use when populate one
bookingSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'tourName',
    path: 'budget',
    select: 'name maxGroupSize'
  });
  next();
});

bookingSchema.pre(/^findOne/, function(next) {
  this.populate({
    path: 'tourName',
    path: 'budget',
    select: 'name maxGroupSize'
  });
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;