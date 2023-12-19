const fs = require("fs");
function logReqRes(filename){
    return (req, res, next) =>{
   fs.appendFile(
    filename, 
   `\n${Date.now()}, ${req.method}, ${req.path}, ${req.ip}`, 
   (err, data)=>{
      next();
    });
    }
}

//middleware example, handiling multiple middlewares
// app.use((req, res, next)=>{
//     console.log("Hi from middleware 1");
//     req.myName = "Sai Reddy";
//     next();  //writing next functio for a middleware is mandatory //this function finds the next automatically
// })

module.exports = {
    logReqRes,
}