const express = require('express');
const safeboxController = require('./../controllers/safeboxController');
const Safebox = require('../models/safeboxsModel');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(safeboxController.getAllsafeboxes)
    .post(authController.protect ,safeboxController.createSafebox)
    .delete(authController.protect ,safeboxController.deleteSafebox)

    

router
    .route('/:id')
    .get(authController.protect ,safeboxController.getSafebox)
    .patch(authController.protect ,safeboxController.updateSafebox)
    .delete(authController.protect ,safeboxController.deleteSafebox);


module.exports = router;