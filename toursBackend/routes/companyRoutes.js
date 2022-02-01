const express = require('express');
const companyController = require('./../controllers/companyController');
const Company = require('./../models/companyModel');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(companyController.getAllCompanies)
    .post(authController.protect ,companyController.createCompany);

router
    .route('/:id')
    .get(companyController.getCompany)
    .patch(authController.protect ,companyController.updateCompany)
    .delete(authController.protect ,companyController.deleteCompany);


module.exports = router;