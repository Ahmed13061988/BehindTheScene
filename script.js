'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName); //it will available because we define it in global scope
  function printAge() {
    const output = `You're ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ahmed';

calcAge(1991);
