// Functions

function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

console.log("Addition:", add(2, 3));
console.log("Multiplication:", multiply(4, 5));

// Arrays and Objects Together

const students = [
  { name: "Jane", marks: 78 },
  { name: "Ali", marks: 92 },
  { name: "Sam", marks: 45 }
];

for (const student of students) {
  console.log(student.name, "scored", student.marks);
}