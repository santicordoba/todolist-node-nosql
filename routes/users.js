const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require("../validators/users");

const { getItems, createItem } = require("../controllers/users");

router.get("/", getItems);

router.post("/", validatorCreateItem, createItem);

module.exports = router;