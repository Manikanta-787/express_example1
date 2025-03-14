let express=require('express');
let app=express();
let birdsRouter=require('./services/birdsService');

let animalsRouter=require('./services/animalsService.js');

let plantsRouter=require('./services/plantsService.js');

app.use(logger);
app.use('/birds',birdsRouter);
app.use('/animals',animalsRouter);
app.use('/plants',plantsRouter);

function ErrorHandler(error,req,res,next){
     console.error(error.stack);
     res.status(500).send("something gone wrong!!");
}
app.get('/',(req,res)=>{
     res.send('hello');
})
function logger(req,res,next){
     console.log('user logged in');
     next();
}
let port=7000;
app.listen(port,()=>{
     console.log(`server started to listen at port ${port}`);
})

