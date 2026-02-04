const http = require('http');

const myServer = http.createServer((req, res) => {
    console.log('Server 1');
    res.end('hello this is Server 1.');
})

myServer.listen(8000,() => console.log('Server is running.'));