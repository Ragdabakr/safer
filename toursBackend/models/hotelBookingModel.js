const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const hotelBooking = new mongoose.Schema({

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
    paymentMethod: {
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
    arrivalDate: {
        type: Date,
        required: true,
    },
    departureDate: {
        type: Date,
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
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: [true],
    },
    ceatedAt :{type: Date, default: Date.now()},
    totalNetSellingPrice: {
        type: Number, default: 0,
    },
    totalNetCostPrice: {
        type: Number, default: 0,
    },
    totalNetComm: {
        type: Number, default: 0,
    },
    totalReceivedAmount: {
        type: Number, default: 0,
    },
    totalRemainingAmount: {
        type: Number, default: 0,
    },
    createdInvoice: {
        type: Boolean, default: false
    },
    createdAt :{type: Date, default: Date.now()},
    cancel: {
        type: Boolean, default: false
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    travellers:[{
        guestName: {
            type: String,
        },
        roomType: {
            type: String,
        },
        phoneNumber: {
            type: String,
            
        }, 
        sellingPrice: {
            type: Number,
           
        },
        comm: {
            type: Number,
           
        },
        netCost: {
            type: Number,
         
        },

        netComm: {
            type: Number,
           
        },

        receivedAmount: {
            type: Number,
           
        },
        remainingAmount: {
            type: Number,
           
        },
    
    }],
});


hotelBooking.pre(/^find/, function (next) {
    this.populate({
        path: 'bookingFrom bookingTo hotelName',
    });
    next();
});

hotelBooking.pre(/^findOne/, function (next) {
    this.populate({
        path: 'bookingFrom bookingTo hotelName',
    });
    next();
});


const HotelBooking = mongoose.model('HotelBooking', hotelBooking);

module.exports = HotelBooking;