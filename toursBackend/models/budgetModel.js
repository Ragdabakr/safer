const mongoose = require('mongoose');

// select :false to any item hide it 

const budgetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    totalReceivedAmount: {
        type: Number, default: 0,
    },
    totalRemainingAmount: {
        type: Number, default: 0,
    },
    tourCost: {
        type: Number, default: 0,
    },
    dataLink: {
        type: String,
    },
    createdAt :{type: Date, default: Date.now()},

});



const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;