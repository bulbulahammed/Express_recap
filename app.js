const express = require('express');
const app = express();
const userRouter = require("./route/user.route");

// Add userRouter in app.js
app.use("/api/user",userRouter);

// Home route with get method
app.get('/',(req,res)=>{
    res.send('You are at home route with get method');
});

app.use((req,res)=>{
    res.send("<h1>404!! Your Requested URL is not found.<h1/>");
})

module.exports = app;