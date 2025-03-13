let express=require('express');
let app= express();
let path=require('path');
let multer=require('multer');
let storageObj=multer.diskStorage({
       destination:"uploads/",
       filename:function(req,file,cb){
               cb(null,Date.now()+file.originalname);
       }
})

let storage=multer({storage:storageObj});
app.post("/uploadfile",storage.single('background'),(req,res)=>{
       res.send("file uploaded successfully");
})
let port=5010;
app.listen(port,()=>{
console.log(`server has started listening at port ${port}`);
})
