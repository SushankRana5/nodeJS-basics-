import http from 'http'
import url from 'url'
import fs from 'fs'

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if (req.url === '/' || req.url==="/about" ) {
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #4f46e5, #6d28d9);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            width: 380px;
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            text-align: center;
        }

        h2 {
            margin-bottom: 20px;
            color: #4f46e5;
            font-size: 28px;
        }

        .input-box {
            width: 100%;
            margin: 15px 0;
        }

        .input-box input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
            outline: none;
            transition: 0.3s;
        }

        .input-box input:focus {
            border-color: #4f46e5;
        }

        .btn {
            width: 100%;
            padding: 12px;
            background: #4f46e5;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 18px;
            cursor: pointer;
            transition: 0.3s;
        }

        .btn:hover {
            background: #4338ca;
        }

        .link {
            margin-top: 15px;
            font-size: 14px;
        }

        .link a {
            color: #4f46e5;
            text-decoration: none;
        }

        .link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form action="/details" method="get">
            <div class="input-box">
                <input type="text" name="username" placeholder="Username" required>
            </div>
            <div class="input-box">
                <input type="password" name="password" placeholder="Password" required>
            </div>
            <button class="btn" type="submit">Login</button>
            <p class="link">Don't have an account? <a href="#">Register</a></p>
        </form>
    </div>
</body>
</html>
</head>
<body>
    
</body>
</html>
            `)
        return res.end()
    } else if (req.url.startsWith('/details')) {
        const { username, password } = url.parse(req.url, true).query
        // console.log(username, password)

        const data = `username : ${username} , password : ${password}`

        fs.writeFileSync('info.text', data)

        res.end('Details saved successfully')
    } else {
        res.write('<h1>404 Not Found</h1>')
        res.end()
    }
})
const port = 3000;
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})