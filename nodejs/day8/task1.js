const express = require('express')
const app = express();
const port = 5000;
app.get('/',(req,res)=>{
    res.send("home page")
})
app.get('/about',(req,res)=>{
    res.send('about page')
})
app.listen(port,()=>{
    console.log("server running at 5000")
})