function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 10); // No error
console.log(result);

let result2 = add(5, '10'); // throws Error
console.log(result2); 