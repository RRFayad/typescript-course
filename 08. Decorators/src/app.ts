// 106. A First Class Decorator
{
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
}

// 107. Decorator Factories
{
  function Logger(logString: string) {
    return function (classConstructor: Function) {
      console.log(logString);
      console.log(classConstructor);
    };
  }

  @Logger("LOGGING PERSON")
  class Person {
    name = "Fayad";

    constructor() {
      console.log("Creating Person...");
    }
  }
}
