const mongoose = require('mongoose');


// connecting mongoose
// database ka naam youtube-app-1 hoga
// aur yeh ek promise return krega aur catch err ko catch krne k liye if any
// mongoose
//     .connect('mongodb://127.0.0.1:27017/youtube-app-1')
//     .then(()=>{
//         console.log("mongoDB connected");
//     })
//     .catch(err => console.log("mongo err",err));

async function connectMongoDb(url){
    return mongoose.connect(url)
}

module.exports = { connectMongoDb } ;