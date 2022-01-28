const express = require('express');
const notificationController = require('./../controllers/notificationController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(notificationController.getAllNotifications)
    .post(notificationController.createNotification);

router
    .route('/:id')
    .get(notificationController.getNotification)
    .delete(notificationController.deleteNotification);


module.exports = router;