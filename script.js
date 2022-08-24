'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName); //it will available because we define it in global scope
  function printAge() {
    const output = `${firstName} You're ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, you're a millenial, ${firstName}`;
      console.log(str);
    }
    //console.log(str); //ReferenceError, because the variable was declared in the block scope
  }
  printAge();
  return age;
}

const firstName = 'Ahmed';

calcAge(1991);
//console.log(age); //this will give an error, because the age is functional scope not global.
//printAge(); // this will gives undefined error, because it was declared inside the function, so it's in functional scope
