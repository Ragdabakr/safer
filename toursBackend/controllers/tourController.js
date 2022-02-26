

const Tour = require('./../models/tourModel');
const User = require('./../models/userModel');
const async = require('async');
const APIFeatures = require('./../utils/apiFeatures');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const cloudinary = require('cloudinary');
const Budget = require('../models/budgetModel');

// socket io 
const http = require('http');
const app = require('../app');
const socket = require('socket.io');
const server = http.Server(app);
const io = socket(server);


// ---------------- Cloudinary---------------- 

cloudinary.config({ 
   cloud_name: 'reg1rego3', 
   api_key: '277578515871442', 
   api_secret: 'CWT6HwmwzFWHFvX0M_JVZtMsE9g' 
});
// ---------------- Find Job-list route sorting by date ---------------- 

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};


// ---------------- Create New Tour---------------- 

exports.createTour =  catchAsync(async  (req, res) => {
  // console.log('newData',req.body.data);
  Tour.find({name:req.body.data.name}, async function(err,foundTour){
    if (err) {
        console.log(err);
      }
  if (foundTour.length > 0) {
    return res.status(422).send({errors: [{title: 'Invalid tour name!', detail: 'اسم الرحلة مسجل من قبل'}]});
  }

  var locations = req.body.data.locations;
  var i;
  for (i = 0; i < locations.length; i++) {
  var array =  locations[i].coordinates;
  array.push(parseFloat(locations[i].longitude),parseFloat(locations[i].latitude));
  }

//  console.log('locations',req.body.data.locations);
   const newTour = await new Tour();
  //  newTour.startLocation = req.body.data.startLocation;
   newTour.tripLocations = req.body.data.locations;
   newTour.startDates = req.body.data.startDates;
   newTour.name = req.body.data.name;
   newTour.duration = req.body.data.duration;
   newTour.maxGroupSize = req.body.data.maxGroupSize;
   newTour.difficulty = req.body.data.difficulty;
   newTour.type = req.body.data.type;
   newTour.adultPrice = req.body.data.adultPrice;
   newTour.childPrice = req.body.data.childPrice;
   newTour.infantPrice = req.body.data.infantPrice;
   newTour.priceDiscount = req.body.data.priceDiscount;
   newTour.description = req.body.data.description;
  
    newTour.save();
    await newTour.guides.push({
      guide:req.body.data.guides,
   });

    await cloudinary.uploader.upload(req.body.data.imageCover, async (result) => {
       newTour.imageCover.imageId = result.public_id;
       newTour.imageCover.imgVersion = result.version;
      //   console.log('images uploader result id >>>',result.public_id);
      // console.log('images uploader result version>>>',result.version);
       newTour.save();
   });
 

   for (let i = 0; i < req.body.data.images.length; i++) {
       await cloudinary.uploader.upload(req.body.data.images[i], async (result) => {
      // console.log('images uploader result id >>>',result.public_id);
      // console.log('images uploader result version>>>',result.version);
          newTour.images.push({
            imageId:result.public_id,
            imageVersion:result.version
          });
           newTour.save();
       });
   }
  
        res.status(201).json({
            status: 'success',
            data: {
                data: newTour
            }
        });
  });
    
});

// ---------------- Edit Tour Information---------------- 

exports.editTourInformation =  catchAsync(async  (req, res) => {
  const guidename = req.body.guideId;

  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) {
        console.log(err);
      }
  foundTour.guides[0].guide = guidename; 
  foundTour.name = req.body.data.name;
  foundTour.duration = req.body.data.duration;
  foundTour.maxGroupSize = req.body.data.maxGroupSize;
  foundTour.difficulty = req.body.data.difficulty;
  foundTour.type = req.body.data.type;
  foundTour.adultPrice = req.body.data.adultPrice;
  foundTour.childPrice = req.body.data.childPrice;
  foundTour.infantPrice = req.body.data.infantPrice;
  foundTour.description = req.body.data.description;
    foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});


// ---------------- Edit Tour Date---------------- 

exports.editTourDate=  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) {
        console.log(err);
      }
      const foundDate =  foundTour.startDates.filter(x => x.id === req.body.dateId);
      foundDate[0].date = req.body.date;
    foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Add Tour New cost---------------- 

exports.createTourCost=  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.tourId}, async function(err,foundTour){
    if (err) {
        console.log(err);
      }
      await foundTour.costs.push({
        account:req.body.data.account,
        note:req.body.data.note,
        cost:req.body.data.cost,
     });
      foundTour.save();

      //Update our touR Group Budget
      const budget =  new Budget();
      budget.name = 'الجروبات السياحية';
      budget.date = Date.now();
      budget.tourCost = req.body.data.cost;
      await  budget.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Delete Tour Cost --------------- 

exports.deleteTourCost=  catchAsync(async  (req, res) => {
  console.log("deletedId" ,req.params.tourId);
  console.log("costId" ,req.params.costId);
  Tour.findOne({_id:req.params.tourId}, async function(err,foundTour){
    if (err) { console.log(err);}
       const foundCost =  foundTour.costs.filter(x => x.id !== req.params.costId);
       console.log("foundCost" ,foundCost);
       foundTour.costs = foundCost;
       foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Add Tour New Date---------------- 

exports.addTourDate=  catchAsync(async  (req, res) => {
  console.log("date" ,req.body.date);
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) {
        console.log(err);
      }
      await foundTour.startDates.push({
        date:req.body.date,
     });
  
    foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Delete Tour Date --------------- 

exports.deleteTourDate=  catchAsync(async  (req, res) => {
  // console.log("dateId" ,req.body.dateId);
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err);}
       const foundDate =  foundTour.startDates.filter(x => x.id !== req.body.dateId);
       foundTour.startDates = foundDate;
       foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Edit Tour Trip Location---------------- 

exports.editTourLocation=  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) {
        console.log(err);
      }

      var coordinates = req.body.location.tripLocations[0];
      
      const foundTripLOcation =  foundTour.tripLocations.filter(x => x.id === req.body.locationId);
      foundTripLOcation[0].longitude = req.body.location.tripLocations[0].longitude;
      foundTripLOcation[0].latitude = req.body.location.tripLocations[0].latitude;
      foundTripLOcation[0].address = req.body.location.tripLocations[0].address;
      foundTripLOcation[0].description = req.body.location.tripLocations[0].description;
      foundTripLOcation[0].day = req.body.location.tripLocations[0].day;
      foundTripLOcation[0].coordinates.push(parseFloat(req.body.location.tripLocations[0].longitude),parseFloat(req.body.location.tripLocations[0].latitude));
      foundTour.save();

        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Add Tour Trip LOcation---------------- 

exports.addTourTripLocation=  catchAsync(async  (req, res) => {

  var locations = req.body.tripLocation.tripLocations[0].coordinates;
  locations.push(parseFloat(req.body.tripLocation.tripLocations[0].longitude),parseFloat(req.body.tripLocation.tripLocations[0].latitude));

  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) {
        console.log(err);
      }
      await foundTour.tripLocations.push({
        longitude:req.body.tripLocation.tripLocations[0].longitude,
        latitude:req.body.tripLocation.tripLocations[0].latitude,
        address:req.body.tripLocation.tripLocations[0].address,
        day:req.body.tripLocation.tripLocations[0].day,
        buses:req.body.tripLocation.tripLocations[0].buses,
        guides:req.body.tripLocation.tripLocations[0].guides,
        hotels:req.body.tripLocation.tripLocations[0].hotels,
        description:req.body.tripLocation.tripLocations[0].description,
        coordinates:locations
       
     });
     foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
    
});

// ---------------- Delete Tour Location --------------- 

exports.deleteTourLocation=  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err);}
       const foundLocation =  foundTour.tripLocations.filter(x => x.id !== req.body.locationId);
       foundTour.tripLocations = foundLocation;
       foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Pull Tour Image from images --------------- 

exports.deleteTourImage =  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err);}
    const foundImage =  foundTour.images.filter(x => x.id !== req.body.imageId);
    foundTour.images = foundImage;
       foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Push New Tour Image To Images --------------- 

exports.deleteTourImage =  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err);}
    const foundImage =  foundTour.images.filter(x => x.id !== req.body.imageId);
    foundTour.images = foundImage;
       foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Add Tour Image---------------- 

exports.addTourImage=  catchAsync(async  (req, res) => {
  // console.log('newData',req.body.data);

  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err) }
    for (let i = 0; i < req.body.data.images.length; i++) {
      await cloudinary.uploader.upload(req.body.data.images[i], async (result) => {
        // console.log('images uploader result id >>>',result.public_id);
        // console.log('images uploader result version>>>',result.version);
              foundTour.images.push({
              imageId:result.public_id,
              imageVersion:result.version
            });
            foundTour.save();
            res.status(201).json({
             status: 'success',
             data: {
                 data: foundTour
             }
         });
       
       });
    }

  });
  
});


// ---------------- Update Tour cover image---------------- 

exports.updateTourCoverImage=  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err) }
    await cloudinary.uploader.upload(req.body.data.imageCover, async (result) => {
      foundTour.imageCover.imageId = result.public_id;
      foundTour.imageCover.imgVersion = result.version;
      foundTour.save();
            res.status(201).json({
             status: 'success',
             data: {
                 data: foundTour
             }
            });
          });
        }); 
     });
// ---------------- Close Tour --------------- 

exports.closeTour =  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err);}
      foundTour.open = false;
       foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

// ---------------- Enable Tour --------------- 

exports.enableTour =  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err);}
      foundTour.active = true;
       foundTour.save();
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});


// ---------------- Disable Tour --------------- 

exports.disableTour =  catchAsync(async  (req, res) => {
  Tour.findOne({_id:req.params.id}, async function(err,foundTour){
    if (err) { console.log(err);}
      foundTour.active = false;
       foundTour.save();
       console.log("foundTour" , foundTour);
        res.status(201).json({
            status: 'success',
            data: {
                data: foundTour
            }
        });
      });
});

exports.getAllTours = factory.getAll(Tour , {path :'bookings'});
exports.getTour = factory.getOne(Tour , {path :'bookings'});
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);
exports.deleteAllTours = factory.deleteMany(Tour);


// 

// exports.getTourStats =catchAsync(async (req, res) => {
//     const stats = await Tour.aggregate([
      
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           _id: { $toUpper: '$difficulty' },
//           numTours: { $sum: 1 },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       },
//       {
//         $sort: { avgPrice: 1 }
//       }
//       // {
//       //   $match: { _id: { $ne: 'EASY' } } //ne = not equal
//       // }
//     ]);
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   });

// Get Tours Types Status
exports.getTourTypeStats =catchAsync(async (req, res) => {
  const stats = await Tour.aggregate([
    {
      $group: {
        _id: { $toUpper: '$type' },
        numTours: { $sum: 1 },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        toursName:{$push: '$name'}
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
    // {
    //   $match: { _id: { $ne: 'EASY' } } //ne = not equal
    // }
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  });
});

// Get Tours by months Status

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1; // 2021
  const stats = await Tour.aggregate([
    {$unwind: '$startDates'},
    {$match: {'startDates.date': { $gte: new Date(`${year}-01-01`),$lte: new Date(`${year}-12-31`)}}},
    {$group: {_id:{$month: '$startDates.date'},  numTourStarts:{ $sum: 1},tours:{$push: '$name'}}},
      // {
    //   $sort:{numTourStarts: -1}
    // },
    // {
    //   $limit:6
    // }
  ]);
 // put zero when month dont have tour
  plan = Array.from(Array(12)).fill(0);
  stats.map((item, i) => {
  plan[parseInt(item._id) - 1] = parseInt(item.numTourStarts);
  });
  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});

// Get Tours by months Status

exports.getWeeklyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1; // 2021
  const plan = await Tour.aggregate([
    {$unwind: '$startDates'},
    {$match: {'startDates.date': { $gte: new Date(`${year}-01-01`),$lte: new Date(`${year}-12-31`)}}},
    {$group: {_id:{$week: '$startDates.date'},  numTourStarts:{ $sum: 1},tours:{$push: '$name'}}},
  ]);
  
//   plan = Array.from(Array(7)).fill(0);
//   stats.map((item, i) => {
//   plan[parseInt(item._id) - 1] = parseInt(item.numTourStarts);
// });
  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});






// /tours-within/:distance/center/:latlng/unit/:unit
// /tours-within/233/center/34.111745,-118.113491/unit/mi
// 
exports.getTourswithin  = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1; // mi or killo

  if (!lat || !lng) {
    next(
      new AppError(
        'Please provide latitutr and longitude in the format lat,lng.',
        400
      )
    );
  }

  // const tours = await Tour.find({
  //   startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
  // });

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      data: tours
    }
  });
});

// Get Tours Completed Status
exports.getTourCompletedStats =catchAsync(async (req, res) => {
  const plan = await Tour.aggregate([
    {
      $group: {
        _id: '$completed' ,
        numTours: { $sum: 1 },
        toursName:{$push: '$name'}
      }
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});
// Get Tours diffculty Status
exports.getTourDiffcultyStats =catchAsync(async (req, res) => {
  const plan = await Tour.aggregate([
    {$match: { active: true  }},
    {
      $group: {
        _id: '$name' ,
        numTours: { $sum: 1 },
        tourGroupSize: { $sum: '$maxGroupSize' },
        tourDuration: { $sum: '$duration' },
      }
    },
    
  ]);
  console.log('diffculty plan',plan);
  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});

// حساب المسافة من كل الرحلات ونقظة البداية
exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    next(
      new AppError(
        'Please provide latitutr and longitude in the format lat,lng.',
        400
      )
    );
  }

  const distances = await Tour.aggregate([ //geonear alwayes be the firist step
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1]
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier
      }
    },
    {
      $project: {
        distance: 1,
        name: 1
      }
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      data: distances
    }
  });
});



