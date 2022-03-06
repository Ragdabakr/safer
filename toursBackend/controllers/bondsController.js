
const BondInvoice = require('./../models/bondInvoiceModel');
const Bond = require('./../models/bondModel');
const factory = require('./handlerFactory');
const Company = require('./../models/companyModel');
const User = require('./../models/userModel');
const async = require('async');
const catchAsync = require('./../utils/catchAsync');
const Budget = require('./../models/budgetModel');

// ------- create Bond With Invoice ------//

exports.createBond = catchAsync(async(req, res) => {
    const user = req.user;
    const data= req.body.data;

    const newBond = await Bond.create(req.body.data);
    const newBondInvoice = await BondInvoice.create(req.body.data);
    if(req.body.data.accountName._id){
      if(req.body.data.type === 'سند صرف'){
    Company.findById({_id:req.body.data.accountName._id}, async function(err,foundCompany){
        if (err) {console.log(err); 
       }
       foundCompany.debit = foundCompany.debit +parseInt(req.body.data.amount);

       foundCompany.companyReport.push({
           debit :req.body.data.amount,
           credit :0, 
           name:req.body.data.type,
           description : req.body.data.notes,
           date : Date.now(),
           user : req.user.name,
        });
        
        await foundCompany.save();
    });

    const budget =  new Budget();
    budget.name = 'مجموع سندات الصرف';
    budget.date = Date.now();
    budget.totalReceivedAmount = 0;
    budget.totalRemainingAmount = req.body.data.amount;
    await  budget.save(); 

    res.status(201).json({
      status: 'success',
      data: {
          data: newBond
      }
    });
  }

  if(req.body.data.type === 'سند قبض'){
    Company.findById({_id:req.body.data.accountName._id}, async function(err,foundCompany){
        if (err) {console.log(err); 
       }
       foundCompany.credit = foundCompany.credit +parseInt(req.body.data.amount);

       foundCompany.companyReport.push({
           debit :0,
           credit :req.body.data.amount, 
           name:req.body.data.type,
           description : req.body.data.notes,
           date : Date.now(),
           user : req.user.name,
        });
        
        await foundCompany.save();
    });
    const budget =  new Budget();
    budget.name = 'مجموع سندات القبض';
    budget.date = Date.now();
    budget.totalReceivedAmount = req.body.data.amount;
    budget.totalRemainingAmount = 0;
    await  budget.save(); 

    res.status(201).json({
      status: 'success',
      data: {
          data: newBond
      }
    });
  }

  }else{
    res.status(201).json({
      status: 'success',
      data: {
          data: newBond
      }
    });
  }
});
// ------- Get Bond Invoice------//
exports.getBondInvoice = catchAsync(async(req, res) => {
    const id= req.params.id;
  console.log("data" ,id);
    BondInvoice.findOne({number:req.params.id}, async function(err,BondInvoice){
    if (err) {console.log(err); 
   }
   res.status(201).json({
    status: 'success',
    data: {
        data: BondInvoice
    }
  
  });
 });
});


exports.getAllBonds = factory.getAll(Bond,{path:'accountName'});
exports.getAllBondsInvoices = factory.getAll(BondInvoice , {path:'accountName'});
//exports.getBondInvoice = factory.getAll(BondInvoice);
exports.getBond = factory.getOne(Bond ,{path:'accountName'});
exports.updateBond = factory.updateOne(Bond);
exports.deleteBond = factory.deleteOne(Bond);