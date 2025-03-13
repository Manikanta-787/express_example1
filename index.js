// let express=require('express');
// let app= express();
// let path=require('path');
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



// app.get("/vehicle/:type/:company",(req,res,next)=>{
//           res.send("Done bro");
// })

// app.get("/",[logger,auth],(req,res)=>{
//      console.log("done");
//      res.send("done")
// })

// app.get("/",logger,auth,(req,res)=>{
//      console.log("done");
//      res.send("done")
// })
// function logger(req,res,next){
//      console.log('log in');
//      next();
// }

// function auth(req,res,next){
//       console.log('authenticated');
//       next();
// }

// Bypassing  the current route using next('route')

// app.get("/",logger,auth,(req,res,next)=>{
//      console.log("done");
//      let isadmin=false;
//      if(!isadmin){
//           return next('route');
//      }
     
//      res.send("done")
// })

// app.get('/',(req,res)=>{
//      res.send("done bro!");
// })

// function logger(req,res,next){
//      console.log('log in');
//      next();
// }

// function auth(req,res,next){
//       console.log('authenticated');
//       next();
// }

// app.all('/',(req,res)=>{
//      res.send("all");
// })
// app.get("/",(req,res)=>{
//         res.send("get");
// })
// app.post("/",(req,res)=>{
//       res.send("post");
// })

//app.route().method()
// app.route('/products').get((req,res)=>res.send('get all products')).post((req,res)=>res.send('create a new product')).put((req,res)=>res.send('update a product completely'));

//app.param()
// app.param('id','name',(req,res,next,id,name)=>{
//      console.log(id,name);
//      next();
// })
// app.get('/users/:id/:name',(req,res)=>{
//        res.send(   `details for this user id:${req.params.id}`);
// })

// app.set() and app.get()

// app.get('/',(req,res)=>{
//       app.set('admin','mani');
//       let isadmin=app.get('admin');
//       if(isadmin == 'mani'){
//           res.send(`hello admin ${isadmin}`);
//       }
// })

//app.use(path,middleaware)
// function global(req,tres,next){
//      console.log("this is for all");
//      next();
// }

// app.use('/api',(req,res,next)=>{
//        console.log('route specific middleware usage');
//        next();
// })
// app.use(global);

// app.get('/global',(req,res)=>{
//      res.send(' global middleware related');
// })
// app.get('/api/users',(req,res)=>{
//      res.send('usr page');
// })
// app.get('/api/admin',(req,res)=>{ 
//      res.send('admin page');
// })

// route path patterns 
// app.get(/^\/id\/\d{2}$/, (req, res) => {
//      res.send('Matched two-digit ID');
//    });

// we can set multiple paths for same route handler or service

// app.get(['/hey','/hello','/hi'],(req,res)=>{
//      console.log(`${req.url}`)
//      console.log(`${req.baseUrl}`)
//      console.log(`${req.originalUrl}`)
//      res.send('<h1 style="color:red;">got you!</h1>');
// })
// app.get('/htmlpage',(req,res)=>{res.send('hey this is an html page')});
// let birds=require('./Routes/birds.js');
// app.use('/birds',birds);

let express=require('express');
let app=express();
let router=express.Router();
// app.get('/',(req,res)=>{
//        console.log("this is app related");
//        res.sendStatus(200);
// })
// router.get('/',(req,res)=>{
//      console.log('this is router related');
//      res.send("done bhai");
// })
// app.use(router);

app.get('/',(req,res)=>{
     console.log(isadmin);
     res.send("hello bouyyyyyyyyyyy")
})
let port=5000;
app.listen(port,()=>{
      console.log("server started");
})