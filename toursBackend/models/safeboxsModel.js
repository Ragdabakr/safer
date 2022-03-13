const mongoose = require('mongoose');

// select :false to any item hide it 

const safeboxsSchema = new mongoose.Schema({

    description: {
        type: String,
        required: [true]
    },
    date: {
        type: String,
        required: [true],
    },
    indebted: {
        type: Number,
    },
    credit: {
        type: Number,
    },
   title :{type: String ,unique: false, },
   createdAt :{type: Date, default: Date.now()},
   safeboxBudget:{
    type: mongoose.Schema.ObjectId,
    ref: 'Budget',
}



});

safeboxsSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'safeboxBudget',
    });
    next();
  });
  
  safeboxsSchema.pre(/^findOne/, function(next) {
    this.populate({
      path: 'safeboxBudget',
    });
    next();
  });

const Safebox = mongoose.model('Safebox', safeboxsSchema);

module.exports = Safebox;