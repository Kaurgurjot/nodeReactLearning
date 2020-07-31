var fs = require("fs");
var file = "input.txt";
// Asynchronous - Opening File

// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");
// });



console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");

   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());
});

///Code to avoid call back hell

function Readfile(err, data)
{
    if(err) throw err;
    console.log(data);
}

function Status(err,stat)
{
    if(err) throw err;
    if(stat.isFile()){
        fs.readFile(file,'utf8',Readfile);
    }
}

function fileExists(exists){
    if(exists)
        fs.stat(file,Status)
}

fs.exists(file,fileExists);