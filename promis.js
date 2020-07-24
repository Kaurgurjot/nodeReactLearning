let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 5000);
});

// console.log('==========',promise)

promise.then(
    result => console.log('Promise result:',result), // shows "done!" after 1 second
    error => console.log('Promise result:',error)
);

// let promise_reject = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });


// let promise_both = new Promise(function(resolve, reject) {
//     resolve("done");
//
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
// });

let promise_immediately = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    // reject(new Error("…")); // ignored
    resolve(123); // immediately give the result: 123
});

console.log('=============',promise_immediately)

// Try catch
new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
})
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result


//  Chaining
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function(result) {

    alert(result); // 4
    return result * 2;

});