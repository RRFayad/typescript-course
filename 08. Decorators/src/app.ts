// 106. A First Class Decorator
function Logger(classConstructor: Function) {
  // Conventionally, decorators start with capital letter
  console.log("Logging...");
  console.log(classConstructor);
}

@Logger // Note that the decorator runs even when the Class is not instaciated
class Person {
  name = "Fayad";

  constructor() {
    console.log("Creating Person..");
  }
}
