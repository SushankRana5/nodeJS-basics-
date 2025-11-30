const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url.replace(/\/+$/, "") || "/";
    const method = req.method;

    res.setHeader("Content-Type", "text/plain");

    if (url === "/" && method === "GET") {
        
    }
    
    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(2000, () => console.log("Server running on 2000"));
