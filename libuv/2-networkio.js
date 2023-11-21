
// Network I/O 
// https.request is a network input/output operation and not a CPU bound operation
// It does not use the thread pool
// Libuv instead delegates the work to the operating system kernel and whenever possible. it will poll the kernel and see if the request has completed

const https = require("node:https") ;

// process.env.UV_THREADPOOL_SIZE = 16;

const MAX_CALLS = 16;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request ("https://www.google.com", (res) => {
        res.on ("data", () => {});
        res. on ("end", () => {
            console. log ('Request: ${i + 1}', Date.now()-start);
        });
    })
    .end();
};