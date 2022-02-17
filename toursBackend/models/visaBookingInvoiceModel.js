const mongoose = require('mongoose');

// select :false to any item hide it 

const visaBookingInvoice = new mongoose.Schema({

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
        travellerFirstName: {
            type: String,
           
        },
        travellerLastName: {
            type: String,
            
        },
        travellerType: {
            type: String,
           
        },
           
        passportNumber: {
            type: String,
            
        }, 
        costPrice: {
            type: Number,
            
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



const VisaBookingInvoice = mongoose.model('VisaBookingInvoice', visaBookingInvoice);

module.exports = VisaBookingInvoice;