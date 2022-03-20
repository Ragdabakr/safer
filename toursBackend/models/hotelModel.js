const mongoose = require('mongoose');

// select :false to any item hide it 

const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A hotel must have a number'],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'A hotel must have a phone']
    },
    city: {
        type: String,
        required: [true, 'A hotel must have a cuty']
    },
    address: {
        type: String,
        required: [true, 'A hotel must have an address'],

    }

});

// // 1)populate bookings to hotel (many Bookings)
hotelSchema.virtual('bookings', {
    ref: 'HotelBooking',
    localField: '_id',// part in tour i want to populate
    foreignField: 'hotelName',  // part in Booking i want to populate
});
//2) get hotel with bookings
hotelSchema.pre(/^findOne/, function (next) {
    this.populate({
        path: 'HotelBooking'
        // options: { select: 'name' } // <-- wrap `select` in `options` here...
    });
    next();
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;