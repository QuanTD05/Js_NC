const numbers = [1, 2, 3, 4, 5];

// forEach
console.log('forEach:');
numbers.forEach(num => console.log(num));

// map
const squares = numbers.map(n => n * n);
console.log('\nmap:', squares);

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log('filter (evens):', evens);

// reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('reduce (sum):', sum);
