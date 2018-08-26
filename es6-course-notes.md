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
