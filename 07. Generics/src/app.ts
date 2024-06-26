// Generics intro
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((value) => value.split(" "));

// 96. Creating a Generic Function
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge({ name: "Renan" }, { age: 34 });

console.log(mergedObj);
