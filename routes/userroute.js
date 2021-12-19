
const express =require('express');
const app=express()
const mongoose = require('mongoose');
const router=express.Router()

//users model 
const userModel=mongoose.model('users',{mail:String,username:String,password:String})



mongoose.connect('mongodb://localhost:27017/test',function (err){
    if (err){
        console.log(err);
    }
    else{
        console.log('connected to mongodb');
    }
});
//register a new user and add it to the database
router.post('/registerUser',function(req,res){

    let newUser=new userModel({mail:req.body.mail,username:req.body.username,password:req.body.password})
    newUser.save(function(err){
if(err){
res.send ('somthing is wrong');}
else{
    res.send ('user registeration successfull');
}

    })

})
//login user and check the data
router.post('/loginUser',function(req,res){
    userModel.find({
        mail:req.body.mail,
        password:req.body.password
    },function (err,documents){
if (err){
    res.send('something went wrong');
}
else{
    if(documents.length==0){
        res.send('login faild');
    }
    else{
        res.send('login successful')
    }
}
    })
})




module.exports = router;