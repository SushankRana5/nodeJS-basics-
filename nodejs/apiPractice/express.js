import express from 'express'
import usermodel from './dataModel.js'
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`hey`)
})
app.get('/create', async (req, res) => {
    let create = await usermodel.create({
        username: "Gust",
        name: 'anshul',
        program: 'bsc.csit'
    })
    res.send(create);
})

app.get('/update', async (req, res) => {
    let updatedUser = await usermodel.findOneAndUpdate(
        { username: "Gust" },
        { name: "sushank" },
        { new: true })
    res.send(updatedUser);
})


app.get('/read', async (req, res) => {
    let finduser = await usermodel.find()
    res.send(finduser);
})

app.get('/delete',async (req, res) => {
    let deleteuser =await usermodel.findOneAndDelete({ name: "sushank" })
    res.send(deleteuser);
})
app.listen(port, () => {
    console.log(`express running at ${port}`);
})