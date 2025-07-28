// Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1,2,3,4]

// Rest Pattern
const [x, y, ...rest] = [1, 2, 3, 4];
console.log(rest); // [3,4]

// Function with Rest Parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

// Short Circuiting
console.log(0 || 'Hello'); // Hello
console.log(1 && 'Hello'); // Hello

// Nullish Coalescing
const val = null ?? 'default';
console.log(val); // default

// Logical Assignment Operators
const obj = { name: 'John' };
obj.name ||= 'Anonymous';
obj.age ??= 30;
console.log(obj);

// Optional Chaining
const user = { name: 'A', address: { city: 'Hanoi' } };
console.log(user.address?.city); // Hanoi
console.log(user.contact?.phone); // undefined