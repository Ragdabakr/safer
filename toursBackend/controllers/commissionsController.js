
const Commission = require('../models/commissionModel');
const factory = require('./handlerFactory');
  

exports.getAllCommissions = factory.getAll(Commission);
exports.getCommission = factory.getOne(Commission);
exports.createCommission= factory.createOne(Commission);
exports.updateCommission = factory.updateOne(Commission);
exports.deleteCommission = factory.deleteOne(Commission);

