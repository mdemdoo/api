const mongoose=require('mongoose');
module.exports=function connection(){
mongoose.connect('mongodb://localhost:27017/test',function (err){
    if (err){
        console.log(err);
    }
    else{
        console.log('connected to mongodb');
    }
});
}