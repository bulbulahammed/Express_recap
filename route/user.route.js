const express = require('express');
const router = express.Router();
const path = require('path');


router.get("/json",(req,res)=>{
    res.status(200).json({
        "message": "This is Message from json",
        "statusCode": 200,
        "Author": "Bulbul Ahammed"
    })
});

router.get("/login",(req,res)=>{
    res.cookie(
        "name","bulbul"
    );
    res.end()
})


module.exports = router;