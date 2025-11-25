const http = require('http')
function W(req, res) {
    res.writeHead(200, { 'Content-Type': "text/plain" })
    res.end('HELLO,WORLD')
}
http.createServer(W).listen(3000)