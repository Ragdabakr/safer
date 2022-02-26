


const Budget = require('./../models/budgetModel');
const factory = require('./handlerFactory');
  

exports.getAllBudget = factory.getAll(Budget);
exports.getBudget= factory.getOne(Budget);
exports.createBudget= factory.createOne(Budget);
exports.updateBudget = factory.updateOne(Budget);
exports.deleteBudget = factory.deleteOne(Budget);


