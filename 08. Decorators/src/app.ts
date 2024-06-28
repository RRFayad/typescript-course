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

// 110. Propety Decorators

{
  console.log("110. PROPOERTY DECORATORS");

  const Log = (target: any, propertyName: string | Symbol) => {
    console.log("Property Decorator:");
    console.log(target, propertyName);
  };

  class Product {
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error("Invalid price - should be positive");
      }
    }

    constructor(title: string, price: number) {
      this.title = title;
      this._price = price;
    }

    getPriceWithTax(tax: number) {
      return this._price * (1 * tax);
    }
  }
}
// 111. Accessor & Parameter Decorators

{
  console.log("111. ACCESSOR & PARAMETERS DECORATORS");

  const Log = (target: any, propertyName: string | Symbol) => {
    console.log("___________PROPERTY DECORATOR:___________");
    console.log("target (prototype)", target);
    console.log("name", propertyName);
  };

  const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log("___________ACCESSOR DECORATOR:___________");
    console.log("target (prototype)", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
  };

  const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
    console.log("___________METHOD DECORATOR:___________");
    console.log("target (prototype)", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
  };

  const Log4 = (target: any, name: string | Symbol, argPosition: number) => {
    console.log("___________PARAMETER DECORATOR:___________");
    console.log("target (prototype)", target);
    console.log("name", name);
    console.log("argPosition", argPosition);
  };

  class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error("Invalid price - should be positive");
      }
    }

    get price() {
      return this._price;
    }

    constructor(title: string, price: number) {
      this.title = title;
      this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 * tax);
    }
  }
}
