const express = require("express");
const app = express();
const PORT = 3000;

app.get("/userId/:id/userName/:name",(req,res)=>{
    const id= req.params.id;
    const name = req.params.name;
    res.send(`<h1>Student ID:${id}, Name is: ${name}</h1>`);
});

app.listen(PORT,()=>{
    console.log(`Your Server is running at localhost:${PORT}`);
})



