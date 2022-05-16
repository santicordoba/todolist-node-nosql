const express = require('express');
const { getItems, createItem} = require('../controllers/categorys');
const router = express.Router();

const {validatorCreateItem} = require("../validators/categorys");

router.get("/", getItems)
router.post("/", validatorCreateItem, createItem);

module.exports = router;