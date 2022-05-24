const swaggerJsdoc = require('swagger-jsdoc');
const swaggerdoc = require('swagger-jsdoc');

/**
 * API CONFIG
 */

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentación para API TareasPendientes",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3001/api",
        },
    ],
    components: {
        securitySchemes:{
            bearerAuth:{
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            categorys:{
                type:"object",
                required:["name","importance"],
                properties:{
                    name:{
                        type:"string",
                    },
                    importance:{
                        type:"integer",
                    },
                },
            },
            tasks:{
                type:"object",
                required:["title","description","fecha","categoryId"],
                properties:{
                    title: {
                        type:"string",
                    },
                    description:{
                        type:"string",
                    },
                    fecha: {
                        type:"string",
                    },
                    categoryId:{
                        type:"string",
                    },
                },
            },
            authLogin:{
                type:"object",
                required:["nickname","password"],
                properties:{
                    nickname:{
                        type:"string",
                    },
                    password:{
                        type:"string",
                    },
                },
            },
            authRegister:{
                type:"object",
                required:["nickname","email","password"],
                properties:{
                    nickname:{
                        type:"string",
                    },
                    email: {
                        type:"string",
                    },
                    password: {
                        type:"string",
                    },
                },
            },
        }
    }
}

/**
 * opciones
 */

const options = {
    swaggerDefinition,
    apis: [
        "./routes/*.js",
    ]
}

const openApiConfig = swaggerJsdoc(options);

module.exports = openApiConfig;