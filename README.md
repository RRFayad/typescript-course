# Typescript Course - Max

## Module 01 - Intro

#### 2. What Is TypeScript & Why Should You Use It?

- TS is a JS superset, which means that it's built up on JS;

- It add typing features to JS, but in the end, it will be all complied to JS;

- Why TS?
  - Its a tool that help developer to write better code, identifing error during the development process;

#### 4. Installing and Using TS

- Our problem (with JS):

  - We add 2 inputs to make a sum, and if I add 10 to 5, the result is 105 (as the values are strings);

- Using TS:

  - npm install -g typescript
  - tsc filename (in the terminal)
  - It will compile to a regular JS file

  * npm install lite-server helps us to update TS in the runtime and add "start": "lite-server" in the package.JSON

#### 5. TS Advantages

- Types!
  - Better auto completion and built in error
- next-gen JS Features (will be compiled for older Browsers)
- Non-JS features, such as Interfaces and Generics
- Meta-Programming Features like Decorators
- Rich Config Options
- Tooling fot IDEs (even in non-TS projects)

#### 6. Course Outline

- TS Basics;
- TS Compiler and Config;
- Next-gen JS;
- Classes & Interfaces;
- Advanced Types & Features;
- Generics;
- Decorators;
- Full TS Project;
- Namespaces & Modules;
- Webpack & TS;
- 3rd-Party libs and TS;
- React + TS & Node + TS

## Section 02 - TS Basics and Types

#### Basic Types

- Core Types (also suppoted for JS)

  - number, string, boolean (always lowercase)

- TS is Statically types, which means we can not change the type of a variable during the development

#### 16. Type Assignment & Type Inference

- Type Inferance: The concept that TS 'recognizes' the typw we give to a variable / constant

- We can also explicitly define the type (in this case not a good practice as TS can define by the inference):

  ```
  let number1: number = 5;
  ```

  #### 17. Object Types

  - We have the object generic type, and the specific Object Type (which have key: type pairs)

        ```
        const person: {
        name: string;
        age: number;
        } = {
        name: "Renan",
        age: 34,
        };
        ```

#### 18. Array Types

- string[]

#### 20. Tuples

- Tuples keeps the lenght (but it lets some modifying the original array with methods such as push)

```
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "Renan",
  age: 34,
  hobbies: ["Code", "Workout"],
  role: [2, "author"],
};
```

#### 21. Working with Enums

- We can construct a enumerating map type (in the below case)

```
  enum Role {
    ADMIN, // If I asign ADMIN = 5, the next values will have started from 5 (6, 7 and so on)
    READ_ONLY,
    AUTHOR,
  }
```

#### 22. Any Type

- Its like moving back to JS, we can store anything is there, and we should avoid it

#### 23. Union Types

- If I combine types, I may have to create a logic for each type

```
  const combine = (input1: number | string, input2: number | string) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
};
```

#### 24. Literal Types

- Define the literal types(values) accepted (in our case literal types + union types)

```
  const combine = (input1: number | string, input2: number | string, resultType: "as-number" | "as-text") => {}
```

#### 25. Type Aliases / Custom Types

- Type aliases or Custom type is like creating my own variables for types

  ```
    type Combinable = number | string;
    type ConversionDescriptor = "as-number" | "as-text";
  ```

#### 27. Function Return Types & "void"

```
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function add2(n1: number, n2: number): void {
  console.log(n1 + n2);
}
```

#### 28. Functions as Types

`let combineValues: (a: number, b: number) => number;`

#### 29. Function Types and Callbacks

- If I declare the callback returns void, but in the end it returns something, it will compile anyway, but, the return should not be used

```
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {    // the 'void' declares that we will not use any possible return
  const result = n1 + n2;
  cb(result);
}
```

#### 30. The "unknown" Type

- unknown type is more restrictive than any type, as it enforces checking, e.g.:

  ```
  let userName: string;
  let anyUserInput: any;
  let unknownUserInput: unknown;

  anyUserInput = "aaaa";
  anyUserInput = 2;
  userName = anyUserInput;      // The type is any, but there's no error

  unknownUserInput = "Ihaa";
  unknownUserInput = 3;

  userName = unknownUserInput; // RETURNS ERROR, as we expect a string and the type is unknown

  if (typeof unknownUserInput === "string") {
  userName = unknownUserInput;
  }
  ```

#### 31. The "never" Type

- It's a bit more precise than void, commonly used for error fuctions - This NEVER returns anyhing

  ```
  function generateError(message: string, code: number): never {
    throw { message, errorCode: code };
  }
  ```

## Section 03 - TS Compiler

#### 34. Intro

- We want to introduce a way of not compiling manually each ts file at a time

#### 35. Using "Watch Mode" & 36. Compiling the Entire Project / Multiple Files

- Create TS project and Watch mode(automatically updates)

  - tsc --init // Initialize a ts project
  - tsc -w // Watch mode for the whole project

- Optional - Watch mode for a single file (automatically updates)
  - tsc app.ts --w

#### Gerenal compile configs

- Some obs during this module:

  - When a variable value can potentially be null (such as a button from HTML code), TS will declare an error, for that we can do one of:
    1. set an ! in the variable declaration, such as `const button = document.querySelector(#button-id)!`
    2. create an if else logic to check if it's a truthy value, then...

- In tsconfig.json there are some useful project set up options, such as:

  ```
  "exclude": ["node_modules"], // this is default, is to show the exclude files from compiling exust;
  "include": ["app.ts", "other-path-here"] // We don't use this, as we have to manually set it up
  "files":[" define-file-here.ts "]
  ```

- "target": "ES2022"
  - Define the right JS version (more modern, clearer the code)
- "lib":[],
  - Some default libraries (such as DOM API modern JS APIs etc)
- "sourceMap": true
  - Interesting, and it let us see in the browser our original TS code file
- "outDir":
  - Define where the compiled files should be created
- "rootDir":
  - Define the source folder
- "downlevelIteration"
  - If someday a loop funcionality runs different from expected maybe should look at
- "noEmitOnError":

  - Stop Emitting Files on Compilation Errors

- Strict Compilation:

  - "noImplicityAny":
    - Its about our declarations of types
  - "strictNullChecks"
    - About values that might bne null (such as a button from html - TS can't recognize that)

- Code Quality Options:
  - not used vars etc

## Section 04 - Next-gen JS & TS

- Rest Params

  `function(...numbers: number[]) {}`

- Default function param
  `function (a: number = 1, b: number){}`

## Section 05 - Classes & Interfaces

### Classes

#### 60. Creating a Class & 61. Compiling to JavaScript

- Remember that Instance is an Object derived form a Class
- May be useful to know that when confinguring the TSConfig for modern JS (es6), the compiled JS will be a class, and before, will be a constructor function

#### 62. Constructor Functions & The "this" Keyword

- remember that 'this' can be remember as the 'responsable' for calling the method
  - So we can add a type check to guarantee a specific method will only be called by

#### 63. "private" and "public" Access Modifiers

- With a Class, every property or method can be categorized as:

  - Public - the dafault: Properties and method can be accesed from outside (instance.property)
  - Private: Properties can not be accessed from outside (so only other methods of e instance will manipulate that data)

  ```
  class Department {
    name: string; // As default, here name is public
    private employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)

    constructor(name: string) {
      this.name = name;
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

  }
  ```

  - In this case we can do `accounting.employees[2] = "Anna" `, only use the addEmployee()

#### 64. Shorthand Initialization

- Instead of:

  ```
  class Department {
    private id: string;
    name: string;

    constructor(id:string, name: string) {
      this.id = id;
      this.name = name;
    }

    // ...methods here...
  }
  ```

- We can use:

  ```
  class Department {

    constructor(private id:string, public name: string) {}

    // ...methods here...
  }
  ```

#### 65. 'readonly' Properties

- Guarantees a property's value can not be changed

```
class Department {

  constructor(private readonly id:string, public name: string) {}

  // ...methods here...
}
```

#### 66. Inheritance

- A review about inheritance, nothing different in TS perspective

```
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
```

#### 67. Overriding Properties & The "protected" Modifier

- Basically, protected is the same as private, but private does not let our inheritances to access the properties, while protected allows that

#### 68. Getters & Setters

- When we select a property as private or protected, TS will return us error when we try to access it.
- So, we can definer getters and setters:

```
  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  console.log(accounting.mostRecentReport);   // Note we don't use () to run
  accounting.mostRecentReport = "Any string here"   // Note we don't use () to run again
```

#### 69. Static Methods & Properties

- A static property is a property that is shared across all instances of a class, and can be accessed without creating an instance of the class.

```
class Department {
    static createEmployee(name: string) {
    return { name };
  }
}

console.log(Department.createEmployee("Renan"));    // Output: {name: 'Renan'}
```

#### 70. Abstract Classes

- A Class that can not be instantiated, but has to be extended

- So we can define abstract methods or properties
  - When I want to 'force' the developer to create a specific method or property in all instances of my class:

```
abstract class Department {
  // ... all the class logic here
    abstract describe(this: Department): void;    // There's no implementation here
}

class AccountingDepartment extends Department {
    //... all the object logic before

    describe() {      // If there is no describe() it will return an error
    console.log(`Accounting Department ID:  ${this.id}`);
    }
}
```

#### 71. Private Constructors & Singletons

- Singleton is a pattern to ensure we will have exactly one instance of a class

- So, its about making the construtor private, and creating a method that checks if there's already an instance, to return it, if not, to create a new one

```
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

   private constructor(id: string) {
    super(id, "Accounting");
   }

  static getInstance() {
    if (AccountingDepartment.instance) {
        return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}
```

### Interfaces

#### 73. A First Interface

- An interface describes the structute of an object

```
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase) {
    console.log(phrase);
  },
};
```

#### 74. Using Interfaces with Classes

- Why interface instead of a custom type?

  - Interfaces can only be used for the structure of an object
  - Interfaces can be used in classes

- So the main difference between Interfaces and Abstract Classes is that Interfaces only defines the minimum structure of an object, without implementation (while an abstract class will have the implementation of a method or a property for example)

##### Interfaces

- **Structure Definition**: Interfaces in TypeScript define the shape of an object. They are used to specify the structure that an object must adhere to but do not provide any implementation.
- **No Implementation**: Interfaces cannot contain any implementation details such as method bodies or property initializations.
- **Multiple Inheritance**: A class can implement multiple interfaces, allowing for a form of multiple inheritance.
- **Duck Typing**: TypeScript uses structural typing, meaning an object can implement an interface implicitly if it matches the required structure.

##### Abstract Classes

- **Partial Implementation**: Abstract classes can provide some implementation details. They can contain fully implemented methods, properties, and constructor logic.
- **Abstract Methods**: Abstract classes can also have abstract methods, which are declared without an implementation. Subclasses must provide the implementation for these abstract methods.
- **Single Inheritance**: A class can extend only one abstract class (or any other class), adhering to the single inheritance model.
- **Instantiation**: Abstract classes cannot be instantiated directly. They are meant to be extended by other classes.

##### Detailed Comparison

###### Interfaces

- Define a contract that other objects or classes can implement.
- Cannot contain implementation.
- Used to achieve loose coupling by defining a set of methods and properties an object should have.

**Example:**

```
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} says woof`);
  }
}
```

###### Abstract Classes

- Provide a base class with common functionality and the ability to enforce certain methods to be implemented by subclasses.
- Can contain both fully implemented methods and abstract methods.
- Used when you need to share code among several closely related classes while still requiring certain methods to be implemented in the derived classes.

**Example:**

```
abstract class Animal {
  constructor(public name: string) {}

  abstract speak(): void; // Must be implemented by subclasses

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} says woof`);
  }
}
```

##### Summary

- **Interfaces:** Define what properties and methods an object should have, without any implementation. They are ideal for defining contracts and achieving polymorphism.
- **Abstract Classes:** Define both the structure and some behavior. They can provide a common base with shared functionality while forcing subclasses to implement specific methods.

#### 75. Why Interfaces?

- To force some classes to have some structure

#### 76. Readonly Interface Properties

```
interface Greetable {
  readonly name: string; // Reinforce that the name will not be changed, only initiated

  greet(phrase: string): void;
}
```

#### 77. Extending Interfaces

```
interface Named {
  readonly name: string; // Reinforce that the name will not be changed, only initiated
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

#### 78. Interfaces as Function Types

- Using the custom type is more common, but jsut to be aware of ()it's like creating an object interface with an annonymous function:

```
// Our Regular Function Type
type AddFnType = (a: number, b: number) => number;
let add1: AddFnType;

add1 = (n1: number, n2: number) => n1 + n2;

// Implementing Interfaces
interface AddFn {
  (a: number, b: number): number;
}

let add2: AddFn;
add2 = (n1: number, n2: number) => n1 + n2;
```

#### 79. Optional Parameters & Properties

- Add a ? to make optional properties / methods, also in constructor

```
interface Named {
  readonly name: string;
  outputName?: string;
}

class Person implements Greetable {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase}, I'm ${this.name}`);
  }
}
```

#### 80. Compiling Interfaces to JavaScript

- There's nothing in JS, it's all about TS

## Section 06 - Advanced Types

#### Intro

- Intersection Types
- Type Guards
- Discriminated Unions
- Type Casting
- Funtion Overloads

#### 84. Intersection Types (Type & Type)

- In objects will combine, so the same result as using interfaces and combined extends

- In my understaing, when working with objects it kinda merge the type (like an Union)

```
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

- Here will get the intersection

```
type Combinable = string | number;
type Numeric = number | boolean;

type Intersection = Combinable & Numeric;
```

#### 85. More on Type Guards

- Type Guard is the logic flow that identifies the type (when more than 1 type is possible) and defines what is going to be done

###### Simple Type Guard

```
type Combinable = string | number;

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};
```

- As in the end, JS only recognizes JS types, for our Object custom types, the Type guard goes like this:

###### Objects Type Guard

```
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
};
```

###### Class Type Guard

```
// Class Type Guard
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  /*
  // We can do this, but it's less elegant and precise
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
  */

  // More elegant way
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```

#### 86. Discriminated Unions - Easier Type Guards

- Another useful pattern for objects and union types is to declare a type for each object / interface

```
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed: ${speed}`);
};
```

#### 87. Type Casting

- Explicitly telling TS a specific type it wouldn't know

- ! is a form to say the value will never return null

```
//version 1
const userInputElementv1 = <HTMLInputElement>document.querySelector("#user-input");

userInputElementv1.value = "Hi there";

// versoin 2
const userInputElementv2 = document.querySelector("#user-input")! as HTMLInputElement;

userInputElementv2.value = "Hi there";

// version 3
// If we are not sure it will not return null - we must have an if check:
const userInputElementv3 = document.querySelector("#user-input");

if (userInputElementv3) {
  (userInputElementv3 as HTMLInputElement).value = "Hi there";
}
```

#### 88. Index Properties

- Index Types - A feature that allowus us to create more flexible objects regarding the properties they might hold

```
interface ErrorContainer {
  id: string; // We can predefine some properties, but keeping the same type of the index
  [prop: string]: string;
}

const emailError: ErrorContainer = { id:"0001", email: "Please valid email" };
```

#### 89. Function Overloads

- It to make TS be sure of the return type of a function
  - In our case below, if we don't explicit the return type for each case, TS will return an error trying to run a string method in our result

```
{
  type Combinable = string | number;

  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: number, b: string): string;
  function add(a: string, b: number): string;

  function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const result = add("Renan", "Fayad");
  result.split(" ");
}
```

#### 90. Optional Chaining

- When neither TS neither us know if the property if going to exist - such as in fetched data:

```
  const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
  };

  console.log(fetchedUserData?.job?.title);
```

#### 91. Nullish Coalescing

- A check to guarantee it's a nullish value (instead of only a falsy value), so the difference will be 0, '', etc

```
  const userInput = "";

   /* const storedData = userInput || "DEFAULT";    // Our regular falsy JS check */

  const storedData = userInput ?? "DEFAULT"; // Specific for null or undefined

  console.log(storedData);
```

#### Useful links

[Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

## Section 07 - Generics

- It's not a JS concept, but it's a concept that exists in other languages

- Generic types gives us flexibility combined with type safety

- Generic type have to be 'connected' to another type - It's good practice, as TS identifies the type of each value and gives us the types methods

```
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((value) => value.split(" "));
```

#### Generic Function

- We create 'type variables' in a function to help us with typing
  - For convention, the 1st type starts with T (of type) and goes on alphabetic order

```
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge({ name: "Renan" }, { age: 34 });

console.log(mergedObj);

```

#### Constraints

```
// Now we declare that our generic types must be objects
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
  }

  // With the constrain, if any value is not an object, will return an error
  const mergedObj = merge({ name: "Renan", hobbies: ["sports"] }, { age: 34 });

  console.log(mergedObj);
```

#### Generic Function wth constraint

```
  interface Lengthy {
    length: number;
  }

  // We set the Lenghty interface constaint
  // Remember that strings and arrays are objects that have length property
  const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
    let descriptionText = "Got no value";
    if (element.length > 0) {
      descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
  };

  console.log(countAndDescribe("Hi there"));
  console.log(countAndDescribe(["Sports", "Cooking"]));
```

#### keyof Constraint

- to check if the value is a valid key of the object:

```
  const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return `${obj[key]}`;
  };

  console.log(extractAndConvert({ name: "Renan" }, "name"));
```

#### Generic Classes

```
  class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      const index = this.data.indexOf(item);
      index > -1 && this.data.splice(index, 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  // Now if we want we can create a NumberStorage as well
```

#### Generic Utility Types

- We can use Partial to work with an object while it still does not have all the properties defined for that type

- Readonly - Locks down arrays or objects

```
  // Partial
  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }

  const createCouseGoal = (title: string, description: string, completionDate: Date): CourseGoal => {
    // We could return courseGoal, but let's consider we need to make it step-by-step here (maybe because we need to fetch and validate)
    let courseGoal: Partial<CourseGoal> = {}; // This says to TS somehting like: "This is not a CouseGoal type already, but truste me, it willl be!"
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completionDate;

    return courseGoal as CourseGoal; // So we need to convert it definetly to CourseGoal
  };

  // Readonly
  const names: Readonly<string[]> = ["Renan", "Fayad"];
  //   names.push("Rodrigues"); // error
```

#### Generic Types vs Union Types

- In our DataStorage example, the problem with UnionTypes vs Generic Types is that:
  - Union Type will mix all the types in our array;
  - while the Generics will keep the desired consistency (sticking to onyl one type)

## Section 08 - Decorators

#### Intro

- We will use it for meta-programming

  - Which means a developers focused tools (instead of users focused)

- In tsconfig:
  - "target": "ES6";
  - "experimentalDecorators": true

```
function Logger(classConstructor: Function) {
  // Conventionally, decorators start with capital letter
  console.log("Logging...");
  console.log(classConstructor);
}

@Logger   // Note that the decorator runs even when the Class is not instaciated
class Person {
  name = "Fayad";

  constructor() {
    console.log("Creating Person..");
  }
}
```

#### Decorator Factories

- Simply a function that returns a decorator function:

```
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
```

#### 108. Building More Useful Decorators

```
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
```

#### 109. Adding Multiple Decorators

- It's possible to add more than 1 decorator, and it's important to know that, when this happens, decorators run bottom-up
  - I numbered below he console.logs

```
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
```

#### 110. Propety Decorators

- Its also possible to add decorators to properties

```
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
```

#### 111. Accessor & Parameter Decorators

- We can add decorators also to:

  - properties
  - accessors / mutators (getters and setters)
  - methods
  - parameters

- Code with all console.logs to show the parameters we receive from decorators

#### 112. When Do Decorators Execute?

- Decorators run when set (not when a instance is created)

#### 113. Returning (and changing) a Class in a Class Decorator

- It was a bit confusing, but it was about using a decorator to return an extended class from the original

#### 114. Other Decorator Return Types - Example: Creating an "Autobind" Decorator

- Decorators added to Accessors / Mutators or Methods can return values
  - such as a property or method

## Section 09 - Drag & Drop Project

#### Notes During the Project

- About the Project

  - We will work with OO approach

- Miscelaneous
  - <template>: Use <template> to hold some content that will be hidden when the page loads. Use JavaScript to display it

Paused Section 09 - After 129 with a bug

## Section 10 - Modules & Namespaces

- Right now we have a simple project, with the whole code in one file - So we need to organize it

- There are two options (actually three) to organize the code in multiple files
  - Write multiple files (which isn't actually the best approach)
  - Namespaces & File Bundling
  - ES6 Imports / Exports

#### Working with Namespaces

- Steps:

  - In tsconfig.json:

    ```javascript
    "module": "amd",
    "outFile": "./dist/bundle.js"
    ```

  - Create namespaces and exports:

    ```javascript
    namespace App {
      export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
      }

      export interface DragTarget {
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
      }
    }
    ```

- So, in the files of the I'll use the namespaces variable, I will import and create the same namespace to conenct:

```javascript
/// <reference path="drag-drop-interfaces.ts" />

namespace App {
  // My whole code wrapped here
}
```

- Important to know that my imports don't really need to be in the file I'll use the variable, but if I import everything on my app.js (which centralizes everything) it will work (obviously an unclean solution)

#### Problem with Namespaces

- As we saw when refactoring, when there were dependencies missing, TS was still compiling without errors (and wit an error on the feature)

- So it would be nice a way to manage these imports and exports easily, and thjere's when ES6 Modules comes

#### Recommended Approach - Using ESModules (Modern Browsers only - Chrome and Firefox)

- Using import and export
- **Important:** Always use .js extension when importing - e.g.: `import { ProjectList } from "./components/project-list.js";`
- tsconfig:

  ```javascript
  "target": "es6" //or higher
  //"outFile": "./dist/bundle.js"   // should be commented because i's not supported wth es modules
  "module": "ES2015"
  ```

- **Important and Conclusion**
  - Now, there are compiling errors when there's no import
  - That's why this is the recommended approach
  - Also, with webpack (we will see it later) we don't have to use the '.js' extension

#### Understanding various Import & Export Syntaxes

- Remember we can group imports with an alias name, such as:

  - Instead of `import { Validatable, validate } from "../util/validation.js";`
  - We can have ` import * as Validation from "../util/validation.js";`
    - Now we have `Validation.Validatable` and `Validation.validate`

- Also remember the export default

#### How Does Code In Modules Execute?

- When we import some code, it runs once (in the 1st import and only once)

#### Next Steps

- With Webpack we can run this in lder browser (this runs only in Chrome and Firefox), and also bundle it to make it with less files

## Section 11 - Webpack with TS

- What is Webpack?
- Example Setup

#### What is Webpack?

- Problem:

  - When we open the network tab (without the webpack), we can see there's a bunch of http requests;
    - The problem with that is a waterfall loading, which may slow down the project
    - So we need to shrink the loading time with less http requests! That's where webpack comes into play!

- Webpack (webpack.js.org)
  - It's a tool to bundle our files together
  - Benefits:
    - Less files (and requests)
    - Optimized ("minified") code (as small as possible = faster code)
    - Don't need an extra dev server (like lite-server we were using)

#### Installing Webpack & Important Dependencies

- npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
  - webpack - Bundle and minify our code
  - webpack-cli - Run webpack commanda
  - webpack-dev-server - Built in Dev server
  - typescript
  - ts-loader - Tells Webpack how to convert TS to JS

#### Configuration

- tsconfig:

```json
"target":"es6",
"module":"es6" // or es2015
// "rootDir":"src" // We dont need it anymore
"outDir": "./dist"      // It must match the webpack config
"sourceMap": true
```

- package.json `"start": "webpack-dev-server"`,

- webpack.config.js (Now or imports don't need .js anymore)

  ```javascript
  const path = require("path");

  module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    devServer: {
      static: [
        {
          directory: path.join(__dirname),
        },
      ],
    },
    output: {
      filename: "bundle.js", // It's possibile this to be dynamic, check docs
      path: path.resolve(__dirname, "dist"),
      publicPath: "/dist/",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
  };
  ```

#### Production Workflow

- npm install --save-dev clean-webpack-plugin
- Create webpack.config.prod.js:

  ```javascript
  const path = require("path");
  const CleanPlugin = require("clean-webpack-plugin");

  module.exports = {
    mode: "production",
    entry: "./src/app.ts",
    devServer: {
      static: [
        {
          directory: path.join(__dirname),
        },
      ],
    },
    output: {
      filename: "bundle.js", // It's possibile this to be dynamic, check docs
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    plugins: [new CleanPlugin.CleanWebpackPlugin()],
  };
  ```

  - package.json: `build": "webpack --config webpack.config.prod.js"`

## Section 12 - Third Party Libraries

- Regualr Libraries & TS specific Libraries

#### Working with a JS Library - Lodash

- Look for types + library - tranlstion types packages

- npm install --save-dev @types/lodash

#### Using "declare" as a "Last Resort"

- e.g.: GLOBAL variable in the document: `declare const GLOBAL: any;`
  - This will force TS to accept it

#### No Types Needed: class-transformer & class-validator

- Some 3rd party libraries embrace TS and improves dev experience
  - class-transformer - Creates instances of classes from objects
  - class-validator - Validator Decorators

#### Wrap Up:

- There are some JS librries that we need type 'translations' (such as types lodash)
- There are libraries, like class-transformer that work in JS and TS
- Also packages uch as class-validator, which is completely on TS

## Section 14 - React and TS

- Max says it's not the default, TS is not used in most React Projects

#### Working with Props and Types for Props

- My best approach:
  - create a `interface ComponentNameProps {}`
  - Set the type as generics in the React FC
  - Destructure it in the props
  - Optional: add an alias in the destructured props

```tsx
interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];
}

const TodoList: React.FC<TodoListProps> = ({ items: tasks }) => {
  return (
    <ul>
      {tasks.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
```

#### Form and Refs

- Obs.:
- event: React.FormEvent

```tsx
import { useRef } from "react";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value; //remember TS does not know it will not be null when ran, that's why the !
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo: </label>
        <input className="w-60 bg-gray-100 border rounded-lg" type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
```

#### States and Types:

- Create the type on the run
  `const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);`

- Or, here, we create a Model file and imported it:
  ` const [todos, setTodos] = useState<Todo[]>([]);`

## Section 15 - Express and TS

#### Setting up a project

- npm init
- tsc--init
- tsconfig:

  ```json
  "target": "es2018",
   "moduleResolution": "node10",   // Max says 'node', but I'll keep the default node10
   "rootDir": "./src",
   "outDir": "./dist",
  ```

- create /src
- install dependencies
- npm install --save-dev @types/express
- npm install --save-dev @types/node
- package json ` "start": "nodemon dist/app.js"`

- Max showed we can use import and export, or keep with the conventional require('')

#### Adding Middleware & Types

`app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {});`

- Or to be cleaner:

  ```
  import express, { Request, Response, NextFunction } from "express";

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {});
  ```

#### Adding a Controller

```javascript
import { RequestHandler } from "express";

export const createTodo: RequestHandler = (req, res, next) => {};
```

- When getting data from params:

```javascript
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;

  //... Deleting Logic ...

}
```
