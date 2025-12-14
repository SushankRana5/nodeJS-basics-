import express from 'express'
const app = express();
import fs from 'fs'
const port = 3000;


app.use(express.urlencoded({extended:true}))

app.post('/',(req,res)=>{
    res.redirect('/login.html')
})

app.post('/login.html',(req,res)=>{
    const {username,email,password}=req.body;
    const data =`username:${username},email:${email},password:${password}`
    
    fs.appendFileSync('log.txt',data)

    res.redirect('./registration.html')
})

app.post('/registration.html',(req,res)=>{
    const {name,surname,grade,id}=req.body;
    const resData =`name:${name},surname:${surname},grade:${grade},ID:${id}`
    
    fs.appendFileSync('registration.txt',resData)

    res.redirect('./home.html')
})

app.listen(port,()=>{
    console.log(`server runnig at ${port}`);
})