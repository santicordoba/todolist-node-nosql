const express = require('express');
const {registerCtrl, loginCtrl} = require("../controllers/auth");
const router = express.Router();
const {validatorRegister, validatorLogin} = require('../validators/auth');

/**
 * http://localhost:3002/api
 * 
 * Route login user
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Se logea un usuario"
 *          description: "Esta ruta es para logear un usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authLogin"
 *          responses:
 *                  '201':
 *                      description: El usuario se logea de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/login", validatorLogin, loginCtrl);
/**
 * http://localhost:3002/api
 * 
 * Route Register user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Se registra un usuario"
 *          description: "Esta ruta es para registrar un usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: El usuario se registra de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/register", validatorRegister, registerCtrl);

module.exports = router;