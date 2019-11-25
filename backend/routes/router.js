const express = require("express");
const router = express.Router();
const loginCtrl = require('../controller/login');
const registerCtrl = require('../controller/register');


router.post('/login',loginCtrl.login);
router.post('/register',registerCtrl.register);

module.exports = router;