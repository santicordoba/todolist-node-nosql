const express = require('express');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require("../validators/tasks");
const { getItems, getItem, createItem, updateItem, deleteItem, toggleStatus } = require("../controllers/tasks");
const authMiddleware = require("../middleware/session");

/**
 * Get all tasks
 * @swagger
 * /tasks:
 *    get:
 *      tags:
 *        - tasks
 *      summary: "List all tasks"
 *      description: List all tasks with details
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
 * Get task
 * @swagger
 * /tasks/{id}:
 *    get:
 *      tags:
 *        - tasks
 *      summary: "Get tasks"
 *      description: Get tasks detail
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
 *           description: "ID tasks"
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
 * /tasks:
 *      post:
 *          tags:
 *              - tasks
 *          summary: "Se agrega una nueva categoria"
 *          description: "Esta ruta es para agregar una nueva categoria"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/tasks"
 *          responses:
 *                  '201':
 *                      description: se agrega una categoria de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/", authMiddleware, validatorCreateItem, createItem);
/**
  * Upadte task
  * @swagger
  * /tasks/{id}:
  *    put:
  *      tags:
  *        - tasks
  *      summary: "Update task"
  *      description: Update task with detail
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
  *                          $ref: "#/components/schemas/tasks"
  *      parameters:
  *        -  in: "path"
  *           name: "id"
  *           description: "ID tasks"
  *           required: true
  *           schema:
  *              type: string
  *    responses:
  *      '201':
  *        description: retorna el objeto insertado en la coleccion con stado '201'
  */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);


router.put("/toggle/:id", authMiddleware, validatorGetItem, toggleStatus);


/**
 * Delete tasks
 * @swagger
 * /tasks/{id}:
 *    delete:
 *      tags:
 *        - tasks
 *      summary: "Delete task"
 *      description: Delete task detail
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
 *           description: "ID task"
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