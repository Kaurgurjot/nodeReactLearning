console.log( __filename );
console.log(__dirname)

process.on('exit', function(code) {
    // Following code will never execute.
    setTimeout(function() {
        console.log("This will not run");
    }, 0);

    console.log('About to exit with code:', code);
});
console.log("Program Ended");

// Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});


// Getting executable path
console.log('Process :',process.execPath);

// Platform Information
console.log(process.platform);