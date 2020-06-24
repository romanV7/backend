const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ProductsController = require('../controllers/products');

router.get("/", ProductsController.products_get_all);
router.post("/", checkAuth, ProductsController.product_create_product);

module.exports = router;
