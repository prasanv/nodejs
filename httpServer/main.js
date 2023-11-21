const http = require("node:http");
const fs = require("fs");

// Response "Content-Type" as HTML with dynamic input values
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    const name = "prasan";
    let html = fs.readFileSync("./main.html", "utf-8")
    // This is similar to string replacement concept
    html = html.replace("{{name}}", name);
    res.end(html);

})


server.listen(3030, () => {
    console.log("server running on port 3030")
})