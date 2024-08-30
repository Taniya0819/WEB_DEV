// controller se bahar jaane k liye .. use kya hai
const User = require('../models/user');

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res) {
    // const id = Number(req.params.id);
    // const user = users.find(user => user.id === id);
    // in place of writing the above 2 lines we can simply write
    const user= await User.findById(req.params.id); 
    if(!user) return res.status(404).json({error: "user not found"});
    return res.json(user);
}

async function handleUpdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
    return res.json({status:"success"});
    // const id = Number(req.params.id);
    // const body = req.body;
    // Find the user by id
    // const userIndex = users.findIndex(user => user.id === id);

    // if (userIndex === -1) {
    //     return res.status(404).json({ status: "error", message: "User not found" });
    // }

    // // Update the user's data
    // users[userIndex] = { ...users[userIndex], ...body };

    // // Write updated users data back to the file
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    //     if (err) {
    //         return res.status(500).json({ status: "error", message: "Failed to update user" });
    //     }
    //     return res.json({ status: "success", user: users[userIndex] });
    // });
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "success" });
}

async function handleCreateNewUser(req,res) {
const body=req.body;
if(
    !body || 
    !body.first_name || 
    !body.last_name || 
    !body.email || 
    !body.gender || 
    !body.job_title
){
    return res.status(400).json({msg:"all fields are req.."});
}

const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
});
    // console.log("result ", result);
    return res.status(201).json({ msg: "success",id:result._id });

    // users.push({...body, id:users.length+1});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json({status: "success",id:users.length});
    // });
    // joh bhi hum frontend se req krte hai voh humein iss body mein show hota hai
    // console.log("Body",body);
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}