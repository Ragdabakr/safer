


const FlightTicket = require('./../models/flightTicketsModel');
const FlightTicketBooking = require('../models/flightTicketBookingModel');
FlightTicketCancelBooking= require('../models/flightTicketCancelBookingModel');
const FlightTicketBookingInvoice= require('./../models/flightTicketBookingInvoiceModel');
const Commission = require('./../models/commissionModel');
const Budget = require('./../models/budgetModel');

const Company = require('./../models/companyModel');
const User = require('./../models/userModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const APIFeatures = require('./../utils/apiFeatures');
const Invoice = require('../models/invoiceModel');
const Safebox = require('../models/safeboxsModel');


// ------- Booking new Ticket  ------//

exports.createFlightTicketBooking = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
//  console.log("data" ,data.totalReceivedAmount); 

 if(req.body.data.paymentMethod === "نقدا"){

  const newFlightTicketBooking = await FlightTicketBooking.create(req.body.data);
  // console.log('newFlightTicketBooking', newFlightTicketBooking);
  newFlightTicketBooking.travellers = [];
 for (let i = 0; i < req.body.travellers.length; i++) {
  newFlightTicketBooking.travellers.push({
    travellerFirstName :req.body.travellers[i].travellerFirstName ,
    travellerLastName :req.body.travellers[i].travellerLastName ,
    pnrNumber:req.body.travellers[i].pnrNumber ,
    travellerType :req.body.travellers[i].travellerType ,
    passportNumber :req.body.travellers[i].passportNumber ,
    phoneNumber :req.body.travellers[i].phoneNumber ,
    ticketvatPrice :req.body.travellers[i].ticketvatPrice ,
    ticketCostPrice :req.body.travellers[i].ticketCostPrice ,
    ticketSellingPrice :req.body.travellers[i].ticketSellingPrice ,
    comm :req.body.travellers[i].comm ,
    netCost :req.body.travellers[i].netCost ,
    netComm:req.body.travellers[i].netComm ,
    totalPrice :req.body.travellers[i].totalPrice ,
    receivedAmount:req.body.travellers[i].receivedAmount ,
    remainingAmount :req.body.travellers[i].remainingAmount ,
  })
  await newFlightTicketBooking.save();
  // console.log('newFlightTicketBooking with travellers >>>>>', newFlightTicketBooking);
 
 }

const safebox =  new Safebox();
safebox.title = 'تذكرة';
safebox.description = req.body.data.notes;
safebox.date = Date.now();
safebox.indebted = req.body.data.totalNetSellingPrice;
safebox.credit = 0;
 safebox.save();

const commission =  new Commission();
commission.name = 'عمولة حجز تذكرة';
commission.description = req.body.data.notes;
commission.date = Date.now();
commission.debit = 0;
commission.credit = req.body.data.totalNetComm;
commission.user = user.name;
 commission.save();

 const budget =  new Budget();
 budget.name = 'حجوزات تذاكر الطيران';
 budget.date = Date.now();
 budget.totalReceivedAmount = req.body.data.totalReceivedAmount;
 budget.totalRemainingAmount = req.body.data.totalRemainingAmount;
 await  budget.save(); 

 const budget2 =  new Budget();
 budget2.name = 'عمولات تذاكر الطيران';
 budget2.date = Date.now();
 budget2.totalReceivedAmount = req.body.data.totalNetComm;
 budget2.totalRemainingAmount = 0;
 await  budget2.save(); 


  Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
                 if (err) {console.log(err); 
                }
                foundCompany.credit = foundCompany.credit +parseFloat(req.body.data.totalNetCostPrice);
               
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
      data: newFlightTicketBooking
  }

});


 }else{

  // console.log("agel payment");

  const newFlightTicketBooking = await FlightTicketBooking.create(req.body.data);
  // console.log('newFlightTicketBooking', newFlightTicketBooking);
  newFlightTicketBooking.travellers = [];

  for (let i = 0; i < req.body.travellers.length; i++) {
    newFlightTicketBooking.travellers.push({
      travellerFirstName :req.body.travellers[i].travellerFirstName ,
      travellerLastName :req.body.travellers[i].travellerLastName ,
      pnrNumber:req.body.travellers[i].pnrNumber ,
      travellerType :req.body.travellers[i].travellerType ,
      passportNumber :req.body.travellers[i].passportNumber ,
      phoneNumber :req.body.travellers[i].phoneNumber ,
      ticketvatPrice :req.body.travellers[i].ticketvatPrice ,
      ticketCostPrice :req.body.travellers[i].ticketCostPrice ,
      ticketSellingPrice :req.body.travellers[i].ticketSellingPrice ,
      comm :req.body.travellers[i].comm ,
      netCost :req.body.travellers[i].netCost ,
      netComm:req.body.travellers[i].netComm ,
      totalPrice :req.body.travellers[i].totalPrice ,
      receivedAmount:req.body.travellers[i].receivedAmount ,
      remainingAmount :req.body.travellers[i].remainingAmount ,
    })
    await newFlightTicketBooking.save();
   
   }
  
  const safebox =  new Safebox();
  safebox.title = 'تذكرة';
  safebox.description = req.body.data.notes;
  safebox.date = Date.now();
  safebox.indebted = req.body.data.totalReceivedAmount;
  safebox.credit = 0;
   safebox.save();
  
  const commission =  new Commission();
  commission.name = 'عمولة حجز تذكرة';
  commission.description = req.body.data.notes;
  commission.date = Date.now();
  commission.debit = 0;
  commission.credit = req.body.data.totalNetComm;
  commission.user = user.name;
  commission.save();

   const budget =  new Budget();
   budget.name = 'حجوزات تذاكر الطيران';
   budget.date = Date.now();
   budget.totalReceivedAmount = req.body.data.totalReceivedAmount;
   budget.totalRemainingAmount = req.body.data.totalRemainingAmount;
   await  budget.save(); 
  
   const budget2 =  new Budget();
   budget2.name = 'عمولات تذاكر الطيران';
   budget2.date = Date.now();
   budget2.totalReceivedAmount = req.body.data.totalNetComm;
   budget2.totalRemainingAmount = 0;
   await  budget2.save(); 

    Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
          if (err) {console.log(err); }
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
        foundCompany.debit = foundCompany.debit + parseFloat(req.body.data.totalNetSellingPrice);
        foundCompany.companyReport.push({
            debit :req.body.data.totalNetSellingPrice,
            credit :req.body.data.totalReceivedAmount, 
            name:' حجز تذكرة بالاجل',
            description : req.body.data.notes,
            date : Date.now(),
            user : req.user.name,
          });
          
        await foundCompany.save();
  });
          res.status(201).json({
            status: 'success',
            data: {
                data: newFlightTicketBooking
            }
          });
        }
});

// ------- create invoice  ------//

exports.createFlightTicketInvoice = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
  const newFlightTicketBookingInvoice = await FlightTicketBookingInvoice.create(req.body.data);
  FlightTicketBooking.findOne({number:newFlightTicketBookingInvoice.number}, async function(err,foundBooking){ 
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

// ------- refund Ticket with comm ------//

exports.refundFlightTickets = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
  const newCancelFlightTicket = await FlightTicketCancelBooking.create(req.body.data);

const commission =  new Commission();
commission.name = 'عمولة استرجاع تذكرة';
commission.description = req.body.data.notes;
commission.date = Date.now();
commission.debit = req.body.data.totalRefundNetComm;
commission.credit = 0;
commission.user = req.user.name;
// console.log("commission  >>>>>>" , commission);
 commission.save();

 const budget2 =  new Budget();
 budget2.name = 'استرجاع عمولات حجز الطيران';
 budget2.date = Date.now();
 budget2.totalReceivedAmount = 0;
 budget2.totalRemainingAmount = req.body.data.totalRefundNetComm;
 await  budget2.save(); 

 FlightTicketBooking.findOne({number:req.body.data.number}, async function(err,foundFlightTicketBooking){
  if (err) {console.log(err); 
 }

 foundFlightTicketBooking.cancel = true;
  await foundFlightTicketBooking.save();
});


 Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
  if (err) {console.log(err); 
 }

 foundCompany.debit = foundCompany.debit + parseFloat(req.body.data.totalRefundNetCostPrice);
 foundCompany.companyReport.push({
     debit :req.body.data.totalRefundNetCostPrice ,
     credit :0, 
     name:'استحقاق عليه / استرجاع تذكرة',
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
     name:' استحقاق له / استرجاع تذكرة',
     description : req.body.data.notes,
     date : Date.now(),
     user : req.user.name,
  });
  
 await foundCompany.save();
});

    res.status(201).json({
    status: 'success',
    data: {
      data: newCancelFlightTicket
    }
  });
});


exports.getFlightTicketsBookingList = factory.getAll(FlightTicketBooking, {path:'bookingFrom ,bookingTo'});

exports.getFlightTicketBooking= factory.getOne(FlightTicketBooking , {path:'bookingFrom ,bookingTo'});
exports.updateFlightTicketBooking= factory.updateOne(FlightTicketBooking);
exports.deleteFlightTicketBooking= factory.deleteOne(FlightTicketBooking);

exports.getAllflightTicketsInvoices = factory.getAll(FlightTicketBookingInvoice);
exports.getFlightTicketInvoice= factory.getOne(FlightTicketBookingInvoice);
exports.deleteFlightTicketInvoice= factory.deleteOne(FlightTicketBookingInvoice);




