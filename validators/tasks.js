const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
    check("title").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("fecha").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = {validatorCreateItem, validatorGetItem};