const Company = require('./../models/companyModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const Budget = require('./../models/budgetModel');

// ---------------- Create Company --------------- 

exports.createCompany = catchAsync(async (req, res) => {
  const user = req.user;
  const newCompany = await Company.create(req.body.data);
  Company.findById({_id:newCompany._id}, async function(err,foundCompany){
    if (err) {console.log(err); }

   foundCompany.companyReport.push({
    debit :req.body.data.debit ,
    credit :req.body.data.credit, 
     name :" اضافة شركة /عميل",
    description :req.body.data.notes, 
      user :user.name
   });
   await foundCompany.save();

   const budget =  new Budget();
   budget.name = "أرصدة الحسابات";
   budget.date = Date.now();
   budget.totalReceivedAmount = req.body.data.debit;
   budget.totalRemainingAmount = req.body.data.credit;
   await  budget.save(); 
   foundCompany.companyBudget=budget._id;
   foundCompany.save();

    res.status(201).json({
    status: 'success',
    data: {
      data: foundCompany
      }
    });   
  });

});

// ---------------- Delete Company--------------- 
exports.deleteCompany = catchAsync(async (req, res) => {
const deletedCompany = await Company.findByIdAndDelete(req.params.id);
 await Budget.findByIdAndDelete(deletedCompany.companyBudget._id);
    res.status(201).json({
    status: 'success',
    });
});

  exports.getAllCompanies = factory.getAll(Company);
  exports.getCompany = factory.getOne(Company);
  exports.updateCompany = factory.updateOne(Company); 
  exports.deleteAllCompanies = factory.deleteMany(Company);