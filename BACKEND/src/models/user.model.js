const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    refreshToken:{
        type:String,
        default:null
    }
})
 const userModel = mongoose.model("User",userSchema)

 module.exports = userModel