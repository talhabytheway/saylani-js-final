// TODO: Write a JavaScript program to list the properties of a JavaScript object
let array = [];
let student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

for (const e in student) {
  array.push(e);
}

console.log(...array);
