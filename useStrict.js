'use strict';

function demo (params) {
    
}

var city = "Chicago"
console.log('===========city :',city) // Reference Error: asignment is undeclared variable city.

// // Assignment to a non-writable global
// var undefined = 5; // throws a TypeError
// var Infinity = 5; // throws a TypeError

// console.log(Infinity,'==========',undefined);
// // // Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError
console.log('=====obj1 :',obj1)

// // // Assignment to a getter-only property
// var obj2 = { get x() { return 17; } };
// obj2.x = 5; // throws a TypeError
// console.log('=====obj2 :',obj2)
// // Assignment to a new property on a non-extensible object
// var fixed = {};
// Object.preventExtensions(fixed);
// fixed.newProp = 'ohai'; // throws a TypeError

// console.log('=====fixed :',fixed)

console.log('Name :========= :',name);

var name ='Pradeep'

console.log('=========name :',name);
