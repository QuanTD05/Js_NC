// MAP example
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set('job', 'developer');

console.log('Map Values:');
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// SET example
const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log('\nSet Values:');
mySet.forEach(value => console.log(value));
