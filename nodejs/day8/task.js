const express = require ("express");
const app = express();
const port =4000;
app.use((req,res)=>{
    console.log("hello world")
})
app.use((req,res)=>{
    res.send("Hello world")
})
app.listenerCount(port,()=>{
    console.log(`running at local host 4000`)
})