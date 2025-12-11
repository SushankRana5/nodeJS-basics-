const express = require('express')
const app=express()
const fs= require('fs');
const port=5000;

app.get('/signindetails',(req,res)=>{
    const{username,email,password}=req.query;
    const data=`Username : ${username} \n email: ${email} \n password:${password}`
    
    fs.appendFileSync("userinfo.txt",data);
    
    res.send("vayo hai");

})
app.listen(port,()=>{
    console.log(`server running at http:localhost:${port}`)
})