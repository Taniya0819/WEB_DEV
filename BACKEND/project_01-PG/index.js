const express = require("express");
// const users = require("./MOCK_DATA.json");
const { connectMongoDb } = require('./connection');
const userRouter = require('./routes/user');
const { logReqRes } = require('./middlewares');

const app = express();
const PORT = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>{
    console.log("MongoDb connected");
})

//Middleware (a kind of plugin) 
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));
   
// routes
// mtlb agr /user pr koi bhi req aati hai toh userRouter ko use krlena
app.use("/api/users",userRouter);


app.listen(PORT,(req,res)=>{
    console.log(`Server started at PORT : ${PORT}`)
});
