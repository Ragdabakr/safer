const Company = require('./../models/companyModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const User = require('./../models/userModel');

exports.createCompany = catchAsync(async (req, res) => {
  const user = req.user;
  const newCompany = await Company.create(req.body.data);
  Company.findById({_id:newCompany._id}, async function(err,foundCompany){
    if (err) {console.log(err); }

   foundCompany.companyReport.push({
    debit :req.body.data.debit ,
    credit :req.body.data.credit, 
     name :" اضافة شركة /عميل",
    description :req.body.data.notes, 
      user :user.name
   });
   foundCompany.save();
    res.status(201).json({
    status: 'success',
    data: {
      data: newCompany
      }
    });   
  });

});




  exports.getAllCompanies = factory.getAll(Company);
  exports.getCompany = factory.getOne(Company);
   exports.updateCompany = factory.updateOne(Company); 
  exports.deleteCompany = factory.deleteOne(Company);
  exports.deleteAllCompanies = factory.deleteMany(Company);