import express from 'express'
import fs from 'fs'

const app = express();
import usermodel from './usermodel.js'
const port = 3000
app.get('/', (req, res) => {
    res.send('hey')
})
app.get('/create', async (req, res) => {
    let userCreated = await usermodel.create({
        name: 'anshul',
        username: 'sushank',
        age: 20
    })

    res.send(userCreated)
})
app.get('/update', async (req, res) => {
    let updatedUser = await usermodel.findOneAndUpdate(
        { username: 'sushank' },
        { name: 'anshul' },
        { new: true }
    );

    res.send(updatedUser)
})

app.get('/read', async (req, res) => {
    let users = await usermodel.find();
    res.send(users);
})
app.get('/readone',async (req,res)=>{
    let find = await usermodel.findOne({username: 'sushank'})
})
app.listen(port, () => {
    console.log(`server running at ${port}`);
})