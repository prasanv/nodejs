const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log({req, res})
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello from Server");
})

server.listen(3030, () => {
    console.log("server running on port 3030")
})