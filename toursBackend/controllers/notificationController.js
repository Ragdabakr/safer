
const Notification = require('../models/notificationModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const cloudinary = require('cloudinary');
const router = require('../routes/invoiceRoutes');

// ---------------- Add Post---------------- 
cloudinary.config({ 
  cloud_name: 'reg1rego3', 
  api_key: '277578515871442', 
  api_secret: 'CWT6HwmwzFWHFvX0M_JVZtMsE9g' 
});

exports.createNotification = factory.createOne(Notification, {path :'bookings'});
exports.getNotification = factory.getOne(Notification , {path :'bookings'});
exports.getAllNotifications = factory.getAll(Notification , {path :'bookings'} );
exports.deleteNotification = factory.deleteOne(Notification , {path :'bookings'} );
exports.deleteNotifications = factory.deleteMany(Notification , {path :'bookings'});


