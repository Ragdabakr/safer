const express = require('express');
const roleController = require('./../controllers/roleController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.use(authController.protect , authController.restrictTo('أدمن' , 'مشرف'));

router
  .route('/')
  .get(roleController.getAllRoles)
  .post(roleController.createRole);

router
  .route('/:id')
  .get(roleController.getRole)
  .patch(roleController.updateRole)
  .delete(roleController.deleteRole);

  router
  .route('/add-Permissions/:id')
  .post(roleController.addPermissions);

module.exports = router;