import express from 'express'
const app = express()
import jwt from 'jsonwebtoken';

app.get('/', (req, res) => {
    const data = {
        username: 'anshul',
        age: 20,
        role: 'admin'
    }
    const token = jwt.sign({ data }, 'shhh', { expiresIn: '1ms' })
    res.send('jwt token banyo')
    console.log(token);
})

app.listen(5500)