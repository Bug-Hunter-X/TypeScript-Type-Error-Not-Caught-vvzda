function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type error is not caught
console.log(result);