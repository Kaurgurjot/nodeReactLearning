const fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   // console.log('Pradeep :',chunk)
});

readerStream.on('end',function() {
   console.log('=======,End :',data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");