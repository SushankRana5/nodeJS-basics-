import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
    const payload = {
        userID: "1234",
        email: "abc@gmail.com",
        role: "admin"
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
    res.cookie("token", token, {
        httpOnly: "true",
        sameSite: "strict",
        secure: "false"
    });
    res.send('vayo hola')
})


app.listen(process.env.port,()=>{
    console.log(`server running at http://localhost:${process.env.port}`)
})