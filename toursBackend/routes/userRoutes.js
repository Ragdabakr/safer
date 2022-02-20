const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');
const router = express.Router();
const multer = require('multer');

// router.post('/signup', authController.signup);
router.post('/login', authController.login);
router
.route('/signup')
.post(authController.signup)

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword', authController.resetPassword);  

router.use(authController.protect);

//Work if user is logged in work for users
router.patch('/me',userController.getMe, 
                  userController.getUser);
router.patch('/updateMe',userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);
router.patch('/updateMyPassword',authController.updatePassword);
router.get('/getUser/:id',userController.getUser);

router.delete('/deleteNotification/:id',userController.deleteNotification);


router.route('/').get(authController.protect,userController.getAllUsers);

// work with admin dashboard
// router.use(authController.restrictTo('أدمن'));
router
  .route('/companyAccountInfo')
  .post(userController.companyAccountInfo)
  .get(userController.getCompanyAccount);

 
  router
  .route('/companyAccountInfo/:id')
  .patch(userController.updateCompanyAccountInfo);

  router
  .route('/companyAccountImage')
  .post(userController.uploadSingleImage)
 
  

// work with admin dashboard
// router.use(authController.restrictTo('أدمن' , 'مشرف'));
router
  .route('/')
  .post(userController.createUser)
  .delete(userController.deleteAllUsers);

  
  router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)
  
module.exports = router;