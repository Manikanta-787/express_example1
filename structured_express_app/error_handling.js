let express=require('express');
let app= express();
let port=5000;
// for synchronous code error ,the error handler middleware functions gets called automatically if they are declared 
// app.use(ErrorHandler);
// app.get('/',(req,res)=>{
//      console.log('hjey')
   
// })

// function ErrorHandler(error,req,res,next){
//     console.log(error.stack);
//     res.status(500).json({"error":error.message});
// }


// for async error ,we need to explicitly call the next(error) for the error handler function to get triggered 
// app.get('/', async (req, res, next) => {
//     try {
//         await someAsyncFunction(); // Example asynchronous function
//     } catch (err) {
//         next(err); // Pass the error to the error handler
//     }
// });

// // Centralized error handling middleware (same as before)
// function errorHandler(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).json({ error: err.message });
// }

// app.use(errorHandler);
app.listen(port,(req,res)=>{
    console.log(`server started listening at port no ${port}`);
})