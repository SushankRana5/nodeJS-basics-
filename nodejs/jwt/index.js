import express from 'express';
// import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
const saltRounds = 10;

app.use(cookieParser());

app.get('/', (req, res) => {
    const token = jwt.sign(
        { email: 'anshul@gmail.com' },
        'shhhh',
    );

    res.cookie('token', token)

    res.send('vayo ra?');
    console.log('3000');
});

app.get('/read', (req, res) => {
    const data = jwt.verify(req.cookies.token, 'shhhh')
    console.log(data)
})
app.get('/tokens',(req,res)=>{
    console.log(req.cookies.token)
})

app.listen(3000, () => {
    console.log('Server running on port http://localhost:3000');
});
