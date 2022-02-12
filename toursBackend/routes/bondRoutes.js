const express = require('express');
const bondController = require('./../controllers/bondsController');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(authController.protect ,bondController.getAllBonds)
    .post(authController.protect,bondController.createBond);
    router
    .route('/invoices')
    .get(authController.protect ,bondController.getAllBondsInvoices)
    router
    .route('/invoices/:id')
    .get(authController.protect ,bondController.getBondInvoice)



    router
    .route('/:id')
    .get(authController.protect,bondController.getBond)
    .patch(authController.protect,bondController.updateBond)
    .delete(authController.protect,bondController.deleteBond);


module.exports = router;