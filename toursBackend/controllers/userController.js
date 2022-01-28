const User = require('./../models/userModel');
const CompanyAccount = require('./../models/companyAccountModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const cloudinary = require('cloudinary');

// ---------------- Add Post---------------- 

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

  exports.getMe = (req, res , next) => {
    req.params.id = req.user.id;
    next();
  }; 
  exports.deleteMe = catchAsync(async(req, res) => {
       const user = await User.findByIdAndUpdate(req.user.id ,{active : false});
       res.status(204).json({
         status: 'success',
         data:null
       });
  });  

exports.addPermissions = catchAsync(async(req, res) => {
  console.log('permissions data',req.body.data);
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








// exports.activateUser = catchAsync(async(req, res) => {
//   console.log('Edit data',req.body.data);
//   const doc = await User.findByIdAndUpdate(req.params.id, req.body.data, {
//     new: true,
//     runValidators: true
//   });
//   if(!doc){
//     return next(new AppError ('no document found with this id', 404));
//   }
//   res.status(200).json({
//     status: 'success',
//     data: {
//       data : doc
//     }
//   });
// });  

exports.deleteNotification = catchAsync(async (req, res) => {
  const notificationId =  req.params.id;
  // console.log("notId" , notificationId);
  const foundUser = req.user;
  // console.log("foundUser1" , foundUser.notifications);
  const remainingNotification =  foundUser.notifications.filter(x => x._id === notificationId);
  foundUser.notifications = remainingNotification;
  foundUser.save();
  // console.log('foundUser2', foundUser.notifications);
  res.status(204).json({
      status: 'success',
      data: foundUser
  });
});


// ---------------- Company Acconut --------------- 

exports.companyAccountInfo=  catchAsync(async  (req, res) => {
console.log("accountdata" , req.body.data);
const companyAccount =  new CompanyAccount();
companyAccount.name = req.body.data.name;
companyAccount.email = req.body.data.email;
companyAccount.address = req.body.data.address;
companyAccount.phone = req.body.data.phone;
companyAccount.active = true;
companyAccount.save();
console.log("companyAccountsave" , companyAccount);
        res.status(201).json({
            status: 'success',
            data: {
                data: companyAccount
            }
        });
    
});

exports.uploadSingleImage = catchAsync(async (req, res) => {
    console.log("imageData" , req.body.data);
    console.log("id" , req.body.id);
     CompanyAccount.findOne({_id:req.body.id}, async function(err,foundCompanyAccount){
      if (err) {
          console.log(err);
        }
        console.log('foundCompanyAccount11',foundCompanyAccount);
   await cloudinary.uploader.upload(req.body.data, async (result) => {
    console.log("result" , result);
    foundCompanyAccount.imageCover.imageId = result.public_id;
    foundCompanyAccount.imageCover.imageVersion = result.version;
     foundCompanyAccount.save();
         console.log('foundCompanyAccount22',foundCompanyAccount);
     });
    });
  });

  //exports.createUserProfile = factory.updateOne(User);
  exports.getAllUsers = factory.getAll(User);
  exports.createUser = factory.createOne(User);
  exports.getUser = factory.getOne(User);
  exports.updateUser = factory.updateOne(User); //update all data except password
  exports.deleteUser = factory.deleteOne(User);
  exports.deleteAllUsers = factory.deleteMany(User);
  exports.getCompanyAccount = factory.getAll(CompanyAccount);
  exports.updateCompanyAccountInfo = factory.updateOne(CompanyAccount);
  // exports.deleteNotification = factory.deleteNotification(User);
