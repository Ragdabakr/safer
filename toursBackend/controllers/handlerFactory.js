const async = require('async');
const APIFeatures = require('./../utils/apiFeatures');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const cloudinary = require('cloudinary');


// ---------------- Cloudinary---------------- 

cloudinary.config({ 
   cloud_name: 'reg1rego3', 
   api_key: '277578515871442', 
   api_secret: 'CWT6HwmwzFWHFvX0M_JVZtMsE9g' 
});

exports.createOne = Model => catchAsync(async (req, res) => {
    console.log('newData',req.body.data);
    const getRandomBookingId = (min = 0, max = 800000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num =  Math.floor(Math.random() * (max - min + 1)) + min;
      return num.toString().padStart(6, "0");
    };

    const newDocument = await Model.create(req.body.data);
    console.log('new', newDocument);
  res.status(201).json({
   status: 'success',
   data: {
    data: newDocument
    }
   });   

 });

exports.deleteOne = Model => catchAsync( async (req, res ,next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    console.log('deleteddoc', doc);
    if(!doc){
      return next(new AppError ('no document found with this id', 404));
    }
       res.status(204).json({
         status: 'success',
         data: null
       });
     });

exports.updateOne = Model => catchAsync(async (req, res) => {
  console.log("req.body.data" ,req.body.data);
  console.log("req.params.id" ,req.params.id);
  console.log("connected" );
      const doc = await Model.findByIdAndUpdate(req.params.id, req.body.data, {
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

    exports.getOne = ( Model , popOptions) => catchAsync(async (req, res ,next) => {
      let query = Model.findById(req.params.id);
      if(popOptions) query = query.populate(popOptions);
      const doc = await query;
      // console.log("companyAccount" , doc);
      if(!doc){
        return next(new AppError ('no document found with this id', 404));
      }
      res.status(200).json({
        status: 'success',
        data: {
          doc
        }
      });
    });


    exports.getAll = ( Model , popOptions) => catchAsync(async (req, res) => {
      // console.log("user44" , req.user);
      let query = Model.find();
       if(popOptions) query = query.populate(popOptions);
      const docs = await query;
      //  console.log(" companyAccount " , docs);

      // For get reviews
    //  let filter = {};
    //  if(req.params.tourId) filter = {tour : req.params.tourId};
    //  // EXECUTE QUERY
    //  const features = new APIFeatures(Model.find(filter), req.query)
    //    .filter()
    //    .sort()
    //    .limitFields()
    //    .paginate();
    //  const docs = await features.query;
 
     // console.log('doccc' ,docs);
     // SEND RESPONSE
     res.status(200).json({
       status: 'success',
       results: docs.length,
       data: {
         docs
       }
     });
 });
//    exports.getAll =  Model  => catchAsync(async (req, res) => {
//      // For get reviews
//     let filter = {};
//     if(req.params.tourId) filter = {tour : req.params.tourId};
//     // EXECUTE QUERY
//     const features = new APIFeatures(Model.find(filter), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     const docs = await features.query;

//     // console.log('doccc' ,docs);
//     // SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       results: docs.length,
//       data: {
//         docs
//       }
//     });
// });

exports.deleteMany = Model => async (req, res) => {
  await Model.deleteMany();    
 res.status(204).json({
   status: 'success',
   data: null
 });
};


