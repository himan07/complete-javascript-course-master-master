function logger() {
  console.log("my name is Himanshu");
}
logger();

function fruitProcessor(apples, oragnes) {
  const juice = `Juice with ${apples} apples & ${oragnes} oranges`;
  return juice;
}
console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(2, 4));

// function declaration and function expression
function calcAge(birthYear) {
  const age = `I am ${2024 - birthYear} year old`;
  return age;
}
console.log(calcAge(1999));

const calcAge2 = function (birthYear) {
  const age2 = ` ${2024 - birthYear} year`;
  return age2;
};
console.log("age is: ", calcAge2(1999));

// Arrow Functions
const calcAge3 = (birthYear) => 2024 - birthYear;
console.log("Arrow fn birthyear", calcAge3(1999));

const yearsUntilRetirement = (birthYear) => {
  let currentAge = 2024 - birthYear;
  let retirementAge = 65 - currentAge;
  return retirementAge;
};
console.log("yearsUntilRetirement: ", yearsUntilRetirement(1999));

// Functions calling another functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const organesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples pieces & ${organesPieces} oranges pieces`;
  return juice;
}

console.log(fruitProcessor(5, 9));
