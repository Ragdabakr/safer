const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');
const reviewRoutes = require('./../routes/reviewRoutes');
const router = express.Router();

// router
//   .route('/:tourId/reviews')
//   .post(
//     authController.protect ,
//     authController.restrictTo('user'),
//     reviewController.createReview);

    router.use('/:tourId/reviews' , reviewRoutes);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours,tourController.getAllTours);
  router.route('/tour-type-stats').get(tourController.getTourTypeStats);
  router.route('/tour-completed-stats').get(tourController.getTourCompletedStats);
  router.route('/tour-diffculty-stats').get(tourController.getTourDiffcultyStats);
  router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
  router.route('/weekly-plan/:year').get(tourController.getWeeklyPlan);
  router.route('/test').get(tourController.getTest);



  router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get( tourController.getTourswithin);

  router.route('/distances/:latlng/unit/:unit')
  .get(tourController.getDistances);

router
  .route('/')
  .get(authController.protect ,tourController.getAllTours)
  .post(authController.protect ,
        tourController.createTour)


        // router
        // .route('/costs')
        // .post(authController.protect ,
        //       authController.restrictTo('أدمن' , 'مشرف'), 
        //       tourController.createTourCost)
      
        // .delete(authController.protect ,
        //         authController.restrictTo('أدمن' , 'مشرف'), 
        //         tourController.deleteAllTours);

// router.use(authController.protect ,  authController.restrictTo('أدمن' , 'مشرف'));

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);



  router
  .route('/costs/:tourId')
  .post(tourController.createTourCost);
  
  router
  .route('/costs/:tourId/:costId')
  .delete(tourController.deleteTourCost);

  router
  .route('/tourInformation/:id')
  .patch(tourController.editTourInformation);

  router
  .route('/tourDate/:id')
  .patch(tourController.editTourDate);

  router
  .route('/deleteTourDate/:id')
  .post(tourController.deleteTourDate);

  router
  .route('/addTourdate/:id')
  .post(tourController. addTourDate);

  router
  .route('/tripLocations/:id')
  .patch(tourController.editTourLocation);

  router
  .route('/addTripLocations/:id')
  .post(tourController.addTourTripLocation);

  router
  .route('/deleteTripLocations/:id')
  .post(tourController.deleteTourLocation);
  
  router
  .route('/deleteTourImage/:id')
  .post(tourController.deleteTourImage);
  
  router
  .route('/addTourImage/:id')
  .post(tourController.addTourImage);
  
  router
  .route('/updateTourCoverImage/:id')
  .post(tourController.updateTourCoverImage);
  
  router
  .route('/enableTour/:id')
  .patch(tourController.enableTour);
  
  router
  .route('/disableTour/:id')
  .patch(tourController.disableTour);
  
  router
  .route('/closeTour/:id')
  .patch(tourController.closeTour);
  

  // router
  // .route('/:tourId/reviews/:reviewId')
  // .patch(reviewController.updateReview );

module.exports = router;