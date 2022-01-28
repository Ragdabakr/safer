const express = require('express');
const safeboxController = require('./../controllers/safeboxController');
const Safebox = require('./../models/safeboxModel');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(safeboxController.getAllsafeboxes)
    .post(safeboxController.createSafebox);

router
    .route('/:id')
    .get(safeboxController.getSafebox)
    .patch(safeboxController.updateSafebox)
    .delete(safeboxController.deleteSafebox);


module.exports = router;