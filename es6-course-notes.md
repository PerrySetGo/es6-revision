## Intro

* es6 aka ecmascript 2015
* Babel is the most common transpiler for ES6 code into ES5.
* webpack is a bunder for modules

  1. bundles modules
  2. comes with a dev server

## webpack

Installing webpack and webpack CLI with:

npm i webpack@4.12.0 webpack-cli@3.0.3 --save-dev


* can set up basic webpack by creating index.js in src
* can configure basic setup by creating webpack.config.js in root directory
* can create a simple dev server by installing webpack-dev-server as a dev dependency and adding that to start script command
* can create a html page to show result as index.html in build/, loading bundle.js as script file
* configure dev server with settings in webpack config
* launch page on localhost:3000 and see log in console.

First Commit

* babel core allows for transpilation, babel loader allows us to import/export js files, babel preset allows to transpile dependent on browser.
* the .babelrc file configures browser-specific transpilation

Second Commit - project setup completed.

## Variable Declarations

* In ES6 we move away from var and towards let as a regular variable declaration.
* `let` is scoped to code block
* cannot reference the variable outside of the block
* must be enclosed in a minimum of `{}` - a standalone block.
* const is a constant and can only be declared once
* if const points to an array, the array can be manipulated, but the variable cannot be reassigned:

const numbaz = [1,2,3];
numbaz.push(4);
console.log(numbaz);

works

const numbaz = [1,2,3];
numbaz = 'numbers';

will not work.


## Template literals

New template literal syntax replaces concatenation for strings!

let firstName="perry"
let message = `Hi there, ${firstName}`;

Third commit

## Spread Operators

Allows arrays to be "spread" into other arrays!

let a = [7,8,9];
let b = [6, ...a,10];
console.log(b);

-> [6, 7, 8, 9, 10]

super interesting! It replaces the concat function for arrays in ES5.
You can also use this to print out arrays:

let z = [1,2,3];
console.log(...z);
-> 1 2 3

## Destructuring assignments with Arrays
 An easy way to break arrays into pieces without loops!

 let blackWriters = ["Ta-Nehisi Coates", "Malcolm Gladwell", "Roxane Gay"];

 let [tc, mg, rg] = blackWriters;
 console.log(tc, mg, rg);

## Destructuring assignments with Objects

we can use destructuring assignment on objects to pull properties out of objects the same way we were able to do with Arrays! this is awesome!

Fourth commit

## Arrow Functions

* shorter syntax
* anonymous functions, no named identifier
* can create named identifier by writing anonymous function into a variable, such as a constant

const liftOff = () => {
  console.log('3..2..1..liftoff!');
}

liftOff();

* Arrow functions do not bind their own this.
* if you are using this inside an arrow function, it is actually referencing the this in global scope


## Arrow Functions and Map methods

* map function allows us to create arrays by calling function on each element in the array.
* much shorter version than using a loop
* can write very short array element manipulation syntax

let points = [10,20,30];
points = points.map(element => element + 1);
console.log(points);

## Filtering

* Filter method creates a new array from an existing array
* filters array, kind of like a pipe, dependent on the results of a certain test

## Additional Helper Methods for arrays

find(), forEach(), reduce(), some(), keys(), values()...

## Exporting values

* Modules are re-usable pieces of code within application
* Allows us to break down files, spreading out data and code
* export can send functions, objects, primitive values from file to file
* the name of the thing in curlies in the importing file must match the variable name in the exporting file. filename can be different.
* ./ in same directory
* can export multiple functions by using export {thing, thing2} at the bottom of the file: see notes on calculator
* you omit the curlies when you are importing something that has been declared the default function!

Fifth commit

## JavaScript Classes

* es6 we use classes (as opposed to prototypes?)
* classes work very similar to Java
* cannot overload constructors like in Java
* can import/export
* can call super() to invoke parent constructor
* 
