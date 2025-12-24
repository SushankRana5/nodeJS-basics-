import express from 'express';
const app = express();
const port = 3000;

// DB
import dbconnect from './dbconect.js';

// Routes
import login from './routes/login.js';
import signup from './routes/signup.js';

// Middlewares (ALWAYS FIRST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes with base paths
app.use('/login', login);
app.use('/signup', signup);

// Connect DB (CALL IT)
dbconnect();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
