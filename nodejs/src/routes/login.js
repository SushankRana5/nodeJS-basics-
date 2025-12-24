import express from 'express'
import model from '../models/model.js'
import bcrypt from 'bcrypt'


const login = express.Router();

login.use(express.urlencoded({ extended: true }))

login.post('/login', async (req, res) => {
    const { username,email, password} = req.body;

    const User = await model.findOne({ username });

    if (!User) {
        return res.send('User not found, try again');
    }

    const isMatch = await bcrypt.compare(password, User.password);

    if (isMatch) {
        res.send("Login successful ✅");
    } else {
        res.send("Wrong password ❌");
    }
});

export default login;
