const Product = require("../model/productModel");


// add product
const addProduct=async(req,res)=>{
    // console.log(req.body);
    console.log(req.files);
    let Image=[];
     for(let i=0;i< req.files.length;i++){
      Image.push(req.files[i] ? req.files[i].path : null)
   
     }
   const {name,price,description,shippingCharge,discount}=req.body;
  if(!name || !price || ! req.files || !description){
    res.status(400).json("Please enter all data")
  }
try {
  const product=await Product.create({
    name,
    price,
    description,
    image:Image,
    shippingCharge,
    discount

  })
//   console.log(product);
  res.status(201).json(product)

} catch (error) {
    res.status(400).json(error.message)
    
}
   
}

const getProducts=async(req,res)=>{
  try {
    const products=await Product.find()
    console.log(products,"ll");
    
    const product=products.map((value)=>{
        if(value.discount && value.shippingCharge){
            const amount=value.price-(value.price * value.discount)/100;
            const Totalamount=amount+value.shippingCharge;
            value.Totalamount=Totalamount;
            return value;
        }
        value.Totalamount=value.price;
        return value;
        
        
    })
 
   
    res.status(200).json(product)
    
  } catch (error) {
    res.status(400).json(error.message)
  }
}


// Edit Product

const editProduct=async(req,res)=>{

    try {
       
       const product=await Product.findByIdAndUpdate(req.params.Id,{$set:req.body},{new:true})
       res.status(200).json(product)
    } catch (error) {
       res.status(400).json(error.message)
    }
   }
 

// delete product

const deleteProduct=async(req,res)=>{
 try {
    const product=await Product.findByIdAndDelete({_id:req.params.Id})
    res.status(200).json(product)
 } catch (error) {
    res.status(400).json(error.message)
 }
}

module.exports={
    addProduct,
    getProducts,
    editProduct,
    deleteProduct
}