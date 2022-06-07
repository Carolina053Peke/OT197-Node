const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const { version } = require("../package.json")
const swaggerUI = require('swagger-ui-express');
module.exports.options = {
    definition: {
        "swagger": "2.0",
        "info": {
            "description": "This is a sample server API ONG197-Node .  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
            "version": "1.0.0",
            "title": "Swagger ONG-197-Node",
            "termsOfService": "http://swagger.io/terms/",
            "contact": {
                "email": "apiteam@swagger.io"
            },
            "license": {
                "name": "Apache 2.0",
                "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        },
        "basePath": "/",
        "tags": [
            {
                "name": "member",
                "description": "Everything about your Member",
                "externalDocs": {
                    "description": "Find out more",
                    "url": "http://swagger.io"
                }
            },
            {
                "name": "Auth",
                "description": "Auht user endpoints",
            },
        ],
        "schemes": [
            "http"
        ],
        "paths": {
            "/members": {
                "post": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Add a new member to the ONG",
                    "description": "",
                    "operationId": "createMember",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Member object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Member"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Member created",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Member"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "api_key": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
            },
            "/members/{memberID}": {
                "delete": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Find and delete Member by id",
                    "operationId": "deleteMember",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Member id field is required",
                            "required": true,
                            "type": "integer",
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Member deleted",
                        },
                        "404": {
                            "description": "Member not found"
                        }
                    },
                    "security": [
                        {
                            "api_key": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
                "put": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Find and update Member by id",
                    "operationId": "updateMember",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Member id field is required",
                            "required": true,
                            "type": "integer",
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Member object that needs to be put to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Member"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Member update",
                        },
                        "404": {
                            "description": "Member not found"
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "api_key": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/member/{page}": {
                "get": {
                    "tags": [
                        "member"
                    ],
                    "summary": "Finds member 10 per page",
                    "operationId": "getMembers",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "name": "page",
                            "in": "path",
                            "description": "Page actual",
                            "required": true,
                            "type": "integer",
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Member"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "api_key": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            },
            "/users/auth/register": {
                "post": {
                    "tags": [
                        "Auth"
                    ],
                    "summary": "Add a new user to the ONG",
                    "description": "",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "User object that needs to be added to the ong",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/User"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "User created",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "api_key": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                },
            },
            "/users/auth/login": {
                "post": {
                    "tags": [
                        "Auth"
                    ],
                    "summary": "Login user to the ONG",
                    "description": "",
                    "consumes": [
                        "application/json",
                        "application/xml"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "The user email and password",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/Auth"
                            }
                        }
                    ],
                    "example": {
                        "email": "juanperez@gmail.com",
                        "password": "Ju#nPerez2",
                    },
                    "responses": {
                        "200": {
                            "description": "Login successful",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "api_key": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]
                }
            }, "/users/users": {
                "get": {
                    "tags": [
                        "User"
                    ],
                    "summary": "List user to the ONG",
                    "description": "",
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                   
                    "responses": {
                        "200": {
                            "description": "List",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error"
                        }
                    },
                    "security": [
                        {
                            "api_key": [
                                "write:member",
                                "read:member"
                            ]
                        }
                    ]

                },
            },
        },
        "securityDefinitions": {
            "api_key": {
                "type": "apiKey",
                "name": "api_key",
                "in": "header"
            }
        },
        "definitions": {
            "Member": {
                "type": "object",
                "required": [
                    "name"
                ],
                "properties": {
                    "image": {
                        "type": "string",
                    },
                    "name": {
                        "type": "string"
                    }
                }
            },
            "Auth":{
                "type": "object",
                "required": [
                    "email",
                    "password"
                ],
                "properties": {
                    "email": {
                        "type": "string"
                    },
                    "password": {
                        "type": "string"
                    }
                },
                "example": {
                    "email": "juanperez@gmail.com",
                    "password": "Ju#nPerez2"
                }
            },
            "User": {
                "type": "object",
                "required": [
                    "firstName",
                    "lastName",
                    "email",
                    "password",
                    "roleId",
                    "image"
                ],
                "properties": {
                    "firstName": {
                        "type": "string",
                    },
                    "lastName": {
                        "type": "string",
                    },
                    "email": {
                        "type": "string",
                    },
                    "password": {
                        "type": "string",
                    },
                    "roleId": {
                        "type": "integer",
                    },
                    "image": {
                        "type": "string",
                    },
                },
                "example": {
                    "firstName": "Juan",
                    "lastName": "Perez",
                    "email": "juanperez@gmail.com",
                    "password": "Ju#nPerez2",
                    "roleId": 1,
                    "image": "juanavatar.jpg"
                }
            }
        },
    },
    basePath: "/",
    apis: [`${path.join(__dirname, "/documentations/*.js")}`],
    "externalDocs": {
        "description": "Find out more about Swagger",
        "url": "http://swagger.io"
    }

}

const swaggerSpect = swaggerJSDoc(this.options);

function swaggerDocs(app, port) {
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpect));
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpect);
    })
}

module.exports = swaggerDocs;

