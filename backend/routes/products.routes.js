const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller") 

router.post("/products", productController.createProduct);

router.get("/products", productController.allProducts);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);

router.get("/products/:id", productController.singleProduct);

module.exports = router;