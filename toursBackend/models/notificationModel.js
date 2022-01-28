const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({

//   tourNotification: [{
//     type: mongoose.Schema.ObjectId,
//     ref: 'Tour'
//   }],
//   bookingNotification: [{
//     type: mongoose.Schema.ObjectId,
//     ref: 'Booking'
//   }],
 
  },
  
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }

);


// use when populate many

// // 1)populate bookings to notification (many Bookings)
notificationSchema.virtual('bookings', { //use bookings in controller
    ref: 'Booking',
    localField: '_id',// part in notification  i want to populate
    foreignField: 'tourName',  // part in Booking i want to populate
});

//2) get notificatiob with bookings
notificationSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'bookings'
        // options: { select: 'name' } // <-- wrap `select` in `options` here...
    });
    next();
});

//2) get specific booking
notificationSchema.pre(/^findOne/, function (next) {
    this.populate({
        path: 'bookings'
        // options: { select: 'name' } // <-- wrap `select` in `options` here...
    });
    next();
});

// // 1)populate tours to notification (many tours)
notificationSchema.virtual('tours', {  // use tours in controller
    ref: 'Tours',
    localField: '_id',// part in notification  i want to populate
    foreignField: 'name',  // part in Tour i want to populate
});

//2) get all tours in notification
notificationSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'tours'
        // options: { select: 'name' } // <-- wrap `select` in `options` here...
    });
    next();
});

//2) get specific tour
notificationSchema.pre(/^findOne/, function (next) {
    this.populate({
        path: 'tours'
        // options: { select: 'name' } // <-- wrap `select` in `options` here...
    });
    next();
});
const Notification = mongoose.model('Notification', notificationSchema );

module.exports = Notification;