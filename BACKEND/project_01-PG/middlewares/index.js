const fs = require("fs");

//Middleware (a kind of plugin)
// yeh body k andr data push krne k liye use hota hai 
function logReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile(filename,`\n ${Date.now()}: ${req.ip} ${req.method} ${req.path}`,
        (err,data)=>{
            next();
        }
    );
    }
}

// app.use((req,res,next)=>{
//     console.log("hello from middleware 1");
//     // return res.json({msg : 'hello from middleware 1'});
//     req.myUserName="taniya";
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("hello from middleware 2 ",req.myUserName);
//     // return res.end("hey");
//     next();
// });

module.exports = { logReqRes };


