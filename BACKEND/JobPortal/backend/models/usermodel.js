// import { profile } from "console";
import mongoose from "mongoose";
// import { type } from "os";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','recruiter'], //Restricts the values that role can have to either 'student' or 'recruiter'
        required:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}], // kyunki kaafi skills add kr skte hai isliye array ka use krenge
        resume:{type:String}, //url to resume file
        resumeOriginalName:{type:String},
        company:{type: mongoose.Schema.Types.ObjectId, ref: 'company'},
        profilePhoto: {
            type:String,
            default: ""
        }
    },

},{timestamps:true});
const User = mongoose.model('User',userSchema);
export {User};