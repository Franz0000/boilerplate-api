const productsModel = require('../models/products')

exports.createProduct = async(req, res, next) => {
    const products = await productsModel.create(req.body);

    res.status(201).json({
        success: true,
        product: products
    })
}

exports.getProducts = async(req, res, next) =>  {
    const products = await productsModel.find()

    res.status(200).json({
        success:true,
        totalRecords: products.length,
        products: products
    })
}
exports.getProduct = async(req, res, next) =>  {
    const product = await productsModel.findById(req.params.id)
    res.status(200).json({
        success:true,
        product: product
    })
  
}