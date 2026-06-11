const mongoose = require("mongoose");
const config = require("./config");

async function connectDB() {
    await mongoose.connect(config.MONGO_URI);
    console.log("DB is connected ");
    
};


 module.exports = connectDB;