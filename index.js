const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;
    // Destructing
    const {id,name}= req.query;
    res.send(`<h1>Student ID:${id}, Name is: ${name}</h1>`);
});

app.listen(PORT,()=>{
    console.log(`Your Server is running at localhost:${PORT}`);
})



