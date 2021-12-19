const express =require('express');
const app=express()
//const upload=require('./routes/upload')
const userroute =require('./routes/userroute')
const bodyParser =require('body-parser')
const products=require('./routes/products')
//const Grid =require('gridfs-stream')
const mongoose=require('mongoose');
//const theConnection =require('./db')
// theConnection();
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json())
 //app.use(express.static(''))>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let gfs;

// const conn=mongoose.theConnection;
// conn.once('open',function(){
//     gfs=Grid(conn.db,mongoose.mongo);
//     gfs.collection('photos');
// })
// app.use("/file",upload)

// app.get ('/file/:filename',(req,res)=>{
//     const file =gfs.files.findOne({filename:req.params.filename});
//     const readStream=gfs.createReadStream(file.filename);
//     readStream.pipe(res)
// })

// app.delete('file/filename',(req,res)=>{
//     gfs.files.deleteOne({filename:req.params.filename});
//     res.send('succsess')
// })

// app.get('/files', (req,res)=>{
//     gfs.files.find().toArray((err,files)=>{
//         if(files.length===0){
//             return res.send('no iamges')
//         }
//     })
//     return res.json(files);
// })



app.use('/api/user', userroute)//for users

app.use('/api/products',products)//for products




app.listen(5000,()=>{
    console.log ('connected to port 5000');
})
