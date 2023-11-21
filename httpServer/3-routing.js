const http = require("node:http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // res.end(req.url);
    
    const userName = {
        firstName: "Prasan",
        lastName: "Bala"
    }

    if(req.url === '/'){
        res.writeHead(200, {"Content-Type":"text/html"});    
        fs.createReadStream("./1-index.html","utf-8").pipe(res);
    } else if(req.url === '/about') {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("This is a HTTP Server by nodejs");
    } else if(req.url === '/api') {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(userName));
    }
    
})


server.listen(3030, () => {
    console.log("server running on port 3030")
})