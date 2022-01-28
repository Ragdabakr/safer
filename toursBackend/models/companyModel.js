const mongoose = require('mongoose');

// select :false to any item hide it 

const companySchema = new mongoose.Schema({

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
    notes: {
        type: String,
    },
    companyReport:[{
        debit: {type: Number},
        credit :{type: Number},
        date :{type: Date},
        companyName :{type: String},
        destination :{type: String},
        note :{type: String},
        airlineName :{type: String},
        type :{type: String},
        pnrNumber: {type:String},
        user :{type: String},
       paymentMethod :{type: String},
       notes:{type:String}

     }]
   

});



const Company = mongoose.model('Company', companySchema);

module.exports = Company;