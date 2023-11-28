// JavaScript Fundamentals – Part 1

const country = 'United States of America';
const continent = 'North America';
const isIsland = false;
const language = 'english';
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

// concatination of a string
// let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// * template literal string (uses backtick)
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);

if (population > populationAverage) {
  console.log(`${country} has a population above the average.`)
} else {
  console.log(`${country} had a population ${populationAverage - population} million below average.`)
}

a='9' - '5';
b='19' - '13' + '17';
c='19' - '13' + 17;
d='123' < 57;
e=5 + 6 + '4' + 9 - 4 - 2;

console.log(a,b,c,d,e);

// switch statement

switch(language) {
  case 'chinese', 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
    break;
}
