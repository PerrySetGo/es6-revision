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

// let goldstar = false;
// let rainbows = 12;
//
// let queero = {goldstar: true, rainbows:1234};
// ({ goldstar, rainbows } = queero); //not 100% sure how this works.
// console.log(goldstar, rainbows);

//** Arrow Functions

//old way

// function liftOff(){
//   console.log('3..2..1..liftoff!');
// }
//
// liftOff();

//intermediate away

// setTimeout(() => {
//   console.log('3..2..1..liftoff!');
// }, 1000);


//arrow function with named identifier

// const liftOff = () => {
//   console.log('3..2..1..liftoff!');
// }
//
// liftOff();


//Arrow functions with array mapping

//let points = [10,20,30];
// let addOne = (element) => { //element is not magical, can be changed
//   return element + 1
// }
//points = points.map(addOne); //map is a callback

//shorter es6 version
// let points = [10,20,30];
// points = points.map(element => {
//   return element + 1;
// });
//even shorter

// let points = [10,20,30];
// points = points.map(element => element + 1);
// console.log(points);

//Filtering

// let isPassing = (grade) => {
//   return grade >=70;
// }
//
// let scores = [90,85,67,71,70,55,92];
//
// let passing = scores.filter(isPassing); //how is filter different than map?
//
// console.log(passing);


//shorter ES6 syntax

// let scores = [90,85,67,71,70,55,92];
// let passing = scores.filter(e => e >= 70); //how is filter different than map?
// console.log(passing);

// import {awesomeBlackFemaleAthletes, reparationsAcres} from './athletes'; //the thing in curlies has to match the variable name in the file
// console.log(awesomeBlackFemaleAthletes, reparationsAcres);

//calculator
//import {add, multiply}  from './calculator';
// import multiply from './calculator';
//
// console.log(multiply(3,4));

// let merry = new Entity("Merry", 4.6);
// merry.greet();

//classes
// import Entity from './entity';
//
// class Hobbit extends Entity{
//   constructor(name, height){
//     super(name, height);
//   }
//
//   greet() {
//     console.log(`This is a hobbity greeting from ${this.name}`)
//   }
// }
//
// let newHobbit = new Hobbit("Frodo", 4.5);
// console.log(newHobbit.name, newHobbit.height);
// newHobbit.greet();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '0650042e12a469a50be39ec61041eba7';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: 'Portland',
      description:''
    }
  }

  componentDidMount(){
    this.grabWeather(this.state.city);
  }

  grabWeather(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
    .then(response => response.json())
    .then(json =>
      this.setState({description:json.weather[0].description})
    )
  }

  render() {
    return (
      <div>
        Weather Report for {this.state.city}: {this.state.description}
      </div>
    )
  }
}
ReactDOM.render(
  <App />, document.getElementById('root')
);

//sixth commit
