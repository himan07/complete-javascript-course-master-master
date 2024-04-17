const Friends = ["Michel", "Steaven", "Sumit", "Himanshu", "Gaurav"];
console.log(Friends);

Friends[3] = "Jay";
console.log("updated arrays", Friends);

const years = new Array(1991, 1999, 2001, 2010, 2012);
console.log("New arrays: ", years);

const Himanshu = ["Himanshu", "yadav", 2024 - 1999, Friends];
console.log("My array", Himanshu);

const calcAge1 = (birthyear) => {
  return 2024 - birthyear;
};
const birthYears = [1991, 1993, 1997, 1999];
console.log(calcAge1(birthYears[0]));

// SOME USEFUL ARRAY METHODS IN JAVASCRIPT
const friends = ["Michel", "Steven", "Jonas"];
friends.push("Jay");
console.log(friends);

// add elements in the array
const newLength = friends.push("New Array");
console.log("New Length: ", newLength);

// The unshift() method adds new elements to the beginning of an array
friends.unshift("New Element");
console.log("friends", friends);

// Remove elements from array
friends.pop(); //remove the last element from the array
const popped = friends.pop();
console.log("last element removed from array", friends);
console.log("popped", popped);

// shift removes first element of the array
friends.unshift();
const shiftEle = friends.shift();
console.log("shift", friends);
console.log("shift element: ", shiftEle);

// find the index of the a element in the array
console.log("indexOf Jonas", friends.indexOf("Jonas"));

//  if element is not in the array
console.log(
  "index of the element which is not in the array: ",
  friends.indexOf("Himanshu")
);

// include method
console.log("Jonas: ", friends.includes("Jonas"));
console.log(
  "element which is not in the array: ",
  friends.includes("Himanshu")
);

// some logics on include properties

if (friends.includes("Peter")) {
  console.log("You have a friend Peter");
} else {
  console.log("Peter is not found in your friend list;");
}
