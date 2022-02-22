const User = require('./../models/userModel');
const Role = require('./../models/roleModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');


  // Create Role
exports.createRole =  catchAsync(async (req, res) => {
  Role.findOne({name:req.body.data.name}, async function(err,foundRole){
    if (err) {console.log(err)}; 
    if(foundRole)  {
      res.status(400).send('This role added before') ;
    }else{
    const newDocument = await Role.create(req.body.data);
    res.status(200).json({
      status: 'success',
      data: {
        data : newDocument
      }
    });
    }
  });
});


  // Update Role
exports.updateRole =  catchAsync(async (req, res) => {
  Role.findOne({name:req.body.data.name}, async function(err,foundRole){
    if (err) {console.log(err)}; 
    if(foundRole)  {
      res.status(400).send('This role added before') ;
    }else{
      const doc = await Role.findByIdAndUpdate(req.params.id, req.body.data, {
        new: true,
        runValidators: true
      });
    res.status(200).json({
      status: 'success',
      data: {
        data : doc
      }
    });
    }
  });
});

  // Add Permissions
exports.addPermissions = catchAsync(async(req, res) => {
  const doc = await Role.findByIdAndUpdate(req.params.id, req.body.data, {
    new: true,
    runValidators: false
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


  exports.getAllRoles = factory.getAll(Role);
  exports.getRole = factory.getOne(Role);
  exports.deleteRole = factory.deleteOne(Role);
  exports.deleteAllRoles = factory.deleteMany(Role);

