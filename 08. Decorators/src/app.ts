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

// 108. Useful Decorators

{
  function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
      const hookElement = document.querySelector(`#${hookId}`);
      const person = new constructor();
      if (hookElement) {
        hookElement.innerHTML = template;
        hookElement.querySelector("h1")!.textContent = person.name;
      }
    };
  }

  @WithTemplate("<h1>My Person Object</h1>", "app")
  class Person {
    name = "Fayad";

    constructor() {
      console.log("Creating Person...");
    }
  }
}

// 109. Adding Multiple Decorators

{
  console.log("109. Adding Multiple Decorators");

  function Logger(logString: string) {
    console.log("1. Creating Factory FN - Logger");
    return function (_: Function) {
      console.log("4. " + logString);
    };
  }

  function WithTemplate(template: string, hookId: string) {
    console.log("2. Creating Factory FN - With Template");
    return function (constructor: any) {
      console.log("3. Rendering Template...");
      const hookElement = document.querySelector(`#${hookId}`);
      const person = new constructor();
      if (hookElement) {
        hookElement.innerHTML = template;
        hookElement.querySelector("h1")!.textContent = person.name;
      }
    };
  }

  @Logger("LOGGER")
  @WithTemplate("<h1>My Person Object</h1>", "app")
  class Person {
    name = "Fayad";

    constructor() {
      // console.log("Creating Person... (class constructor)");
    }
  }
}
