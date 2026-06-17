const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes.js");
const dataRouter = require("./routes/data.routes.js");


app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.use("/api/auth",authRouter );

app.use("/api/data",dataRouter );


module.exports = app;
