const express = require("express");
const { 
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser 
} = require('../controllers/user')

// jb routes ko alag se use krte hai tb yeh use hota hai
const router = express.Router();

//HTML document or routes
// router.get('/',async(req,res)=>{
//     const allDbUsers = await User.find({});
//     const html=`
//     <ul>
//         ${allDbUsers.map((user)=>
//             `<li> ${user.firstName} - ${user.email} </li>`
//         ).join(" ")}
//     </ul>
//     `;
//     console.log(html);
//     res.send(html);
// });

//REST API
// (/api/users = /)
router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);
router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);   

//setting a header
// router.get('/',handleGetAllUsers
    // console.log("i am in get route",req.myUserName);
    // writing x before header is a good practice 
    // res.setHeader('X-myName','Taniya');
// );

// 3 alag-alag jgah kuch change krne se better hai 
// hum kuch  aisa krein k ek jgah change krne se saari jgah chnages aa jayein
// router
//     .route("/api/users/:id")
//     .get((req,res)=>{
//     // converting id into number bcoz before it was a string and we want number
//     const id = Number(req.params.id);
//     const user = users.find(user=>user.id===id);
//     return res.json(user);
// })
//     .patch((req,res)=>{
//         // edit user with id
//         const body=req.body;
//     users.push(body);
//     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status: "success"});
//     });
//         // return res.json({status: "pending"});
//     })
//     .delete((req,res)=>{
//         // delete user with id
//         return res.json({status: "pending"});
//     });

// router.get("/api/users/:id",(req,res)=>{
//     // converting id into number bcoz before it was a string and we want number
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id===id);
//     return res.json(user);
// });

// app.patch("/api/users/:id",(req,res)=>{
//     // to edit user with id
//     return res.json({status: pending});
// });

// app.delete("/api/users/:id",(req,res)=>{
//     // to delete a user with id
//     return res.json({status: pending});
// });

module.exports = router;

