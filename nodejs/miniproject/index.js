import express from 'express'
import model from './database.js'
import bcrypt from 'bcrypt'
import path from 'path'

const __dirname = path.resolve()
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'signup.html'))
})

app.post('/signup', async (req, res) => {
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

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

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

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000")
});
