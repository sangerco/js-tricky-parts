// question 1:

// var bar = null;
// // returns true, because null is an object!
// console.log(typeof bar === 'object');
// // returns false by removing null as an option
// console.log((bar !== null) && (typeof bar === 'object'));

// function barFunction() {
//     return 'I am a function!'
// }
// // returns true for a function
// console.log((barFunction !== null) && ((typeof barFunction === 'object') || (typeof barFunction === 'function')));

// var barArray = [];
// // returns false for an array 
// console.log((barArray !== null) && (typeof barArray === 'object') && (toString.call(barArray) !== '[object Array]'));

// // below will return false for null, array, and functions, but true for objects:
// var barObject = {
//     bar: 'foo'
// };

// console.log((barObject !== null) && (barObject.constructor === Object));

// // of course Array.isArray() will identify arrays in ES5

// question 2

// (function(){
//     var a = b = 3;
// })();

// console.log('a defined? ' + (typeof a !== "undefined"));
// console.log('b defined? ' + (typeof b !== "undefined"));

// // because the above is using var, the browser reads b = 3, var a = b
// // b becomes a global variable available inside and outside the function
// // a, however, is still defined within the anonymous function, and is therefore not available outside the scope
// // of the function

// question 3

// var myObject = {
//     foo: 'bar',
//     func: function() {
//         var self = this;
//         console.log('outer func: this.foo = ', this.foo);
//         console.log('outer func: self.foo = ', self.foo);
//         (function() {
//             console.log('inner func: this.foo = ', this.foo);
//             console.log('inner func: self.foo = ', self.foo);
//         })();
//     }
// };

// myObject.func();

// the anonymous inner function has lost access to this as it refers to myObject; however, because it is in the block
// as the self variable, and self still has access to this, self still works.

// question 4

// What is the significance of, and the reason for, wrapping the entire content of a JavaScript source file 
// in a function block?

// variables are not accessible outside of a block, therefore wrapping the entire file in a function block
// serves to 'privatize' the variables and make them unreachable and unable to conflict with other variables elsewhere

// question 5

// what is the significance of, and what are the benefits of, including 'use strict' at the beginning of a Javascript
// source file?

// 'use strict' will generate errors and throw errors when other javascript files might just fail without saying
// anything. This leads to easier debugging. Also, 'use strict' makes it harder to create a global variable, leading
// to less conflicts. 'use strict' doesn't allow this to be set to null or undefined, nor will it allow duplicate 
// arguments to made to the same function. Honestly, none of this matters when you're using a modern code editor, 
// but fuck it.

// question 6

// will the two following functions return the same thing? Why or why not?

// function foo1() 
// {
//     return {
//         bar: 'hello'
//     };
// }
// function foo2() 
// {
//     return 
//     {
//         bar: 'hello'
//     };
// }

// console.log(foo1());
// console.log(foo2());

// because there is nothing else on the same line as 'return', asi is inserting a semicolon after it, making 
// foo2() return undefined.

// question 7

// What will the below code output and why?

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// the top line will return the sum of the two numbers, but because it's javascript, the numbers might be wonky
// since they're floats and javascript doesn't handle floats well. the bottom line might return true, because 
// == asks for shallow equality between the two side of the ==, but it might also return false, because the above 
// wonky floats problem

// question 8 

// in what order will the numbers 1-4 be logged onto the console and why?

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

// it should go 1, 4, 3, 2. Because the call stack is first in, first out, the console should log the first entry
// first. However, since setTimeout is being called on two of the numbers, they will go to the bottom of the stack.
// 3 will go immediately to the bottom, whereas 2 will go after 1 second.

// question 9

// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string
// is a palindrome

// function isPalindrome(str) {
//     // str = str.replace(/\W/g, '').toLowerCase();
//     let strArray = str.split('');
//     strArray.reverse();
//     let newStr = strArray.join('');
//     if (newStr === str) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome('tacocat'));
// console.log(isPalindrome('bananamannamananab'));
// // console.log(isPalindrome('A man, a plan, a canal, Panama'));
// console.log(isPalindrome('notpalindrome'));

// a different way to do this would be to use the regex /\W/g, where W is searching for every non-letter character
// and g means to search every character. You could then use that expression with a str.replace() method to remove
// all non-letter characters. Combining that with a str.toLowerCase() method could allow for more complicated 
// plaindromes to be tested.

// question 10

// Write a sum method which will work properly when invoked using either syntax below.

// function sum(num) {
//     console.log(arguments)
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     } else {
//         return function(num2) { return num + num2 }
//     }
// }

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// The function object has access to the arguments object, which can then be used to determine how many
// arguments are being passed through. If 2 arguments are being passed through, it is easy enough to sum
// them. If not, a second anonymous function can take both the first argument passed as well as the second.

// question 11

// (a) What gets logged to the console when the user clicks on “Button 4” and why?
    // it is going to log 5 because the loop has already completed, i has reached 5. This has happened because
    // var created a global variable that did not pay attention to the rest of the code in the for loop.

// (b) Provide one or more alternate implementations that will work as expected.
    // using let instead of var will contain i inside of the for block, therefore keeping i from completing 
    // the loop prematurely

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){ console.log(i); });
//     document.body.appendChild(btn);
// }

// for (let i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){ console.log(i); });
//     document.body.appendChild(btn);
// }

// question 12 

// Assuming d is empty in scope, what is accomplished by the following code?

// var d = {};

// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });

// console.log(d)

// the code inserts two keys into the object, 'zebra' and 'horse', and sets them to undefined.

// question 13 

// what will the code below output to the console and why?

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// the first line will create an array of ['j','o','h','n'];
// the second line will mutate the original array to ['n','h','o','j'] and then make a reference to the first array
// the third line will create a 3rd array containing ['s','e','n','o','j']
// the fourth line will push the entire third array onto the second array, which is actually just the first array 
// because the second array is really just a reference to the original, the logged outputs are the same.

// question 14

// what will the below code output to the console and why?

// console.log(1 +  "2" + "2"); // should output 122 because javascript will concatenate strings and integers
// console.log(1 +  +"2" + "2"); // should output 32 because +"2" will cause javascript to read 2 as an integer, then add the two integers before concatenating
// console.log(1 +  -"1" + "2"); // should output 02 because -"1" will turn "1" into a negative number
// console.log(+"1" +  "1" + "2"); // should output 112 +"1" will be read as an integer but nothing else
// console.log( "A" - "B" + "2"); // should output NaN2. Subtracting strings produces NaN, which would then be concatenated onto 2
// console.log( "A" - "B" + 2); // should output NaN. The string subtraction creates NaN, and mathematical operations with NaN produce NaN.

// worth noting that only the last produces a number. everything else produces strings.

// question 15

// The following recursive code will cause a stack overflow if the array list is too large. How can you fix this 
// and still retain the recursive pattern?

// var list = readHugeList();

// var nextListItem = function() {

//     var item = list.pop();

//     if (item) {
//         // process the list item...
//         setTimeout( nextListItem, 0);
//     }
// };

// placing a setTimeout() set to 0 places the recursion into the event loop, not the call stack, which leaves 
// the stack clear

// question 16

// What is a “closure” in JavaScript? Provide an example.

// closure is where an outer variable is accessible to an inner function. Basically all child functions have access
// to their parent's variables

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer variable: ${outerVariable}`);
//         console.log(`Inner variable: ${innerVariable}`);
//     }
// }

// const hereIsAClosureExample = outerFunction('outer');
// hereIsAClosureExample('inner')

// what is interesting is that after the inner function has been created, it will have access to the outer variable
// well after the outer function has been called, even though calling the outer variable itself will return undefined

// question 17

// what would the following lines output to the console?

// console.log("0 || 1 = "+(0 || 1)); // "0 || 1 = " 0
// console.log("1 || 2 = "+(1 || 2));  // "1 || 2 = " 1
// console.log("0 && 1 = "+(0 && 1)); // "0 && 1 = " 0
// console.log("1 && 2 = "+(1 && 2)); // "0 && 1 = " 2

// the first line will produce 1 because 0 is a falsy value, so it will continue to 1, which is a truthy value
// the second line will also produce 1 because it is a truthy value. The OR operator will find that and immediately
// return the value without proceeding to the 2.
// the third line produces 0 because 0 is again a falsy value. Both values must be truthy for the expression to 
// return true. Since the expression does not return true, it will return 0. Not sure why it wouldn't return
// undefined.
// the fourth line is confusing. Since both values are truthy, the statement returns true. Strangely the expression
// returns the last number, which in this case is 2.

// question 18

// what will be the output when the following code is executed?

// console.log(false == '0'); // will return true, because 0 is a falsy value
// console.log(false === '0'); // will return false, because 0 is not a deeply false value

// question 19

// What is the output out of the following code? Explain your answer.

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]); // 456

// Setting an object as a key in javascript will cause javascript to attempt to stringfy the objects
// this will cause the key to be 'object Object', not the actual object itself. Therefore, javascript will 
// overwrite the first value with the second.

// question 20

// what will the following code output to the console?

// console.log(function f(n){return ((n > 1) ? n * f(n-1) : n)}(10)); // 3628800

// the function will run recursively until n = 1, at which time functions will start to come off the stack,
// where 1 will be multiplied by 2, the product will then be multiplied by 3, and on and on until 10. Basically 
// it is finding the factorial of 10.

// question 21

// consider the code snippet below. what will the console output be and why?

// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);

// it should return one because of closures. The inner function still has access to the outer variable.

// question 22

// what will the following code output to the console and why?

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// outside of the hero object, stoleSecretIdentity won't have access to this, therefore it will return undefined.
// Using the bind method will give stoleSecretIdentity access to hero's this, and allow the function to work as intended.

// question 23 

// Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents
// (not just its immediate children). For each element visited, the function should pass that element to a provided 
// callback function.

// function Traverse(pElement,pCallback) {
//     pCallback(pElement);
//     var list = pElement.children;
//     for (var i = 0; i < list.length; i++) {
//         Traverse(list[i],pCallback);  // recursive call
//     }
//  }

//  Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application.

// question 24

// What is the output of the following code:

// var length = 10;
// function fn() {
//     console.log(this.length)
// }

// var obj = {
//     length: 5,
//     method: function(fn) {
//         fn();
//         arguments[0]();
//     }
// };

// obj.method(fn, 1); // should return 10, because fn is a method on the global window, and length is as well. However,
// obj.method also calls a second function as argument[0](), which is fn() again. In this case, this gets set to the 
// arguments array, which has a length of two (the function call and 1). Therefore instead of 5 being returned, it is
// 2 instead.

// question 25

// consider the following code. What will the output be, and why?

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x)
//     }
//     console.log(x);
//     console.log(y);
// })();

// since x and y are set with var, they are hoisted to the global scope. However, x is then revisited in the catch
// which sets it within the catch block. Therefore, logging x inside the catch block works, but not outside. Since
// y is never revisited, its value remains hoisted and is available to be logged in the function block.

// question 26

// what will the output be of this code?

// var x = 21;
// var girl = function() {
//     console.log(x);
//     var x = 20;
// };
// girl(); 


// this is confusing because javascript is stupid. Even though x has been declared globally, when this function is
// called, javascript is going to see that x is declared inside the function block, effectively wiping out the 
// value of x inside the function block. However, because the value of x is logged before it is declared, girl() is
// going to log undefined.

// question 27

// What will the following code print?

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i) }, i * 1000);
// } // 0 immediately, 1 after one second, 2 after two, etc until 4.

// question 28

// What do the following lines output, and why?

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// javascript will read these operations in order, from left to right. In this first line, 1 is less than 2, which 
// is true. True has a value of 1 however, so javascript will then replace 1 < 2 with 1. One is less than 3 though
// so the statement is still true. The first line will log true. The opposite happens in the second line, however.
// 3 is greater than 2, so javascript will replace that statement with a 1. 1 is not greater than 1, however, so the 
// the statement fails, and the second line returns false. 

// question 29

// How do you add an element at the beginning of an array? How do you add one at the end?

// Array.unshift() will add an element to the front of an array. Array.push() will add to the back. You could also 
// use the spread operator, like so:

// let arr = ['middle'];
// arr = ['beginning', ...arr]
// arr = [...arr, 'end']
// console.log(arr)

// question 30

// imagine you have this code:

// var a = [1,2,3];

// will this result in a crash?

// a[10] = 99; // I don't believe so. It should just result in a bunch of undefineds in a[3] through a[9].

// what will this output?

// console.log(a[6]) // should log undefined

// question 31

// what is the value of:

// console.log(typeof undefined == typeof NULL) // Kind of a trick question. It results in true because NULL, not null
// // is treated like a named variable, which is, in this case, undefined.

// question 32

// what would the following code return?

// console.log(typeof typeof 1);  // typeof returns a string of some sort. Therefore, typeof 1 will return 'number'. 
// // 'number' is a string, so typeof 'number' will return string.

// question 33

// What will be the output of the following code: Explain your answer. How could the use of closures help here?

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// } // this will result in 5 being logged 5 times. Because var hoists its assigned value, it's going to ignore the
// // iteration in the loop that is happening. It is going to count to 5 and break the loop before setTimeout gets to 
// // work. The best way to fix this is to use 'let', because it is block scoped and does not hoist its value. i will
// // iterate correctly, resulting in the console logging 0, 1, 2, 3, 4 over the space of 4 seconds.

// question 34 

// what is NaN? What is its type? How can you reliably test if a value is equal to NaN?

// NaN is the result of some sort mathematical operation in javascript where the result of the operation couldn't be
// calculated due to some sort of invalid input. For example, trying to multiply a string by a number will return
// NaN. The type of NaN, is funnily enough, a number. Using Number.isNaN() is the only way I know to test if a value
// is equal to NaN.

// question 35

// what will the following code output and why?

// var b = 1;

// function outer(){
//     var b = 2;
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b);
//     }
//     inner();
// }

// outer();

// 3. Despite var being used and being reassigned multiple times in various different code blocks, what happens in
// this code is as follows: b is assigned globally, it is then reassigned within the outer function block, it is
// incremented, but then it is reassigned again in the inner function block right before it is logged. The inner
// function is called within the outer function and then the outer function is called outside the outer function
// block. The only place anything is being returned or logged is within the inner function block, after b is
// reassigned to 3.

// question 36

// discuss possible ways to write a function isInteger(x) that determines if x is an integer.

// you could write a function where you run x through parseInt() and then compare
// function isInteger(x) {
//     let y = parseInt(x);
//     console.log(y)
//     console.log(y === x);
// }

// or you could use a Math method to compare, as a non-integer will either round to the nearest integer or return NaN.
// function isInteger(x) {
//     console.log(Math.round(x) === x)
// }

// question 37

// how do you clone an object?

// You can use Object.assign() to make a shallow copy of an object. Also, external libraries like lodash might be 
// helpful