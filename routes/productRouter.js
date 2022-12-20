const express=require('express')
const { addProduct, getProducts,  editProduct, deleteProduct } = require('../controller/productController')
const router= express.Router()
const {upload} = require('../utils/imageUpload');

router.post('/addproduct',upload.array('image'),addProduct)
router.get('/getproducts',getProducts)
router.patch('/updateproduct/:Id',editProduct)
router.delete('/deleteproduct/:Id',deleteProduct)


module.exports=router
