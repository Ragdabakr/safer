const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

// select :false to any item hide it 

const bondSchema = new mongoose.Schema({
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
bondSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'accountName'
    });
    next();
});
//2) get bond with accountName
bondSchema.pre(/^findOne/, function (next) {
    this.populate({
        path: 'accountName'
    });
    next();
});

const Bond = mongoose.model('Bond', bondSchema);

module.exports = Bond;