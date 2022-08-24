'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  const firstName = 'ali'; //this will the forst name inside the function, because js will look for the variable in the function first then it will look on the global scope if it's didn't find
  //console.log(firstName); //it will available because we define it in global scope
  function printAge() {
    const output = `${firstName} You're ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, you're a millenial, ${firstName} and your age is ${age}, you were born in ${birthYear}`;
      //we have the access to age, firstName, and birthYear because it's in outter scope in this case it's in calcAge Function and printAge function
      var millenial = true;
      console.log(str);
      console.log(output);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // this one will be accessable outside the block scope, because it's var and it's functions scope( this variable will be available inside printAge() only)
    //console.log(str); //ReferenceError, because the variable was declared in the block scope
    //add(2, 3); this will gives an error because it's defined in block in strict mode
  }
  printAge();
  return age;
}

const firstName = 'Ahmed';
console.log(firstName);

calcAge(1991);
//console.log(millenial);
//console.log(age); //this will give an error, because the age is functional scope not global.
//printAge(); // this will gives undefined error, because it was declared inside the function, so it's in functional scope
