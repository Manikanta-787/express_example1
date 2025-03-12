let express=require('express');
let app= express();
let path=require('path');
// let hello=function(req,res,next){
//          console.log(req.url);
//          next();
// }
// app.use(express.static(path.join(__dirname,'public')));
// app.use(hello);
// app.get("/",(req,res)=>{
         
//      res.sendFile();
// })
// app.get("/hey",(req,res)=>{
//       res.end("done!");

// })

// serving STATIC FILES:

// Normal file sending
//here we can only send one particular file of any type
//client have to use different paths to access different files from same directory
// number of url configurations will be more depends on the no of satic files we want to send as they each require one unique path
// app.get("/",(req,res)=>{
//        res.sendFile(__dirname+'/public'+'/satya.pdf');
// })

//  using single static files folder

// app.use(express.static(path.join(__dirname,'static')));
// app.get("/",(req,res)=>{
  
//     res.sendFile();
    
// })

//using multiple static files folders  public,static here

// app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'static')));
// app.get("/",(req,res)=>{
  
//     res.sendFile();
    
// })

// Adding root for path for static folder only
// app.use('/static',express.static(path.join(__dirname,'static')));
// app.get("/",(req,res)=>{
  
//     res.sendFile();
    
// })

// app.use('/static',express.static(path.join(__dirname,'public')));
// app.get("/",(req,res)=>{
  
//     res.sendFile();
    
// })

// app.use(express.static(path.join(__dirname,'public')));
// app.get("/",(req,res)=>{
  
//     res.sendFile(path.join(__dirname,'public','satya.pdf'));
    
// })

// What happens when you don't pass either Route parameters or Query Parameters or Both when Route parameters are declared in path

app.get("/vehicle/:type/:company",(req,res,next)=>{
          res.send("Done bro");
})
let port=5000;
app.listen(port,()=>{
     console.log(`server has started listening at port ${port}`);
})
