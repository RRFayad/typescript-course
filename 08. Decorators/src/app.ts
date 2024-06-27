// 106. A First Class Decorator
{
  /*
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
    */
}

// 107. Decorator Factories
{
  /*
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
    */
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
