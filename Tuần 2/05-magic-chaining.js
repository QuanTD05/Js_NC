const transactions = [200, -100, 300, -50, 400];

// Magic chaining
const result = transactions
  .filter(t => t > 0)          // Only deposits
  .map(t => t * 1.1)           // Apply interest
  .reduce((acc, val) => acc + val, 0); // Total

console.log('Magic Chaining (Total after interest):', result);
