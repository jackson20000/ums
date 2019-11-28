const express = require("express");
const router = express.Router();
const loginCtrl = require('../controller/login');
const registerCtrl = require('../controller/register');
const adminCtrl = require('../controller/admin');


router.post('/login',loginCtrl.login);
router.post('/register',registerCtrl.register);
router.get('/users/:id',adminCtrl.user);
router.post('/users/:id',adminCtrl.userUpdate);
router.get('/users',adminCtrl.users);

module.exports = router;