let express=require('express');
let app= express();
let path=require('path');
// Bypassing  the current route using next('route')

app.get("/",logger,auth,(req,res,next)=>{
     console.log("done");
     let isadmin=false;
     if(!isadmin){
          return next('route');
     }
     
     res.send("done")
})

app.get('/',(req,res)=>{
     res.send("done bro!");
})

function logger(req,res,next){
     console.log('log in');
     next();
}

function auth(req,res,next){
      console.log('authenticated');
      next();
}

app.all('/',(req,res)=>{
     res.send("all");
})
app.get("/",(req,res)=>{
        res.send("get");
})
app.post("/",(req,res)=>{
      res.send("post");
})

app.route().method()
app.route('/products').get((req,res)=>res.send('get all products')).post((req,res)=>res.send('create a new product')).put((req,res)=>res.send('update a product completely'));

app.param()
app.param('id','name',(req,res,next,id,name)=>{
     console.log(id,name);
     next();
})
app.get('/users/:id/:name',(req,res)=>{
       res.send(   `details for this user id:${req.params.id}`);
})

// app.set() and app.get()

app.get('/',(req,res)=>{
      app.set('admin','mani');
      let isadmin=app.get('admin');
      if(isadmin == 'mani'){
          res.send(`hello admin ${isadmin}`);
      }
})

app.use(path,middleaware)
function global(req,tres,next){
     console.log("this is for all");
     next();
}

app.use('/api',(req,res,next)=>{
       console.log('route specific middleware usage');
       next();
})
app.use(global);

app.get('/global',(req,res)=>{
     res.send(' global middleware related');
})
app.get('/api/users',(req,res)=>{
     res.send('usr page');
})
app.get('/api/admin',(req,res)=>{ 
     res.send('admin page');
})
app.get('/html`page',(req,res)=>{res.send('hey')});
let port=5000;

app.get(['/hello','/hey','/hi'],(req,res)=>{
      console.log(`${req.url}`)
      console.log(`${req.baseUrl}`)
      console.log(`${req.originalUrl}`)
      res.send('got you!');
})

app.listen(port,()=>{
     console.log(`server has started listening at port ${port}`);
})
