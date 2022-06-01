const express = require('express');
const router = express.Router();


router.get("/login",(req,res)=>{
    res.send('Your are in <h1>Login</h1> Route');
});

router.get("/json",(req,res)=>{
    res.status(200).json({
        "message": "This is Message from json",
        "statusCode": 200,
        "Author": "Bulbul Ahammed"
    })
});

// Example of Redirect
router.get("/reg",(req,res)=>{
    res.redirect("/api/user/login");
})

module.exports = router;