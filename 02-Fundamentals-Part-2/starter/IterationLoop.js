/* 
//  for loop keeps running while condition is true;

for (let rep = 1; rep <= 10; rep++) {
  //   console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  "Developer",
  2024 - 1999,
  ["Michel", "Peter", "Steven"],
  true,
  false,
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonas array
  console.log("jonas array", jonasArray[i], typeof jonasArray[i]);
  //   Filling with types array
  types[i] = typeof jonasArray[i];
}
console.log("types array", types);

// continue and break statements
console.log("___ONLY STRING ___")
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}


console.log("___BREAK WITH NUMBERS ___")
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

// Looping backwords & loop in loop

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  "Developer",
  2024 - 1999,
  ["Michel", "Peter", "Steven"],
  true,
  false,
];

// console.log("__backwards looping ___");
// for (i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(jonasArray[i]);
// }

// loop in loop

// for (let excercise = 1; excercise <= 4; excercise++) {
//   console.log(`__starting excercise___ ${excercise}`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Excercise ${excercise}: Lifting weights repetition ${rep}`);
//   }
// }

// while loop

let rep = 1;
while (rep <= 10) {
  console.log(` Lifting weights repetition ${rep}`);
  rep++;
}
