const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.get("/home", (req,res)=>{
    res.send("hello home")
})

app.get("/about", (req,res)=>{
    res.send("hello about")
})


app.listen(5000,()=>{
    console.log("loading")
})

module.exports = app;