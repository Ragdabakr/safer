const Role = require('./../models/roleModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');


exports.addPermissions = catchAsync(async(req, res) => {
  console.log('permissions data',req.body.data  );
   
  const doc = await Role.findByIdAndUpdate(req.params.id, req.body.data, {
    new: true,
    runValidators: false
  });
  console.log('doc',doc);
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
  exports.createRole = factory.createOne(Role);
  exports.getRole = factory.getOne(Role);
  exports.updateRole = factory.updateOne(Role); 
  exports.deleteRole = factory.deleteOne(Role);
  exports.deleteAllRoles = factory.deleteMany(Role);

