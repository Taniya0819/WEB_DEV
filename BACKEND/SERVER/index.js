// BEFORE EXPRESS
const http=require("http");
// const fs=require("fs");
// const url=require("url");

const myServer=http.createServer((req,res)=>{
    console.log(req.headers);
//     if(req.url==="/favicon.ico") return res.end();
//     const log = `${Date.now()}:${req.method} ${req.url} New request received\n`;// to write some data in log.txt file 
//     const myUrl= url.parse(req.url);
//     console.log(myUrl);
//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(req.url){
//             case '/' :
//                 if(req.method==="GET")
//                  res.end("home page");
//                 break;
//             case '/about' : 
//                 // res.end("about page");
//                 res.end("About Page")
//                 break;
//             case '/Signup':
//                 if(req.method==="GET") res.end("This is a signup form");
//                 else if (req.method==="POST"){
//                     res.end("Success");
//                 }
//             default:
//                 res.end("404 not found");
//         }
//             // res.end("hello from server again");
//     });
});

myServer.listen(8000,()=>{
    console.log("server started");
    // if this isn't visible then it means there is some error 
});

// AFTER EXPRESS
// const http=require("http");
// const express=require("express");

// const app=express();
// app.get('/',(req,res)=>{
//     return res.send("hello from home page");
// });

// app.get('/about',(req,res)=>{
//     // return res.send("hello from about page" + " hey " + req.query.name + " you are "+ req.query.age);
//     return res.send(`Hello ${req.query.name}`);
// });


// function myHandler(req,res){}
// app.listen(8000,()=>{
//     console.log("Server started");
// });

// no need to write the below code
// const myServer=http.createServer(app);
// myServer.listen(8000,()=>{
//     console.log("Server started");
// });