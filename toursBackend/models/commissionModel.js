const mongoose = require('mongoose');

// select :false to any item hide it 

const commissionSchema = new mongoose.Schema({
    debit: {type: Number  , default: 0},
    credit :{type: Number , default: 0},
    date :{type: Date},
    description :{type: String},
    name :{type: String},
    user :{type: String},

});



const Commission = mongoose.model('Commission', commissionSchema);

module.exports = Commission;