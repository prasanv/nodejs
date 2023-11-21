const http = require("node:http");
const fs = require("fs");


// Response "Content-Type" as text/plain
// const server = http.createServer((req, res) => {
//     console.log({req, res})
//     res.writeHead(200, {"Content-Type":"text/plain"});
//     res.end("Hello from Server");
// })

// Response "Content-Type" as json 
// const server = http.createServer((req, res) => {
//     const userName = {
//         firstName: "Prasan",
//         lastName: "Bala"
//     }
//     res.writeHead(200, {"Content-Type":"application/json"});
//     // convert the json object to string before sending or you will see an error
//     res.end(JSON.stringify(userName));
// })

// Response "Content-Type" as HTML
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    // res.end("<H2><u>Hello from Server</u></H1>");

    // Synchronously reads the entire contents of a file and stores in buffer, which is an issue if the html file is large
    // const html = fs.readFileSync("./index.html", "utf-8")
    // res.end(html);

    // Reads the file in stream and does not block the thread even if the html file is large
    const html = fs.createReadStream("./index.html","utf-8").pipe(res);
})


server.listen(3030, () => {
    console.log("server running on port 3030")
})