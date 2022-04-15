const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const bondInvoiceSchema = new mongoose.Schema({
  index: { type: Boolean, default: true },
  number: {
    type: Number,
    required: [true],
    unique: true,
},
accountName: {
    type: mongoose.Schema.ObjectId,
      ref: 'Company',
      required: [true],
},
amount: {
    type: Number,
    required: [true]
},
type: {
    type: String,
    required: [true]
},
notes: {
    type: String,
    required: [true],

},
createdAt :{type: Date, default: Date.now()},
user :{type: String},

});
//1) get bondس with accountName
bondInvoiceSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'accountName'
    });
    next();
});
//2) get bond with accountName
bondInvoiceSchema.pre(/^findOne/, function (next) {
    this.populate({
        path: 'accountName'
    });
    next();
});



const BondInvoiceInvoice = mongoose.model('BondInvoiceInvoice', bondInvoiceSchema);

module.exports = BondInvoiceInvoice;