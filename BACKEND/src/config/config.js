const dotenv = require("dotenv")
const { Error } = require("mongoose")

dotenv.config()

if(!process.env.MONGO_URI){
    throw new Error("MONGO URI is not Defined Properly")
}
if(!process.env.JWT_SECRET){
    throw new Error("JWT URI is not  Defined Properly")
}
   const MONGO_URI=process.env.MONGO_URI
   const JWT_SECRET =process.env.JWT_SECRET

module.exports= {MONGO_URI , JWT_SECRET}