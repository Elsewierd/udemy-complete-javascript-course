// Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 195;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

// Challenge 2

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

// Chalenge 3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins === scoreKoalas) {
    console.log(`Both win a trophy`)
} else if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`)
} else {
    console.log(`Koalas win the trophy`)
}
