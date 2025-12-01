const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html')
    res.end();
})
server.listen(3000,()=>{
    console.log('running in port 3000')
})