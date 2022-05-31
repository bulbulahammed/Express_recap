const express = require('express');
const app = express();
// Home route with get method
app.get('/',(req,res)=>{
    res.send('You are at home route with get method');
});
// About route with Get method.
app.get('/about',(req,res)=>{
 res.send('You are at About route with get method');
});
// Post route with Get method.
app.post('/post',(req,res)=>{
    res.send('You are at POST route with POST method');
   });
   // PUT route with Get method.
app.put('/put',(req,res)=>{
    res.send('You are at PUT route with PUT method');
   });
   // Delete route with Get method.
app.delete('/delete',(req,res)=>{
    res.send('You are at DELETE route with DELETE method');
   });

module.exports = app;