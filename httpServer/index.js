const http = require("node:http");


// Response sent as text/plain
// const server = http.createServer((req, res) => {
//     console.log({req, res})
//     res.writeHead(200, {"Content-Type":"text/plain"});
//     res.end("Hello from Server");
// })

// Response as json 
const server = http.createServer((req, res) => {
    const userName = {
        firstName: "Prasan",
        lastName: "Bala"
    }
    res.writeHead(200, {"Content-Type":"application/json"});
    // convert the jsn object to string before sending or you will see an error 
    res.end(JSON.stringify(userName));
})


server.listen(3030, () => {
    console.log("server running on port 3030")
})