const express = require("express");
const routes = express.Router();
const userController = require("./controllers/user.controller.js");
const productController = require("./controllers/product.controller.js");

// User routes
routes.get('/api/user', userController.getUsers)
routes.get('/api/user/:_id', userController.getUserByID)
routes.delete('/api/user/:_id', userController.deleteUserByID)
routes.post('/api/user', userController.createUser)
routes.put('/api/user',userController.updateUser)

// Products routes
routes.get('/api/product', productController.getProducts)
routes.get('/api/product/:_id', productController.getProductByID)
routes.delete('/api/product/:_id', productController.deleteProductByID)
routes.post('/api/product', productController.createProduct)
routes.put('/api/product',productController.updateProduct)

module.exports = routes;