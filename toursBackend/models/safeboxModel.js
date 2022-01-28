const mongoose = require('mongoose');

// select :false to any item hide it 

const safeboxSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true],
       // unique: true,
    },
    description: {
        type: String,
        required: [true]
    },
    date: {
        type: Date,
        required: [true],

    },
    indebted: {
        type: Number,

    },
    credit: {
        type: Number,
        
    }

});



const Safebox = mongoose.model('Safebox', safeboxSchema);

module.exports = Safebox;