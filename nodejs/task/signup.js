import express from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = path.resolve();

// middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// signup page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/signup.html'));
});

// register
app.post('/register', (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.send('Passwords do not match');
    }

    const token = jwt.sign(
        { username, email },
        'secret0987',
        { expiresIn: '1h' }
    );

    res.cookie('token', token, { httpOnly: true });
    res.redirect('/check');
});

// protected route
app.get('/check', (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/');
    }

    try {
        const data = jwt.verify(token, 'secret0987');
        console.log(data);
        res.send('Signup successful & JWT verified ✅');
    } catch (err) {
        res.redirect('/');
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
