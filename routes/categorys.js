const express = require('express');
const router = express.Router();

const {validatorCreateItem, validatorGetItem} = require("../validators/categorys");
const authMiddleware = require("../middleware/session");
const { getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/categorys');

/**
 * Get all categorys
 * @swagger
 * /categorys:
 *    get:
 *      tags:
 *        - categorys
 *      summary: "List all categorys"
 *      description: List all categorys with details
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: .
 *        '402':
 *          description: Not allow because you need more permissions
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */
router.get("/", authMiddleware, getItems);
/**
 * Get categorys
 * @swagger
 * /categorys/{id}:
 *    get:
 *      tags:
 *        - categorys
 *      summary: "Get category"
 *      description: Get category detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID category"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 * 
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);
/**
 * http://localhost:3001/api
 * 
 * Route add new category
 * @openapi
 * /categorys:
 *      post:
 *          tags:
 *              - categorys
 *          summary: "Se agrega una nueva categoria"
 *          description: "Esta ruta es para agregar una nueva categoria"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/categorys"
 *          responses:
 *                  '201':
 *                      description: se agrega una categoria de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/", authMiddleware, validatorCreateItem, createItem);
/**
 * Upadte category
 * @swagger
 * /categorys/{id}:
 *    put:
 *      tags:
 *        - categorys
 *      summary: "Update category"
 *      description: Update category with detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *           content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/categorys"
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID category"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
/**
 * Delete category
 * @swagger
 * /categorys/{id}:
 *    delete:
 *      tags:
 *        - categorys
 *      summary: "Delete category"
 *      description: Delete category detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID category"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 * 
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;