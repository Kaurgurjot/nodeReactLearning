const os=require('os');  

// let process_ = process.argv;

// process.argv.forEach((value, index, array) => {
//     console.log(`${index}: ${value}`);
//   });
//
//   const v8 = require('v8');
// console.log(v8.getHeapSpaceStatistics());
//
// const dns = require('dns');
// dns.lookup('dev.dataseers.ai', (err, addresses, family) => {
//   console.log('addresses:', addresses);
//   console.log('family:',family);
// });



// console.log("os.freemem():",os.freemem());
// console.log("os.homedir():",os.homedir());
// console.log("os.hostname():",os.hostname());
// console.log("os.endianness():",os.endianness());
// console.log("os.loadavg():",os.loadavg());
// console.log("os.platform():",os.platform());
// console.log("os.release():",os.release());
// console.log("os.tmpdir():",os.tmpdir());
// console.log("os.totalmem():",os.totalmem());
// console.log("os.type():",os.type());
// console.log("os.uptime():",os.uptime());
//
//
let path = require("path");

// Normalization
console.log('\n\nnormalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('main.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));

console.log('======',path.basename('./dirname/input.txt'))