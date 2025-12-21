import express from 'express'
const app = express();
 
import cookieParser from 'cookie-parser'

app.use(cookieParser())
app.get('/',(req,res)=>{
    res.cookie('name','anshul')
    res.send('done')
})
app.get('/read',(req,res)=>{
    console.log(req.cookies)
    res.send('readpage')

})

app.listen(3000);