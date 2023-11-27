const http = require("http");
const cluster = require ("node:cluster") ;
const cpus = require ("node:os") ;

// number of cpu cores on the machine
const numCPUs = cpus.cpus().length;

// if (cluster.isMaster) {
//     console. log(`Master process ${process.pid} is running`);
//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//          cluster.fork();
//     }
// } else {
//     console. log(`worker process ${process.pid} started`);
// }

// NOTE: Number of workers(forks) should be always less or equal than number of cpu cores on the machine
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