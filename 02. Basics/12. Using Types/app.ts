// It does not need the typehas the inference already
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function add2(n1: number, n2: number): void {
  console.log(n1 + n2);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

// combineValues = 5;       // Error

// combineValues = add2;    // Also an error
