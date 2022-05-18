const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/categorys');
const router = express.Router();

const {validatorCreateItem, validatorGetItem} = require("../validators/categorys");

router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;