// include node's built-in http library
const http = require('http')

// start the web server, using a callback to listen for http requests so we can send responses
http.createServer((request, response) => {
    // send an http ok status
    response.writeHead(200, {'Content-Type': 'text-plain'})
    response.write('Hello world!');
    response.end();
}).listen(3000);

console.log('Http server running on port 3000')
