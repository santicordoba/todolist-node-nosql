const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require("../validators/tasks");

const { getItems, createItem } = require("../controllers/tasks");

router.get("/", getItems);

router.post("/", validatorCreateItem, createItem);

module.exports = router;