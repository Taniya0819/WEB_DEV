// type: module -> to use import in index.js
// CORS (Cross-Origin Resource Sharing) is a mechanism that allows or restricts web applications 
// running at one origin (domain) to make requests to a different origin.
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import usercontroller from './controller/usercontroller.js';


// What import userRoute from './routes/userroute.js'; Means?
// This statement imports the default export from the userroute.js file located in the ./routes directory.
// The userRoute is the name you're giving to whatever is exported as the default from userroute.js.

import userRoute from './routes/userroute.js';

dotenv.config({});
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
const PORT = 3000;

// api's
app.use("/api/v1/user",userRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`)
})