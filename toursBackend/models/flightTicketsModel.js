const mongoose = require('mongoose');

// select :false to any item hide it 

const flightTicket = new mongoose.Schema({

    name: {
        type: String,
        required: [true],
        unique: true,
    },
    accountName: {
        type: String,
    },
    debit: {
        type: Number, default: 0,
    },
    credit: {
        type: Number, default: 0,
    },
    companyComm: {
        type: Number
    },
    ourComm: {
        type: Number
    },
    delegateComm: {
        type: Number
    },
    type: {
        type:String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    PINCompanyCode: {
        type: String,


    },
    airlineReport:[{
        debit: {type: Number},
        credit :{type: Number},
        date :{type: Date},
        companyName :{type: String},
        destination :{type: String},
        note :{type: String},
        airlineName :{type: String},
        type :{type: String},
        user :{type: String},
        paymentMethod: {type:String},
        pnrNumber: {type:String},
        notes:{type:String}

     }]
   

});


const FlightTicket = mongoose.model('FlightTicket', flightTicket);

module.exports = FlightTicket

;