//** let scoping

// let a ='hello';
// console.log(a);
//
//
// {
//   let a ='bye'
//   console.log('a inside scope', a)
// }

//** legal const manipulation

// const numbaz = [1,2,3];
//
// numbaz.push(4);
//
// console.log(numbaz);

//** illegal const manipulation

// const numbaz = [1,2,3];
// numbaz = 'numbers';

//** string concatenation with template literals

// let b = 'bee';
//
// let d = `hello ${b}`
// console.log(d);


//** Spread Operators

// let a = [7,8,9];
// let b = [6, ...a,10];
// console.log(b);
//
//
// let z = [1,2,3];
// console.log(...z);
//
// function print(...z) {
//   console.log(z);
// }
//
// print(1,2,2,3,4,5,6,4,5,5,5)

//** Destructuring assignments with Arrays

// let c = [100,200];
// let [a,b] = c; //assigning two variables at once
// console.log(a,b);
//
// let blackWriters = ["Ta-Nehisi Coates", "Malcolm Gladwell", "Roxane Gay"];
// let [tc, mg, rg] = blackWriters;
// console.log(tc, mg, rg);
//
// let numbaz = [100,200,300,400,500];
// let [d, ...e] = numbaz;
// console.log(d,e);


//** DEstructuring Assignments with Objects

// let queero = {goldstar: true, rainbows:1234};
// let { goldstar, rainbows } = queero;
// console.log(goldstar, rainbows);

let goldstar = false;
let rainbows = 12;

let queero = {goldstar: true, rainbows:1234};
({ goldstar, rainbows } = queero); //not 100% sure how this works.
console.log(goldstar, rainbows);
