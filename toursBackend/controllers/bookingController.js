// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const Invoice = require('../models/invoiceModel');
const cloudinary = require('cloudinary');
const router = require('../routes/invoiceRoutes');

// ---------------- Add Post---------------- 
cloudinary.config({ 
  cloud_name: 'reg1rego3', 
  api_key: '277578515871442', 
  api_secret: 'CWT6HwmwzFWHFvX0M_JVZtMsE9g' 
});

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);
  console.log(tour);

  // 2) Create checkout session
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${
//       req.params.tourId
//     }&user=${req.user.id}&price=${tour.price}`,
//     cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
//     customer_email: req.user.email,
//     client_reference_id: req.params.tourId,
//     line_items: [
//       {
//         name: `${tour.name} Tour`,
//         description: tour.summary,
//         images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
//         amount: tour.price * 100,
//         currency: 'usd',
//         quantity: 1
//       }
//     ]
//   });

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session
  });
});

// exports.createBookingCheckout = catchAsync(async (req, res, next) => {
//   // This is only TEMPORARY, because it's UNSECURE: everyone can make bookings without paying
//   const { tour, user, price } = req.query;

//   if (!tour && !user && !price) return next();
//   await Booking.create({ tour, user, price });

//   res.redirect(req.originalUrl.split('?')[0]);
// });

// Create New Booking with invoice

exports.createBooking = catchAsync(async (req, res, next) => {
  const getRandomBookingId = (min = 0, max = 800000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString().padStart(6, "0");
  };


  const newBooking = await Booking.create(req.body.data);
  Tour.findOne({_id:newBooking.tourName}, async function(err,foundTour){
    if (err) { console.log(err) }
 
  if(foundTour.maxGroupSize =  foundTour.bookings){
    foundTour.completed = true;
  }
  newBooking.number = getRandomBookingId();
  if(newBooking.paymentInfo.paymentWay === 'تحويل بنكي'){
    await cloudinary.uploader.upload(req.body.data.paymentInfo.bankPaymentPhoto , async (result) => {
      newBooking.paymentInfo.bankPaymentPhoto.imageId = result.public_id;
      newBooking.paymentInfo.bankPaymentPhoto.imgVersion = result.version;
    //    console.log('images uploader result id >>>',result.public_id);
    //  console.log('images uploader result version>>>',result.version);
    });
     
    }

  newBooking.save();
  // const bookingNtification= await notification.create(newBooking);


  if(newBooking.paymentInfo.paymentWay === 'تحويل بنكي'  || newBooking.paymentInfo.paymentWay === 'كاش'   ){

    const getRandomId = (min = 0, max = 500000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num =  Math.floor(Math.random() * (max - min + 1)) + min;
      return num.toString().padStart(6, "0");
    };
    
    const invoice =  new Invoice();
    invoice.bookingInfo = newBooking.id;
    invoice.completed = true;
    invoice.number = getRandomId();
    invoice.save();
   
  }

    res.status(201).json({
    status: 'success',
    data: {
      data: newBooking
      }
 });  
}); 
}); 

//update Booking

exports.updateBooking = catchAsync(async (req, res) => {
  const doc = await Booking.findById(req.params.id);
  doc.paymentInfo.paymentWay = req.body.data.paymentInfo.paymentWay;
  doc.paymentInfo.totalPrice = req.body.data.paymentInfo.totalPrice;
  doc.paymentInfo.tourPrice = req.body.data.paymentInfo.tourPrice;
  doc.paymentInfo.orderStatus = req.body.data.paymentInfo.orderStatus;

  doc.tourInfo.adult =  req.body.bookingData.tourInfo.adult;
  doc.tourInfo.child =  req.body.bookingData.tourInfo.child;
  doc.tourInfo.infant =  req.body.bookingData.tourInfo.infant;

  doc.save();

  console.log('doc >>>',doc);
     if(doc.paymentInfo.paymentWay === 'تحويل بنكي'){
      await cloudinary.uploader.upload( req.body.data.paymentInfo.bankPaymentPhoto , async (result) => {
        console.log('result>>>',result);
        doc.paymentInfo.bankPaymentPhoto.imageId = result.public_id;
        doc.paymentInfo.bankPaymentPhoto.imgVersion = result.version;
      //    console.log('images uploader result id >>>',result.public_id);
      //  console.log('images uploader result version>>>',result.version);
      });
      doc.save();
       
      }

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


//Delete Booking
exports.deleteBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
  if(!booking){
    return next(new AppError ('no document found with this id', 404));
  }
  const tour = await Tour.findById(req.params.tourId);
   tour.bookings.filter(a => a._id !== req.params.id);
     res.status(204).json({
       status: 'success',
       data: null
     });
});
// exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking );
// exports.updateBooking = factory.updateOne(Booking);


// Get Tours by months Status

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1; // 2021
  const stats = await Booking.aggregate([
    {$match: {'createdAt': { $gte: new Date(`${year}-01-01T07:27:09.426+00:00`),$lte: new Date(`${year}-12-31T07:27:09.426+00:00`)}}},
    {$group: {_id:{$month: '$createdAt'},  numBookings:{ $sum: 1},tours:{$push: '$tourName'}}},
  ]);


 // put zero when month dont have tour
    plan = Array.from(Array(12)).fill(0);
      stats.map((item, i) => {
     plan[parseInt(item._id) - 1] = parseInt(item.numBookings);
  });

  sixMonthesPlan = Array.from(Array(6)).fill(0);
  stats.map((item, i) => {
    sixMonthesPlan[parseInt(item._id) - 1] = parseInt(item.numBookings);
});

  res.status(200).json({
    status: 'success',
    data: {
      plan
    },
    month:{
      stats
    },
    data2:{
      sixMonthesPlan
    }
  });
});


// Get Booking by weekly Status

exports.getWeeklyPlan = catchAsync(async (req, res, next) => {
  var curr = new Date;
  var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay())); // get first day in week
  var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6)); // get last day in week

  const stats = await Booking.aggregate([
    {$match: {'createdAt':   { $gte: new Date(firstday),$lte: new Date(lastday) }}},
    {$group: {_id:{$dayOfWeek: '$createdAt'},  numBookings:{ $sum: 1}}},
  ]);
 // put zero when month dont have tour
    plan = Array.from(Array(7)).fill(0);
      stats.map((item, i) => {
     plan[parseInt(item._id) - 1] = parseInt(item.numBookings);
  });
  res.status(200).json({
    status: 'success',
    data: {
      plan
    },
    week:{
      stats
    }
  });
});

// Get Booking by weekly Status

exports.getRemainingSeatsPlan = catchAsync(async (req, res, next) => {

  //> db.tg.aggregate([{ $match: { "a" : {$exists:true}, "b" : {$exists:true} } }, { $project: { _id : 0,name : 1, r1: {$subtract:["$a", "$b"]} }}, { $limit: 100 }])

  const plan = await Tour.aggregate([
  // find virtual element by lookup 
    { $lookup:{
      from:"bookings",
      localField:"_id",
      foreignField:"tourName",
      as:"bookings"
    }},
    {$unwind: '$bookings'}, // get array bookings by unwind
    {$group: { // group data 
      _id: '$name' ,
       maxGroupSize:{ $max: '$maxGroupSize'},
       numOfBooking:{ $sum: 1},
      }},
      //find data by project to can use subtract
     { $project: {  bookings:1 , maxGroupSize:1 , numOfBooking:1,remainingSeats:{$subtract:["$maxGroupSize", "$numOfBooking"]} }}, { $limit: 100 }
  ]);

  console.log("booking in remainig seats >>>" , plan);
  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});
