import express from 'express'

import bcrypt from 'bcrypt'

const app = express();

app.use(express.urlencoded({ extended: true }))


app.post('/signup', async (req, res) => {

    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10)

    res.send(hash)
})

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000")
})