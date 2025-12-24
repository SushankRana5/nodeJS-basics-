import express from 'express'
import model from '../models/model.js'
import bcrypt from 'bcrypt'
import path from 'path'

const __dirname = path.resolve()
const signup = express();

signup.use(express.urlencoded({ extended: true }))

signup.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const User = await model.findOne({ username });
    if (User){
        res.send('User already exists try another username')
    }
    await model.create({
        username: username,
        password: hash
    });

    res.sendFile(path.join(__dirname, 'login.html'))
});

export default signup;
