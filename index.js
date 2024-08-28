const { log, timeStamp } = require("console");
const path = require("path");
const express = require ("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const staticRoute = require("./routes/staticRouter")

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

PORT = 3000;

const User = require("./models/users")

mongoose.connect("mongodb://localhost:27017/contact").then(
    console.log("MongoDb connected")
)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", staticRoute);


app.post("/", async (req, res)=>{
    const body = req.body;
    await User.create({
        fullName: body.fullName,
        email: body.email,
        message: body.message
    })
    res.status(201).render("users");
})

app.get("/user", (req, res)=>{
    res.render("user");
})

app.listen(PORT, (err)=>{
    if(err) console.log("Error "+ err);
    else console.log("Connected sucessfully at "+ PORT);    
})