// Working with Strings
const str = "hello world";
console.log(str.toUpperCase());
console.log(str.indexOf("o"));
console.log(str.slice(0, 5));

// Default Parameters
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest

// Value vs Reference
let a = 5;
let b = a;
b = 10;
console.log(a); // 5

const obj1 = { val: 1 };
const obj2 = obj1;
obj2.val = 2;
console.log(obj1.val); // 2

// Higher-Order Functions
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const filtered = numbers.filter(num => num > 1);
console.log(filtered);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);