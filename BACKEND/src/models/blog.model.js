const mongoose = require("mongoose")

const blogSchema = new  mongoose.Schema({
    tittle: {
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
   category: {
        type:String,
        required:true
    },
   author:{
        type:String,
        required:true
    }, 
   date:{
        type:String,
        required:true
    },
})
const blogModel= mongoose.model("blogs",blogSchema)

module.exports = blogModel