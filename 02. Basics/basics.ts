const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  if (showResult) {
    console.log(phrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
};

// let number1: number = 5;     // Bad practice because of tyoe inference
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPrhase = "Result is: ";

add(number1, number2, printResult, resultPrhase);
