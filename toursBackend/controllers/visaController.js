
 FlightTicketCancelBooking= require('../models/flightTicketCancelBookingModel');
const Commission = require('./../models/commissionModel');
const VisaBooking = require('./../models/visaBookingModel');
const VisaBookingInvoice = require('./../models/visaBookingInvoiceModel');
const VisaCancelBooking = require('./../models/visaCancelBookingModel');

const Company = require('./../models/companyModel');
const User = require('./../models/userModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const APIFeatures = require('./../utils/apiFeatures');
const Invoice = require('../models/invoiceModel');
const Safebox = require('../models/safeboxsModel');
const Budget = require('./../models/budgetModel');


// ------- Booking new Visa  ------//

exports.createVisaBooking = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
 if(req.body.data.paymentMethod === "نقدا"){

  const newVisaBooking = await VisaBooking.create(req.body.data);
  newVisaBooking.travellers = [];
 for (let i = 0; i < req.body.travellers.length; i++) {
    newVisaBooking.travellers.push({
    travellerFirstName :req.body.travellers[i].travellerFirstName ,
    travellerLastName :req.body.travellers[i].travellerLastName ,
    travellerType :req.body.travellers[i].travellerType ,
    passportNumber :req.body.travellers[i].passportNumber ,
    phoneNumber :req.body.travellers[i].phoneNumber ,
    ticketCostPrice :req.body.travellers[i].ticketCostPrice ,
    ticketSellingPrice :req.body.travellers[i].ticketSellingPrice ,
    comm :req.body.travellers[i].comm ,
    netCost :req.body.travellers[i].netCost ,
    netComm:req.body.travellers[i].netComm ,
    receivedAmount:req.body.travellers[i].receivedAmount ,
    remainingAmount :req.body.travellers[i].remainingAmount ,
  })
  await newVisaBooking.save();
 }

const safebox =  new Safebox();
safebox.title = 'فيزا';
safebox.description = req.body.data.notes;
safebox.date = Date.now();
safebox.indebted = 0;
safebox.credit = req.body.data.totalReceivedAmount;
safebox.save();

const commission =  new Commission();
commission.name = 'عمولة حجز فيزا';
commission.description = req.body.data.notes;
commission.date = Date.now();
commission.debit = 0;
commission.credit = req.body.data.totalNetComm;
commission.user = user.name;
// console.log("commission  >>>>>>" , commission);
 commission.save();

 const budget =  new Budget();
 budget.name = 'حجوزات التأشيرات';
 budget.date = Date.now();
 budget.totalReceivedAmount = req.body.data.totalReceivedAmount;
 budget.totalRemainingAmount = req.body.data.remainingAmount;
 await  budget.save(); 

 const budget2 =  new Budget();
 budget2.name = 'عمولات  حجوزات التأشيرات';
 budget2.date = Date.now();
 budget2.totalReceivedAmount = req.body.data.totalNetComm;
 budget2.totalRemainingAmount = 0;
 await  budget2.save(); 


  Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
                 if (err) {console.log(err); 
                }
                foundCompany.credit = foundCompany.credit +parseFloat(req.body.data.totalReceivedAmount);
               
                foundCompany.companyReport.push({
                    debit :0 ,
                    credit :req.body.data.totalNetCostPrice, 
                    name:'استحقاق الي',
                    description : req.body.data.notes,
                    date : Date.now(),
                    user : req.user.name,
                 });
                 
                await  foundCompany.save();
});

// Company.findById({_id:req.body.data.bookingTo._id}, async function(err,foundCompany){
//   if (err) {console.log(err); 
//  }


//  foundCompany.credit = foundCompany.credit +parseFloat(req.body.data.totalReceivedAmount);

//  foundCompany.companyReport.push({
//      debit :  req.body.data.totalRemainingAmount,
//      credit :req.body.data.totalReceivedAmount, 
//      name:' حجز تذكرة نقدا',
//      description : req.body.data.notes,
//      date : Date.now(),
//      user : req.user.name,
//   });
  
//   await foundCompany.save();
// });

res.status(201).json({
  status: 'success',
  data: {
      data: newVisaBooking
  }

});


 }else{

  // console.log("agel payment");

  const newVisaBooking = await VisaBooking.create(req.body.data);
  // console.log('newFlightTicketBooking', newFlightTicketBooking);
  newVisaBooking.travellers = [];

  for (let i = 0; i < req.body.travellers.length; i++) {
    newVisaBooking.travellers.push({
      travellerFirstName :req.body.travellers[i].travellerFirstName ,
      travellerLastName :req.body.travellers[i].travellerLastName ,
      travellerType :req.body.travellers[i].travellerType ,
      passportNumber :req.body.travellers[i].passportNumber ,
      phoneNumber :req.body.travellers[i].phoneNumber ,
      ticketCostPrice :req.body.travellers[i].ticketCostPrice ,
      ticketSellingPrice :req.body.travellers[i].ticketSellingPrice ,
      comm :req.body.travellers[i].comm ,
      netCost :req.body.travellers[i].netCost ,
      netComm:req.body.travellers[i].netComm ,
      receivedAmount:req.body.travellers[i].receivedAmount ,
      remainingAmount :req.body.travellers[i].remainingAmount ,
    })
    await newVisaBooking.save();
   
   }
  
  const safebox =  new Safebox();
  safebox.title = 'فيزا';
  safebox.description = req.body.data.notes;
  safebox.date = Date.now();
  safebox.indebted = req.body.data.totalReceivedAmount;
  safebox.credit = 0;
   safebox.save();
  
  const commission =  new Commission();
  commission.name = 'عمولة حجز فيزا';
  commission.description = req.body.data.notes;
  commission.date = Date.now();
  commission.debit = 0;
  commission.credit = req.body.data.totalNetComm;
  commission.user = user.name;
  // console.log("commission  >>>>>>" , commission);
   commission.save();

     Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
                 if (err) {console.log(err); 
                }

                // console.log("foundCompany >>>>>" , foundCompany);
                foundCompany.credit = foundCompany.credit + parseFloat(req.body.data.totalNetCostPrice);
                foundCompany.companyReport.push({
                    debit :0 ,
                    credit :req.body.data.totalNetCostPrice, 
                    name:'استحقاق الي',
                    description : req.body.data.notes,
                    date : Date.now(),
                    user : req.user.name,
                 });
                 
                await foundCompany.save();
});
  
  
    Company.findById({_id:req.body.data.bookingTo._id}, async function(err,foundCompany){
                   if (err) {console.log(err); 
                  }
                  foundCompany.credit = foundCompany.credit + parseFloat(req.body.data.totalReceivedAmount);

                  // console.log("foundCompany credit 33>>>>>" , foundCompany.credit);

                  foundCompany.companyReport.push({
                      debit :req.body.data.totalNetSellingPrice,
                      credit :req.body.data.totalReceivedAmount, 
                      name:' حجز فيزا بالاجل',
                      description : req.body.data.notes,
                      date : Date.now(),
                      user : req.user.name,
                   });
                   
                  await foundCompany.save();
  });
  
  res.status(201).json({
    status: 'success',
    data: {
        data: newVisaBooking
    }
  
  });
  

 }

});


// ------- create invoice  ------//

exports.createVisaInvoice = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
  const newVisaBookingInvoice = await VisaBookingInvoice.create(req.body.data);
  VisaBooking.findOne({number:newVisaBookingInvoice.number}, async function(err,foundBooking){ 
    if (err) {console.log(err); }
      foundBooking.createdInvoice = true;
     foundBooking.save();
  res.status(201).json({
    status: 'success',
    data: {
        data: foundBooking
    }
    });
  });
});



 

// ------- refund Visa------//

exports.refundVisa = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
  const newCancelVisa = await VisaCancelBooking.create(req.body.data);


const commission =  new Commission();
commission.name = 'عمولة استرجاع تأشيرة';
commission.description = req.body.data.notes;
commission.date = Date.now();
commission.debit = req.body.data.totalRefundNetComm;
commission.credit = 0;
commission.user = req.user.name;
 commission.save();

 const budget2 =  new Budget();
 budget2.name = 'استرجاع عمولات حجز التأشيرات';
 budget2.date = Date.now();
 budget2.totalReceivedAmount = 0;
 budget2.totalRemainingAmount = req.body.data.totalRefundNetComm;
 await  budget2.save(); 

 VisaBooking.findOne({number:req.body.data.number}, async function(err,foundVisaBooking){
  if (err) {console.log(err); 
 }

 foundVisaBooking.cancel = true;
  await foundVisaBooking.save();
});


 Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
  if (err) {console.log(err); 
 }

 foundCompany.debit = foundCompany.debit + parseFloat(req.body.data.totalRefundNetCostPrice);
 foundCompany.companyReport.push({
     debit :req.body.data.totalRefundNetCostPrice ,
     credit :0, 
     name:'استحقاق عليه / استرجاع تأشيرة',
     description : req.body.data.notes,
     date : Date.now(),
     user : req.user.name,
  });
  
 await foundCompany.save();
});

Company.findById({_id:req.body.data.bookingTo._id}, async function(err,foundCompany){
  if (err) {console.log(err); 
 }

 foundCompany.credit = foundCompany.credit + parseFloat(req.body.data.totalRefundNetSellingPrice);
 foundCompany.companyReport.push({
     credit :req.body.data.totalRefundNetSellingPrice,
     debit :0, 
     name:' استحقاق له / استرجاع تأشيرة',
     description : req.body.data.notes,
     date : Date.now(),
     user : req.user.name,
  });
  
 await foundCompany.save();
});

res.status(201).json({
status: 'success',
data: {
data: newCancelVisa
}

});
});


exports.getVisaBookingList = factory.getAll(VisaBooking, {path:'bookingFrom ,bookingTo'});

exports.getVisaBooking= factory.getOne(VisaBooking , {path:'bookingFrom ,bookingTo'});
exports.updateVisaBooking= factory.updateOne(VisaBooking);
exports.deleteVisaBooking= factory.deleteOne(VisaBooking);

exports.getAllVisaBookingsInvoices = factory.getAll(VisaBookingInvoice);
exports.getVisaBookingInvoice= factory.getOne(VisaBookingInvoice);
exports.deleteVisaBookingInvoice= factory.deleteOne(VisaBookingInvoice);

