var express = require('express');
 
var userController = require('../controller/userControler');
const router = express.Router();
 
router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/data').post(userController.dataUserControllerFn);
 
 
module.exports = router;

