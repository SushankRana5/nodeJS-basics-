
//req.url
console.log(req.method, req.url, req.headers);
if(req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    return res.end();
}
else if(req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body><h1>This is the about page.</h1></body>');
    res.write('</html>');
   return res.end();
}
res.statusCode = 404;
res.setHeader("Content-Type", "text/html");
res.write('<html>');
res.write('<head><title>Page Not Found</title></head>');
res.write('<body><h1>404 - Page Not Found</h1></body>');
res.write('</html>');
res.end();