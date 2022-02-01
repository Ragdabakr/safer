const express = require('express');
const commissionController = require('./../controllers/commissionsController');
const Commission = require('./../models/busModel');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(commissionController.getAllCommissions)
    .post(authController.protect ,commissionController.createCommission);

router
    .route('/:id')
    .get(commissionController.getCommission)
    .patch(authController.protect ,commissionController.updateCommission)
    .delete(authController.protect ,commissionController.deleteCommission);


module.exports = router;