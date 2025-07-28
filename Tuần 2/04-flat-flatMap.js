// flat
const nested = [1, [2, [3, [4]]], 5];
const flattened = nested.flat(3); // Flatten 3 levels deep
console.log('flat:', flattened);

// flatMap
const strings = ['Hello', 'World'];
const characters = strings.flatMap(str => str.split(''));
console.log('flatMap (characters):', characters);
