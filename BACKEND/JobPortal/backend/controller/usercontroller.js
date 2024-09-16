// logic for registration
import {User} from '../models/usermodel.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req,res)=>{
    try {
        const {fullname,email,phoneNumber,password,role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message: "something is missing",
                success: false, 
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "user already exists",
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword, 
            role
        });
        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.log(error)
    }
}
// logic for login
export const login = async(req,res)=>{
    try{
        const {email,password,role} = req.body;
        if(!email || !password || !role){
            return res.status(400).json({
                message: "something is missing",
                success: false,
            });
        };
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"incorrect email or password",
                success: false,
            })
        }
        const isPasswordMatched = await bcrypt.compare(password,user.password);
        if(!isPasswordMatched){
            return res.status(400).json({
                message: "incorrect email or password",
                success: false,
            })
        };
        // check role is correct or not
        if(role != user.role){
            return res.status(400).json({
                message: "account doesn't exist with current role" ,
                success: false ,
            })
        };
        const tokenData = {
            userId: user._id
        }
        // You're using a function to generate a JWT based on the tokenData object.
        // jwt.sign(): This is a function from the jsonwebtoken library. It creates a JWT.
        // tokenData: This is the data you want to encode into the token (in this case, the userId).
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn: '1d'});

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber:user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        // a token is a piece of data used to authenticate and authorize users or systems
        // max age is 1 day (1d*24h*60min*60dec*1000ms)
        // https Only:true means it is only for secured websites 
        // sameSite:strict means it can be accessed only for same site 
        return res.status(200).cookie("token", token,{maxAge:1*24*60*60*1000, httpsOnly:true, sameSite: 'strict' }).json({
            message:`welcome back ${user.fullname}`,
            success: true,
        });
        // "token": The name of the cookie. In this case, it's called "token". This is the key by which the cookie will be identified.
        // token: The value of the cookie. This is typically a string that can hold various types of data. In this case, it's a JSON Web Token (JWT) that is used for user authentication.

        
    }
    catch(error){
        console.log(error);
    }
}
// logic for logout
export const logout = async(req,res)=>{
    // token ko empty kr diya
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message: "Logout successfully",
            success: true
        })
    } catch (error) {
        console.log(error)   
    }
}
// logic to update profile
export const updateProfile = async(req,res) =>{
    try{
        const {fullname,email,phoneNumber,bio,skills} = req.body;
        const file = req.file

        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        
        // cloudinary  ayega idhar 

        const userId = req.id; //middleware authentication
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"user not found",
                success:false,
            });
        }
        // updating data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArray;

        //resume will come later here

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber:user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        return res.status(200).json({
            message:" Profile is updated successfully",
            user,
            success: true,
        }) 
    }
    catch{
        console.log(error);
    }
}
export default { register, login, logout, updateProfile };