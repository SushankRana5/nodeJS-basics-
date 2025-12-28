import express from 'express';
import model from '../models/model.js';
import bcrypt from 'bcrypt';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

// POST route to handle signup form
router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user already exists
        const existingUser = await model.findOne({ username });
        if (existingUser) {
            return res.send('User already exists. Try another username.');
        }

        // Hash password and create new user
        const hash = await bcrypt.hash(password, 10);
        await model.create({ username, password: hash });

        // Redirect to login page after successful signup
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

console.log('Signup router connected');
export default router;
