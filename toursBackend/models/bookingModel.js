const mongoose = require('mongoose');

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
      bankPaymentPhoto:{
        imgVersion: { type: String, default: '1585916456' },
        imageId: { type: String , default: 'uyrewqqaswdfgh'},
    },
    },
    contactInfo: {
          fullName: { type: String },
          phone: String,
          email: String,
          address: String,
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
    select: 'name maxGroupSize'
  });
  next();
});

bookingSchema.pre(/^findOne/, function(next) {
  this.populate({
    path: 'tourName',
    select: 'name maxGroupSize'
  });
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;