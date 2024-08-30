// const express = require('express')
// const cors = require('cors');

// const server = express();

// //middlware
// server.use(cors())
// server.use(express.json());

// // server.get('/data', (req, res) => {
// //     res.send({ username: 'dileep'});

// // })

// server.get('/data', async(req, res) => {
//     const allUsers=await User.find({});
//     console.log(allUsers);

//     res.send(allUsers);

// })

// // server.post('/data', (req, res) => {
// //     console.log(req.body)
// //     res.send({ msg: 'data received',data:req.body});
// // })

// server.post('/data', async(req, res) => {
//     console.log(req.body)
//     await User.create({
//         name:req.body.username,
//         password:req.body.password
//     }),
//     res.send({ msg: 'data received',data:req.body});
// })




// server.listen(4003, () => {
//     console.log('server started');
// })


// // mongodb >> mongoose


// const mongoose=require('mongoose')

// mongoose.connect('mongodb+srv://vardhman0000:tNPUTbsmosjRYoOq@cluster0.1sfltug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// const User=require('./Models/userModel')

// async function insert(){
//     User.create({
//         name:'raj',
//         password:'12345'
//     })
// }

// // insert()


const express = require('express')
const cors = require('cors'); // Cross Origin Resource Sharing

const server = express();

//middlware
server.use(cors())
server.use(express.json());

server.get('/data', async (req, res) => {

    // get all users
    const allUsers = await user.find({});
    console.log(allUsers);
    res.send(allUsers);

})
server.post('/data', async (req, res) => {
    console.log(req.body)
    await user.create({
        name:req.body.username,
        password:req.body.password
    });
    res.send({ msg: 'data received',data:req.body});
})

server.listen(4003, () => {
    console.log('server started');
})


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://taniya00819:taniya1234@cluster1.8teudy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');

const user=require('./Models/userModel');

async function insert(){
    user.create({
        name:'Raj',
        password:'12345'
    })
}

// insert();
