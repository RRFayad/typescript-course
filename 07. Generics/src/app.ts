// Generics intro
{
  const names: Array<string> = [];

  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is done");
    }, 2000);
  });

  promise.then((value) => value.split(" "));
}
// 96. Creating a Generic Function
{
  function merge<T, U>(objA: T, objB: U) {
    return { ...objA, ...objB };
  }

  const mergedObj = merge({ name: "Renan", hobbies: ["sports"] }, { age: 34 });

  console.log(mergedObj);
}

// 97. Working with Constraints
{
  // Now we declare that our generic types must be objects
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
  }

  // With the constrain, if any value is not an object, will return an error
  const mergedObj = merge({ name: "Renan", hobbies: ["sports"] }, { age: 34 });

  console.log(mergedObj);
}
