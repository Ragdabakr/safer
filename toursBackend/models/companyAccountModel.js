const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

// select :false to any item hide it 

const companyAccountSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'A company must have a phone']
    },
    address: {
        type: String,
        required: [true, 'A company must have an address'],
    },
    email: {
        type: String,
        required: [true, 'A company must have an email'],
    },
    currency: {
        type: String,
        required: true,
    },
    active:{type:Boolean,  default: false },
    imageCover: {
      // type: String,
      imageVersion: { type: String, default: '1585916456' },
      imageId: { type: String},
     // required: [true, 'A tour must have a cover image']
  }

});



const CompanyAccount = mongoose.model('CompanyAccount', companyAccountSchema);

module.exports = CompanyAccount;