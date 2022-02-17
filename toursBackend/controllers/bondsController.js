
const BondInvoice = require('./../models/bondInvoiceModel');
const Bond = require('./../models/bondModel');
const factory = require('./handlerFactory');
const Company = require('./../models/companyModel');
const User = require('./../models/userModel');
const async = require('async');
const catchAsync = require('./../utils/catchAsync');

// ------- create Bond With Invoice ------//

exports.createBond = catchAsync(async(req, res) => {
    const user = req.user;
    const data= req.body.data;

    const newBond = await Bond.create(req.body.data);
    // console.log("newBond kkk" ,newBond);
    const newBondInvoice = await BondInvoice.create(req.body.data);
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

    res.status(201).json({
      status: 'success',
      data: {
          data: newBond
      }
    });
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