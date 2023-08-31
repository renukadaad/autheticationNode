const express = require('express');
const authorizationController = require('../../controllers/authorizationController');

var router = express.Router();

router.get('/' , authorizationController.homePage);
//router.get('/register' , authorizationController.registerPage);

router.get('/login', authorizationController.loginPage);


// router.post('/register', authorizationController.register)

// router.post('/login' , authorizationController.login);

module.exports = router;