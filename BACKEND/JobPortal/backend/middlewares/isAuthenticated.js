import jwt from "jsonwebtoken";

const isAuthenticated = async(req,res,next) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message: "user is not authenticated",
                success: false,
            })
        };
        const decode = await jwt.verify(token,process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message: "token is invalid",
                success: false,
            })
        };
        // code takes the userId from the decode object and assigns it to the id property of the req object
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;