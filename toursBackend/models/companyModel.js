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
        description :{type: String},
        name :{type: String},
        user :{type: String},
      

     }]
   

});



const Company = mongoose.model('Company', companySchema);

module.exports = Company;