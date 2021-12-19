const Product=require('../models/products')


//get all the products
const getAllProducts=async(req,res)=>{
    const tasks=await Product.find({})
    res.json({tasks})
}

//create product
const createProduct=async(req,res)=>{const product=await Product.create(req.body)
    res.json({product})}

    //get single product
const getProduct=async(req,res)=>{
const {id:productID}=req.params
const product=await Product.findOne({_id:productID})
res.json ({product})
}

//edit
const updateProduct=async(req,res)=>{
    const {id:productID}=req.params
const product=await Product.findOneAndUpdate({_id:productID},req.body,{
    new:true,
    runValidators:true
})
res.json({product})
}

//delete
const deleteProduct=async(req,res)=>{
    const {id:productID}=req.params
    const product=await Product.findOneAndDelete({_id:productID})
    res.json({product:null})
}

module.exports={
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
}