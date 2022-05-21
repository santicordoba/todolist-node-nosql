const express = require('express');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require("../validators/tasks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tasks");
const authMiddleware = require("../middleware/session");


router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.post("/", authMiddleware, validatorCreateItem, createItem);
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;