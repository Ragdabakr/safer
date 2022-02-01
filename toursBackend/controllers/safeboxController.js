
const Safebox = require('../models/safeboxsModel');
const factory = require('./handlerFactory');


exports.getAllsafeboxes= factory.getAll(Safebox);
exports.getSafebox = factory.getOne(Safebox);
exports.createSafebox = factory.createOne(Safebox);
exports.updateSafebox = factory.updateOne(Safebox);
exports.deleteSafebox = factory.deleteOne(Safebox);
exports.deleteSafeboxes = factory.deleteMany(Safebox);