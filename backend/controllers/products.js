const productsModel = require('../models/products')
var errors = require('../utils/errors')
var handleAsyncErrors = require('../utils/handleAsyncErrors')

exports.createProduct = handleAsyncErrors(async(req, res, next) => {
    const products = await productsModel.create(req.body);

    res.status(201).json({
        success: true,
        product: products
    })
})

exports.getProducts = async(req, res, next) =>  {
    const products = await productsModel.find()

    res.status(200).json({
        success:true,
        totalRecords: products.length,
        products: products
    })
}
exports.getProduct = async(req, res, next) =>  {
    try{
        const product = await productsModel.findById(req.params.id)
        if(product != null){
            res.status(200).json({
                success:true,
                product: product
            }) 
        } else {
            return res.status(404).json(errors.raise('TRANSACTION_NOT_FOUND'))  
        }

    }catch(error){
        return res.status(404).json(errors.raise('TRANSACTION_NOT_FOUND'))
    }

}
exports.updateProduct = async(req, res, next) =>  {
    try{
        const product = await productsModel.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true,
            useFindAndModified: false
        })
        if(product != null){
            res.status(200).json({
                success:true,
                product: product
            }) 
        } else {
            return res.status(404).json(errors.raise('TRANSACTION_NOT_FOUND'))  
        }
    }catch(error){
        return res.status(404).json(errors.raise('TRANSACTION_NOT_FOUND'))
    }
}
exports.deleteProduct = async(req, res, next) =>  {


    try{
        const product = await productsModel.findOneAndRemove(req.params.id)
        if(product != null){
            res.status(200).json({
                success:true,
                product: "Product Successfully Deleted"
            })
        } else {
            return res.status(404).json({
                success:false,
                message: "product not found"
            })
        }

    }catch(error){
        console.log(error)
        return res.status(404).json({
            success:false,
            message: "product not found"
        })
    }
}