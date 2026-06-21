// Day 3 - JavaScript Basics

// Variables and Data Types
let age = 21;
const name = "Jane";
let isStudent = true;
let skills = ["HTML", "CSS"];
let person = {
  name: "Jane",
  age: 21
};

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

console.log(typeof age);
console.log(typeof skills);

// Conditions
let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}

// Loops
for (let i = 1; i <= 5; i++) {
  console.log("Number", i);
}

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);
}