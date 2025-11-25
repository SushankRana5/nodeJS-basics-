const http = require('http')
const { type } = require('os')
function show(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("<h1>This is head</h1><p>shown</p>")
    res.end("ended")
}
http.createServer(show).listen(3000)