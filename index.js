//EXPRESS FRAMEWORK CODE TO CREATE A SERVER AND START 

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


// NODEJS TRADITIONAL WAY TO CREATE AND START A SERVER

const http = require('http');
const fs = require("fs");

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var data = fs.readFileSync('input.txt');
    
    fs.readFile('input.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
     });
    
    console.log("Program Ended");

    res.end('Hello World!\n'+data.toString());
});

// app.get('/file', function (req, res) {
//     console.log('Reading file.')
// });

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');