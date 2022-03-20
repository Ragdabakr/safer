
const Safebox = require('../models/safeboxsModel');
const factory = require('./handlerFactory');
const Budget = require('./../models/budgetModel');
const catchAsync = require('./../utils/catchAsync');


exports.createSafebox = catchAsync(async(req, res) => {
    const newSafebox = await Safebox.create(req.body.data);
    const budget =  new Budget();
    budget.name = 'رصيد الخزنة';
    budget.date = Date.now();
    budget.totalReceivedAmount = req.body.data.indebted;
    budget.totalRemainingAmount = req.body.data.credit;
    await  budget.save(); 
    newSafebox.safeboxBudget = budget._id;
    newSafebox.save();
    res.status(201).json({
        status: 'success',
        data: {
            data: newSafebox
        }
      });
});

exports.updateSafebox = catchAsync(async(req, res) => {

      const doc = await Safebox.findById(req.params.id);
      doc.description = req.body.data.description;
      doc.title = req.body.data.title;
      doc.credit = req.body.data.credit;
      doc.indebted = req.body.data.indebted;
      doc.date = req.body.data.date;
      doc.createdAt = Date.now();
      doc.save();
      if(doc.safeboxBudget){
      Budget.findById({_id:doc.safeboxBudget._id}, async function(err,foundBudget){
        if (err) {console.log(err); }

        foundBudget.name = 'رصيد الخزنة';
        foundBudget.date = Date.now();
        foundBudget.totalReceivedAmount = req.body.data.indebted;
        foundBudget.totalRemainingAmount = req.body.data.credit;
        await  foundBudget.save(); 
    res.status(201).json({
        status: 'success',
        data: {
            data: doc
        }
      
      });
    });
    }else{
        res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
    });
}
});
  
   

exports.getAllsafeboxes= factory.getAll(Safebox);
exports.getSafebox = factory.getOne(Safebox);
exports.deleteSafebox = factory.deleteOne(Safebox);
