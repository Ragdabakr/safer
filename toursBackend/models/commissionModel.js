const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

// select :false to any item hide it 

const commissionSchema = new mongoose.Schema({
    debit: {type: Number  , default: 0},
    credit :{type: Number , default: 0},
    date :{type: Date},
    description :{type: String},
    name :{type: String},
    user :{type: String},
    createdAt :{type: Date, default: Date.now()}

});



const Commission = mongoose.model('Commission', commissionSchema);

module.exports = Commission;