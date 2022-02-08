const mongoose = require('mongoose');

// select :false to any item hide it 

const safeboxsSchema = new mongoose.Schema({

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
        
    },
   title :{type: String ,unique: false, },
   createdAt :{type: Date, default: Date.now()}

});



const Safebox = mongoose.model('Safebox', safeboxsSchema);

module.exports = Safebox;