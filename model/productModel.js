const mongoose=require('mongoose')


const productSchema=mongoose.Schema({
   name:{
    type:String,
    require:true
   },
   description:{
    type:String,
    require:true
   },
   image:[{
    type:String,
    require:true
   }],
   price:{
    type:Number,
    require:true
   },
   discount:{
    type:Number,
   Default:null
   },
   shippingCharge:{
    type:Number,
    Default:null
   },
   Totalamount:{
    type:Number,
    Default:null
   },
})

const Product=mongoose.model('Product',productSchema)
module.exports=Product;