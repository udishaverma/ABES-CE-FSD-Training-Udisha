// const http = require('http');

// const myServer = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.end("ABES Engineering College");
//     }
//     else if(req.url == '/about') {
//         res.end('We are students.');
//     }
//     else if(req.url == '/class') {
//         res.end('CE-A');
//     }
//     else {
//         res.end('404 Error');
//     }
// })

// myServer.listen(8000,() => console.log('Server is running.'));


// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const myServer = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`
//             <html>
//                 <head><title>Homepage</title></head>
//                 <body>
//                     <h1>ABES Engineering College</h1>
//                     <img src="/college.jpg" alt="College Image" style="width: 200px; height: 200px;"/>
//                 </body>
//             </html>
//         `);
//     }
//     else if (req.url === '/college.jpg') {
//         const imgPath = path.join(__dirname, 'public', 'college.jpg');
//         fs.readFile(imgPath, (err, data) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.end('Image not found');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//                 res.end(data);
//             }
//         });
//     }
//     else if (req.url === '/about') {
//         res.end('We are students.');
//     }
//     else if (req.url === '/class') {
//         res.end('CE-A');
//     }
//     else {
//         res.end('404 Error');
//     }
// });

// myServer.listen(8000, () => console.log('Server is running.'));

// const fs=require('fs');

// fs.writeFileSync("./CE-A.txt","We are students of CE-A.");

// const result = fs.readFileSync("./CE-A.txt","utf-8");
// console.log(result);

// fs.readFile("./CE-A.txt","utf-8",(err,result)=>{
//     if (err) {
//         console.log('error',err);
//     }
//     else {
//         console.log(result);
//     }
// })



const fs = require('fs');

fs.cpSync("IT-A.txt","A.txt");

