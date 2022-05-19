const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorRegister = [
    check("nickname").exists().notEmpty().isLength({min:3, max:99}),
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    check("email").exists().notEmpty().isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

const validatorLogin = [
    check("nickname").exists().notEmpty().isLength({min:3, max:15}),
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = {validatorRegister, validatorLogin};