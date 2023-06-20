const express = require ('express');
const router = express.Router();
const { getProducts, createProduct ,getProduct} = require('../controllers/products')



router.route('/products/new').post(createProduct)
router.route('/products').get(getProducts)
router.route('/product/:id').get(getProduct)
module.exports = router;