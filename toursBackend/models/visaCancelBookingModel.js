const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// select :false to any item hide it 

const visaCancelBooking = new mongoose.Schema({

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



const VisaCancelBooking = mongoose.model('VisaCancelBooking', visaCancelBooking);

module.exports =VisaCancelBooking;