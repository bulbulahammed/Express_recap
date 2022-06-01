const express = require('express');
const router = express.Router();

router.get("/login",(req,res)=>{
    res.send('Your are in <h1>Login</h1> Route');
});

router.get("/reg",(req,res)=>{
    res.send('You are in <h1>Registration</h1> Route');
})

module.exports = router;