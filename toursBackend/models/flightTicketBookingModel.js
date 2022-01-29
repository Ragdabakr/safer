const mongoose = require('mongoose');

// select :false to any item hide it 

const flightTicketBooking = new mongoose.Schema({

    bookingFrom: {
        type: String,
        required: [true],
    },
    bookingTo: {
        type: String,
        required: true,
    },
    travellers:[{
        travellerFirstName: {
            type: String,
            required: true,
        },
        travellerLastName: {
            type: String,
            required: true,
        },
        travellerType: {
            type: String,
            required: true,
        },
           
        passportNumber: {
            type: String,
            required: true,
        }, 
        ticketCostPrice: {
            type: Number,
            required: true,
        },
        ticketSellingPrice: {
            type: Number,
            required: true,
        },
        pnrNumber: {
            type: String,
            required: true,
        },
        ticketvatPrice: {
            type: String,
           
        },

        comm: {
            type: Number,
           
        },
        netCost: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
           
        },
        netComm: {
            type: Number,
           
        },
        totalPrice: {
            type: Number,
            required: true,
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




    

});



const FlightTicketBooking = mongoose.model('FlightTicketBooking', flightTicketBooking);

module.exports = FlightTicketBooking

;