const User = require('./../models/userModel');
const CompanyAccount = require('./../models/companyAccountModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const cloudinary = require('cloudinary');

// ---------------- Add Image to cloudinary---------------- 
cloudinary.config({
  cloud_name: 'reg1rego3',
  api_key: '277578515871442',
  api_secret: 'CWT6HwmwzFWHFvX0M_JVZtMsE9g',
  api_enviroment_variable: 'CLOUDINARY_URL=cloudinary://277578515871442:CWT6HwmwzFWHFvX0M_JVZtMsE9g@reg1rego3'
});
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
  // ----------------Update User--------------- 
exports.updateMe = catchAsync(async(req, res) => {
 if(req.body.password || req.body.confirmPassword){
  return next(new AppError('This route is not for password update .. / Please user update my password!', 400));
 }
     // 2) Filtered out unwanted fields names that are not allowed to be updated
    const filteredBody = filterObj(req.body, 'name', 'email');
    const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  });
  // ----------------Get User--------------- 
  exports.getMe = (req, res , next) => {
    req.params.id = req.user.id;
    next();
  }; 

  // ----------------Delete User--------------- 
  exports.deleteMe = catchAsync(async(req, res) => {
       const user = await User.findByIdAndUpdate(req.user.id ,{active : false});
       res.status(204).json({
         status: 'success',
         data:null
       });
  });  

// ----------------Add Permissions--------------- 
exports.addPermissions = catchAsync(async(req, res) => {
  const doc = await User.findByIdAndUpdate(req.params.id, req.body.data, {
    new: true,
    runValidators: true
  });
  if(!doc){
    return next(new AppError ('no document found with this id', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      data : doc
    }
  });
});  

// ----------------Create Company Acconut --------------- 

exports.companyAccountInfo=  catchAsync(async  (req, res) => {
const companyAccount =  new CompanyAccount();
companyAccount.name = req.body.data.name;
companyAccount.email = req.body.data.email;
companyAccount.address = req.body.data.address;
companyAccount.phone = req.body.data.phone;
companyAccount.currency = req.body.data.currency;
companyAccount.active = true;
companyAccount.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: companyAccount
            }
        });
    
});

// ----------------Upload Company Acconut Image--------------- 
exports.uploadSingleImage = catchAsync(async (req, res) => {
     CompanyAccount.findOne({_id:req.body.id}, async function(err,foundCompanyAccount){
      if (err) { console.log(err); }
      await cloudinary.uploader.upload(req.body.data, async (result) => {
      foundCompanyAccount.imageCover.imageId = result.public_id;
     foundCompanyAccount.imageCover.imageVersion = result.version;
     foundCompanyAccount.save();
     });
    });
  });

  exports.getAllUsers = factory.getAll(User,{path:'role'});
  exports.createUser = factory.createOne(User);
  exports.getUser = factory.getOne(User ,{path:'role'});
  exports.updateUser = factory.updateOne(User); //update all data except password
  exports.deleteUser = factory.deleteOne(User);
  exports.deleteAllUsers = factory.deleteMany(User);
  exports.getCompanyAccount = factory.getAll(CompanyAccount);
  exports.updateCompanyAccountInfo = factory.updateOne(CompanyAccount);

