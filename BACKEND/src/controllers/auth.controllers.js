const userModel = require("../models/user.model")
const config = require('../config/config.js')
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const console = require("console")

async function register(req, res) {
    const {password , username } = req.body
 console.log(password)
 console.log(username)
    if(!username || !password){
        res.status(400).json({
            message:"All  Fields are Neccesary"
        })
    }
    const isAlreadyExists =await  userModel.findOne({
        $or:[{username}, {password}]
    })
    if(isAlreadyExists){
        return res.status(401).json({
            message:"User is Already Exist"
        })
    }
    const hashPassword = crypto.createHash("sha256")
    .update(password)
    .digest("hex")
    const user= await userModel.create({
        username,
        password:hashPassword
    })
    res.status(201).json({
        message:"user registered",
        name:user.username
    })
}
async function login (req,res){
    const {username,password} = req.body
    // check fields
     if(!username || !password){
        res.status(400).json({
            message:"All  Fields are Neccesary"
        })
    }

    //find user
    const user = await userModel.findOne({username})
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }
    // check password 
    const hashedPassword = crypto.createHash("sha256")
    .update(password)
    .digest("hex") 
      
      
    if(hashedPassword===user.password){
    // generate Accesss token
    const accessToken = jwt.sign(
    {
        id:user._id,
    },
    config.JWT_SECRET,
    {
      expiresIn:"15m"
    }
    )
    // generate refresh token
    const refreshToken = jwt.sign(
    {
        id:user._id,
    },
    config.JWT_SECRET,
    {
      expiresIn:"7d"
    }
    )
    // Save refreshToken in db 
    user.refreshToken = refreshToken;
    await user.save();
    //Send response
    res.cookie("refreshToken",refreshToken,{
        httpOnly:true,
        secure:true,
        samesite:"strict",
        maxAge:7*24*60*60*1000 //7days
    })
    res.status(200).json({
        message:`${user.username}login Succesfully`,
        accessToken
    })
    }else {
      return res.status(401 ).json({
        message:"invalid Credentials",
      })
    }
    
}
async function refreshToken (req,res){
    const refreshToken = req.cookies.refreshToken
    //check refreshtoken
    if(!refreshToken){
      return  res.status(401).json({
            message:"Refresh Token is not found"
        })
    }
    const decoded = jwt.verify(refreshToken,config.JWT_SECRET)
   
    const user = await userModel.findById(decoded.id)
    //check user
    if(!user){
        return res.status(404).json({
            message:"User is not found"
        })
    }
    
    //match refreshtoken from db
    if(user.refreshToken == refreshToken){
      // generate new accessToken
    const accessToken = jwt.sign({
        id:decoded.id
    },config.JWT_SECRET,
    {
        expiresIn:"15m"
    })
      // generate new refresh token
    const  newRefreshToken = jwt.sign({
        id:decoded.id,
    },config.JWT_SECRET,
    {
        expiresIn:"7d"
    })  
    //updated refreshtoken is saved in db
    user.refreshToken= newRefreshToken;
    await user.save();

    res.cookie("refreshToken",newRefreshToken,{
       httpOnly:true,
        secure:true,
        samesite:"strict",
        maxAge:7*24*60*60*1000 //7days
    })
    res.status(200).json({
        message:"New Token is Genearted",
        accessToken,

    })
}else {
     return res.status(403).json({
            
            message:"Token is ----  invalid",
            refresh :refreshToken,
            
             })
    }
    
}
async function logout (req,res){
    const refreshToken = req.cookies.refreshToken
    if (refreshToken){
    const user = await userModel.findOne({refreshToken:refreshToken})
     if(!user){
        return res.status(404).json({
            message:"user not found"
        })
     }
    user.refreshToken = null;
    await user.save()
    res.clearCookie("refreshToken",{
        httpOnly:true,
        secure:true,
        samesite:"strict"
    })
    res.status(200).json({
        message:`${user.username} is loggedOut `
        
    })
    }else{
        res.status(401).json({
            message:"Unauthorised Token"
        })
    }

}
 module.exports = {register,login ,refreshToken ,logout}  