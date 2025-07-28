// Object Destructuring
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name, age);

// Enhanced Object Literals
const job = 'dev';
const newPerson = {
  name,
  job,
};
console.log(newPerson);

// Looping Object
const obj = { a: 1, b: 2, c: 3 };

for (const key of Object.keys(obj)) {
  console.log(key);
}

for (const val of Object.values(obj)) {
  console.log(val);
}

for (const [k, v] of Object.entries(obj)) {
  console.log(`${k}: ${v}`);
}