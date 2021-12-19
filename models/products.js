const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{type:String,required:true},cost:{type:Number,required:true},amount:{type:Number,required:true},ptype:{type:String,required:true}
})
module.exports= mongoose.model('products',productSchema)