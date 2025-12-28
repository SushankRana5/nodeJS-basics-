import express from 'express'

import jwt from 'jsonwebtoken'

import cookieParser from 'cookie-parser'
const app = express()


app.use(cookieParser)


app.get('/', (req, res) => {
    const data = jwt.sign({
        name: 'anshul',
        role: 'admin'
    }, 'shh')
    res.cookie('cookie', data)
    res.send('dinesh chutiya')
})
app.get('/verify', (req, res) => {
    const data = jwt.verify(req.cookies.jwt, 'shh')
    res.send(data)
})

app.listen(3000, () => {
    console.log(`server running at http://localhost:3000`);

})