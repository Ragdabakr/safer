const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// select :false to any item hide it 

const visaBooking = new mongoose.Schema({

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
        netCost: {
            type: Number,
            
        },
        sellingPrice: {
            type: Number,
           
        },
        comm: {
            type: Number,
           
        },
        phoneNumber: {
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

//1) get flightTicketBooking with bookingFrom ,bookingTo
visaBooking.pre(/^find/, function (next) {
    this.populate({
        path: 'bookingFrom',
        path: 'bookingTo',

    });
    next();
});
//1) get flightTicketBooking with bookingFrom ,bookingTo
visaBooking.pre(/^findOne/, function (next) {
    this.populate({
        path: 'bookingFrom',
        path: 'bookingTo',
    });
    next();
});


const VisaBooking = mongoose.model('VisaBooking', visaBooking);

module.exports = VisaBooking;