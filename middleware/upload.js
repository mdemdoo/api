const multer=require('multer');
const {GridFsStorage}=require('multer-gridfs-storage');

const storage= new GridFsStorage({
    url:"mongodb://localhost/image-upload",
    
    file:(req,file)=>
    {
        //extintion or the content type
        const match=["image/png","image/jpeg"];
        //checking for the extintion 
        if(match.indexOf(file.mimetype)===-1){
            const filename=`${Date.now()}-any-name-${file.originalname}`;//Date.now methode works like a name genrator
            return filename;
        }
        //where the the data would be stored i mean the collection
        return{
            bucketName:"photos",
            filename:`${Date.now()}-any-name-${file.originalname}`
        }
    }
})
module.exports=multer({storage});