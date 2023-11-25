// JavaScript Fundamentals – Part 1

const country = 'United States of America';
const continent = 'North America';
const isIsland = false;
let language = 'english';
let population = 340.73; // In millions
// console.log(country, continent, population)

// console.log(typeof isIsland, typeof population, typeof country, typeof language)

// ! isIsland = true
// ! Throws TypeError: invalid assignment to const 'isIsland'
console.log('Half of the population: ' + population / 2);
population++;
console.log(population);
const populationFinland = 6;
const populationAverage = 33;
console.log(population > populationFinland, population > populationAverage);
let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language
console.log(description)