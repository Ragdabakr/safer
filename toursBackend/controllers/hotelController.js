
const Hotel = require('./../models/hotelModel');
const HotelBooking = require('./../models/hotelBookingModel');
const factory = require('./handlerFactory');
const Commission = require('./../models/commissionModel');
const HotelBookingInvoice = require('./../models/hotelBookingInvoiceModel');
const HotelCancelBooking = require('./../models/hotelCancelBookingModel');
const catchAsync = require('./../utils/catchAsync');
const Company = require('./../models/companyModel');
const Safebox = require('../models/safeboxsModel');
const Budget = require('./../models/budgetModel');


// ------- Booking new Hotel  ------//

exports.createHotelBooking = catchAsync(async(req, res) => {
    const user = req.user;
    const data= req.body.data;

    console.log("data"  , data);
   if(req.body.data.paymentMethod === "نقدا"){
  
    const newHotelBooking = await HotelBooking.create(req.body.data);
     console.log('newHotelBooking', newHotelBooking);
    newHotelBooking.travellers = [];
   for (let i = 0; i < req.body.travellers.length; i++) {
      newHotelBooking.travellers.push({
      guestName :req.body.travellers[i].guestName ,
      roomType :req.body.travellers[i].roomType ,
      phoneNumber :req.body.travellers[i].phoneNumber ,
      ticketvatPrice :req.body.travellers[i].ticketvatPrice ,
      ticketCostPrice :req.body.travellers[i].ticketCostPrice ,
      ticketSellingPrice :req.body.travellers[i].ticketSellingPrice ,
      comm :req.body.travellers[i].comm ,
      netCost :req.body.travellers[i].netCost ,
      netComm:req.body.travellers[i].netComm ,
      receivedAmount:req.body.travellers[i].receivedAmount ,
      remainingAmount :req.body.travellers[i].remainingAmount ,
    })
    await newHotelBooking.save();
   }
  
  const safebox =  new Safebox();
  safebox.title = 'حجز فندقي';
  safebox.description = req.body.data.notes;
  safebox.date = Date.now();
  safebox.indebted = 0;
  safebox.credit = req.body.data.totalReceivedAmount;
  safebox.save();
  
  const commission =  new Commission();
  commission.name = 'عمولة حجز فندقي';
  commission.description = req.body.data.notes;
  commission.date = Date.now();
  commission.debit = 0;
  commission.credit = req.body.data.totalNetComm;
  commission.user = user.name;
  commission.save();
  
   const budget =  new Budget();
   budget.name = 'حجوزات الفنادق';
   budget.date = Date.now();
   budget.totalReceivedAmount = req.body.data.totalReceivedAmount;
   budget.totalRemainingAmount = req.body.data.remainingAmount;
   await  budget.save(); 
  
   const budget2 =  new Budget();
   budget2.name = 'عمولات  حجوزات الفنادق';
   budget2.date = Date.now();
   budget2.totalReceivedAmount = req.body.data.totalNetComm;
   budget2.totalRemainingAmount = 0;
   await  budget2.save(); 
  
  
    Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
                   if (err) {console.log(err); 
                  }
                  foundCompany.credit = foundCompany.credit +parseInt(req.body.data.totalReceivedAmount);
                 
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
  
  
  //  foundCompany.credit = foundCompany.credit +parseInt(req.body.data.totalReceivedAmount);
  
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
        data: newHotelBooking
    }
  
  });
  
  
   }else{
  
    // console.log("agel payment");
  
    const newHotelBooking = await HotelBooking.create(req.body.data);
    // console.log('newFlightTicketBooking', newFlightTicketBooking);
    newHotelBooking.travellers = [];
  
    for (let i = 0; i < req.body.travellers.length; i++) {
      newHotelBooking.travellers.push({
        guesttName :req.body.travellers[i].guestName ,
        roomType :req.body.travellers[i].roomType ,
        phoneNumber :req.body.travellers[i].phoneNumber ,
        ticketvatPrice :req.body.travellers[i].ticketvatPrice ,
        ticketCostPrice :req.body.travellers[i].ticketCostPrice ,
        ticketSellingPrice :req.body.travellers[i].ticketSellingPrice ,
        comm :req.body.travellers[i].comm ,
        netCost :req.body.travellers[i].netCost ,
        netComm:req.body.travellers[i].netComm ,
        receivedAmount:req.body.travellers[i].receivedAmount ,
        remainingAmount :req.body.travellers[i].remainingAmount ,
      })
      await newHotelBooking.save();
     
     }
    
    const safebox =  new Safebox();
    safebox.title = 'حجز فندقي';
    safebox.description = req.body.data.notes;
    safebox.date = Date.now();
    safebox.indebted = req.body.data.totalReceivedAmount;
    safebox.credit = 0;
    safebox.save();
    
    const commission =  new Commission();
    commission.name = 'عمولة حجز فندقي';
    commission.description = req.body.data.notes;
    commission.date = Date.now();
    commission.debit = 0;
    commission.credit = req.body.data.totalNetComm;
    commission.user = user.name;
    commission.save();

    const budget =  new Budget();
    budget.name = 'حجوزات الفنادق';
    budget.date = Date.now();
    budget.totalReceivedAmount = req.body.data.totalReceivedAmount;
    budget.totalRemainingAmount = req.body.data.remainingAmount;
    await  budget.save(); 
   
    const budget2 =  new Budget();
    budget2.name = 'عمولات  حجوزات الفنادق';
    budget2.date = Date.now();
    budget2.totalReceivedAmount = req.body.data.totalNetComm;
    budget2.totalRemainingAmount = 0;
    await  budget2.save(); 
  
       Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
                   if (err) {console.log(err); 
                  }
  
                  // console.log("foundCompany >>>>>" , foundCompany);
                  foundCompany.credit = foundCompany.credit + parseInt(req.body.data.totalNetCostPrice);
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
                    foundCompany.credit = foundCompany.credit + parseInt(req.body.data.totalReceivedAmount);
  
                    // console.log("foundCompany credit 33>>>>>" , foundCompany.credit);
  
                    foundCompany.companyReport.push({
                        debit :req.body.data.totalNetSellingPrice,
                        credit :req.body.data.totalReceivedAmount, 
                        name:' حجز فندقي بالاجل',
                        description : req.body.data.notes,
                        date : Date.now(),
                        user : req.user.name,
                     });
                     
                    await foundCompany.save();
    });
    
    res.status(201).json({
      status: 'success',
      data: {
          data: newHotelBooking
      }
    });
   }
  });



// ------- create invoice  ------//

exports.createHotelBookingInvoice = catchAsync(async(req, res) => {
    const newHotelBookingInvoice = await HotelBookingInvoice.create(req.body.data);
    HotelBooking.findOne({number:newHotelBookingInvoice.number}, async function(err,foundBooking){ 
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
  
  // ------- refund Hotel booking------//

exports.refundHotelBooking = catchAsync(async(req, res) => {
    const user = req.user;
    const data= req.body.data;
    const newCancelHotel = await HotelCancelBooking.create(req.body.data);
  
  
  const commission =  new Commission();
  commission.name = 'عمولة استرجاع حجز فندقي';
  commission.description = req.body.data.notes;
  commission.date = Date.now();
  commission.debit = req.body.data.totalRefundNetComm;
  commission.credit = 0;
  commission.user = req.user.name;
   commission.save();
  
   const budget2 =  new Budget();
   budget2.name = 'استرجاع عمولات حجز فندقي';
   budget2.date = Date.now();
   budget2.totalReceivedAmount = 0;
   budget2.totalRemainingAmount = req.body.data.totalRefundNetComm;
   await  budget2.save(); 
  
   HotelBooking.findOne({number:req.body.data.number}, async function(err,foundBooking){
    if (err) {console.log(err); 
   }
  
   foundBooking.cancel = true;
    await foundBooking.save();
  });
  
  
   Company.findById({_id:req.body.data.bookingFrom._id}, async function(err,foundCompany){
    if (err) {console.log(err); 
   }
  
   foundCompany.debit = foundCompany.debit + parseInt(req.body.data.totalRefundNetCostPrice);
   foundCompany.companyReport.push({
       debit :req.body.data.totalRefundNetCostPrice ,
       credit :0, 
       name:'استحقاق عليه / استرجاع حجز فندقي',
       description : req.body.data.notes,
       date : Date.now(),
       user : req.user.name,
    });
    
   await foundCompany.save();
  });
  
  Company.findById({_id:req.body.data.bookingTo._id}, async function(err,foundCompany){
    if (err) {console.log(err); 
   }
  
   foundCompany.credit = foundCompany.credit + parseInt(req.body.data.totalRefundNetSellingPrice);
   foundCompany.companyReport.push({
       debit :0,
       credit :req.body.data.totalRefundNetSellingPrice, 
       name:' استحقاق له /  حجز فندقي',
       description : req.body.data.notes,
       date : Date.now(),
       user : req.user.name,
    });
    
   await foundCompany.save();
  });
  
  res.status(201).json({
  status: 'success',
  data: {
  data: newCancelHotel
  }
  
  });
  });

  
exports.getAllHotels = factory.getAll(Hotel);
exports.getHotel = factory.getOne(Hotel);
exports.createHotel = factory.createOne(Hotel);
exports.updateHotel = factory.updateOne(Hotel);
exports.deleteHotel = factory.deleteOne(Hotel);
exports.getHotelBookingList = factory.getAll(HotelBooking,{path:'bookingFrom ,hotelName,bookingTo'});
exports.getHotelInvoice= factory.getOne(HotelBookingInvoice,{path:'bookingFrom ,hotelName,bookingTo'});
exports.deleteHotelInvoice= factory.deleteOne(HotelBookingInvoice);
