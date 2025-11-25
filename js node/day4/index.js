const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Page</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background: #f2f2f2;
        }

        .login-box {
            background: #fff;
            width: 350px;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .login-box h2 {
            text-align: center;
            margin-bottom: 25px;
        }

        .input-group {
            margin-bottom: 15px;
        }

        .input-group label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
        }

        .input-group input {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 15px;
        }

        .login-btn {
            width: 100%;
            padding: 12px;
            border: none;
            background: #4A90E2;
            color: #fff;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.3s;
        }

        .login-btn:hover {
            background: #3b7ec4;
        }

        .forgot {
            text-align: center;
            margin-top: 15px;
        }

        .forgot a {
            color: #4A90E2;
            text-decoration: none;
        }

        .forgot a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>Login</h2>
        <form>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            <button class="login-btn">Login</button>
        </form>

        <div class="forgot">
            <a href="#">Forgot Password?</a>
        </div>
    </div>
</body>
</html>
  `)
    res.end()
})
const port = 2000;
server.listen(port, () => {
    console.log('server is running at port 2000')
})