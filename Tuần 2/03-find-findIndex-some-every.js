const users = [
  { name: 'Lan', age: 22 },
  { name: 'Hoa', age: 17 },
  { name: 'Tùng', age: 19 }
];

// find
const adult = users.find(user => user.age >= 18);
console.log('find (first adult):', adult);

// findIndex
const hoaIndex = users.findIndex(user => user.name === 'Hoa');
console.log('findIndex (Hoa):', hoaIndex);

// some
const hasTeen = users.some(user => user.age < 18);
console.log('some (has teen):', hasTeen);

// every
const allAdults = users.every(user => user.age >= 18);
console.log('every (all adults):', allAdults);
