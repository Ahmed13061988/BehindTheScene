'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   const firstName = 'ali'; //this will the firstName inside the function, because js will look for the variable in the function first then it will look on the global scope if it's didn't find
//   //console.log(firstName); //it will available because we define it in global scope
//   function printAge() {
//     const output = `${firstName} You're ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `oh, you're a millenial, ${firstName} and your age is ${age}, you were born in ${birthYear}`;
//       //we have the access to age, firstName, and birthYear because it's in outter scope in this case it's in calcAge Function and printAge function
//       var millenial = true;
//       console.log(str);
//       console.log(output);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial); // this one will be accessable outside the block scope, because it's var and it's functions scope( this variable will be available inside printAge() only)
//     //console.log(str); //ReferenceError, because the variable was declared in the block scope
//     //add(2, 3); this will gives an error because it's defined in block in strict mode
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Ahmed';
// console.log(firstName);

// calcAge(1991);
//console.log(millenial);
//console.log(age); //this will give an error, because the age is functional scope not global.
//printAge(); // this will gives undefined error, because it was declared inside the function, so it's in functional scope

// console.log(x);
// var x = 10;

// console.log(y);

//variables
// console.log(me); //undefined
// console.log(job); // reffrenceError cannot access job beofre it's initilization
// console.log(year); // never gets to this

// var me = 'Ahmed';

// let job = 'WebDeveloper';

// const year = '1988';

// //functions
// console.log(addDecl(1, 2));
// //console.log(addExpr(1, 2)); // temporal dead zone
// //console.log(addArrow(1, 2)); // temporal dead zone
// console.log(addVar());

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var addVar = function () {
//   // IT'S not a function error because we use var to store it
//   return `Hello`;
// };

//Example

// if (!numProduct) deleteShopingCart(); //!numProduct should be 10, and the condition here if it's 0 then call the dunction deleteShopingCart(), but in this case it will call the function anyway because the numProduct is undefined and we used ! before it and it will be true and the function called
// var numProduct = 10;
// function deleteShopingCart() {
//   console.log(`All products deleted`);
// }

// var x = 1; // this will be on window object ( global object for JS)
// let y = 2; // this will not be on window object
// const z = 3; // this will not be on window object

// this keyword

//console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// const ahmed = {
//   year: 1988,
//   calcAge: function () {
//     // return 2022 - this.year;
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };

// ahmed.calcAge();

// const mattela = {
//   year: 2017,
// };
// mattela.calcAge = ahmed.calcAge; // barrow functions from one object to another

// mattela.calcAge();

// const f = ahmed.calcAge;
// f(); // now the f is just regular function that not attached to any object, the this keyword will be undefined.

var firstName = 'Atyaf'; //in this case firstName will be in global object ( window)

const ahmed = {
  firstName: `Ahmed`,
  year: 1988,
  calcAge: function () {
    // return 2022 - this.year;
    console.log(this);
    console.log(2022 - this.year);
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  }, // this keyword will point to the window object in case of arrow function
};

ahmed.greet(); //Hey undefined(when we don't have var firstName = 'Atyaf';), now we have var firstName = "Atyaf"; the result will be Hey Atyaf, because this keyword found the variable firstName in the window object and gave it back! In another words this. will be window.
