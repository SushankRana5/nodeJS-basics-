import { log } from 'console';
import express from 'express'
const app = express()
import fs from 'fs'
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    res.redirect('./pages/login.html')
})
app.post('/login', (req, res) => {
    const { username, email, password } = req.body;
    const data = `username:${username},email:${email},password:${password}`;
    fs.appendFileSync('log.txt', data);
    res.redirect('./pages/registration.html')
})
app.post('/registration', (req, res) => {
    const { name, surname, grade, id } = req.body;
    const data = `name:${name},surname:${surname},grade:${grade},ID:${id}`;
    fs.appendFileSync('reg.txt', data);
    res.redirect('./pages/home.html')
})

app.listen(port, () => {
    console.log(`server running at ${port}`)
})