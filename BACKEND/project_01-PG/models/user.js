const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        // jb tk hum firstName nhi denge tb tk entry insert nhi hogi
    },
    lastName:{
        type: String,
        // last name optional hai
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String,
    },      
    },
{timestamps: true}
);


// yeh model bnaaya hai aur yhaa model ka naam user hai aur Schema ka naam userSchema 
const User = mongoose.model('user',userSchema);

module.exports = User;