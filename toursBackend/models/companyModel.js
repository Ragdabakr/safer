const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

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
    createdAt :{type: Date, default: Date.now()},
    companyReport:[{
        debit: {type: Number , default: 0,},
        credit :{type: Number , default: 0},
        date :{type: Date},
        description :{type: String},
        name :{type: String},
        user :{type: String},
        createdAt :{type: Date, default: Date.now()}
     }],
     companyBudget:{
        type: mongoose.Schema.ObjectId,
        ref: 'Budget',
    }
});

companySchema.pre(/^find/, function(next) {
    this.populate({
      path: 'companyBudget',
    });
    next();
  });
  
companySchema.pre(/^findOne/, function(next) {
    this.populate({
      path: 'companyBudget',
    });
    next();
  });


const Company = mongoose.model('Company', companySchema);

module.exports = Company;