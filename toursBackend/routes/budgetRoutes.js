const express = require('express');
const budgetController = require('./../controllers/budgetController');
const Budget = require('./../models/budgetModel');
const authController = require('./../controllers/authController');

const router = express.Router();

//router.use(authController.protect);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
    .route('/')
    .get(budgetController.getAllBudget)
    .post(budgetController.createBudget);

router
    .route('/:id')
    .get(budgetController.getBudget)
    .patch(budgetController.updateBudget)
    .delete(budgetController.deleteBudget);


module.exports = router;