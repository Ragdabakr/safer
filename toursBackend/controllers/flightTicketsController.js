


const FlightTicket = require('./../models/flightTicketsModel');
const FlightTicketBooking = require('../models/flightTicketBookingModel');
const FlightTicketBookingInvoice= require('./../models/flightTicketBookingInvoiceModel');

const Company = require('./../models/companyModel');
const User = require('./../models/userModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const APIFeatures = require('./../utils/apiFeatures');
const Invoice = require('../models/invoiceModel');



exports.createFlightTicketBooking = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
 console.log("data" ,data); 
 console.log("travellers" ,req.body.travellers); 

//  const pnrArray = req.body.data.travellers;
//  console.log("pnrArray" , pnrArray);
// let pnrNumber =[];
//  for (let i = 0; i < pnrArray.length; i++) {
//  pnrNumber += pnrArray[i].pnrNumber+ ",";
//   console.log("pnrNumber" , pnrNumber);
 }

  // const companyId = req.body.data.companyAccount._id;
  // const flightTicketId= req.body.data.airlineAccount._id ;
//   Company.findById({_id:companyId}, async function(err,foundCompany){
//                  if (err) {console.log(err); }
               
//                  foundCompany.incoming = foundCompany.incoming + req.body.data.totalPrice;

//                  if( req.body.data.commType === "عمولة الي عميل"){
//                   foundCompany.outgoing = foundCompany.outgoing + req.body.data.delegateComm;
//                   foundCompany.companyReport.push({
//                     debit :req.body.data.totalPrice ,
//                     credit :req.body.data.delegateComm ,
//                     date:req.body.data.departureDate ,
//                     companyName :req.body.data.companyAccount.name ,
//                     destination :req.body.data.destination ,
//                     note :req.body.data.notes ,
//                     airlineName :req.body.data.airlineAccount.name ,
//                     type : "fairFlightTickets",
//                     user :user.name ,
//                     pnrNumber : pnrNumber,
//                     paymentMethod: req.body.data.paymentMethod,

//                   });
//                  } else{

//                  foundCompany.companyReport.push({
//                   debit :req.body.data.totalPrice ,
//                   credit :0,
//                   date:req.body.data.departureDate ,
//                   companyName :req.body.data.companyAccount.name ,
//                   destination :req.body.data.destination ,
//                   note :req.body.data.notes ,
//                   airlineName :req.body.data.airlineAccount.name ,
//                   type : "fairFlightTickets",
//                   user :user.name ,
//                   pnrNumber : pnrNumber,
//                   paymentMethod: req.body.data.paymentMethod,


//                 });
//               }

//                // console.log("   foundCompanyReport  >>" ,    foundCompany );
//                 foundCompany.save();
//   });

//   FlightTicket.findById({_id:flightTicketId}, async function(err,foundFlightTicket){
//                 if (err) {console.log(err); }
//                   foundFlightTicket.incoming = foundFlightTicket.incoming + (req.body.data.totalPrice - req.body.data.companyComm);
//                   console.log("  foundFlightTicket.incoming  >>" ,   foundFlightTicket.incoming );

//                   foundFlightTicket.airlineReport.push({
//                     debit :0,
//                     credit :  req.body.data.totalPrice - req.body.data.companyComm ,
//                     date:req.body.data.departureDate ,
//                     companyName :req.body.data.companyAccount.name ,
//                     destination :req.body.data.destination ,
//                     note :req.body.data.notes ,
//                     airlineName :req.body.data.airlineAccount.name ,
//                     type : "fairFlightTickets",
//                     user :user.name ,
//                     paymentMethod: req.body.data.paymentMethod,
//                     pnrNumber : pnrNumber,

//                   });

//                  // console.log("   foundFlightTicketReport  >>" ,    foundFlightTicket );
//                    foundFlightTicket.save();

//                 });
        

//                // console.log('newFlightTicket >>',  newFlightTicket);
//                 const getRandomId = (min = 0, max = 500000) => {
//                     min = Math.ceil(min);
//                     max = Math.floor(max);
//                     const num =  Math.floor(Math.random() * (max - min + 1)) + min;
//                     return num.toString().padStart(5, "0");
//                   };
//                   const newFlightTicket = await FlightTicketBooking.create(req.body.data);
//                   const invoice =  new FlightTicketBookingInvoice();
//                   invoice.flightTicketInfo = newFlightTicket._id;
//                   invoice.companyAccount = req.body.data.companyAccount.name;
//                   invoice.airlineAccount = req.body.data.airlineAccount.name;
//                   invoice.paymentMethod = req.body.data.paymentMethod;
//                   invoice.totalPrice = req.body.data.totalPrice;
//                   invoice.completed = true;
//                   invoice.type = "fairFlightTickets";
//                   invoice.number = getRandomId();
//                   invoice.createdAt= Date.now();
//                   invoice.save();

             
//                 res.status(201).json({
//                 status: 'success',
//                data: { newFlightTicket },
//                 invoice:{invoice }
//                 }); 
 
 


});

 exports.refundFlightTickets = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
  console.log("user" ,user);
  console.log("data" ,data);
  const companyId = req.body.data.companyAccount._id;
  const flightTicketId= req.body.data.airlineAccount._id ;

  Company.findById({_id:companyId}, async function(err,foundCompany){
                 if (err) {console.log(err); }
                // console.log("foundCompany" , foundCompany);
                 foundCompany.outgoing = foundCompany.outgoing + req.body.data.totalRefundCostCompany;
                 foundCompany.companyReport.push({
                  debit :0,
                  credit :req.body.data.totalRefundCostCompany,
                  date:req.body.data.departureDate ,
                  companyName :req.body.data.companyAccount.name ,
                  destination :req.body.data.destination ,
                  note :req.body.data.notes ,
                  airlineName :req.body.data.airlineAccount.name ,
                  type : "refundFlightTickets",
                  user :user.name ,
                  paymentMethod: req.body.data.paymentMethod,
                  pnrNumber: req.body.data.pnrNumber,
                  notes: req.body.data.note,

                });

               // console.log("   foundCompanyReport  >>" ,    foundCompany );
                foundCompany.save();
  });

  FlightTicket.findById({_id:flightTicketId}, async function(err,foundFlightTicket){
                if (err) {console.log(err); }
                  foundFlightTicket.outgoing = foundFlightTicket.outgoing + req.body.data.totalRefundCostAirlineCompany;
                  console.log("  foundFlightTicket.incoming  >>" ,   foundFlightTicket.incoming );

                  foundFlightTicket.airlineReport.push({
                    debit :0,
                    credit :  req.body.data.totalRefundCostAirlineCompany,
                    date:req.body.data.departureDate ,
                    companyName :req.body.data.companyAccount.name ,
                    destination :req.body.data.destination ,
                    note :req.body.data.notes ,
                    airlineName :req.body.data.airlineAccount.name ,
                    type : "refundFlightTickets",
                    user :user.name ,
                    paymentMethod: req.body.data.paymentMethod,
                    pnrNumber: req.body.data.pnrNumber,
                    notes: req.body.data.note,

                  });

                 // console.log("foundFlightTicketReport  >>" ,    foundFlightTicket );
                   foundFlightTicket.save();
                });
                const newFlightTicket = await FlightTicketBooking.create(req.body.data);

              console.log('newFlightTicket >>',  newFlightTicket);
                const getRandomId = (min = 0, max = 500000) => {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
                    return num.toString().padStart(5, "0");
                  };

                  const invoice =  new FlightTicketBookingInvoice();
                  //invoice.flightTicketInfo = newFlightTicket._id;
                  invoice.companyAccount = req.body.data.companyAccount.name;
                  invoice.airlineAccount = req.body.data.airlineAccount.name;
                  invoice.paymentMethod = req.body.data.paymentMethod;
                  invoice.totalPrice = req.body.data.totalRefundCostCompany;
                  invoice.pnrNumber = req.body.data.pnrNumber;
                  invoice.completed = true;
                  invoice.note = req.body.data.notes;
                  invoice.type = "refundFlightTickets";
                  invoice.number = getRandomId();
                  invoice.createdAt= Date.now();
                  invoice.date = req.body.data.departureDate ,
                  invoice.destination = req.body.data.destination ,
                  invoice.save();

               console.log('new Invoice', invoice);
                res.status(201).json({
                status: 'success',
               // data: { newFlightTicket },
                invoice:{invoice }
                }); 
});

exports.changeFlightTickets = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
  console.log("data" ,data);
  const companyId = req.body.data.companyAccount._id;
  const flightTicketId= req.body.data.airlineAccount._id ;
  Company.findById({_id:companyId}, async function(err,foundCompany){
                 if (err) {console.log(err); }
                console.log("foundCompany >>" , foundCompany);
                 foundCompany.incoming = foundCompany.incoming+  parseInt(req.body.data.fineTicketSystem)+ parseInt(req.body.data.fineTicketCompany);
                 foundCompany.companyReport.push({
                  debit : parseInt(req.body.data.fineTicketSystem)+ parseInt(req.body.data.fineTicketCompany),
                  credit :0,
                  date:req.body.data.departureDate ,
                  companyName :req.body.data.companyAccount.name ,
                  destination :req.body.data.destination ,
                  note :req.body.data.notes ,
                  airlineName :req.body.data.airlineAccount.name ,
                  type : "changeFlightTickets",
                  user :user.name ,
                  paymentMethod: req.body.data.paymentMethod,
                  pnrNumber: req.body.data.pnrNumber,
                  notes: req.body.data.note,

                });

              console.log("   foundCompanyReport  >>" ,    foundCompany );
               foundCompany.save();
  });

  FlightTicket.findById({_id:flightTicketId}, async function(err,foundFlightTicket){
                if (err) {console.log(err); }
                  foundFlightTicket.incoming = foundFlightTicket.incoming +parseInt(req.body.data.fineTicketSystem);
                  console.log("  foundFlightTicket.incomingjj  >>" ,   foundFlightTicket.incoming );

                  foundFlightTicket.airlineReport.push({
                    debit : parseInt(req.body.data.fineTicketSystem),
                    credit : 0,
                    date:req.body.data.departureDate ,
                    companyName :req.body.data.companyAccount.name ,
                    destination :req.body.data.destination ,
                    note :req.body.data.notes ,
                    airlineName :req.body.data.airlineAccount.name ,
                    type : "changeFlightTickets",
                    user :user.name ,
                    notes: req.body.data.note,

                  });

                 console.log("foundFlightTicketReport  >>" ,    foundFlightTicket );
                  foundFlightTicket.save();
                });
                const getRandomId = (min = 0, max = 500000) => {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
                    return num.toString().padStart(5, "0");
                  };

                  const invoice =  new FlightTicketBookingInvoice();
                  invoice.companyAccount = req.body.data.companyAccount.name;
                  invoice.airlineAccount = req.body.data.airlineAccount.name;
                  invoice.paymentMethod = req.body.data.paymentMethod;
                  invoice.totalPrice = parseInt(req.body.data.fineTicketSystem)+ parseInt(req.body.data.fineTicketCompany);
                  invoice.pnrNumber = req.body.data.pnrNumber;
                  invoice.completed = true;
                  invoice.note = req.body.data.notes;
                  invoice.type = "changeFlightTickets";
                  invoice.number = getRandomId();
                  invoice.date = req.body.data.departureDate ,
                  invoice.destination = req.body.data.destination ,
                  invoice.createdAt= Date.now();
                 
                   invoice.save();

                console.log('new Invoice', invoice);
                res.status(201).json({
                status: 'success',
                invoice:{invoice }
                }); 
});

exports.salesFlightTickes = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
 console.log("data" ,data); 

  const companyId = req.body.data.companyAccount._id;
  const flightTicketId= req.body.data.airlineAccount._id ;
  Company.findById({_id:companyId}, async function(err,foundCompany){
                 if (err) {console.log(err); }
               
                 foundCompany.incoming = parseInt(foundCompany.incoming) + parseInt(req.body.data.totalSellingPrice);

                  foundCompany.companyReport.push({
                    debit : parseInt(req.body.data.totalSellingPrice),
                    credit : 0 ,
                    date:req.body.data.departureDate ,
                    companyName :req.body.data.companyAccount.name ,
                    destination :req.body.data.destination ,
                    note :req.body.data.notes ,
                    airlineName :req.body.data.airlineAccount.name ,
                    type : "salesFlightTickets",
                    user :user.name ,
                    pnrNumber : req.body.data.pnrNumber,
                    paymentMethod: req.body.data.paymentMethod,

                  });
             

               console.log("   foundCompanyReport  >>" ,    foundCompany );
               // foundCompany.save();
  });

  FlightTicket.findById({_id:flightTicketId}, async function(err,foundFlightTicket){
                if (err) {console.log(err); }
                  foundFlightTicket.incoming = foundFlightTicket.incoming + (req.body.data.totalSellingPrice - req.body.data.totalTicketProfit);
                  console.log("  foundFlightTicket.incoming  >>" ,   foundFlightTicket.incoming );

                  foundFlightTicket.airlineReport.push({
                    debit :0,
                    credit :  req.body.data.totalSellingPrice - req.body.data.totalTicketProfit ,
                    date:req.body.data.departureDate ,
                    companyName :req.body.data.companyAccount.name ,
                    destination :req.body.data.destination ,
                    note :req.body.data.notes ,
                    airlineName :req.body.data.airlineAccount.name ,
                    type : "salesFlightTickets",
                    user :user.name ,
                    paymentMethod: req.body.data.paymentMethod,
                    pnrNumber : req.body.data.pnrNumber,

                  });

                console.log("   foundFlightTicketReport  >>" ,    foundFlightTicket );
                   //foundFlightTicket.save();

                });
        

               // console.log('newFlightTicket >>',  newFlightTicket);
                const getRandomId = (min = 0, max = 500000) => {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
                    return num.toString().padStart(5, "0");
                  };
                  const newFlightTicket = await FlightTicketBooking.create(req.body.data);
                  const invoice =  new FlightTicketBookingInvoice();
                  invoice.flightTicketInfo = newFlightTicket._id;
                  invoice.companyAccount = req.body.data.companyAccount.name;
                  invoice.airlineAccount = req.body.data.airlineAccount.name;
                  invoice.paymentMethod = req.body.data.paymentMethod;
                  invoice.totalPrice = req.body.data.totalSellingPrice;
                  invoice.completed = true;
                  invoice.type = "salesFlightTickets";
                  invoice.number = getRandomId();
                  invoice.createdAt= Date.now();
                  //invoice.save();
               console.log("invoice >> " , invoice);
             
                res.status(201).json({
                status: 'success',
               data: { newFlightTicket },
                invoice:{invoice }
                }); 
 
 

});



exports.getAllflightTicketsBooking = factory.getAll(FlightTicketBooking );
exports.getFlightTicketBooking= factory.getOne(FlightTicketBooking );
// exports.createFlightTicket= factory.createOne(FlightTicket);
exports.updateFlightTicketBooking= factory.updateOne(FlightTicketBooking);
exports.deleteFlightTicketBooking= factory.deleteOne(FlightTicketBooking);


exports.getAllflightTickets = factory.getAll(FlightTicket );
exports.getFlightTicket= factory.getOne(FlightTicket );
exports.createFlightTicket= factory.createOne(FlightTicket);
exports.updateFlightTicket= factory.updateOne(FlightTicket);
exports.deleteFlightTicket= factory.deleteOne(FlightTicket);




