


const FlightTicket = require('./../models/flightTicketsModel');
const FlightTicketBooking = require('../models/flightTicketBookingModel');
const FlightTicketBookingInvoice= require('./../models/flightTicketBookingInvoiceModel');
const Commission = require('./../models/commissionModel');

const Company = require('./../models/companyModel');
const User = require('./../models/userModel');
const async = require('async');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const APIFeatures = require('./../utils/apiFeatures');
const Invoice = require('../models/invoiceModel');
const Safebox = require('../models/safeboxsModel');



exports.createFlightTicketBooking = catchAsync(async(req, res) => {
  const user = req.user;
  const data= req.body.data;
 console.log("data" ,data); 
 console.log("travellers" ,req.body.travellers); 

 const newFlightTicketBooking = await FlightTicketBooking.create(req.body.data);
 console.log('newFlightTicketBooking', newFlightTicketBooking);
 newFlightTicketBooking.travellers = [];

 for (let i = 0; i < req.body.travellers.length; i++) {
  newFlightTicketBooking.travellers.push({
    travellerFirstName :req.body.travellers[i].travellerFirstName ,
    travellerLastName :req.body.travellers[i].travellerLastName ,
    pnrNumber:req.body.travellers[i].pnrNumber ,
    travellerType :req.body.travellers[i].travellerType ,
    passportNumber :req.body.travellers[i].passportNumber ,
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
  newFlightTicketBooking.save();
  console.log('newFlightTicketBooking with travellers >>>>>', newFlightTicketBooking);
 
 }

// const safebox =  new Safebox();
// safebox.title = 'تذكرة';
// safebox.description = req.body.data.notes;
// safebox.date = Date.now();
// safebox.indebted = req.body.data.totalNetSellingPrice;
// safebox.credit = 0;
//  safebox.save();

// const commission =  new Commission();
// commission.name = 'عمولة حجز تذكرة';
// commission.description = req.body.data.notes;
// commission.date = Date.now();
// commission.debit = 0;
// commission.credit = req.body.data.totalNetComm;
// commission.user = user.name;
// // console.log("commission  >>>>>>" , commission);
//  commission.save();


//   Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
//                  if (err) {console.log(err); 
//                 }

//                 console.log("foundCompany >>>>>" , foundCompany);
//                 foundCompany.credit = foundCompany.credit + req.body.data.totalNetCostPrice;
//                 foundCompany.companyReport.push({
//                     debit :0 ,
//                     credit :req.body.data.totalNetCostPrice, 
//                     name:'استحقاق الي',
//                     description : req.body.data.notes,
//                     date : Date.now(),
//                     user : req.user.name,
//                  });
                 
//                  foundCompany.save();
// });

res.status(201).json({
  status: 'success',
  data: {
      data: newFlightTicketBooking
  }
});


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



exports.getFlightTicketsBookingList = factory.getAll(FlightTicketBooking);


exports.getFlightTicketBooking= factory.getOne(FlightTicketBooking );
exports.updateFlightTicketBooking= factory.updateOne(FlightTicketBooking);
exports.deleteFlightTicketBooking= factory.deleteOne(FlightTicketBooking);


exports.getAllflightTicketsInvoices = factory.getAll(FlightTicketBookingInvoice);
exports.getFlightTicketInvoice= factory.getOne(FlightTicketBookingInvoice);
exports.createFlightTicketInvoice= factory.createOne(FlightTicketBookingInvoice);
exports.deleteFlightTicketInvoice= factory.deleteOne(FlightTicketBookingInvoice);




