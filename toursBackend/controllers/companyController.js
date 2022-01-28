const Company = require('./../models/companyModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');





  exports.getAllCompanies = factory.getAll(Company);
  exports.createCompany = factory.createOne(Company);
  exports.getCompany = factory.getOne(Company);
  exports.updateCompany = factory.updateOne(Company); 
  exports.deleteCompany = factory.deleteOne(Company);
  exports.deleteAllCompanies = factory.deleteMany(Company);