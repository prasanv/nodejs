const http = require("http");
const cluster = require ("node:cluster") ;
const cpus = require ("node:os") ;

console.log(cpus.cpus().length);

// PM2 is a production process manager for Node.js applications with a built-in load balancer. 
// It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.
// NOTE: Refer to https://www.npmjs.com/package/pm2 from more about 

if (cluster.isMaster) {
    console. log(`Master process ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < 2; i++) {
         cluster.fork();
    }
} else {
    console. log(`worker process ${process.pid} started`);
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Home page");
        } else if (req.url === "/slow-page") {
          for (let i = 0; i < 6000000000; i++) {} // Simulate CPU intense work
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Slow Page");
        }
      });
      
      server.listen(8000, () => console.log("Server is running on port 8000"));
}