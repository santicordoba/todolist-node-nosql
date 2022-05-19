const express = require('express');
const {registerCtrl, loginCtrl} = require("../controllers/auth");
const router = express.Router();
const {validatorRegister, validatorLogin} = require('../validators/auth');


router.post("/login", validatorLogin, loginCtrl);
router.post("/register", validatorRegister, registerCtrl);

module.exports = router;