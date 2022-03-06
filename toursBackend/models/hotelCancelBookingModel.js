const mongoose = require('mongoose');

// select :false to any item hide it 

const hotelCancelBooking = new mongoose.Schema({

    number: {
        type: Number,
    },
    bookingFrom: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: [true],
    },
    bookingTo: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: [true],
    },

    ratio: {
        type: Number,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    arrivalDate: {
        type: String,
        required: true,
    },

    departureDate: {
        type: String,
        required: true,
    },
    adultNumber: {
        type: Number,
        required: false,
    },
    childNumber: {
        type: Number,
        required: false,
    },
    hotelName: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
  
   
    createdAt :{type: Date, default: Date.now()},
    totalRefundNetCostPrice: {
        type: Number, default: 0,
    },
    totalRefundNetSellingPrice: {
        type: Number, default: 0,
    },
    totalRefundNetComm: {
        type: Number, default: 0,
    },
    fine: {
        type: Number, default: 0,
    },
    refundType: {
        type: String,
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
});


hotelCancelBooking.pre(/^find/, function (next) {
    this.populate({
        path: 'bookingFrom bookingTo',
    });
    next();
});

hotelCancelBooking.pre(/^findOne/, function (next) {
    this.populate({
        path: 'bookingFrom bookingTo',
    });
    next();
});

const HotelCancelBooking = mongoose.model('HotelCancelBooking', hotelCancelBooking);

module.exports = HotelCancelBooking;
