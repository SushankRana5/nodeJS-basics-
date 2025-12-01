const http = require('http')
function local(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('like why not?');
}
http.createServer(local).listen(3000)