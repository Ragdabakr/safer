const mongoose = require('mongoose');

// select :false to any item hide it 

const flightTicketBooking = new mongoose.Schema({
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
        ticketCostPrice: {
            type: Number,
            
        },
        ticketSellingPrice: {
            type: Number,
           
        },
        pnrNumber: {
            type: String,
           
        },
        ticketvatPrice: {
            type: String,
           
        },

        comm: {
            type: Number,
           
        },
        netCost: {
            type: Number,
         
        },
        discount: {
            type: Number,
           
        },
        netComm: {
            type: Number,
           
        },
        totalPrice: {
            type: Number,
            
        },
        receivedAmount: {
            type: Number,
           
        },
        remainingAmount: {
            type: Number,
           
        },
    
    }],

    
    ratio: {
        type: Number,
    },
    paymentMethod: {
        type: String,
        required: true,
    },

    departureDate: {
        type: Date,
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
    createdAt :{type: Date, default: Date.now()}

    

});

//1) get flightTicketBooking with bookingFrom ,bookingTo
flightTicketBooking.pre(/^find/, function (next) {
    this.populate({
        path: 'bookingFrom',
        path: 'bookingTo',

    });
    next();
});
//1) get flightTicketBooking with bookingFrom ,bookingTo
flightTicketBooking.pre(/^findOne/, function (next) {
    this.populate({
        path: 'bookingFrom',
        path: 'bookingTo',
    });
    next();
});



const FlightTicketBooking = mongoose.model('FlightTicketBooking', flightTicketBooking);

module.exports = FlightTicketBooking

;