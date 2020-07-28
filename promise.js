// let promise =  new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
//
//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => reject("Error found"), 1000);
// });
//
// console.log('==========',promise)
//
//
// promise.then(
//     result => console.log('Promise result:',result), // shows "done!" after 1 second
//     error => console.log('Promise result:',error)
// );
//
// console.log('==========Promise Success')

// let promise_both = new Promise(function(resolve, reject) {
//     resolve("done");
//
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
// });
//
// let promise_immediately = new Promise(function(resolve, reject) {
//     // not taking our time to do the job
//     // reject(new Error("…")); // ignored
//     resolve(123); // immediately give the result: 123
// });

// console.log('=============',promise_immediately)

// Try catch
// new Promise((resolve, reject) => {
//     setTimeout(() => reject("Getting result Rejected"), 2000)
// }).finally(() => console.log("Promise ready"))
//     .then(result => console.log(result))
//     .catch(error => console.log('=========', error)); // <-- .then handles the result
//
//
// //  Chaining
// new Promise(function(resolve, reject) {
//
//     setTimeout(() => resolve(1), 1000); // (*)
//
// }).then(function(result) { // (**)
//
//     alert(result); // 1
//     return result * 2;
//
// }).then(function(result) { // (***)
//
//     alert(result); // 2
//     return result * 2;
//
// }).then(function(result) {
//
//     alert(result); // 4
//     return result * 2;
//
// });
//
// const getData = async function (data) {
//     let array = [1, 2, 3, 4, 5];
//     let promise = array.map(item => {
//         return new Promise(((resolve, reject) =>
//                 setTimeout(() => {
//                     resolve(`Getting function data :` + data + item)
//                 }, 2000)
//         ))
//     })
//     console.log('Before Promise')
//     let res = await Promise.all(promise);
//     console.log('==========result :', res)
//     console.log('==========Demo')
// }
//
// //
// getData('Pradeep')
//
//
//
// async function firstAsync() {
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => res("Now it's done!"), 1000)
//     });
//
//     // wait until the promise returns us a value
//     let result = await promise;
//
//     // "Now it's done!"
//     console.log(result);
//
//     console.log('demo')
// }
//
// firstAsync();