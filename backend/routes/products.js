const express = require ('express');
const router = express.Router();
const { getProducts, createProduct ,getProduct, updateProduct, deleteProduct} = require('../controllers/products')



router.route('/products/new').post(createProduct)
router.route('/products').get(getProducts)
router.route('/product/:id').get(getProduct)
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct)

module.exports = router;